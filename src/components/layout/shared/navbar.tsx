import {useLocale, useTranslations} from "use-intl";
/* This example requires Tailwind CSS v2.0+ */
import {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {MenuIcon,} from '@heroicons/react/outline'
import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/solid'
import CompanyLogo from "../../ui/company-logo";
import Link from "next/link";
import NavbarSolutions from "./navbar-solutions";
import {NavbarMore} from "./navbar-more";
import {NavbarMobilePopover} from "./navbar-mobile-popover";
import {classNames} from "../../../utils/helper";
import DefaultButtonLink from "../../ui/link/default-button-link";

export default function Navbar() {

    const navbarTranslation = useTranslations('Navbar');
    const signInTranslation = useTranslations('SignIn');

    return (
        <Popover className="relative bg-light-200 dark:bg-dark-900 z-40">
            <div className="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true"/>
            <div className="relative z-20">
                <div
                    className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
                    <div>
                        <Link href={"/"} locale={useLocale()}>
                            <a className={"cursor-pointer"}>
                                <CompanyLogo/>
                            </a>
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button
                            className="bg-light-200 dark:bg-dark-700 rounded-md p-2 inline-flex items-center justify-center text-dark-700 dark:text-light-200 hover:bg-light-300 dark:hover:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                        </Popover.Button>
                    </div>
                    <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                        <Popover.Group as="nav" className="flex space-x-10">
                            <Popover>
                                {({open}) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                                open ? 'text-dark-700 dark:text-light-200' : 'text-dark-600 dark:text-light-100',
                                                'group rounded-md inline-flex items-center text-base font-medium hover:text-dark-600 dark:hover:text-light-100 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-transparent'
                                            )}
                                        >
                                            <span>{navbarTranslation('Links.solutions')}</span>
                                            <ChevronDownIcon
                                                className={classNames(
                                                    open ? 'text-dark-700 dark:text-light-200 rotate-180' : 'text-dark-600 dark:text-light-100 rotate-0',
                                                    'ml-2 h-5 w-5 group-hover:text-dark-600 dark:group-hover:text-light-100 transition-all duration-300 ease-in-out'
                                                )}
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 -translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 -translate-y-1"
                                        >
                                            <Popover.Panel
                                                className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-light-200 dark:bg-dark-700">
                                                <NavbarSolutions/>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
                            <a href="#" className="text-base font-medium text-dark-700 dark:text-light-200 hover:text-dark-600 dark:hover:text-light-100">
                                {navbarTranslation('Links.pricing')}
                            </a>
                            <a href="#" className="text-base font-medium text-dark-700 dark:text-light-200 hover:text-dark-600 dark:hover:text-light-100">
                                {navbarTranslation('Links.doc')}
                            </a>
                            <Popover>
                                {({open}) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                                open ? 'text-dark-700 dark:text-light-200' : 'text-dark-600 dark:text-light-100',
                                                'group rounded-md inline-flex items-center text-base font-medium hover:text-dark-600 dark:hover:text-light-100 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-transparent'
                                            )}
                                        >
                                            <span>{navbarTranslation('Links.more')}</span>
                                            <ChevronDownIcon
                                                className={classNames(
                                                    open ? 'text-dark-700 dark:text-light-200 rotate-180' : 'text-dark-600 dark:text-light-100 rotate-0',
                                                    'ml-2 h-5 w-5 group-hover:text-dark-600 dark:group-hover:text-light-100 transition-all duration-300 ease-in-out'
                                                )}
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 -translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 -translate-y-1"
                                        >
                                            <Popover.Panel
                                                className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg">
                                                <NavbarMore/>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
                        </Popover.Group>
                        <div className="flex items-center md:ml-12">
                            <a href="#" className="text-base font-medium text-dark-700 dark:text-light-200 hover:text-dark-600 dark:hover:text-light-100">
                                {signInTranslation('signIn')}
                            </a>
                            <div className={"ml-8 inline-flex"}>
                                <DefaultButtonLink href={'/signup'}>
                                    {signInTranslation('signUp')}
                                </DefaultButtonLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                    <NavbarMobilePopover/>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}