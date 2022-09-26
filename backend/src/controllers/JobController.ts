import { Request, Response } from 'express';
import Job from '../models/Job';
import JobServices from '../services/jobServices';

class JobController {
    async getAll(req: Request, res: Response) {
        try {
            const jobs = await JobServices.getAllJobs();
            return res.json({ data: jobs, status: 'success' });
        } catch (error) {
            return res.status(500).send({
                error: 'Could not to complete your request',
                message: error,
            });
        }
    }

    async getOne(req: Request, res: Response) {
        const jobId = req.params.id;
        try {
            const job = await JobServices.getJobById(jobId);
            return res.json({ data: job, status: 'success' });
        } catch (error) {
            return res.status(500).send({
                error: 'Could not to complete your request',
                message: error,
            });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const job = await JobServices.createJob(req.body);
            res.json({ data: job, status: 'success' });
        } catch (error) {
            return res.status(500).send({
                error: 'Could not register a Job',
                message: error,
            });
        }
    }

    async update(req: Request, res: Response) {
        const jobId = req.params.id;

        try {
            const job = JobServices.updateJob(jobId, req.body);
            res.json({ data: job, status: 'success' });
        } catch (error) {
            return res.status(500).send({
                error: 'Could not update a Job',
                message: error,
            });
        }
    }

    async delete(req: Request, res: Response) {
        const jobId = req.params.id;
        try {
            const job = await JobServices.deleteJob(jobId);
            return res.json({ data: job, status: 'success' });
        } catch (error) {
            return res.status(500).send({
                error: 'Could not delete a job',
                message: error,
            });
        }
    }
}

export default new JobController();
