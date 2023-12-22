import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { CgDarkMode } from 'react-icons/cg'
import {useTheme} from 'next-themes'

const links = [
    { label: "Dashboard", href: "/" },
    { label: "Schedule", href: "/" },
    { label: "About us", href: "/" },
    {label:"Partners",href:"/"},
    {label:"Contact",href:"/"}
]



export default function Nav() {
    const {theme, setTheme} = useTheme()
    useEffect(() => {
        console.log('') // Put some comment here
    });

    const isOpen = useRef(false);
    return (
        // We want to conditionally render a dropdown depending on if the size is small enough 
        // items-center justify-center
        <nav className="dark:text-white">
            <ul className="flex flex-wrap p-8 mt-6 sm:mt-0 sm:justify-between sm:items-center">
                <div className='flex justify-center items-center'>
                <img className=' h-8 w-8 dark:hidden md:hidden' src='/assets/dropdown_dark.png'/>
                <img className='h-8 w-8 md:hidden dark:flex hidden ' src='/assets/dropdown_light.png'/>
                <img src="/assets/RH_logo.png" className=" max-w-[2.5rem] max-h-[2.5rem]"/>
                <h1 className='text-2xl'>RowdyHacks</h1>
                </div>

                <ul className={`mx-auto sm:mx-0 flex flex-row space-x-5`}>
                    <div className='hidden md:flex'>
                        {links.map(({ href, label }) => (
                        <li className="self-center" key={`${href}${label}`}>
                            <Link
                                href={href}
                                className={`font-inter px-4 py-2 rounded hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10`}>
                                {label}
                            </Link>
                        </li>
                    ))}
                    </div>
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
