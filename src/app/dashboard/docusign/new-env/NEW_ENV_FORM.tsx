"use client"

import { lusitana } from "~/app/ui/fonts";
import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { forms } from "../../forms/FormsData";
import { redirect } from "next/navigation";
import { createEnvelope } from "./envServerAction";
import { useFormState, useFormStatus } from "react-dom";

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
    message: "",
};

function SubmitButton() {

    return (
        <button type="submit" >
            Add Envelope
        </button>
    );
}




export default function AddEnvelopeForm() {
    
    // const [state, formAction] = useFormState(createEnvelope, initialState);

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
        <form>
            


            <SubmitButton />


        </form>
    )

}