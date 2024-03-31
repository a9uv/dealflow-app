'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { forms } from './FormsData';




export default function FormsTable() {
const router = useRouter()

   const [visibleRows, setVisibleRows] = useState<string[]>([]);

 const toggleVisibility = (formId: string) => {
        if (visibleRows.includes(formId)) {
            setVisibleRows(visibleRows.filter((id) => id !== formId));
        } else {
            setVisibleRows([...visibleRows, formId]);
        }
 };
  
  const selectForm = (formId: string) => {

    router.push(`forms/new-signing?form=${formId}`)
  }
  
  
  
  // const [expandedRow, setExpandedRow] = useState<string | null>(null);
  



  // const handleRowClick = (id: string) => {
  //   setExpandedRow(id === expandedRow ? null : id);
  // };

    return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-[73vw] align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-[73vw] text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
                            <tr
                            >
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Policy
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Company
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="">Review</span>
                  </th>
                  



              </tr>
            </thead>
            <tbody className="bg-white">
                {forms.map((form) => (
                <>
                <tr
                      key={form.id}
                     
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      {form.icon}
                      <p>{form.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {form.company}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3 flex">
                    <button className="flex h-10 items-center rounded-lg bg-blue-400 
      px-4 text-sm font-medium text-white transition-colors
       hover:bg-blue-500 Hover:text-white focus-visible:outline border
       border-solid border-white
       focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-blue-600" onClick={() => toggleVisibility(form.id)}> Review </button>
                        <button className="flex h-10 items-center rounded-lg bg-blue-500 
      px-4 text-sm font-medium text-white transition-colors
       hover:bg-blue-900 Hover:text-white focus-visible:outline border
       border-solid border-white
       focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-blue-600" onClick={() => selectForm(form.id)}> Select</button>
                      </td>
                      
                    </tr>
                      {visibleRows.includes(form.id) && (
                      <>
                        <tr>
                          <td colSpan={4}>
                            <div> </div>
                          </td>
                        </tr>
                                        <tr>
                                            <td colSpan={4}>
                                                <div><embed src={form.href} type="application/pdf" width="100%" height="600px" /></div>
                                            </td>
                                        </tr>

                                    </>
                                    )}
                </>
        ))}
      </tbody>
          </table>
        </div>
      </div>
        </div>
    )
}


