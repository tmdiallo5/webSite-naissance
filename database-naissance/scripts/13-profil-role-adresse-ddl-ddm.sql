drop database if exists `db-naissances`;

-- creer une base de donnees 
create Database `db-naissances`;

use `db-naissances`;
create table roles (
	id int auto_increment primary key, 
	label varchar(30) unique,
    description text, 
    creation datetime not null default current_timestamp
);

create table addresses (
	id int auto_increment primary key,
    zip int(30),
	street varchar(255),
    city varchar(255),
    country varchar(100),
    creation datetime not null default current_timestamp
);

create table profiles (
	id int auto_increment primary key,
	first_name varchar(255),
	last_name varchar(255),
	email varchar(100),
	phone varchar(30) unique,
    creation datetime not null default current_timestamp,
    role_id int,
    adresses_id int,
    constraint profiles_roles_fk foreign key (role_id) references roles(id),
    constraint addresses_roles_fk foreign key (adresses_id) references addresses(id)
    
);

alter table profiles 
add constraint email_is_unique 
unique(email);


INSERT INTO roles (label, description)
VALUES
('AGENT','est minim officia quis est Lorem enim ex et aliqua'),
('ADMINISTRATOR','cupidatat consequat sit ipsum fugiat deserunt et do cupidatat id'),
('PUBLIC','non aute sunt eu tempor cupidatat irure cillum minim amet');

INSERT INTO profiles (first_name, last_name, email, phone, role_id)
VALUES
('Briggs','Short','briggsshort@namegen.com','+1 (923) 498-3818', 1),
('Hazel','Gaines','hazelgaines@namegen.com','+1 (947) 430-3135', 2),
('Melba','Lowe','melbalowe@namegen.com','+1 (964) 587-3451', 3),
('Parks','Hayden','parkshayden@namegen.com','+1 (884) 487-2162', 1),
('Delia','Duncan','deliaduncan@namegen.com','+1 (926) 464-3253', 2);

select * from roles;









