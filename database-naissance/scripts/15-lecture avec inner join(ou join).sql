select *
from profiles
join roles
on profiles.role_id = roles.id;