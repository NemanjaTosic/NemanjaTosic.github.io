import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function SectionProfile() {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center py-16">
      <div className="rounded-md p-4 min-w-[600px] flex items-center justify-cente md bg-white shadow-md">
        <div className="m-4 rounded-md outline outline-1 outline-gray-200">
          <div className="p-4">
            {/* Username */}
            <div className="text-[16pt] font-bold">Nemanja</div>
            <div className="min-w-[600px] flex justify-between items-center pb-4">
              {/* Email */}
              <div className="text-[12pt]">nemanjadeveloper23@gmail.com</div>

              <div className="flex p-2 w-36 items-center rounded-full h-6 font-semibold bg-gray-200 text-center">
                <img
                  className="h-fit pr-3"
                  src="https://flagcdn.com/16x12/us.png"
                  alt="United States"
                ></img>
                United States
              </div>
            </div>

            <div className="cursor-pointer transition duration-200 text-white p-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  shadow-md hover:from-indigo-600 hover:from-10% hover:via-sky-500 hover:to-emerald-400 hover:to-80% rounded-lg flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full mr-4  outline outline-1 outline-gray-300/[.70]">
                {/* Point Icon */}
                <svg
                  data-v-9e3dda45=""
                  width="24px"
                  height="24px"
                  color="#ffffff"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M13.5 16.875C19.7132 16.875 24.75 14.6084 24.75 11.8125C24.75 9.01656 19.7132 6.75 13.5 6.75C7.2868 6.75 2.25 9.01656 2.25 11.8125C2.25 14.6084 7.2868 16.875 13.5 16.875Z"
                    fill="currentColor"
                  ></path>
                  <path
                    opacity="0.2"
                    d="M24.75 13.5985C29.8828 14.0766 33.75 16.1157 33.75 18.5625C33.75 21.361 28.7156 23.625 22.5 23.625C19.7438 23.625 17.2125 23.175 15.2578 22.4438C20.6437 22.0641 24.75 19.9688 24.75 17.4375V13.5985Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M13.5 16.875C19.7132 16.875 24.75 14.6084 24.75 11.8125C24.75 9.01656 19.7132 6.75 13.5 6.75C7.2868 6.75 2.25 9.01656 2.25 11.8125C2.25 14.6084 7.2868 16.875 13.5 16.875Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M2.25 11.8125V17.4375C2.25 20.2359 7.28437 22.5 13.5 22.5C19.7156 22.5 24.75 20.2359 24.75 17.4375V11.8125"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M9 16.4531V22.0781"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M24.75 13.5985C29.8828 14.0766 33.75 16.1157 33.75 18.5625C33.75 21.361 28.7156 23.625 22.5 23.625C19.7437 23.625 17.2125 23.175 15.2578 22.4438"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M11.25 22.4016V24.1875C11.25 26.9859 16.2844 29.25 22.5 29.25C28.7156 29.25 33.75 26.9859 33.75 24.1875V18.5625"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M27 23.2031V28.8281"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M18 16.4531V28.8281"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="text-xl font-semibold ">500 Points earned</div>
            </div>
            <Link to="/Activity">
              <div className="cursor-pointer p-2 bg-gray-100  shadow-md hover:bg-blue-100 rounded-lg flex items-center mb-4">
                <div className="w-12 h-12 flex items-center  justify-center rounded-full mr-4  outline outline-1 outline-blue-300/[.70]">
                  {/* Surveys Icon */}
                  <svg
                    data-v-9e3dda45=""
                    width="24px"
                    height="24px"
                    color="#164ed0"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.2"
                      d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M13.4375 8.125L8.85156 12.5L6.5625 10.3125"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="text-xl font-semibold">1</div>
                  <div className="text-md">Surveys Completed</div>
                </div>
              </div>
            </Link>

            <Link to="/Preference">
              <div className="cursor-pointer p-2 bg-gray-100  shadow-md hover:bg-blue-100 rounded-lg flex items-center mb-4">
                <div className="w-12 h-12 flex items-center  justify-center rounded-full mr-4  outline outline-1 outline-blue-300/[.70]">
                  {/* Email Preference Icon */}
                  <svg
                    data-v-c65cf6f4=""
                    width="24px"
                    height="24px"
                    color="#164ed0"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.2"
                      d="M12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.387 3 12 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M17.25 19.5C15.8241 20.4478 13.8403 21 12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68508C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.0709 20.25 15.75 18.375 15.75C16.5 15.75 15.75 14.0709 15.75 12V8.25"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="text-xl font-semibold">Email Preference</div>
              </div>
            </Link>
            <div className="cursor-pointer p-2 bg-gray-100  shadow-md hover:bg-blue-100 rounded-lg flex items-center  mb-4">
              <div className="w-12 h-12 flex items-center  justify-center rounded-full mr-4  outline outline-1 outline-blue-300/[.70]">
                {/* Password Icon */}
                <svg
                  data-v-c65cf6f4=""
                  width="24px"
                  height="24px"
                  color="#164ed0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M19.5 8.25H4.5C4.08579 8.25 3.75 8.58579 3.75 9V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V9C20.25 8.58579 19.9142 8.25 19.5 8.25Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M19.5 8.25H4.5C4.08579 8.25 3.75 8.58579 3.75 9V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V9C20.25 8.58579 19.9142 8.25 19.5 8.25Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8.625 8.25V4.875C8.625 3.97989 8.98058 3.12145 9.61351 2.48851C10.2465 1.85558 11.1049 1.5 12 1.5C12.8951 1.5 13.7535 1.85558 14.3865 2.48851C15.0194 3.12145 15.375 3.97989 15.375 4.875V8.25"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12 15.375C12.6213 15.375 13.125 14.8713 13.125 14.25C13.125 13.6287 12.6213 13.125 12 13.125C11.3787 13.125 10.875 13.6287 10.875 14.25C10.875 14.8713 11.3787 15.375 12 15.375Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="text-xl font-semibold">Change Password</div>
            </div>

            <div className="cursor-pointer p-2 bg-gray-100  shadow-md hover:bg-blue-100 rounded-lg flex items-center mb-4">
              <div className="w-12 h-12 flex items-center  justify-center rounded-full mr-4  outline outline-1 outline-blue-300/[.70]">
                {/* Language Icon */}
                <svg
                  data-v-c65cf6f4=""
                  width="24px"
                  height="24px"
                  color="#164ed0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8.25 12C8.25 15.5119 9.49969 18.6487 11.4637 20.7647C11.532 20.8389 11.6149 20.8981 11.7072 20.9387C11.7995 20.9792 11.8992 21.0001 12 21.0001C12.1008 21.0001 12.2005 20.9792 12.2928 20.9387C12.3851 20.8981 12.468 20.8389 12.5363 20.7647C14.5003 18.6487 15.75 15.5119 15.75 12C15.75 8.48812 14.5003 5.35125 12.5363 3.23531C12.468 3.1611 12.3851 3.10186 12.2928 3.06133C12.2005 3.02081 12.1008 2.99988 12 2.99988C11.8992 2.99988 11.7995 3.02081 11.7072 3.06133C11.6149 3.10186 11.532 3.1611 11.4637 3.23531C9.49969 5.35125 8.25 8.48812 8.25 12Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M3 12H21"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="text-xl font-semibold">Language</div>
            </div>

            <div className="h-8 cursor-pointer rounded-full outline outline-1 outline-blue-500 bg-gray-100 flex items-center px-4 space-x-2">
              {/* LogOut Icon */}
              <svg
                data-v-89c2bbd1=""
                width="1.375rem"
                height="1.375rem"
                color="#164ed0"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5938 6.71875L16.875 10L13.5938 13.2812"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8.125 10H16.875"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8.125 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V3.75C3.125 3.58424 3.19085 3.42527 3.30806 3.30806C3.42527 3.19085 3.58424 3.125 3.75 3.125H8.125"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <div className="text-[11pt] font-semibold">LogOut</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
