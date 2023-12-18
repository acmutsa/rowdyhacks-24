import Link from 'next/link'
import { useEffect } from 'react'
import { CgDarkMode } from 'react-icons/cg'
import {useTheme} from 'next-themes'

const links = [
    { label: "Page 1", href: "/" },
    { label: "Page 2", href: "/" },
    { label: "Page 3", href: "/" },
]

export default function Nav() {
    const {theme, setTheme} = useTheme()
    useEffect(() => {
        console.log('') // Put some comment here
    })
    return (
        <nav className="dark:text-white">
            <ul className="flex flex-wrap sm:justify-between items-start sm:items-center p-8 mt-6 sm:mt-0">
                <div className='flex items-center'>
                    <img src="/assets/RH_logo.png" className=" max-w-[2.5rem] max-h-[2.5rem]"/>
                    <li className='pl-3 text-2xl'>RowdyHacks</li>

                </div>
                <ul className={`mx-auto sm:mx-0 flex flex-row space-x-5`}>
                    {links.map(({ href, label }) => (
                        <li className="self-center" key={`${href}${label}`}>
                            <Link
                                href={href}
                                className={`font-inter px-4 py-2 rounded hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10`}>

                                {label}

                            </Link>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => {
                                setTheme(theme === 'dark' ? 'light' : 'dark');
                                document.querySelector("#theme_toggle").classList.toggle("rotate-180");
                            }}
                            className="p-2 rounded-full hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 transform duration-200" id="theme_toggle">
                            <CgDarkMode size={24} />
                        </button>
                    </li>
                </ul>
            </ul>
        </nav>
    );
}
