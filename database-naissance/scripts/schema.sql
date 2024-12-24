drop database if exists `db-births`;

-- creer une base de donnees 
create Database `db-births`;

use `db-births`;

use `db-births`;
create table
	births (
    id int auto_increment primary key,
    birthdate timestamp,
    creation timestamp default current_timestamp
    );

create table
    addresses (
        id int auto_increment primary key,
        zip int (30),
        street varchar(255),
        city varchar(255),
        country varchar(100),
        creation timestamp default current_timestamp
    );

create table
    profiles (
        id int auto_increment primary key,
        first_name varchar(255),
        last_name varchar(255),
        email varchar(100),
        phone varchar(30) unique,
        creation datetime not null default current_timestamp,
       -- role_id int,
        adresses_id int,
      --  constraint profiles_roles_fk foreign key (role_id) references roles (id),
        constraint addresses_roles_fk foreign key (adresses_id) references addresses (id)
    );




/* create table
    roles (
        id int auto_increment primary key,
        label varchar(30) ,
        description text,
        creation timestamp default current_timestamp
    );*/

create table declarations (
id int auto_increment primary key, 
profile_id int,
birth_id int, 
creation datetime not null default current_timestamp,
constraint profile_fk foreign key(profile_id) references profiles (id),
constraint births_fk foreign key(birth_id) references births (id)

)


-- alter table profiles add constraint email_is_unique unique (email);