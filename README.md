# BE
NodeJS Express App for School in the Cloud


## User Requirements:

- a unique `email`
- a `password`
- a `name`
- a `role` 
- role values:  `1 = student` , `2 = admin` , `3 = volunteer`

Here is a table with the `endpoint` descriptions:

| Action                     | URL                     | Method | Response                  |
| :------------------------- | :---------------------- | :----- | :------------------------ |
| Register a user            | /api/auth/register      | POST   | the new user with role + a token    |
| LogIn a user               | /api/auth/login         | POST   | the user + a token    |
| Show all Volunteers        | api/volunteers          | GET    | array of all volunters with their availability time slots |
| Create a task for volunteer| /api/tasks              | POST   | the created task |
| Update a task by id        | /api/tasks/:id          | PUT    | the updated task |
| Delete a task by id        | /api/tasks/:id          | DELETE  | Delete message |
| Show tasks asigned to volunteer | /api/tasks/:volunteerId | GET | Array of all tasks assigned to specific volunteer |


[+] On-boarding for three user types: `admin`, `student`, and `volunteer`. Each user type will have their own view.
  /login
  /register

[+] Ability for an `admin` to create and edit a training “`tasks`” volunteers to complete. Saving a to do list will make it appear on the volunteers homepage.

[+] Homepage for `volunteer` to view their `tasks` from an `admin`.
  get /tasks/:volunteerid

[+] Homepage for `student`s to see the profiles of all registered `volunteers`. They can search by their listed `availability time`s, or their `country`.

all
[+]POST /Register
[+]POST /login

admin 
[+]POST /tasks
[+]PUT /tasks
[+]Delete /tasks


volunteer
[+]GET /tasks/volunteer/:volunteerid
[ ] Post /availability   - create new time slot 
[ ] Get /availability - show time slots
[ ] Put /availability - edit time slot 
[ ] Delete /availability - delete time slot 


student
[+] GET /volunteers