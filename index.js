const jsonServer = require("json-server")

const EMPServer = jsonServer.create()

const middleware = jsonServer.defaults()

const route = jsonServer.router('db.json')

const PORT = 3000 || process.env.PORT

EMPServer.use(middleware)
EMPServer.use(route)
EMPServer.listen(PORT,()=>{
    console.log(`Employee Management App started at ${PORT}`);
})