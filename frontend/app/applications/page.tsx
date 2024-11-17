'use client';

import { Button, VacanciesTable, VacancyForm } from 'components';
import { useEffect, useState } from 'react';
import {
    createApplication,
    deleteApplication,
    getApplications,
    updateApplication,
} from '../services/applicationService';
import { Application } from '../types/application';

export default function ApplicationsPage() {
    const [applications, setApplications] = useState<Application[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [editingApplication, setEditingApplication] = useState<Application | null>(null);

    useEffect(() => {
        const fetchApplications = async () => {
            const data = await getApplications();
            setApplications(data);
        };
        fetchApplications();
    }, []);

    const handleDelete = async (id: string) => {
        await deleteApplication(id);
        setApplications((prev) => prev.filter((app) => app._id !== id));
    };

    const handleEdit = (application: Application) => {
        setEditingApplication(application);
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        setEditingApplication(null);
        setIsModalOpen(true);
    };

    const handleFormSubmit = async (applicationData: Application) => {
        if (editingApplication) {
            const updated = await updateApplication(editingApplication._id!, applicationData);
            setApplications((prev) =>
                prev.map((app) => (app._id === updated._id ? updated : app))
            );
        } else {
            const created = await createApplication(applicationData);
            setApplications((prev) => [...prev, created]);
        }

        setIsModalOpen(false);
        setEditingApplication(null);
    };

    return (
        <div className='flex flex-col justify-center'>
            <Button
                label="+ New Vacancy"
                onClick={handleAdd}
                className="bg-green-500 hover:bg-green-600"
            />
            <VacanciesTable
                applications={applications}
                onDelete={handleDelete}
                onEdit={handleEdit}
            />

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded shadow-lg p-6 w-96">
                        <h2 className="text-lg font-bold mb-4">
                            {editingApplication ? 'Edit Vacancy' : 'New Vacancy'}
                        </h2>
                        <VacancyForm
                            initialData={editingApplication || undefined}
                            onSubmit={handleFormSubmit}
                        />
                        <Button
                            label="Close"
                            onClick={() => setIsModalOpen(false)}
                            className="mt-4 bg-gray-300 hover:bg-gray-400 text-black"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
