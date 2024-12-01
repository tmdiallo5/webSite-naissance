use  `db-naissances`;
show tables;

-- pour dire que l'email est unique
alter table profiles 
add constraint email_is_unuque 
unique(email);

-- pour dire que le phone est unique
ALTER TABLE profiles 
ADD CONSTRAINT phone_is_unique 
UNIQUE (phone);




-- supprimer une contrainte
alter table profiles 
drop constraint phone_is_unique ;

-- ajouter une colonne
alter table profiles 
add creation datetime not null default current_timestamp;


-- le test le mail
INSERT INTO profiles (first_name, last_name, email, phone)
value ('Briggs','Short','briggsshort@namegen.com','+1 (923) 498-3818');

-- le test le phone
INSERT INTO profiles (first_name, last_name, email, phone)
value ('Briggs','Short','brpisshort@namegen.com','+1 (923) 498-3818');

-- le test l'ajout de la colonne
INSERT INTO profiles (first_name, last_name, email, phone)
value ('Briggs','Short','briggsgtshort@namegen.com','+1 (923) 498-3818');

select * from profiles;
