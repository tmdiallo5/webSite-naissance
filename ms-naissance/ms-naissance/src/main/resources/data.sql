INSERT INTO addresses (`tag`,`street`,`zip`,`city`,`country`)
VALUES
    ('COMPANY','265 Lee Avenue',545,'Kipp','Ohio'),
    ('CYTY_HALL','513 Ide Court',732,'Fedora','Tennessee'),
    ('COMPANY','660 Railroad Avenue',413,'Troy','North Carolina'),
    ('COMPANY','195 Senator Street',297,'Mammoth','Idaho'),
    ('COMPANY','408 Clifford Place',315,'Edinburg','Maine'),
    ('CYTY_HALL','863 Middleton Street',731,'Glenshaw','Hawaii');


INSERT INTO companies(`name`, `address_id`)
VALUES
   ('anim proident non', (SELECT  ID FROM addresses WHERE tag ='COMPANY' LIMIT 1)),
 ('minim proident culpa', (SELECT  ID FROM addresses WHERE tag ='COMPANY' LIMIT 1)),
('commodo irure amet', (SELECT  ID FROM addresses WHERE tag ='COMPANY' LIMIT 1));


INSERT INTO cityhalls(`name`, `address_id`)
VALUES
    ('commodo irure amet', (SELECT  ID FROM addresses WHERE tag ='CYTY_HALL' LIMIT 1)),
    ('laborum ut veniam', (SELECT  ID FROM addresses WHERE tag ='CYTY_HALL' LIMIT 1));



