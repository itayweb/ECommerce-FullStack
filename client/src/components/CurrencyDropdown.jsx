import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const list = {
    currencies: [
        {
            currency: "IL",
            image: "https://countryflagsapi.com/svg/il"
        },
        {
            currency: "USA",
            image: "https://countryflagsapi.com/svg/us"
        },
        // {
        //     currency: "CAD",
        //     image: "https://countryflagsapi.com/svg/ca"
        // },
        // {
        //     currency: "CAD",
        //     image: "https://countryflagsapi.com/svg/ca"
        // },
        // {
        //     currency: "CAD",
        //     image: "https://countryflagsapi.com/svg/ca"
        // },
        // {
        //     currency: "CAD",
        //     image: "https://countryflagsapi.com/svg/ca"
        // },
        // {
        //     currency: "CAD",
        //     image: "https://countryflagsapi.com/svg/ca"
        // },
    ]
}

export default function CurrencyDropdown() {
    return (
        <div className="">
        <Menu as="div" className="relative inline-block text-left">
            <div>
            <Menu.Button className="inline-flex w-full justify-center py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <img
                    src="https://countryflagsapi.com/svg/il"
                    alt=""
                    className="block h-auto w-5 flex-shrink-0 mx-2"
                    crossOrigin="anonymous"/>
                IL
                <ChevronDownIcon
                className="ml-2 -mr-1 h-5 w-5 text-cyan-200 hover:text-cyan-100"
                aria-hidden="true"
                />
            </Menu.Button>
            </div>
            <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            >
            <Menu.Items className="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                    {list.currencies.map((currency) => (
                        <Menu.Item key={currency.currency}>
                            {({ active }) => (
                                <button
                                    className={`${
                                    active ? 'bg-cyan-500 text-white' : 'text-gray-900'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                    <img
                                    src={currency.image}
                                    alt=""
                                    className="block h-auto w-5 flex-shrink-0 mr-2"
                                    crossOrigin="anonymous"
                                    />
                                    {currency.currency}
                                </button>
                            )}
                        </Menu.Item>
                    ))}
                </div>
            </Menu.Items>
            </Transition>
        </Menu>
        </div>
    )
}
