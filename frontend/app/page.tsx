import Link from 'next/link';

export default function Home() {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-5">Job Applications Tracker</h1>
            <Link href="/applications" className="text-blue-500 underline">
                View Applications
            </Link>
        </div>
    );
}
