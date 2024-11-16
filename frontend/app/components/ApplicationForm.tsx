'use client';

import { useState } from 'react';
import { Application } from '../types/application';

type Props = {
    initialData?: Application;
    onSubmit: (data: Application) => void;
};

export default function ApplicationForm({ initialData, onSubmit }: Props) {
    const [formData, setFormData] = useState<Application>(
        initialData || { company: '', position: '', status: '', salaryRange: '', note: '' }
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
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
            </div>
            <div className="mb-4">
                <label className="block mb-2">Note</label>
                <textarea
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit
            </button>
        </form>
    );
}
