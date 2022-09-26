import JobModel from '../models/Job';

class JobServices {
    async getAllJobs() {
        return await JobModel.find();
    }

    async createJob(job: typeof JobModel) {
        return await JobModel.create(job);
    }

    async getJobById(id: string) {
        return await JobModel.findById(id);
    }

    async updateJob(id: string, job: typeof JobModel) {
        return await JobModel.findByIdAndUpdate(id, job);
    }

    async deleteJob(id: string) {
        return await JobModel.findByIdAndDelete(id);
    }
}

export default new JobServices();
