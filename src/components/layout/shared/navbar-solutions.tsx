import {callsToAction, solutions} from "../../../utils/constants/navbar-constants";
import {useTranslations} from "use-intl";

export default function NavbarSolutions() {

    const translation = useTranslations("Navbar.Solutions");

    return (
        <>
            <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                {solutions.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-light-300 dark:hover:bg-dark-900"
                    >
                        <div className="flex md:h-full lg:flex-col">
                            <div className="flex-shrink-0">
                                <span className="inline-flex items-center justify-center h-10 w-10 rounded-md text-white sm:h-12 sm:w-12 bg-primary">
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </span>
                            </div>
                            <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                <div>
                                    <p className="text-base font-medium text-dark-700 dark:text-light-50">{translation( item.name )}</p>
                                    <p className="mt-1 text-sm text-dark-700 dark:text-light-50">{translation( item.description )}</p>
                                </div>
                                <p className="mt-2 text-sm font-medium text-primary lg:mt-4">
                                    {translation( 'learnMore' )} <span aria-hidden="true">&rarr;</span>
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            <div className="bg-light-100 dark:bg-dark-900">
                <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                    {callsToAction.map((item) => (
                        <div key={item.name} className="flow-root">
                            <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-base text-dark-700 dark:text-light-50 font-medium hover:bg-light-300 dark:hover:bg-dark-700"
                            >
                                <item.icon className="flex-shrink-0 h-6 w-6" aria-hidden="true" />
                                <span className="ml-3">{translation(item.name)}</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}