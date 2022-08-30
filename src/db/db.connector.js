import pg from 'pg';

const dbOptions = {
    user: 'taradev',
    host: 'localhost',
    database: 'tara_dev',
    password: 'Pass5630',
    port: 54323
}
const pool = new pg.Pool(dbOptions)
export default pool