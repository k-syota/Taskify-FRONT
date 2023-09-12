import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { BiUserCircle } from "react-icons/bi"

const Header = () => {
    return (
        <header className="text-gray-600 body-font bg-third-color w-full">
            <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image alt="logo" src="/images/logo.png" height="50" width="50" className='rounded-full' />
                    <span className="ml-3 text-xl">Taskify</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/" className="mr-5 hover:text-gray-900 cursor-pointer">プロジェクト一覧</Link>
                    <Link href="/" className="mr-5 hover:text-gray-900 cursor-pointer">タスク一覧</Link>
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
