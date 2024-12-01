use `db-naissances`;

create table roles (
	id int auto_increment,
	label varchar(255),
	description text,
    primary key(id),
    constraint label_is_unique unique (label)
    
);




INSERT INTO roles (label, description)
VALUES
('AGENT','est minim officia quis est Lorem enim ex et aliqua'),
('ADMINISTRATOR','cupidatat consequat sit ipsum fugiat deserunt et do cupidatat id'),
('PUBLIC','non aute sunt eu tempor cupidatat irure cillum minim amet')
