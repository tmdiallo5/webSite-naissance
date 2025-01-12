create table declarations (
                  id int auto_increment primary key,
                  father_id int,
                  mother_id int,
                  child_id int,
                  creation datetime default current_timestamp,
                  constraint fk_declarations_father_id foreign key(father_id) references profiles(id),
                  constraint fk_declarations_child_id foreign key(child_id) references profiles(id),
                  constraint fk_declarations_mother_id foreign key(mother_id) references profiles(id),
                  constraint fk_unique_father_mother_child unique (father_id, mother_id)
);
