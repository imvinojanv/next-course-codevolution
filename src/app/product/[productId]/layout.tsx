export default function ProductDetailsLayout({
    children,
} : {
    children: React.ReactNode;
}) {
    return (
        <>
            <h2>Product Page</h2>
            {children}
        </>
    )
}