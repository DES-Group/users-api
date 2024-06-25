import e from "express";
import {
    createUser,
    deleteUser,
    getAllUsers,
    getOneUser,
    updateUser
} from "../controllers/user.js";

const router = e.Router()


router.get('/', getAllUsers)

router.post('/', createUser)

router.get('/:id', getOneUser)

router.patch('/:id', updateUser)

router.delete('/:id', deleteUser)


export default router;