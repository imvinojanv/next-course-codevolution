export default function AuthLayout({
    children,
} : {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full min-h-screen">
            <h2>Auth Page</h2>
            <div className="flex justify-center mt-16">
                {children}
            </div>
        </div>
    )
}