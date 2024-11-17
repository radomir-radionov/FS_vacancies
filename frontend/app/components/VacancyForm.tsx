'use client';

import { useState } from 'react';
import { Application } from '../types/application';
import Button from './Button';

type Props = {
    initialData?: Application;
    onSubmit: (data: Application) => void;
};

export default function VacancyForm({ initialData, onSubmit }: Props) {
    const [formData, setFormData] = useState<Application>(
        initialData || { company: '', position: '', status: '', salaryRange: '', note: '' }
    );

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.company.trim()) newErrors.company = 'Company is required.';
        if (!formData.position.trim()) newErrors.position = 'Position is required.';
        if (!formData?.salaryRange?.trim()) newErrors.salaryRange = 'Salary Range is required.';
        if (!formData.status.trim()) newErrors.status = 'Status is required.';
        if (!formData?.note?.trim()) newErrors.note = 'Note is required.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-5 rounded shadow-md">
            <div className="mb-4">
                <label className="block mb-2">Company</label>
                <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-2">Position</label>
                <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                {errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-2">Salary Range</label>
                <input
                    type="text"
                    name="salaryRange"
                    value={formData.salaryRange}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                {errors.salaryRange && <p className="text-red-500 text-sm">{errors.salaryRange}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-2">Status</label>
                <input
                    type="text"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                {errors.status && <p className="text-red-500 text-sm">{errors.status}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-2">Note</label>
                <textarea
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                ></textarea>
                {errors.note && <p className="text-red-500 text-sm">{errors.note}</p>}
            </div>
            <Button
                type="submit"
                label="Submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            />
        </form>
    );
}
