'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useState } from 'react'

type AuthenticationType = "LOGIN" | "REGISTER"

const Home = () => {

  // ログインと登録の状態を管理するためのuseStateフック
  const [authenticationType, setAuthenticationType] = useState<AuthenticationType>('LOGIN')

  // ログインと登録の状態を切り替えるためのtoggleValiant関数
  const toggleAuthenticationType = useCallback(() => {
    if (authenticationType === "LOGIN") {
      setAuthenticationType("REGISTER")
    } else {
      setAuthenticationType("LOGIN")
    }
  }, [authenticationType])

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex flex-col h-screen justify-center">
          <div className='flex justify-center'>
            <Image alt="logo" src="/images/logo.png" height="125" width="125" className='rounded-3xl' />
          </div>
          <div className="flex flex-col text-center w-full my-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">ログイン</h1>
          </div>
          {/* ログイン用画面 */}
          {authenticationType === "LOGIN" && (
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-col -m-2 items-center">
                <div className="p-2 w-3/4">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">メールアドレス</label>
                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-3/4">
                  <div className="relative">
                    <label htmlFor="password" className="leading-7 text-sm text-gray-600">パスワード</label>
                    <input type="password" id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    className="flex mx-auto text-white bg-primary-color border-0 py-2 px-8 rounded text-lg
                              focus:outline-none hover:bg-secondary-color transition-all duration-500 ease-out">
                    ログイン
                  </button>
                </div>
                <div className='flex flex-col p-2'>
                  <div
                    onClick={toggleAuthenticationType}
                    className="text-gray-400 text-sm cursor-pointer mb-2">アカウントをお持ちではない方はこちらから</div>
                  <Link href={"/"} className="text-gray-400 text-sm cursor-pointer">パスワードを忘れた</Link>
                </div>
              </div>
            </div>
          )}
          {/* ログイン用画面 */}
          {/* サインイン用画面 */}
          {authenticationType === "REGISTER" && (
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-col -m-2 items-center">
                <div className="p-2 w-3/4 md:flex md:justify-between">
                  <div className="relative md:w-2/5">
                    <label htmlFor="firstName" className="leading-7 text-sm text-gray-600">姓</label>
                    <input type="text" id="firstName" name="firstName" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                  <div className="relative md:w-2/5">
                    <label htmlFor="lastName" className="leading-7 text-sm text-gray-600">名</label>
                    <input type="text" id="lastName" name="lastName" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-3/4">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">メールアドレス</label>
                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-3/4">
                  <div className="relative">
                    <label htmlFor="password" className="leading-7 text-sm text-gray-600">パスワード</label>
                    <input type="password" id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-3/4">
                  <div className="relative">
                    <label htmlFor="passwordConfirmation" className="leading-7 text-sm text-gray-600">パスワード確認用</label>
                    <input type="password" id="passwordConfirmation" name="passwordConfirmation" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    className="flex mx-auto text-white border-0 bg-primary-color py-2 px-8 rounded text-lg
                    focus:outline-none hover:bg-secondary-color transition-all duration-500 ease-out">
                    サインイン
                  </button>
                </div>
                <div className='flex flex-col p-2'>
                  <div
                    onClick={toggleAuthenticationType}
                    className="text-gray-400 text-sm cursor-pointer">既にアカウントをお持ちの場合はこちらから</div>
                </div>
              </div>
            </div>
          )}
          {/* サインイン用画面 */}
        </div>
      </section >
    </>
  )
}

export default Home
