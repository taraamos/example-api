import Users from "../services/user.service.js";

const users = new Users();


class defaultController {
    //sends a json
    welcome = (request, response) => {
        response.json({ message: 'hello tara!' })
    }
    //sends a name
    sayHello = (request, response) => {
        let name = request.params.name;
        response.send(`<h1> hello ${name.toUpperCase()} </h1>`)
    }

    fetchUser = async (request, response) => {
        const result = await users.fetchData()
        console.log(result)
        response.json(result)
    }

    createUser = async (request, response) => {
        const newUser = { 
            email: request.body.email, 
            firstname: request.body.firstname,
            lastname: request.body.lastname
        }
        const result = await users.createData(newUser)
        console.log(result)
        response.json(result)
    }


}

const DefaultController = new defaultController();

export default DefaultController;


