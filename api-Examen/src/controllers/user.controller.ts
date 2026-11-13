import { Request, Response } from 'express';

// GET /api/users
export const getUsers = (req: Request, res: Response) => {
    res.json({
        code: "200_OK",
        data: {
            appName: "Mi API Node",
            version: "1.0.0"
        }
    });
};

// GET /api/users/:id
export const getUserById = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        code: "200_OK",
        data: {
            id: id,
            name: "Carlos",
            lastname: "Mendoza"
        }
    });
};
