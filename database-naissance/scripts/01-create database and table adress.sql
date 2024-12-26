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


rename table ADRESS to ADDRESS;

insert into ADDRESS (street, zip, city, country) value ('12 rue des palmiers', 3500, 'RENNES',
'FRANCE');
SELECT * 
FROM ADDRESS;
