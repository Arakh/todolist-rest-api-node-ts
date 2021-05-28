import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

const db = async () => {
    return await open({
        filename: './storage/database.db',
        driver: sqlite3.Database        
    });
};

export default db;