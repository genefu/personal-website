import Link from "next/link"

export default function Header() {
    return (
        <div>
            <nav className = "py-4 px-4">
                <ul>
                    <li> 
                        <Link href = "/"> genesis fu </Link>
                    </li>
                    <li> 
                        <Link href = "/about"> about me </Link>
                    </li>
                    <li>
                        <Link href = "/projects"> my projects </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}