create table
    permissions (
                  id int auto_increment primary key,
                  name varchar(255),
                  description text,
                  creation datetime  default current_timestamp

);


create table
    roles (
                    id int auto_increment primary key,
                    name varchar(255),
                    description text,
                    creation datetime  default current_timestamp

);

insert into roles(name)
values ('AGENT'),
       ('ADMINISTRATOR'),
       ('PUBLIC');

create table
    roles_permissions (
              id int auto_increment primary key,
              roles_id int,
              permissions_id int,
              constraint fk_roles_permission_permissions foreign key (permissions_id) references permissions(id),
              constraint fk_roles_permissions_roles foreign key (roles_id) references roles(id),
              constraint unique_roles_permissions unique (roles_id, permissions_id)

);

insert into permissions(name)
values ('AGENT_CREATE'),
       ('AGENT_READ'),
       ('AGENT_UPDATE'),
       ('AGENT_DELETE'),

       ('ADMINISTRATOR_CREATE'),
       ('ADMINISTRATOR_READ'),
       ('ADMINISTRATOR_UPDATE'),
       ('ADMINISTRATOR_DELETE'),

       ('PUBLIC_CREATE'),
       ('PUBLIC_READ'),
       ('PUBLIC_UPDATE'),
       ('PUBLIC_DELETE'),

       ('PROFILE_CREATE'),
       ('PROFILE_READ'),
       ('PROFILE_UPDATE'),
       ('PROFILE_DELETE'),

       ('DECLARATION_CREATE'),
       ('DECLARATION_READ'),
       ('DECLARATION_UPDATE'),
       ('DECLARATION_DELETE'),

       ('REQUEST_CREATE'),
       ('REQUEST_READ'),
       ('REQUEST_UPDATE'),
       ('REQUEST_DELETE')
;


insert into roles_permissions(roles_id, permissions_id)
values
    -- Les permissions pour l'administrateur

       ((select id from roles where name = 'ADMINISTRATOR'), (select id from permissions where name = 'AGENT_CREATE')),
       ((select id from roles where name = 'ADMINISTRATOR'), (select id from permissions where name = 'AGENT_READ')),
       ((select id from roles where name = 'ADMINISTRATOR'), (select id from permissions where name = 'AGENT_UPDATE')),
       ((select id from roles where name = 'ADMINISTRATOR'), (select id from permissions where name = 'AGENT_DELETE')),


       ((select id from roles where name = 'ADMINISTRATOR'), (select id from permissions where name = 'ADMINISTRATOR_CREATE')),
       ((select id from roles where name = 'ADMINISTRATOR'), (select id from permissions where name = 'ADMINISTRATOR_READ')),
       ((select id from roles where name = 'ADMINISTRATOR'), (select id from permissions where name = 'ADMINISTRATOR_UPDATE')),
       ((select id from roles where name = 'ADMINISTRATOR'), (select id from permissions where name = 'ADMINISTRATOR_DELETE')),



       ((select id from roles where name = 'ADMINISTRATOR'), (select id from permissions where name = 'PUBLIC_READ')),
       ((select id from roles where name = 'ADMINISTRATOR'), (select id from permissions where name = 'PUBLIC_UPDATE')),
       ((select id from roles where name = 'ADMINISTRATOR'), (select id from permissions where name = 'PUBLIC_DELETE')),

       ((select id from roles where name = 'ADMINISTRATOR'), (select id from permissions where name = 'PROFILE_READ')),
       ((select id from roles where name = 'ADMINISTRATOR'), (select id from permissions where name = 'PROFILE_UPDATE')),
       ((select id from roles where name = 'ADMINISTRATOR'), (select id from permissions where name = 'PROFILE_DELETE')),


       ((select id from roles where name = 'ADMINISTRATOR'), (select id from permissions where name = 'DECLARATION_CREATE')),
       ((select id from roles where name = 'ADMINISTRATOR'), (select id from permissions where name = 'DECLARATION_READ')),
       ((select id from roles where name = 'ADMINISTRATOR'), (select id from permissions where name = 'DECLARATION_UPDATE')),
       ((select id from roles where name = 'ADMINISTRATOR'), (select id from permissions where name = 'DECLARATION_DELETE')),

       ((select id from roles where name = 'ADMINISTRATOR'), (select id from permissions where name = 'REQUEST_CREATE')),
       ((select id from roles where name = 'ADMINISTRATOR'), (select id from permissions where name = 'REQUEST_READ')),
       ((select id from roles where name = 'ADMINISTRATOR'), (select id from permissions where name = 'REQUEST_UPDATE')),
       ((select id from roles where name = 'ADMINISTRATOR'), (select id from permissions where name = 'REQUEST_DELETE')),


    -- Les permissions pour l'agent

    ((select id from roles where name = 'AGENT'), (select id from permissions where name = 'AGENT_CREATE')),
    ((select id from roles where name = 'AGENT'), (select id from permissions where name = 'AGENT_READ')),
    ((select id from roles where name = 'AGENT'), (select id from permissions where name = 'AGENT_UPDATE')),
    ((select id from roles where name = 'AGENT'), (select id from permissions where name = 'AGENT_DELETE')),


    ((select id from roles where name = 'AGENT'), (select id from permissions where name = 'PUBLIC_READ')),
    ((select id from roles where name = 'AGENT'), (select id from permissions where name = 'PUBLIC_UPDATE')),
    ((select id from roles where name = 'AGENT'), (select id from permissions where name = 'PUBLIC_DELETE')),

    ((select id from roles where name = 'AGENT'), (select id from permissions where name = 'PROFILE_READ')),
    ((select id from roles where name = 'AGENT'), (select id from permissions where name = 'PROFILE_UPDATE')),
    ((select id from roles where name = 'AGENT'), (select id from permissions where name = 'PROFILE_DELETE')),


    ((select id from roles where name = 'AGENT'), (select id from permissions where name = 'DECLARATION_CREATE')),
    ((select id from roles where name = 'AGENT'), (select id from permissions where name = 'DECLARATION_READ')),
    ((select id from roles where name = 'AGENT'), (select id from permissions where name = 'DECLARATION_UPDATE')),
    ((select id from roles where name = 'AGENT'), (select id from permissions where name = 'DECLARATION_DELETE')),

    ((select id from roles where name = 'AGENT'), (select id from permissions where name = 'REQUEST_CREATE')),
    ((select id from roles where name = 'AGENT'), (select id from permissions where name = 'REQUEST_READ')),
    ((select id from roles where name = 'AGENT'), (select id from permissions where name = 'REQUEST_UPDATE')),
    ((select id from roles where name = 'AGENT'), (select id from permissions where name = 'REQUEST_DELETE')),


    -- Les permissions pour le public

    ((select id from roles where name = 'PUBLIC'), (select id from permissions where name = 'PROFILE_READ')),
    ((select id from roles where name = 'PUBLIC'), (select id from permissions where name = 'PROFILE_UPDATE')),
    ((select id from roles where name = 'PUBLIC'), (select id from permissions where name = 'PROFILE_DELETE')),

    ((select id from roles where name = 'PUBLIC'), (select id from permissions where name = 'DECLARATION_CREATE')),
    ((select id from roles where name = 'PUBLIC'), (select id from permissions where name = 'DECLARATION_READ')),
    ((select id from roles where name = 'PUBLIC'), (select id from permissions where name = 'DECLARATION_UPDATE')),
    ((select id from roles where name = 'PUBLIC'), (select id from permissions where name = 'DECLARATION_DELETE')),

    ((select id from roles where name = 'PUBLIC'), (select id from permissions where name = 'REQUEST_CREATE')),
    ((select id from roles where name = 'PUBLIC'), (select id from permissions where name = 'REQUEST_READ')),
    ((select id from roles where name = 'PUBLIC'), (select id from permissions where name = 'REQUEST_UPDATE')),
    ((select id from roles where name = 'PUBLIC'), (select id from permissions where name = 'REQUEST_DELETE'))

;