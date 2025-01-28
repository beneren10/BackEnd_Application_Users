const db = require('../db/connect')

class User {
    constructor({user_id, first_name,last_name, address, category}){
        this.user_id = user_id,
        this.first_name = first_name,
        this.last_name = last_name,
        this.address = address, 
        this.category = category
    }

    static async showAll(){
        
        const response = await db.query('SELECT first_name FROM users;')
        if (response.rows.length === 0){
            throw new Error("No users available in the DB")
        } else {
            return response.rows.map(c => new User(c));
        }
    }

    static async getOneByUserName(userName){
        const response = await db.query('SELECT * FROM users WHERE LOWER(first_name) = LOWER($1)', [userName])
        if (response.rows.length === 0){
            throw new Error("No user available by this name")
        } else {
            return new User(response.rows[0])
        }
    }

    static async create(newEntry){
        const checkname = await db.query('SELECT first_name FROM users WHERE LOWER(first_name) = LOWER($1);', [newEntry.first_name])
        if (checkname.rows.length === 0){
            const response = await db.query('INSERT INTO users (first_name, last_name, address, category) VALUES ($1, $2, $3, $4) RETURNING *;',[newEntry.first_name,newEntry.last_name,newEntry.address,newEntry.category])
            return new User(response.rows[0])
        } else {
            throw new Error("User already in the db by this name")
        }
    }

    async update(data){
        const checkname = await db.query('SELECT first_name FROM users WHERE LOWER(first_name) = LOWER($1);', [this.first_name])
        if (checkname.rows.length > 1) {
            throw new Error('User already in the db by this name')
        } else {
            const { first_name, last_name, address, category } = data
            const response = await db.query('UPDATE users SET first_name = $1, last_name = $2, address = $3, category = $4 WHERE first_name = $5 RETURNING *;', [first_name, last_name, address, category, this.first_name])
            return new User(response.rows[0])
        }
    }

    async delete(){
        console.log('hit')
        const response = db.query('DELETE FROM users WHERE first_name = $1;',[this.first_name])
        return response
    }
}
module.exports = User;