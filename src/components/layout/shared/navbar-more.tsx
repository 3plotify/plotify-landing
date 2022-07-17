import {blogPosts, company, resources} from "../../../utils/constants/navbar-constants";
import {useTranslations} from "use-intl";
import {DefaultLayout} from "../default-layout";
import DefaultLink from "../../ui/link/default-link";
import DefaultHoverLink from "../../ui/link/default-hover-link";

export function NavbarMore() {

    const translation = useTranslations("Navbar.More");

    return (
        <>
            <div className="absolute inset-0 flex">
                <div className="bg-light-200 dark:bg-dark-700 w-1/2" />
                <div className="bg-light-200 dark:bg-dark-700 w-1/2" />
            </div>
            <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                <nav className="grid gap-y-10 px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                    <div>
                        <h3 className="text-sm font-medium tracking-wide text-dark-700 dark:text-light-200 uppercase">{translation('Company.title')}</h3>
                        <ul role="list" className="mt-5 space-y-6">
                            {company.map((item) => (
                                <li key={item.name} className="flow-root">
                                    <DefaultHoverLink href={item.href}>
                                        <item.icon className="flex-shrink-0 h-6 w-6 text-current" aria-hidden="true" />
                                        <span className="ml-4">{translation(item.name)}</span>
                                    </DefaultHoverLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium tracking-wide text-dark-700 dark:text-light-200 uppercase">{translation('Resources.title')}</h3>
                        <ul role="list" className="mt-5 space-y-6">
                            {resources.map((item) => (
                                <li key={item.name} className="flow-root">
                                    <DefaultHoverLink href={item.href}>
                                        <item.icon className="flex-shrink-0 h-6 w-6" aria-hidden="true" />
                                        <span className="ml-4">{translation(item.name)}</span>
                                    </DefaultHoverLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                <div className="bg-light-200 dark:bg-dark-700 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                    <div>
                        <h3 className="text-sm font-medium tracking-wide text-dark-700 dark:text-light-200 uppercase">
                            {translation('Blog.title')}
                        </h3>
                        <ul role="list" className="mt-6 space-y-6">
                            {blogPosts.map((post) => (
                                <li key={post.id} className="flow-root">
                                    <DefaultHoverLink href={post.href}>
                                        <div className="hidden sm:block flex-shrink-0">
                                            <img className="w-32 h-20 object-cover rounded-md" src={post.imageUrl} alt="" />
                                        </div>
                                        <div className="w-0 flex-1 sm:ml-8">
                                            <h4 className="text-base font-medium text-dark-700 dark:text-light-200 truncate">{post.name}</h4>
                                            <p className="mt-1 text-sm text-dark-600 dark:text-light-100">{post.preview}</p>
                                        </div>
                                    </DefaultHoverLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-6 text-sm font-medium">
                        <DefaultLink href={'#'}>
                            {' '}
                            {translation('Blog.viewPosts')} <span aria-hidden="true">&rarr;</span>
                        </DefaultLink>
                    </div>
                </div>
            </div>
        </>
    );
}