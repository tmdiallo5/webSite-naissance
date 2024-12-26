INSERT INTO companies(`name`, `address_id`)
VALUES
    ('anim proident non', (SELECT  ID FROM addresses WHERE tag ='COMPANY' LIMIT 1)),
    ('minim proident culpa', (SELECT  ID FROM addresses WHERE tag ='COMPANY' LIMIT 1)),
    ('commodo irure amet', (SELECT  ID FROM addresses WHERE tag ='COMPANY' LIMIT 1));
