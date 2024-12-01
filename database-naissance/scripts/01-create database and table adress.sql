drop database if exists `db-naissances`;

-- creer une base de donnees 
create Database `db-naissances`;

use `db-naissances`;
create table ADRESS (
	street varchar(200),
    zip int(5),
    city varchar(200),
    country varchar(100)
);