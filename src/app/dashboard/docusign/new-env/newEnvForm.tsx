"use client"

import { lusitana } from "~/app/ui/fonts";
import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { forms } from "../../forms/FormsData";
import { redirect } from "next/navigation";
import { createEnvelope } from "./envServerAction";
import { useFormState, useFormStatus } from "react-dom";


const inState = {
    message: null
}

// export default function SimpleForm() {
//     const {pending} = useFormStatus()
//     const [state, formAction] = useFormState(createForm, inState)
    
//     return (
//         <form action={formAction}>
//             <label htmlFor="name">Name</label>
//             <input type="text" id='name' name='name'  />
//             <label htmlFor="age">Age</label>
//             <input type="text" id="age" name="age" />
//             <button type="submit" aria-disabled={pending}> Add </button>
//             <p aria-live="polite" className="sr-only" role='status'>
//                 {state?.message}
//             </p>
//         </form>
//     )
// }

interface FormsData {
    id: string;
    href: string;
    name: string;
    company: string;
    icon: JSX.Element;
}

export interface EnvelopeData {
    name: string;
    email: string;
    subject: string;
    message: string;
    chosenForm: {
        id: string;
        href: string;
        name: string;
    },

}

const initialState = {
message: ''
};







export default function NewEnvelope() {

    // const filePath = 'public' + forms[0].href
    // console.log('filePath: ', filePath);
    
    // const pdfBase64 = fs.readFileSync(filePath, { encoding: 'base64' });
    //   console.log('PDF Binary Here: ', base64.substring(0, 50));
    

    const [state, formAction] = useFormState(createEnvelope, initialState)



    const [tableVisible, setTableVisible] = useState(false)
    const tableVisibility = () => {
        setTableVisible((prev) => !prev)
    }


        const [visibleRows, setVisibleRows] = useState<string[]>([]);

 const toggleVisibility = (envelopeId: string) => {
        if (visibleRows.includes(envelopeId)) {
            setVisibleRows(visibleRows.filter((id) => id !== envelopeId));
        } else {
            setVisibleRows([...visibleRows, envelopeId]);
        }
 };
    

        return (
            <form action={formAction} className="space-y-3">
                <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                    <h1 className={`${lusitana.className} mb-3 text-2xl`}>
                        Create New Envelope
                    </h1>
                    
                    <div className="w-full">

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                            <label
                                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                htmlFor="client"
                            >
                                Client Name
                            </label>
                            <div className="relative">
                                <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="client"
                                type="name"
                                name="name"
                                placeholder="Signer Name"
                                // value={formData.name}
                                // onChange={(e) => setFormData({...formData, name: e.target.value })}
                                required
                                />
                            </div>
                        </div>
                            <div>
                                <label className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                htmlFor="email">
                                    Client Email 
                                </label>
                                <div className="relative">
                                    <input
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    id="email"
                                    type="subject"
                                    name="email"
                                    placeholder="Signer Email"
                                    // value={formData.email}
                                    // onChange={(e) => setFormData({...formData, email: e.target.value })}
                                    required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                htmlFor="subject">
                                    Email Subject
                                </label>
                            <div className="relative">
                                    <input
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    id="email_subject"
                                    type="subject"
                                    name="subject"
                                    placeholder="Email Subject"
                                    //   value={formData.subject}
                                    //   onChange={(e) => setFormData({...formData, subject: e.target.value })}
                                    required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="mb-3 mt-5 block 
                                text-xs font-medium text-gray-900" htmlFor="message">
                                    Email Message
                                </label>
                             <div className="relative">
                                    <textarea
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    id="email_message"
                                    name="message"
                                    placeholder="Email Message"
                                    //   value={formData.message}
                                    //   onChange={(e) => setFormData({...formData, message: e.target.value })}
                                    
                                    />
                                </div>
                            </div>
                            
                        </div>

                        <div className="flex flex-col max-w-6/12 mt-6">
                            <button onClick={tableVisibility}
                                className="mt-4 w-28 flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
                            >
                                Select Form
                            </button>
                            
                            {tableVisible &&
                                
                                <div className="mt-6 flow-root">
                                    <div className="inline-block min-w-full align-middle">
                                        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                                        <table className="hidden min-w-full text-gray-900 md:table">
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
                                                <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="bg-white">
                                                {forms.map((form: FormsData) => (
                                                    <>
                                                        
                                                <tr
                                                    key={form.id}
                                                    className="w-full border-b py-3 text-sm last-of-type:border-none 
                                                    [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg
                                                    [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                                        >
                
                                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                                            <div className="flex items-center gap-3">
                                                                <label></label>
                                                                                                <label className=" block text-xs font-medium text-gray-900"
                                            htmlFor="form-selection">+</label>
                                            <input
                                                type="radio"
                                                id={form.id}
                                                name="chosenForm"
                                                    value={form.id}
                                                    required
                                                // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                //     const selectedForm = forms.find((f: FormsData) => f.id === e.target.value);
                                                //     setFormData({
                                                //     ...formData,
                                                //         chosenForm: {
                                                //             id: selectedForm?.id ?? '',
                                                //             name: selectedForm?.name ?? '',
                                                //             href: selectedForm?.href ?? '',
                                                //     },
                                                //     });
                                                // }}
                                        />
                                            {form.icon}
                                            <p>{form.name}</p>
                                        </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3">
                                                {form.company}
                                            </td>
                                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                                <button className="flex h-10 items-center rounded-lg bg-blue-400 
                                px-4 text-sm font-medium text-white" onClick={() => toggleVisibility(form.id)}> Review </button>
                                                        </td>
                                                </tr>
                                                {visibleRows.includes(form.id) && (
                                                                <>
                                                                    <tr>
                                                                        <td colSpan={3}>
                                                                            <div><embed src={form.href} type="application/pdf" width="100%" height="600px" /></div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={3}>

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
                }
            </div>
                        

            </div>
                </div>
                <div className='flex justify-end mr-20 mt-3'>
                    <button type="submit"
                        className="mt-4 max-w-48 flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
                            Create Envelope <ArrowRightIcon className="ml-2 h-5 w-5 text-gray-50" />
                    </button>
                    </div>
                </form>
        )
        
    }








            /*    
        //Set Documents
        const documents = [
            {
                documentBase64: rawFormData.chosenForm.href,
                name: rawFormData.chosenForm.name,
                fileExtension: "pdf",
                documentId: "1"
            }
        ]

        //Set Document Signing Tabs
        const tabs = {
            signHereTabs: [
                {
                    anchorString: "**signature_1**",
                    "anchorUnits": "pixels",
                    "anchorXOffset": 20,
                    "anchorYOffset": 10
                },
                {
                    "anchorString": "/sn1/",
                    "anchorUnits": "pixels",
                    "anchorXOffset": 20,
                    "anchorYOffset": 10
                }
            ]
        }

        //Set Recipients (Signers and CC)
        const recipients = {
            signers: [
                {
                    email: rawFormData.email,
                    name: rawFormData.name,
                    recipientId: "1",
                    routingOrder: "1",
                    tabs: tabs,
                }
            ]
        }

        //Final Envelope Build
        const envelope = {
            documents: documents,
            recipients: recipients,
            status: "sent"
        }
            
            
            
        makeEnvelope(rawFormData)

        console.log(rawFormData);
            
*/

        // redirect('/dashboard/quotes')