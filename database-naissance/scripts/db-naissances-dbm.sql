use `db-naissances`;

-- inserer plusieurs lignes dans une table
insert into
    ADDRESS (street, zip, city, country) value ('12 rue des palmiers', 3500, 'RENNES', 'FRANCE'),
    (
        '12 rue des palmiers',
        3500,
        'BREMEN',
        'ALLEMAGNE'
    ),
    (
        '12 rue des palmiers',
        3500,
        'BRUXELLE',
        'BELGIQUE'
    );

(
    'Dressdener Straße 25',
    28215,
    'Bremen',
    'ALLEMAGNE'
);

(
    'Dressdener Straße 25',
    28215,
    'conakry',
    'GUINEE'
);

INSERT INTO
    roles (label, description)
VALUES
    (
        'PUBLIC',
        'est minim officia quis est Lorem enim ex et aliqua'
    ),
    (
        'AGENT',
        'cupidatat consequat sit ipsum fugiat deserunt et do cupidatat id'
    ),
    (
        'ADMINISTRATOR',
        'non aute sunt eu tempor cupidatat irure cillum minim amet'
    );

INSERT INTO
    profiles (
        first_name,
        last_name,
        email,
        phone,
        role_id,
        addresses_id
    )
VALUES
    (
        'Briggs',
        'Short',
        'briggsshort@namegen.com',
        '+1 (923) 498-3818',
        (
            select
                id
            from
                roles
            where
                label = 'PUBLIC'
        ),
        (
            select
                id
            from
                ADDRESS
            where
                city = 'BREMEN'
        )
    ),
    (
        'Hazel',
        'Gaines',
        'hazelgaines@namegen.com',
        '+1 (947) 430-3135',
        (
            select
                id
            from
                roles
            where
                label = 'PUBLIC'
        ),
        (
            select
                id
            from
                ADDRESS
            where
                city = 'RENNES'
        )
    ),
    (
        'Melba',
        'Lowe',
        'melbalowe@namegen.com',
        '+1 (964) 587-3451',
        (
            select
                id
            from
                roles
            where
                label = 'AGENT'
        ),
        (
            select
                id
            from
                ADDRESS
            where
                city = 'BRUXELLE'
        )
    ),
    (
        'Parks',
        'Hayden',
        'parkshayden@namegen.com',
        '+1 (884) 487-2162',
        (
            select
                id
            from
                roles
            where
                label = 'AGENT'
        ),
        (
            select
                id
            from
                ADDRESS
            where
                city = 'CONAKRY'
        )
    ),
    (
        'Delia',
        'Duncan',
        'deliaduncan@namegen.com',
        '+1 (926) 464-3253',
        (
            select
                id
            from
                roles
            where
                label = 'ADMINISTRATOR'
        ),
        (
            select
                id
            from
                ADDRESS
            where
                city = 'BREMEN'
        )
    );