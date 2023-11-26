"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
    { href: "/login", label: "Login" },
    { href: "/register", label: "Register" },
];

export default function AuthLayout({
    children,
} : {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();

    const handleNavigate = () => {
        router.push("/");
        // router.replace("/");
        // router.back();      // Backward routes
        // router.forward();   // Forward routes
    }    

    return (
        <div className="w-full min-h-screen">
            <div className="mt-12 flex flex-row gap-8 justify-center items-center text-blue-300">
                {navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href);

                    return(
                        <Link 
                            href={link.href} 
                            key={link.href}
                            // className={ pathname === link.href ? "text-orange-300" : "" }
                            className={ isActive ? "text-orange-300" : "" }
                        >
                            {link.label}
                        </Link>
                    )
                })}
            </div>
            <div className="flex flex-col justify-center items-center mt-16">
                {children}
                <button
                    className="mt-8 py-3 px-8 bg-gray-900 hover:bg-gray-800 font-semibold"
                    onClick={handleNavigate}
                >
                    Back to Home
                </button>
            </div>
        </div>
    )
}