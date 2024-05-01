import Button from 'components/Button'
import SelectGroupOne from 'components/SelectGroup/SelectGroupOne'
import React from 'react'
import { Link } from 'react-router-dom'

interface ModalProps {
  buttonName: string
}
export default function LoginModal({ buttonName }: ModalProps) {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <>
      <Button
        text={buttonName}
        variant={buttonName === 'Login' ? 'outline' : 'primary'}
        style="rounded-full md:h-12 md:w-40"
        onClick={() => setShowModal(true)}
      ></Button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="w-screen relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relat ive flex flex-col w-full bg-white dark:border-strokedark dark:bg-boxdark  outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl text-primary-500 font-bold">Login</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex space-x-12 ">
                    <div className="flex shadow-md cursor-pointer hover:shadow-lg justify-center items-center p-4 text-center outline outline-1 outline-gray-300 rounded-lg w-1/2">
                      <img src="assets/icons/google.svg"></img>
                      <div className="pl-4 font-medium">Login with Google</div>
                    </div>

                    <div className="flex shadow-md cursor-pointer hover:shadow-lg justify-center items-center p-4 text-center outline outline-1 outline-gray-300 rounded-lg w-1/2">
                      <img src="assets/icons/facebook1.svg"></img>
                      <div className="pl-4 font-medium">
                        Login with Facebook
                      </div>
                    </div>
                  </div>
                  <div className="flex pt-8 items-center space-x-8">
                    <div className="w-1/2 border-b-[1px] border-gray-200" />
                    <div className="text-gray-300 text-xl">OR</div>
                    <div className="w-1/2 border-b-[1px] border-gray-200" />
                  </div>
                  <div className="pt-8 gap-5.5">
                    <label
                      className="mb-3 block text-sm text-black dark:text-white"
                      htmlFor="Hashkey"
                    >
                      E-mail Address
                    </label>
                    <input
                      className="pl-3 w-full rounded border border-stroke  py-3 text-black focus:border-primary-500 
                        focus-visible:outline-none "
                      type="text"
                      name="Hashkey"
                      id="Hashkey"
                      placeholder="Enter your e-mail"
                    />

                    <label
                      className="mb-3 block text-sm text-black dark:text-white pt-4"
                      htmlFor="Hashkey"
                    >
                      Password
                    </label>
                    <input
                      className="pl-3 w-full rounded border border-stroke  py-3 text-black focus:border-primary-500 
                        focus-visible:outline-none "
                      type="password"
                      name="Hashkey"
                      id="Hashkey"
                      placeholder="Enter password"
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <Link to="/surveys">
                    <Button
                      text="Login"
                      style="rounded-full md:h-12 md:w-40"
                      onClick={() => setShowModal(true)}
                    ></Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
