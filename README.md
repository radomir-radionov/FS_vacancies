### Deploy:

- frontend: https://fsvacancies-production.up.railway.app/
- backend:

It is for me, personal use:

```js
brew services restart mongodb/brew/mongodb-community

db.createUser({
user: "admin",
pwd: "securepassword",
roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
})

mongodb://127.0.0.1:27017

mongosh
use admin
db.auth("admin", "securepassword")
```
