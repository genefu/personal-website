'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
    const router = usePathname()
    return (
        <div>
            <nav className = "py-4 px-4">
                <ul>
                    <li> 
                        <Link className = {router == "/" ? "active" : ""} href = "/"> genesis fu </Link>
                    </li>
                    <li> 
                        <Link className = {router == "/about" ? "active" : ""} href = "/about"> about me </Link>
                    </li>
                    <li>
                        <Link className = {router == "/projects" ? "active" : ""} href = "/projects"> my projects </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}