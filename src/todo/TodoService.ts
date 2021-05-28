import db from '../config/connection';

const getTodoList = async (filter: any) => {
    const conn = await db();

    let where = [];
    if (filter.status) {
        where.push(`status = ${filter.status}`);
    }

    if (filter.date_action) {
        where.push(`date_action = ${filter.date_action}`);
    }

    const whereQuery = where.length ? 'WHERE '+where.join(' AND ') : '';
 
    const res = await conn.all('SELECT * FROM to_do '+whereQuery);
    return res;
}

const getTodo = async (id: number) => {
    const conn = await db();
    const res = await conn.get(`SELECT * FROM to_do WHERE id = ${id}`);
    return res;
}

const updateToDo = async (id: number, item: string) => {
    const conn = await db();
    const res = await conn.run(`UPDATE to_do SET item = "${item}" WHERE id = ${id}`);
    return res;
}

interface newTodo {
    item: string;
    date_action: Date;
}

const createToDo = async (payload: newTodo) => {
    const conn = await db();
    const res = await conn.run(`INSERT INTO to_do (item, date_action, status, date_created) VALUES ("${payload.item}", "${payload.date_action}", "ToDo", "${new Date()}")`);
    return res;
}

const deleteToDo = async (id: number) => {
    const conn = await db();
    const res = await conn.run(`DELETE FROM to_do WHERE id = ${id}`);
    return res;
}

export { getTodo, getTodoList, updateToDo, createToDo, deleteToDo }