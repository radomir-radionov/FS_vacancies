import { Application } from '../types/application';
import Button from './Button';

type Props = {
    applications: Application[];
    onDelete: (id: string) => void;
    onEdit: (application: Application) => void;
};

export default function VacanciesTable({ applications, onDelete, onEdit }: Props) {
    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full mt-5 min-w-[1024px]">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-left">Company</th>
                        <th className="px-4 py-2 text-left">Position</th>
                        <th className="px-4 py-2 text-left">Salary Range</th>
                        <th className="px-4 py-2 text-left">Status</th>
                        <th className="px-4 py-2 text-left">Note</th>
                        <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map((app) => (
                        <tr key={app._id}>
                            <td className="border px-4 py-2 text-left">{app.company}</td>
                            <td className="border px-4 py-2 text-left">{app.position}</td>
                            <td className="border px-4 py-2 text-left">{app.salaryRange || 'N/A'}</td>
                            <td className="border px-4 py-2 text-left">{app.status}</td>
                            <td className="border px-4 py-2 text-left">{app.note || 'No notes'}</td>
                            <td className="border px-4 py-2 text-left flex space-x-2">
                                <Button
                                    label="Edit"
                                    onClick={() => onEdit(app)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white"
                                />
                                <Button
                                    label="Delete"
                                    onClick={() => onDelete(app._id!)}
                                    className="bg-red-500 hover:bg-red-600 text-white"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
