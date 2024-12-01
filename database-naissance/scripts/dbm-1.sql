use `db-naissances`;

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
    profiles (first_name, last_name, email, phone, role_id)
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
        )
    );
    

    

