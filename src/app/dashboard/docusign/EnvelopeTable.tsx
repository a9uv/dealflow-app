'use client'
import React, { useState } from 'react';
import { envelopeList } from '~/public/docusign_data/envelope';


const EnvelopeTable = () => {
    
 const [visibleRows, setVisibleRows] = useState<string[]>([]);

 const toggleVisibility = (envelopeId: string) => {
        if (visibleRows.includes(envelopeId)) {
            setVisibleRows(visibleRows.filter((id) => id !== envelopeId));
        } else {
            setVisibleRows([...visibleRows, envelopeId]);
        }
    };


    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">

                    {
                        (envelopeList.hasOwnProperty('envelopes')) ? 
                            (
                                <table className="min-w-full text-gray-900 md:table">
                                    <thead className="rounded-lg text-left text-sm font-normal">
                                        <tr>
                                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                                Envelope Subject
                                            </th>
                                            <th scope="col" className="px-3 py-5 font-medium">
                                                Envelope Message
                                            </th>
                                            <th scope="col" className="px-3 py-5 font-medium">
                                                Sent Date & Time
                                            </th>
                                            <th scope="col" className="px-3 py-5 font-medium">
                                                Status
                                            </th>
                                            <th scope='col' className='px-3 py-5 font-medium'>
                                                See Documents
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {envelopeList.envelopes.map((envelope) => (
                                            < React.Fragment key={envelope.envelopeId} >

                                                <tr key={envelope.envelopeId} className="w-full border-b py-3 text-sm last-of-type:border-none">
                                                    <td className="whitespace-nowrap px-4 py-3">{envelope.emailSubject}</td>
                                                    <td className="whitespace-nowrap px-3 py-3">{envelope.emailBlurb}</td>
                                                    <td className="whitespace-nowrap px-2 py-3">{envelope.sentDateTime}</td>
                                                    <td className="whitespace-nowrap px-3 py-3 capitalize text-capitalize">{envelope.status}</td>
                                                    <td className="whitespace-nowrap px-3 py-3">
                                                        <button
                                                            className=" flex h-10 items-center rounded-lg w-22 border border-solid border-black bg-yellow-200 px-4 text-sm font-medium"
                                                            onClick={() => toggleVisibility(envelope.envelopeId)}> See PDF </button>
                                                    </td>
                                                </tr>
                                                {visibleRows.includes(envelope.envelopeId) && envelope.pdfString && (
                                                    <>
                                                        <tr key={envelope.envelopeId} >
                                                            <td colSpan={5}>
                                                                <div><embed src={`data:application/pdf;base64,${envelope.pdfString.base64String}`} type="application/pdf" width="100%" height="600px" /></div>
                                                            </td>
                                                        </tr>
                                                        <tr key={envelope.envelopeId} >
                                                            <td colSpan={5}>
                                                                {/* Empty cell for alignment */}
                                                            </td>
                                                        </tr>
                                                    </>
                                                )}
                                            </React.Fragment>
                                        ))}

                                    </tbody>
                                </table>
                            ):
                                (
                                    <div>No envelopes found </div>
                                )
                }
                </div>
            </div>
        </div>
    );
};



export default EnvelopeTable;
