-- creation de la table Role 
use `db-naissances`;

create table ROLE (
	label varchar(200),
    description varchar(200)
);

insert into ROLE 
value 
('Diallo', 'Administrateur'),
('Soumah', 'Conseiller municipal'),
('Soumah', 'usager');

select *
from ROLE;