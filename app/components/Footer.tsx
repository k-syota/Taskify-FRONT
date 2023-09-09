import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font absolute bottom-0 w-full bg-third-color">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <Image alt="logo" src="/images/logo.png" height="50" width="50" className='rounded-full' />
                    <span className="ml-3 text-xl">Taskify</span>
                </Link>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Taskify —
                    <span className="text-gray-600 ml-1" rel="noopener noreferrer" >@sharoughs</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer
