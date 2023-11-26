"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

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
            <div className="flex justify-center mt-16">
                {children}
            </div>
        </div>
    )
}