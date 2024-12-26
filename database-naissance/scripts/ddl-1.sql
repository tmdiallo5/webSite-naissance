drop database if exists `db-naissances`;

-- creer une base de donnees 
create Database `db-naissances`;


use `db-naissances`;

create table
    roles (
        id int auto_increment primary key,
        label varchar(30) ,
        description text,
        creation datetime not null default current_timestamp
    );

create table
    addresses (
        id int auto_increment primary key,
        zip int (30),
        street varchar(255),
        city varchar(255),
        country varchar(100),
        creation datetime not null default current_timestamp
    );

create table
    profiles (
        id int auto_increment primary key,
        first_name varchar(255),
        last_name varchar(255),
        email varchar(100),
        phone varchar(30) unique,
        creation datetime not null default current_timestamp,
        role_id int,
        adresses_id int,
        constraint profiles_roles_fk foreign key (role_id) references roles (id),
        constraint addresses_roles_fk foreign key (adresses_id) references addresses (id)
    );

alter table profiles add constraint email_is_unique unique (email);