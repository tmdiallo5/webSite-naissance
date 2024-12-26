INSERT INTO cityhalls(`name`, `address_id`)
VALUES
    ('commodo irure amet', (SELECT  ID FROM addresses WHERE tag ='CYTY_HALL' LIMIT 1)),
    ('laborum ut veniam', (SELECT  ID FROM addresses WHERE tag ='CYTY_HALL' LIMIT 1));
