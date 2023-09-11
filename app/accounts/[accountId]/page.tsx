import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Image from 'next/image'
import React from 'react'

const AccountId = () => {
    return (
        <>
            <Header />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex justify-center -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <Image alt="sampleImage" src="/images/sampleImage.jpg" width="100" height="100" className='mx-auto rounded-lg' />
                                <span className="inline-block h-1 w-20 rounded bg-primary-color mt-6 mb-4"></span>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg">HOLDEN CAULFIELD</h2>
                                <p className='text-gray-800'>E-mail: test@gamil.com</p>
                                <p className="text-gray-500">Backend Engineer</p>
                                <span className="inline-block h-1 w-40 rounded bg-primary-color mt-6 mb-4"></span>
                                <p className="leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id ornare arcu odio ut sem nulla pharetra diam. Risus viverra adipiscing
                                </p>
                                <button
                                    className='bg-primary-color focus:outline-none hover:bg-secondary-color transition-all duration-500 ease-out
                                    px-5 py-3 text-white rounded-md mt-6'>
                                    アカウント編集
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AccountId
