import {
    BookmarkAltIcon,
    BriefcaseIcon, ChartBarIcon, CheckCircleIcon, CursorClickIcon, DesktopComputerIcon, GlobeAltIcon,
    InformationCircleIcon,
    NewspaperIcon,
    OfficeBuildingIcon, PhoneIcon, PlayIcon,
    ShieldCheckIcon, UserGroupIcon, ViewGridIcon
} from "@heroicons/react/outline";
import {AdjustmentsIcon, CloudIcon} from "@heroicons/react/solid";

export const company = [
    { name: 'Company.about', href: '#', icon: InformationCircleIcon },
    { name: 'Company.customers', href: '#', icon: OfficeBuildingIcon },
    { name: 'Company.press', href: '#', icon: NewspaperIcon },
    { name: 'Company.careers', href: '#', icon: BriefcaseIcon },
    { name: 'Company.privacy', href: '#', icon: ShieldCheckIcon },
]

export const resources = [
    { name: 'Resources.community', href: '#', icon: UserGroupIcon },
    { name: 'Resources.partners', href: '#', icon: GlobeAltIcon },
    { name: 'Resources.guides', href: '#', icon: BookmarkAltIcon },
]

export const blogPosts = [
    {
        id: 1,
        name: 'Behind the scenes. How does computer graphics work?',
        href: '/blog/1',
        preview: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        imageUrl: 'https://placeholder.com/150',
    },
    {
        id: 2,
        name: 'Behind the scenes. How does computer graphics work?',
        href: '/blog/2',
        preview: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        imageUrl: 'https://placeholder.com/150',
    },
]

export const solutions = [
    {
        name: 'editor.title',
        description: 'editor.description',
        href: '/editor',
        icon: AdjustmentsIcon,
    },
    {
        name: 'cloud.title',
        description: 'cloud.description',
        href: '/cloud',
        icon: CloudIcon,
    },
    {
        name: 'security.title',
        description: "security.description",
        href: '/security',
        icon: ShieldCheckIcon
    },
    {
        name: 'integrations.title',
        description: "integrations.description",
        href: '/',
        icon: ViewGridIcon,
    },
]

export const callsToAction = [
    { name: 'demo', href: '#', icon: PlayIcon },
    { name: 'products', href: '#', icon: CheckCircleIcon },
    { name: 'contact', href: '#', icon: PhoneIcon },
]
