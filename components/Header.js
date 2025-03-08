import Link from "next/link";

export default function Header() {
    return (
        <header className="hidden md:block max-md:container py-4 bg-[#101010] backdrop-blur-xl">
            <div className="flex flex-row">
                <ul className="list-none flex flex-row mx-auto gap-28">
                    <li className="relative group">
                        <Link href={'/blog'}>Blog</Link>
                        <span className="absolute left-0 bottom-0 h-1 w-full bg-[#00FF00] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </li>
                    <li className="relative group">
                        <Link href={'#'}>Discord</Link>
                        <span className="absolute left-0 bottom-0 h-1 w-full bg-[#00FF00] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </li>
                    <li className="relative group">
                        <Link href={'/contact'}>Contact</Link>
                        <span className="absolute left-0 bottom-0 h-1 w-full bg-[#00FF00] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </li>
                </ul>
            </div>
        </header>
    );
}