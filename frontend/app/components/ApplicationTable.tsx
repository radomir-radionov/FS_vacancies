import Link from 'next/link';
import { Application } from '../types/application';

type Props = {
    applications: Application[];
    onDelete: (id: string) => void;
};

export default function ApplicationTable({ applications, onDelete }: Props) {
    return (
        <table className="table-auto w-full mt-5">
            <thead>
                <tr>
                    <th className="px-4 py-2">Company</th>
                    <th className="px-4 py-2">Position</th>
                    <th className="px-4 py-2">Salary Range</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {applications.map((app) => (
                    <tr key={app._id}>
                        <td className="border px-4 py-2">{app.company}</td>
                        <td className="border px-4 py-2">{app.position}</td>
                        <td className="border px-4 py-2">{app.salaryRange || 'N/A'}</td>
                        <td className="border px-4 py-2">{app.status}</td>
                        <td className="border px-4 py-2">
                            <Link href={`/applications/${app._id}/edit`} className="text-blue-500 underline">
                                Edit
                            </Link>{' '}
                            |{' '}
                            <button onClick={() => onDelete(app._id!)} className="text-red-500 underline">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
