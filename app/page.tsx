import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex flex-col h-screen justify-center">
          <div className='flex justify-center'>
            <Image alt="logo" src="/images/messengerLogo.png" height="50" width="50" />
          </div>
          <div className="flex flex-col text-center w-full my-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">ログイン</h1>
          </div>
          {/* ログイン用画面 */}
          {/* <div className="lg:w-1/2 md:w-2/3 mx-auto">
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
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">ログイン</button>
              </div>
              <div className='flex flex-col p-2'>
                <Link href={"/"} className="text-gray-400 text-sm">アカウントをお持ちではない方はこちらから</Link>
                <Link href={"/"} className="text-gray-400 text-sm">パスワードを忘れた</Link>
              </div>
            </div> */}
          {/* ログイン用画面 */}
          {/* サインイン用画面 */}
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
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">サインイン</button>
              </div>
              <div className='flex flex-col p-2'>
                <Link href={"/"} className="text-gray-400 text-sm">既にアカウントをお持ちの場合はこちらから</Link>
              </div>
            </div>
          </div>
          {/* サインイン用画面 */}
        </div>
      </section >
    </>
  )
}
