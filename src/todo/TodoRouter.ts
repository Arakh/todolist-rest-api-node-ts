import express from 'express';
import { Request, Response } from 'express';
import { getTodo, getTodoList, updateToDo, createToDo, deleteToDo } from './TodoService';

const router = express.Router();

router.get('/todolist', async (req: Request, res: Response) => {
    const optionalFilter = req.query;
    const result = await getTodoList(optionalFilter);
   
    return res.json({data: result});
});

router.get('/todo/:id', async (req: Request, res: Response) => {
    const result = await getTodo(+req.params.id);
    return res.json({data: result});
});

router.put('/todo/:id', async (req: Request, res: Response) => {
    if (!req.body.item) {
        return res.status(400).json({'message': 'item is required in body json'});
    }

    const id = +req.params.id;
    const item = req.body.item;

    const result = await updateToDo(id, item);
    return res.json(result);
});

router.delete('/todo/:id', async (req: Request, res: Response) => {
    const result = await deleteToDo(+req.params.id);
    return res.json(result);
});

router.post('/todo', async (req: Request, res: Response) => {
    if (!req.body.item) {
        return res.status(400).json({'message': 'item is required in body json'});
    }

    if (!req.body.date_action) {
        return res.status(400).json({'message': 'date_action is required in body json'});
    }

    const result = await createToDo(req.body);
    return res.json(result);
});

export default router;