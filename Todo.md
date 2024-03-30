# Yelp clone using PERN Stack

[Postgres Tutorial](https://www.postgresqltutorial.com/)

- for help `\?\`

- list databases `\l`
- create database `CREATE DATABASE db_name`
- connect to db `\c db_name`

```sql
CREATE TABLE products (
    id INT,
    name VARCHAR(50),
    price INT,
    on_sale boolean
);
```

- list tables `\d`
- to see name of specific table `\d table_name`
- alter column `ALTER TABLE products ADD COLUMN featured boolean;`

- create table
```sql
CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <=5)
);
```
- insert into table
```sql
INSERT INTO restaurants (id, name, location, price_range) values (125, 'Kati Kati', 'Douala', 4);
```

- install dotenv for managing env files

- install morgan to manage our middleware `npm i morgan`

- to communicate with node postgres use `npm i pg`

- use content api to store data which gets passed down to all components

<!-- create reviews table -->
```sql
CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating >= 1 and rating <= 5)
);
``


4h55m