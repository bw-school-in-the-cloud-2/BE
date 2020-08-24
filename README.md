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
