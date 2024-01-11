import { Router } from 'express';
import userRouter from './user.route';
import organizationRouter from './organization.route';
import petRouter from './pet.route';

const router = Router();

router.use('/user', userRouter);
router.use('/organization', organizationRouter);
router.use('/pet', petRouter)

export default router;
