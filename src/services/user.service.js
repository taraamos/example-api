import pool from '../db/db.connector.js'


class Users {
    fetchData = async () => {
        try {
            const sqlStr = 'SELECT * FROM users';
            // const {res} = await pool.query(sqlStr);
            const res = await pool.query(sqlStr)
            const result = res.rows
    
            // .then(res => res.rows[0])
            // console.log(queryResult);
            return result;
        } catch (error) {
            console.log(error)
        }

    }

    createData = async (user) => {
        console.log(user)
        try {
            const sqlStr = 'INSERT INTO users (email, firstname, lastname) VALUES ($1,$2,$3)';

            // const {res} = await pool.query(sqlStr);
            const res = await pool.query(sqlStr, [user.email, user.firstname, user.lastname])
            
    
            // .then(res => res.rows[0])
            // console.log(queryResult);
            return res;
        } catch (error) {
            console.log(error)
        }

    }
}



export default Users;