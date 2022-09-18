import React from 'react'

export const AvatarDropdown = () => {
    return (
        <>
  <button
    id="dropdownAvatarNameButton"
    data-dropdown-toggle="dropdownAvatarName"
    className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
    type="button"
  >
    <span className="sr-only">Open user menu</span>
    <img
      className="mr-2 w-8 h-8 rounded-full"
      src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
      alt="user photo"
    />
    Bonnie Green
    <svg
      className="w-4 h-4 mx-1.5"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </button>
  {/* Dropdown menu */}
  <div
    id="dropdownAvatarName"
    className="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 block"
    data-popper-reference-hidden=""
    data-popper-escaped=""
    data-popper-placement="bottom"
    style={{
      position: "absolute",
      // inset: "0px auto auto 0px",
      margin: 0,
      transform: "translate(258px, 62px)"
    }}
  >
    <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
      <div className="font-medium ">Pro User</div>
      <div className="truncate">name@flowbite.com</div>
    </div>
    <ul
      className="py-1 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
    >
      <li>
        <a
          href="/"
          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Dashboard
        </a>
      </li>
      <li>
        <a
          href="/"
          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Settings
        </a>
      </li>
      <li>
        <a
          href="/"
          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Earnings
        </a>
      </li>
    </ul>
    <div className="py-1">
      <a
        href="/"
        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
      >
        Sign out
      </a>
    </div>
  </div>
</>

    )
}
