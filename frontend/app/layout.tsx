import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Job Applications Tracker</title>
                <meta name="description" content="Track your job applications" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className="bg-gray-100 text-gray-800">
                <div className="container mx-auto py-10">{children}</div>
            </body>
        </html>
    );
}
