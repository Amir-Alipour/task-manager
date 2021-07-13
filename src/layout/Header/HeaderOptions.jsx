import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { IconOne, IconTwo, IconThree } from "./OptionsIcons";

const windowSize = window.innerWidth;

const options = [
    {
        name: "Bookmark",
        description: "add a bookmark",
        href: "/bookmark",
        icon: IconOne,
    },
    {
        name: "Statistics",
        description: "show statistics of your tasks",
        href: "/statistics",
        icon: IconTwo,
    },
];

const optionsSmall = [
    {
        name: "Worksapce",
        description: "your tasks workspace",
        href: "/",
        icon: IconThree,
    },
    {
        name: "Bookmark",
        description: "add a bookmark",
        href: "/bookmark",
        icon: IconOne,
    },
    {
        name: "Statistics",
        description: "show statistics of your tasks",
        href: "/statistics",
        icon: IconTwo,
    },
];

function HeaderOptions() {
    return (
        <div>
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button
                            className={`
                ${open ? "" : "text-opacity-90"}
                text-white group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span>Options</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                        {windowSize > 770
                                            ? options.map((item) => (
                                                  <Link
                                                      key={item.name}
                                                      to={item.href}
                                                      className="no-underline flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                  >
                                                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                                                          <item.icon aria-hidden="true" />
                                                      </div>
                                                      <div className="ml-4 pt-3">
                                                          <p className="text-sm font-medium text-gray-900">
                                                              {item.name}
                                                          </p>
                                                          <p className="text-sm text-gray-500">
                                                              {item.description}
                                                          </p>
                                                      </div>
                                                  </Link>
                                              ))
                                            : optionsSmall.map((item) => (
                                                  <Link
                                                      key={item.name}
                                                      to={item.href}
                                                      className="no-underline flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                  >
                                                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                                                          <item.icon aria-hidden="true" />
                                                      </div>
                                                      <div className="ml-4 pt-3">
                                                          <p className="text-sm font-medium text-gray-900">
                                                              {item.name}
                                                          </p>
                                                          <p className="text-sm text-gray-500">
                                                              {item.description}
                                                          </p>
                                                      </div>
                                                  </Link>
                                              ))}
                                    </div>
                                    <div className="p-4 bg-gray-50">
                                        <Link
                                            to={"/trash"}
                                            className="no-underline flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                            <span className="flex items-center">
                                                <span className="text-sm font-medium text-gray-900">
                                                    Trash
                                                </span>
                                            </span>
                                            <span className="block text-sm text-gray-500">
                                                delete a task from any column
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    );
}

export default HeaderOptions;
