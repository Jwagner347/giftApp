#!/bin/bash

suite=$1
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

# kill and remove any running containers
cleanup () {
  docker-compose -p ${suite} kill
  docker-compose -p ${suite} rm -f
}

trap 'cleanup ; printf "${RED}Tests Failed For Unexpected Reasons${NC}\n"'\
  HUP INT QUIT PIPE TERM

if [[ -z "${suite}" ]]; then
  suite="unit"
elif [[ "${suite}" != "unit" && "${suite}" != "api" ]]; then
  echo "Valid arguments are unit or api"
  exit 1
fi

if [[ "${suite}" = "unit" ]]; then
  echo -e "\nrunning unit tests\n"
  docker-compose -f docker-compose.unit.test.yml -p unit build && docker-compose -f docker-compose.unit.test.yml -p unit up -d
  if [ $? -ne 0 ] ; then
    printf "${RED}Docker Compose Failed${NC}\n"
    exit -1
  fi
  TEST_EXIT_CODE=`docker wait unit_test_1`
  docker logs unit_test_1
elif [[ "${suite}" = "api" ]]; then
  docker-compose -f docker-compose.api.test.yml -p api build && docker-compose -f docker-compose.api.test.yml -p api up -d
  if [ $? -ne 0 ] ; then
    printf "${RED}Docker Compose Failed${NC}\n"
    exit -1
  fi
  sleep 3
  # while ! ping localhost:3000 1> /dev/null; do
  #   echo -e '\nwaiting for api\n'
  #   sleep 1
  # done
  API_HOST=http://localhost:3000 node_modules/jest/bin/jest.js spec/api-tests
  TEST_EXIT_CODE=$?
fi

# inspect the output of the test and display respective message
if [ -z ${TEST_EXIT_CODE+x} ] || [ "$TEST_EXIT_CODE" -ne 0 ] ; then
  printf "${RED}${suite} Tests Failed${NC} - Exit Code: $TEST_EXIT_CODE\n"
else
  printf "${GREEN}${suite} Tests Passed${NC}\n"
fi
# call the cleanup fuction
cleanup
# exit the script with the same code as the test service code
exit $TEST_EXIT_CODE
