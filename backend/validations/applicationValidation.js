import Joi from 'joi';

export const applicationSchema = Joi.object({
    company: Joi.string().required().messages({
        'string.empty': 'Company name is required',
    }),
    position: Joi.string().required().messages({
        'string.empty': 'Position is required',
    }),
    salaryRange: Joi.string().allow(''),
    status: Joi.string().required().messages({
        'string.empty': 'Status is required',
    }),
    note: Joi.string().allow(''),
});
