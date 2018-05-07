#!/bin/bash

suite=$1

if [[ -z "$suite" ]]; then
  suite="unit"
elif [[ "$suite" != "unit" && "$suite" != "api" ]]; then
  echo "Valid arguments are unit or api"
  exit 1
fi

if [[ "$suite" = "unit" ]]; then
  compose_file="docker-compose.unit.test.yml"
fi

echo -e "\nrunning ${suite} tests\n"
docker-compose -f "$compose_file" up --build
