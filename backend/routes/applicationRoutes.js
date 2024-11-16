import Router from 'koa-router';
import { createApplication, deleteApplication, getApplications, updateApplication } from '../controllers/applicationController.js';

const router = new Router();

router.get('/applications', getApplications);
router.post('/applications', createApplication);
router.put('/applications/:id', updateApplication);
router.delete('/applications/:id', deleteApplication);

export default router;
