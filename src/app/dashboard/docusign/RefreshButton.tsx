'use client';

import { fetchEnvelopes } from '~/app/lib/data';
import { useRouter } from 'next/navigation';

export default function RefreshButton() {
    const router = useRouter();

    const handleRefresh = async () => {
        await fetchEnvelopes();
        router.push('/dashboard/docusign');
    };

    return (
        <button
            className="flex mt-3 mb-3 h-10 items-center rounded-lg w-22 border border-solid border-black bg-blue-600 px-4 text-sm text-white font-medium"
            onClick={handleRefresh}
        >
            Refresh
        </button>
    );
}