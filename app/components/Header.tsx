import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { BiUserCircle } from "react-icons/bi"

const Header = () => {
    return (
        <header className="text-gray-600 body-font bg-third-color">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image alt="logo" src="/images/logo.png" height="50" width="50" className='rounded-full' />
                    <span className="ml-3 text-xl">Taskify</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">First Link</a>
                    <a className="mr-5 hover:text-gray-900">Second Link</a>
                    <a className="mr-5 hover:text-gray-900">Third Link</a>
                    <a className="mr-5 hover:text-gray-900">Fourth Link</a>
                </nav>
                <button className="inline-flex items-center bg-primary-color border-0 py-1 px-3 ml-1 transition-all duration-500 ease-out
                            focus:outline-none hover:bg-secondary-color rounded text-white mt-4 md:mt-0">マイページ
                    <BiUserCircle />
                </button>
            </div>
        </header >
    )
}

export default Header
