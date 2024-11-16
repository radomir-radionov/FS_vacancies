import mongoose from 'mongoose';
import Application from '../models/Application.js';

export const getApplications = async (ctx) => {
    try {
        const applications = await Application.find();
        ctx.body = applications;
    } catch (error) {
      console.log('error',error);
        ctx.status = 500;
        ctx.body = { message: 'Server Error' };
    }
};

export const createApplication = async (ctx) => {
    try {
        const { company, position, salaryRange, status, note } = ctx.request.body;
        const newApplication = new Application({ company, position, salaryRange, status, note });
        await newApplication.save();
        ctx.status = 201;
        ctx.body = newApplication;
    } catch (error) {
        ctx.status = 400;
        ctx.body = { message: error.message };
    }
};

export const updateApplication = async (ctx) => {
    try {
        const { id } = ctx.params;
        const updatedApplication = await Application.findByIdAndUpdate(id, ctx.request.body, { new: true });
        if (!updatedApplication) {
            ctx.status = 404;
            ctx.body = { message: 'Application not found' };
            return;
        }
        ctx.body = updatedApplication;
    } catch (error) {
        ctx.status = 400;
        ctx.body = { message: error.message };
    }
};


export const deleteApplication = async (ctx) => {
    try {
        const { id } = ctx.params;

        // Check if the ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            ctx.status = 400;
            ctx.body = { message: 'Invalid ID format' };
            return;
        }

        const deletedApplication = await Application.findByIdAndDelete(id);
        if (!deletedApplication) {
            ctx.status = 404;
            ctx.body = { message: 'Application not found' };
            return;
        }

        ctx.status = 204; // No content
    } catch (error) {
        ctx.status = 400;
        ctx.body = { message: error.message };
    }
};

