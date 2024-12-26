use `db-naissances`;


drop table if exists cityhalls;
drop table if exists companies;
drop table if exists profiles;
drop table if exists addresses;

-- creation de la table adresse
create table
    addresses (
                  id int auto_increment primary key,
                  tag varchar (30),
                  zip varchar (30),
                  street varchar(255),
                  city varchar(255),
                  country varchar(100),
                  creation datetime  default current_timestamp
);

-- creation de la table companie
create table
    companies (
                  id int auto_increment primary key,
                  name varchar(255),
                  description text,
                  address_id int,
                  creation datetime  default current_timestamp,
                  constraint fk_companies_addresses foreign key (address_id) references addresses (id)
);

-- creation de la table companie
create table
    cityhalls (
                  id int auto_increment primary key,
                  name varchar(255),
                  description text,
                  address_id int,
                  creation datetime  default current_timestamp,
                  constraint fk_cityhalls foreign key (address_id) references addresses (id)
);
-- creation de la table profile
create table
    profiles (
                 id int auto_increment primary key,
                 civility varchar(100),
                 first_name varchar(255),
                 last_name varchar(255),
                 password varchar(100),
                 email varchar(100) unique,
                 phone varchar(30) unique,
                 creation datetime not null default current_timestamp,
                 addresses_id int,
                 constraint fk_profiles_addresses foreign key (addresses_id) references addresses (id)
);

