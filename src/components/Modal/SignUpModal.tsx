import Button from 'components/Button'
import SelectGroupOne from 'components/SelectGroup/SelectGroupOne'
import React from 'react'

interface ModalProps {
  buttonName: string
}
export default function SignUpModal({ buttonName }: ModalProps) {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <>
      <Button
        text={buttonName}
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
                  <h3 className="text-3xl text-primary-500 font-bold">
                    Register
                  </h3>
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
                  <div className="mb-5.5 gap-5.5">
                    <div className="flex">
                      <div className="w-1/2 pr-6">
                        <label
                          className="mb-3 block text-sm text-black dark:text-white"
                          htmlFor="Hashkey"
                        >
                          First Name
                        </label>
                        <input
                          className="pl-3 w-full rounded border border-stroke  py-3 text-black focus:border-primary-500 
                        focus-visible:outline-none "
                          type="text"
                          name="Hashkey"
                          id="Hashkey"
                          placeholder="devidjhon24"
                          defaultValue="devidjhon24"
                        />
                      </div>

                      <div className="w-1/2">
                        <label
                          className="mb-3 block text-sm text-black dark:text-white"
                          htmlFor="Hashkey"
                        >
                          Last Name
                        </label>
                        <input
                          className="pl-3 w-full rounded border border-stroke  py-3 text-black focus:border-primary-500 
                        focus-visible:outline-none "
                          type="text"
                          name="Hashkey"
                          id="Hashkey"
                          placeholder="devidjhon24"
                          defaultValue="devidjhon24"
                        />
                      </div>
                    </div>

                    <div className="flex pt-4">
                      <div className="w-1/2 pr-6">
                        <label
                          className="mb-3 block text-sm text-black"
                          htmlFor="Hashkey"
                        >
                          Email
                        </label>
                        <input
                          className="pl-3 w-full rounded border border-stroke  py-3 text-black focus:border-primary-500 
                        focus-visible:outline-none "
                          type="text"
                          name="Hashkey"
                          id="Hashkey"
                          placeholder="devidjhon24"
                          defaultValue="devidjhon24"
                        />
                      </div>

                      <div className="w-1/2">
                        <label
                          className="mb-3 block text-sm text-black"
                          htmlFor="Hashkey"
                        >
                          Phone Number
                        </label>
                        <input
                          className="pl-3 w-full rounded border border-stroke  py-3 text-black focus:border-primary-500 
                        focus-visible:outline-none "
                          type="text"
                          name="Hashkey"
                          id="Hashkey"
                          placeholder="devidjhon24"
                          defaultValue="devidjhon24"
                        />
                      </div>
                    </div>

                    <div className="flex pt-4">
                      <div className="w-1/2 pr-6">
                        <label
                          className="mb-3 block text-sm text-black"
                          htmlFor="Hashkey"
                        >
                          Date of Birth
                        </label>
                        <input
                          className="pl-3 w-full rounded border border-stroke  py-3 text-black focus:border-primary-500 
                        focus-visible:outline-none "
                          type="text"
                          name="Hashkey"
                          id="Hashkey"
                          placeholder="devidjhon24"
                          defaultValue="devidjhon24"
                        />
                      </div>

                      <div className="w-1/2">
                        <label
                          className="mb-3 block text-sm text-black dark:text-white"
                          htmlFor="Hashkey"
                        >
                          Gender
                        </label>
                        <input
                          className="pl-3 w-full rounded border border-stroke  py-3 text-black focus:border-primary-500 
                        focus-visible:outline-none "
                          type="text"
                          name="Hashkey"
                          id="Hashkey"
                          placeholder="devidjhon24"
                          defaultValue="devidjhon24"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <label
                      className="mb-3 block text-sm text-black"
                      htmlFor="Hashkey"
                    >
                      State
                    </label>
                    <SelectGroupOne />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <Button
                    text="Sign Up"
                    style="rounded-full md:h-12 md:w-40"
                    onClick={() => setShowModal(true)}
                  ></Button>
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
