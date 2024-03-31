import NewClient from "~/app/ui/clients/new-client";

import Search from "~/app/ui/search";


import Pagination from '~/app/ui/pagination';
import FormsTable from "./FormsTable";
import { AddClient } from "~/app/ui/buttons";
import { lusitana } from '~/app/ui/fonts';
import { InvoicesTableSkeleton } from '~/app/ui/skeletons';
import { Suspense } from 'react';
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/outline";



export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Forms</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search Forms..." />
                <Link
                    href="/dashboard/forms/add"
                    className="flex h-10 items-center rounded-lg bg-blue-600 
      px-4 text-sm font-medium text-white transition-colors
       hover:bg-blue-500 focus-visible:outline 
       focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-blue-600"
                >
                    <span className="hidden md:block">Add Form</span>{' '}
                    <PlusIcon className="h-5 md:ml-4" />
                </Link>
            </div>
            <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
                <FormsTable />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                {/* <Pagination totalPages={totalPages} /> */}
            </div>
        </div>
    );
}