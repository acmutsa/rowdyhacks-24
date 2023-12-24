import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CgDarkMode } from 'react-icons/cg'
import {useTheme} from 'next-themes'

const links = [
    { label: "Dashboard", href: "/" },
    { label: "Schedule", href: "/" },
    { label: "About\u00A0us", href: "/" },
    {label:"Partners",href:"/"},
    {label:"Contact",href:"/"}
]



export default function Nav() {
     
    const {theme, setTheme} = useTheme();
    const [isOpen,setIsOpen] = useState(false);
    

    useEffect(() => {
        console.log("Theme is:",theme) // Put some comment here
    },[theme]);

    
    const toggleIsOpen = ()=>{
        setIsOpen(!isOpen);
    }
    
    
    
    return (
        // We want to conditionally render a dropdown depending on if the size is small enough 
        // items-center justify-center
        <nav className="dark:text-white">
            <ul className="flex p-6 mt-0 sm:p-4 sm:justify-between sm:items-center">
                <div className='flex justify-center items-center pr-2'>
                    {
                        isOpen ?
                        <button>
                        <img 
                        src={theme === 'light' ? '/assets/close_dark.png':'/assets/close_light.png'}
                        className='h-4 w-4 pr-[3px] md:hidden'
                        onClick={toggleIsOpen}/>
                        </button> 
                        :
                        <button>
                        <img 
                        src='/assets/dropdown.png'
                        className=' h-7 w-7 md:hidden'
                        onClick={toggleIsOpen}/>
                        </button> 
                    }
                    <img src="/assets/RH_logo.png" className="h-[2.5rem] w-[2.5rem] max-w-[5rem] max-h-[5rem]"/>
                    <h1 className='text-2xl'>RowdyHacks</h1>
                </div>
                <ul className={`mx-auto sm:mx-0 flex flex-row space-x-4`}>
                    <div className='hidden md:flex'>
                        {links.map(({ href, label }) => (
                        <li className="self-center" key={`${href}${label}`}>
                            <Link
                                href={href}
                                className={` font-inter px-4 py-2 rounded hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10`}>
                                {label}
                            </Link>
                        </li>
                    ))}
                    </div>
                </ul>
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
        </nav>
    );
}
