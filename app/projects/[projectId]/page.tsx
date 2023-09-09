import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Link from 'next/link'
import React from 'react'

const ProjectId = () => {
    return (
        <>
            <Header />
            <section className="body-font">
                <div className='container mx-auto sm:px-12 mt-4'>
                    <h2 className='font-bold text-2xl'>概要</h2>
                    <div className='md:mt-4 flex justify-between'>
                        <div className='md:max-w-2xl w-full'>
                            <div className='text-lg mb-6'>
                                <h2>プロジェクト名</h2>
                            </div>
                            <div className='mb-6'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Dui id ornare arcu odio ut sem nulla pharetra diam.
                                    Risus viverra adipiscing at in.
                                    Augue lacus viverra vitae congue eu consequat ac felis donec.
                                    Volutpat sed cras ornare arcu
                                </p>
                            </div>
                            <div className='bg-gray-200 sm:mb-6 px-4 py-8 rounded'>
                                <p className="mb-4 font-bold">メンバー</p>
                                <span>田中太郎</span>,<span>鈴木一郎</span>,<span>佐藤翔太</span>
                            </div>
                        </div>
                        <div className='md:max-w-2xl w-full'>
                            <div className='bg-gray-200 rounded px-4 pt-8 pb-16 relative'>
                                <p className="font-bold mb-2">タスク一覧</p>
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th className='col-span-2'>未完了</th>
                                            <th>完了</th>
                                            <th>合計</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>基本設計</td>
                                            <td>４件</td>
                                            <td>１０件</td>
                                            <td>１４件</td>
                                        </tr>
                                        <tr>
                                            <td>詳細設計</td>
                                            <td>４件</td>
                                            <td>１０件</td>
                                            <td>１４件</td>
                                        </tr>
                                        <tr>
                                            <td>実装</td>
                                            <td>４件</td>
                                            <td>１０件</td>
                                            <td>１４件</td>
                                        </tr>
                                        <tr>
                                            <td>テスト</td>
                                            <td>４件</td>
                                            <td>１０件</td>
                                            <td>１４件</td>
                                        </tr>
                                        <tr>
                                            <td>バグ対応</td>
                                            <td>４件</td>
                                            <td>１０件</td>
                                            <td>１４件</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link href="/" className='absolute bottom-2 right-2'>
                                    <button
                                        className='bg-primary-color hover:bg-secondary-color text-white transition-all duration-500 ease-out
                                    px-4 py-2 rounded'>
                                        タスク一覧へ
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ProjectId
