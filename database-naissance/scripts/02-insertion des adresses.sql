USE `db-naissances`;

-- inserer plusieurs lignes dans une table
insert into ADDRESS (street, zip, city, country) 
value 
('12 rue des palmiers', 3500, 'RENNES','FRANCE'),
('12 rue des palmiers', 3500, 'BREMEN','ALLEMAGNE'),
('12 rue des palmiers', 3500, 'BRUXELLE','BELGIQUE');

select * 
from ADDRESS;