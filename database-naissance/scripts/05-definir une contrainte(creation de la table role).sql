use `db-naissances`;

DROP TABLE IF EXISTS `profiles`;

create table profiles (
	id int auto_increment,
	first_name varchar(255),
	last_name varchar(255),
	email varchar(100),
	phone varchar(30),
    primary key(id)
    
);



INSERT INTO profiles (first_name, last_name, email, phone)
VALUES
('Briggs','Short','briggsshort@namegen.com','+1 (923) 498-3818'),
('Hazel','Gaines','hazelgaines@namegen.com','+1 (947) 430-3135'),
('Melba','Lowe','melbalowe@namegen.com','+1 (964) 587-3451'),
('Parks','Hayden','parkshayden@namegen.com','+1 (884) 487-2162'),
('Delia','Duncan','deliaduncan@namegen.com','+1 (926) 464-3253');

select * from profiles;

