import {Popover} from "@headlessui/react";
import {XIcon} from "@heroicons/react/outline";
import {solutions} from "../../../utils/constants/navbar-constants";
import CompanyLogo from "../../ui/company-logo";
import {useTranslations} from "use-intl";
import {DefaultLayout} from "../default-layout";
import DefaultLink from "../../ui/link/default-link";
import DefaultButtonLink from "../../ui/link/default-button-link";

export function NavbarMobilePopover() {

    const navbarTranslation = useTranslations('Navbar');
    const signInTranslation = useTranslations( 'SignIn' );
    const solutionTranslation = useTranslations('Navbar.Solutions');

    return(
        <>
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-light-200 dark:bg-dark-900 divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5 sm:pb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <CompanyLogo/>
                        </div>
                        <div className="-mr-2">
                            <Popover.Button className="bg-light-200 dark:bg-dark-700 rounded-md p-2 inline-flex items-center justify-center text-dark-700 dark:text-light-200 hover:bg-light-300 dark:hover:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                                <span className="sr-only">Close menu</span>
                                <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                    </div>
                    <div className="mt-6 sm:mt-8">
                        <nav>
                            <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                                {solutions.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-m-3 flex items-center p-3 rounded-lg hover:bg-light-100 dark:hover:bg-dark-700"
                                    >
                                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white sm:h-12 sm:w-12">
                                            <item.icon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <div className="ml-4 text-base font-medium text-dark-700 dark:text-light-50">{solutionTranslation(item.name)}</div>
                                    </a>
                                ))}
                            </div>
                            <div className="mt-8 text-base">
                                <DefaultLink href={'#'}>
                                    {' '}
                                    {solutionTranslation('products')} <span aria-hidden="true">&rarr;</span>
                                </DefaultLink>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="py-6 px-5">
                    <div className="grid grid-cols-2 gap-4">
                        <DefaultLink href="#">
                            {navbarTranslation('Links.blog')}
                        </DefaultLink>
                        <DefaultLink href="#">
                            {navbarTranslation('Links.pricing')}
                        </DefaultLink>
                        <DefaultLink href="#">
                            {navbarTranslation('Links.company')}
                        </DefaultLink>
                        <DefaultLink href="#">
                            {navbarTranslation('Links.doc')}
                        </DefaultLink>
                        <DefaultLink href="#">
                            {navbarTranslation('Links.contact')}
                        </DefaultLink>
                    </div>
                    <div className="mt-6">
                        <DefaultButtonLink href={'#'}>
                            {signInTranslation('signUp')}
                        </DefaultButtonLink>
                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                            {signInTranslation('existing')}{' '}
                            <DefaultLink href={'#'}>
                                {signInTranslation('signIn')}
                            </DefaultLink>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}