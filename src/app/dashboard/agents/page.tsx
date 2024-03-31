import NewClient from "~/app/ui/clients/new-client";

import Search from "~/app/ui/search";


import Pagination from '~/app/ui/pagination';
import ClientTable from "~/app/ui/clients/clientTable";
import { AddClient } from "~/app/ui/buttons";
import { lusitana } from '~/app/ui/fonts';
import { InvoicesTableSkeleton } from '~/app/ui/skeletons';
import { Suspense } from 'react';



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
                <h1 className={`${lusitana.className} text-2xl`}>Clients</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search Clients..." />
                <AddClient />
            </div>
            <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
                <ClientTable />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                {/* <Pagination totalPages={totalPages} /> */}
            </div>
        </div>
    );
}