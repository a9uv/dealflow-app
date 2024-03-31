'use client'
import { useSearchParams } from 'next/navigation'
import { forms } from '../FormsData';
import { useState } from 'react';



export default function Page() {
    const searchParams = useSearchParams()
    const formId = searchParams.get('form')
    const selectedForm = forms.find((form) => form.id === formId);

    const [value, setValue] = useState('');

    const handleChange = (event:any) => {
        setValue(event.target.value);
    };



    const [isReview, setIsReview] = useState<boolean>();

    const toggleVisibility = () => {
        setIsReview(!isReview);
    };


    const autoFill = () => {
        // fetch('/api/')
    }



    return (
        <div>
            <h1>Chosen Form: {selectedForm?.name}</h1>
            <button className="flex h-10 items-center rounded-lg bg-blue-500 
      px-4 text-sm font-medium text-white transition-colors
       hover:bg-blue-700 Hover:text-white focus-visible:outline border
       border-solid border-white
       focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-blue-600" onClick={() => toggleVisibility()}> Review </button>
            
            {isReview && (
                <div>
                    <embed src={selectedForm?.href} type="application/pdf" width="50%" height="600px" />
                </div>
            )}



            <p className='mt-6'>Select Customer</p>
            <select value={value} onChange={handleChange}>
                <option value="">Select an option</option>
                <option value="1">John Client </option>
                <option value="2">Anuvl LLC</option>
                <option value="3">Mara Kari</option>
            </select>

            <br /><br />
            <button className="flex h-10 items-center rounded-lg bg-blue-500 
      px-4 text-sm font-medium text-white transition-colors
       hover:bg-blue-700 Hover:text-white focus-visible:outline border
       border-solid border-white
       focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-blue-600" onClick={() => autoFill()}> Auto Fill Form </button>


        </div>
    )

}