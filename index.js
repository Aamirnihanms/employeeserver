// import json
const jsonserver = require("json-server")

const mpserver = jsonserver.create()

const middleware = jsonserver.defaults()

const route = jsonserver.router('db.json')

const PORT = 3000 || process.env.PORT


mpserver.use(middleware)
mpserver.use(route)
mpserver.listen(PORT,()=>{
    console.log(`started successfully at ${PORT}`)
})