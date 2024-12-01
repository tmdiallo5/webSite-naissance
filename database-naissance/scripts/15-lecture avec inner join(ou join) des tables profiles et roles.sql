select *
from profiles
join roles
on profiles.role_id = roles.id;


select p.first_name, p.last_name, r.label
from profiles p
join roles r
on p.role_id = r.id;

show tables;
