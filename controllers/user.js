import { v4 as uuidv4 } from 'uuid';

let users = []

export const getAllUsers = (req, res) => {

    console.log(users)

    res.send(users)
}

export const getOneUser = (req, res) => {

    console.log("Get user according to an id")
    
    const { id } = req.params
    
    const foundUser = users.find((user) => user.id === id)

    res.send(foundUser)
}

export const createUser = (req, res) => {
    console.log('Create a user')
    const user = req.body 

    users.push({ id: uuidv4(), ...user })

    res.send(users)
} 

export const updateUser = (req, res) => {
    console.log('Change user')

    const { id } = req.params
    const { firstName, lastName, age } = req.body 
    
    const user = users.find((user) => user.id === id)

    
    if (firstName) user.firstName = firstName        
    if (lastName) user.lastName = lastName    
    if (age) user.age = age    
    
    console.log(users)

    res.send(`The user with id ${id} is updated.`)
}

export const deleteUser = (req, res) => {
    console.log('Delete user')
    
    const { id } = req.params 
    
    users = users.filter((user) => user.id !== id)

    res.send(users)
}