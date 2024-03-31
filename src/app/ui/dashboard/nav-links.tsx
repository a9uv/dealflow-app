'use client'

import {
    HomeIcon,
    DocumentDuplicateIcon,
    UsersIcon,
    PencilIcon,
    UserCircleIcon,
    QuestionMarkCircleIcon,
    BriefcaseIcon,
    UserGroupIcon,
    DocumentArrowUpIcon

} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    // {name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon},
    { name: 'ClientTrack', href: '/dashboard/clients', icon: UsersIcon },
    { name: 'CaseTrack', href: '/dashboard/cases', icon: BriefcaseIcon },
    { name: 'Quotes', href: '/dashboard/quotes', icon: PencilIcon },
    { name: 'Forms', href: '/dashboard/forms', icon: DocumentDuplicateIcon },
    { name: 'Agents', href: '/dashboard/agents', icon: UserGroupIcon },
    {name: 'DocuSign', href: '/dashboard/docusign', icon: DocumentArrowUpIcon},
    { name: 'Account', href: '/dashboard/account', icon: UserCircleIcon },


    // { name: 'Support', href: '/dashboard/support', icon: QuestionMarkCircleIcon },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                            {
                                'bg-sky-100 text-blue-800 font-bold': pathname === link.href,
                            },
                        )}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
