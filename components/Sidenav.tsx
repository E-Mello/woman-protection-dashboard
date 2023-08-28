// components/Sidenav.tsx

import Link from 'next/link';

const Sidenav = () => {
    return (
        <div className="bg-gray-800 h-full text-white w-1/4 sm:w-1/5 md:w-1/6 fixed left-0 top-0 overflow-y-auto">
            <div className="p-4">
                <h2 className="text-xl font-semibold">Sidenav</h2>
            </div>
            <nav className="p-4">
                <ul>
                    <li>
                        <Link href="/">
                            <a className="block py-2">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a className="block py-2">About</a>
                        </Link>
                    </li>
                    {/* Add more navigation items here */}
                </ul>
            </nav>
        </div>
    );
};

export default Sidenav;
