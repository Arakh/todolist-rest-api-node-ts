import db from './connection';

const init = async () => {
    const conn = await db();
    await conn.run('DROP TABLE IF EXISTS to_do');
    await conn.run('CREATE TABLE to_do(id INTEGER PRIMARY KEY AUTOINCREMENT, item TEXT NOT NULL, status TEXT NOT NULL, date_action DATE NOT NULL, date_created DATETIME NOT NULL)');
};

export default init;