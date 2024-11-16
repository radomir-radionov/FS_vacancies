'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import ApplicationTable from '../components/ApplicationTable';
import { deleteApplication, getApplications } from '../services/applicationService';
import { Application } from '../types/application';

export default function ApplicationsPage() {
    const [applications, setApplications] = useState<Application[]>([]);

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

    return (
        <div>
            <h1 className="text-2xl font-bold mb-5">Applications</h1>
            <Link href="/applications/new" className="bg-blue-500 text-white px-4 py-2 rounded">
                + Add Application
            </Link>
            <ApplicationTable applications={applications} onDelete={handleDelete} />
        </div>
    );
}
