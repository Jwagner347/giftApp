FROM mongo

COPY init.json /init.json
CMD mongoimport --drop --host mongodb --db test --collection wishlists --type json --file /init.json --jsonArray
