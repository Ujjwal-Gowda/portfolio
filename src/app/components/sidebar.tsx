"use client";
import React from "react";

const Button = () => {
  return (
    <ul className="w-64 flex flex-col gap-1  pl-1">
      <li className="group w-14 overflow-hidden rounded-lg border-l border-transparent bg-white transition-all duration-500 hover:w-64 hover:border-gray-200 hover:shadow-lg has-[:focus]:w-64 has-[:focus]:shadow-lg">
        <button className="peer flex w-full cursor-pointer items-center gap-2.5 px-3 py-2 text-left text-purple-800 transition-all active:scale-95">
          <div className="rounded-lg border-2 border-purple-300 bg-purple-100 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </div>
          <div className="font-semibold">Projects</div>
        </button>
        <div className="grid grid-rows-[0fr] overflow-hidden transition-all duration-500 peer-focus:grid-rows-[1fr]">
          <div className="overflow-hidden"></div>
        </div>
      </li>
      <li className="group w-14 overflow-hidden rounded-lg border-l border-transparent bg-white transition-all duration-500 hover:w-64 hover:border-gray-200 hover:shadow-lg has-[:focus]:w-64 has-[:focus]:shadow-lg">
        <button className="peer flex w-full cursor-pointer items-center gap-2.5 px-3 py-2 text-left text-blue-800 transition-all active:scale-95">
          <div className="rounded-lg border-2 border-blue-300 bg-blue-100 p-1">
            <svg
              className="size-6"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="font-semibold">Settings</div>
        </button>
        <div className="grid grid-rows-[0fr] overflow-hidden transition-all duration-500 peer-focus:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <ul className="divide-y divide-gray-200 p-4 pt-0">
              <li className="py-2">
                <div className="flex items-center justify-between">
                  <button className="peer cursor-pointer font-semibold text-gray-800 hover:text-blue-600">
                    System Preferences
                  </button>
                  <div className="text-sm text-gray-500 transition-all peer-hover:translate-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  Default Settings / Profile
                </div>
              </li>
              <li className="py-1">
                <div className="group/title flex items-center justify-between">
                  <button className="peer cursor-pointer font-semibold text-gray-800 hover:text-blue-600">
                    Theme
                  </button>
                  <div className="text-sm text-gray-500 transition-all peer-hover:translate-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <patbuttonsh
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      ></patbuttonsh>
                    </svg>
                  </div>
                </div>
                <div className="text-xs text-gray-500">Light / Dark Mode</div>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li className="group w-14 overflow-hidden rounded-lg border-l border-transparent bg-white transition-all duration-500 hover:w-64 hover:border-gray-200 hover:shadow-lg has-[:focus]:w-64 has-[:focus]:shadow-lg">
        <button className="peer flex w-full cursor-pointer items-center gap-2.5 px-3 py-2 text-left text-green-800 transition-all active:scale-95">
          <div className="rounded-lg border-2 border-green-300 bg-green-100 p-1">
            <svg
              className="size-6"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="font-semibold">Chat</div>
        </button>
        <div className="grid grid-rows-[0fr] overflow-hidden transition-all duration-500 peer-focus:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <div className="relative"></div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Button;
