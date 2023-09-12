import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const Tasks = () => {
    return (
        <>
            <Header />
            <section>
                <div className='container mx-auto'>
                    <div className='my-8'>
                        <h2 className='font-bold text-xl'>タスク一覧</h2>
                    </div>
                    <div>
                        <div className='bg-gray-200 rounded-md border border-gray-600 mb-4 px-2 py-3'>
                            <span className='inline-block w-1/4'>タスク名</span>
                            <span className='inline-block w-1/5'>カテゴリー</span>
                            <span className='inline-block w-2/12'>開始日</span>
                            <span className='inline-block w-2/12'>期日</span>
                            <span className='inline-block w-1/12'>達成率</span>
                        </div>
                        <div className='bg-gray-200 rounded-md border border-gray-600 mb-3 px-2 py-3 hover:bg-gray-100 cursor-pointer'>
                            <span className='inline-block w-1/4'>新規登録画面実装</span>
                            <span className='inline-block w-1/5'>実装</span>
                            <span className='inline-block w-2/12'>2023年10月1日</span>
                            <span className='inline-block w-2/12'>2023年10月8日</span>
                            <span className='inline-block w-1/12'>0％</span>
                        </div>
                        <div className='bg-gray-200 rounded-md border border-gray-600 mb-3 px-2 py-3 hover:bg-gray-100 cursor-pointer'>
                            <span className='inline-block w-1/4'>新規登録画面実装</span>
                            <span className='inline-block w-1/5'>実装</span>
                            <span className='inline-block w-2/12'>2023年10月1日</span>
                            <span className='inline-block w-2/12'>2023年10月8日</span>
                            <span className='inline-block w-1/12'>0％</span>
                        </div>
                        <div className='bg-gray-200 rounded-md border border-gray-600 mb-3 px-2 py-3 hover:bg-gray-100 cursor-pointer'>
                            <span className='inline-block w-1/4'>新規登録画面実装</span>
                            <span className='inline-block w-1/5'>実装</span>
                            <span className='inline-block w-2/12'>2023年10月1日</span>
                            <span className='inline-block w-2/12'>2023年10月8日</span>
                            <span className='inline-block w-1/12'>0％</span>
                        </div>
                        <div className='bg-gray-200 rounded-md border border-gray-600 mb-3 px-2 py-3 hover:bg-gray-100 cursor-pointer'>
                            <span className='inline-block w-1/4'>新規登録画面実装</span>
                            <span className='inline-block w-1/5'>実装</span>
                            <span className='inline-block w-2/12'>2023年10月1日</span>
                            <span className='inline-block w-2/12'>2023年10月8日</span>
                            <span className='inline-block w-1/12'>0％</span>
                        </div>
                        <div className='bg-gray-200 rounded-md border border-gray-600 mb-3 px-2 py-3 hover:bg-gray-100 cursor-pointer'>
                            <span className='inline-block w-1/4'>新規登録画面実装</span>
                            <span className='inline-block w-1/5'>実装</span>
                            <span className='inline-block w-2/12'>2023年10月1日</span>
                            <span className='inline-block w-2/12'>2023年10月8日</span>
                            <span className='inline-block w-1/12'>0％</span>
                        </div>
                        <div className='bg-gray-200 rounded-md border border-gray-600 mb-3 px-2 py-3 hover:bg-gray-100 cursor-pointer'>
                            <span className='inline-block w-1/4'>新規登録画面実装</span>
                            <span className='inline-block w-1/5'>実装</span>
                            <span className='inline-block w-2/12'>2023年10月1日</span>
                            <span className='inline-block w-2/12'>2023年10月8日</span>
                            <span className='inline-block w-1/12'>0％</span>
                        </div>
                        <div className='bg-gray-200 rounded-md border border-gray-600 mb-3 px-2 py-3 hover:bg-gray-100 cursor-pointer'>
                            <span className='inline-block w-1/4'>新規登録画面実装</span>
                            <span className='inline-block w-1/5'>実装</span>
                            <span className='inline-block w-2/12'>2023年10月1日</span>
                            <span className='inline-block w-2/12'>2023年10月8日</span>
                            <span className='inline-block w-1/12'>0％</span>
                        </div>
                        <div className='bg-gray-200 rounded-md border border-gray-600 mb-3 px-2 py-3 hover:bg-gray-100 cursor-pointer'>
                            <span className='inline-block w-1/4'>新規登録画面実装</span>
                            <span className='inline-block w-1/5'>実装</span>
                            <span className='inline-block w-2/12'>2023年10月1日</span>
                            <span className='inline-block w-2/12'>2023年10月8日</span>
                            <span className='inline-block w-1/12'>0％</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                        <div className="flex flex-1 justify-between sm:hidden">
                            <a
                                href="#"
                                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                Previous
                            </a>
                            <a
                                href="#"
                                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                Next
                            </a>
                        </div>
                        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-gray-700">
                                    現在<span className="font-medium">1</span>〜<span className="font-medium">10</span>件{' '}
                                    <span className="font-medium">97</span>件中
                                </p>
                            </div>
                            <div>
                                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-blue-50 focus:z-20 focus:outline-offset-0"
                                    >
                                        <span className="sr-only">Previous</span>
                                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                    </a>
                                    {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                                    <a
                                        href="#"
                                        aria-current="page"
                                        className="relative z-10 inline-flex items-center bg-primary-color px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-color  hover:bg-secondary-color"
                                    >
                                        1
                                    </a>
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-blue-50 focus:z-20 focus:outline-offset-0"
                                    >
                                        2
                                    </a>
                                    <a
                                        href="#"
                                        className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-blue-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                    >
                                        3
                                    </a>
                                    <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                                        ...
                                    </span>
                                    <a
                                        href="#"
                                        className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-blue-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                    >
                                        8
                                    </a>
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-blue-50 focus:z-20 focus:outline-offset-0"
                                    >
                                        9
                                    </a>
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-blue-50 focus:z-20 focus:outline-offset-0"
                                    >
                                        10
                                    </a>
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-blue-50 focus:z-20 focus:outline-offset-0"
                                    >
                                        <span className="sr-only">Next</span>
                                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Tasks
