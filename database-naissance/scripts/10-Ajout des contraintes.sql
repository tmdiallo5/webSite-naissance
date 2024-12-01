use  `db-naissances`;

alter table roles 
add creation datetime not null default current_timestamp;

alter table profiles 
add constraint email_is_unique
unique(email);

alter table profiles 
drop constraint email_is_unique
;