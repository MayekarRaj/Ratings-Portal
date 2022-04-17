import Head from 'next/head'

export default function login() {
    return (
        <div className='flex h-screen w-screen bg-login justify-center content-center '>
            <Head>
                <title>Login</title>
            </Head>
            <div className="flex w-[54rem] h-[42rem] p-6 rounded-lg shadow-lg bg-white m-8">
                <div className='flex w-2/5 h-full mr-8 ml-2 mb-8  '>
                    <img src='/stock_login.jpg' className='rounded-l-lg '></img>
                </div>
                <div className='flex flow-root w-3/5'>
                    <img src='/main_logo.png' className=' w-32 h-32 mr-8 ml-11 mt-8 mb-8 '></img>
                    <div className="font-sans m-8">
                        <h1 className="text-xl">Admin Login</h1>
                        <form>
                            <div className="form-group my-8">
                                <input type='email' className="form-control block w-full ease-in-out transition rounded"></input>
                                <label className="form-label inline-block text-sm text-gray-700">Email Address</label>
                                <input type='password' className="mt-8 form-control block w-full ease-in-out transition rounded"></input>
                                <label className="form-label block text-sm text-gray-700">Password</label>
                                <button type="submit" className="mt-8 px-8 py-2.5 rounded bg-slate-900 text-white ">Login</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
