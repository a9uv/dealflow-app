"use client"
import { lusitana } from '~/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

import { useState } from 'react';



export interface ClientData {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  image_url: string;
  date_of_birth: string;
  latest_activity: string;
  status: string;
  user_id: string;
  number_of_policies: number;
  address: string;
  social_security_number: string; // **Security warning: Handle with care!**
}

const initialState: ClientData = {
  id: '3958dc9e-712f-4377-85e9-fec4b6a6442a', // Replace with generated ID
  name: '',
  email: '',
  phone_number: '',
  image_url: '/customers/new-client.png',
  date_of_birth: '',
  latest_activity: '',
  status: 'Prospect',
  user_id: '410544b2-4001-4271-9855-fec4b6a6442a', // Replace with actual user ID
  number_of_policies: 0,
  address: '',
  social_security_number: '',
};


// function handleNewClientForm() {
//   console.log('New Client Form');

// }



export default function NewClient() {
  const [formData, setFormData] = useState<ClientData>(initialState);
  
 const handleNewClientForm = (event: React.FormEvent<HTMLFormElement>) => {
   event.preventDefault()
   
   console.log(formData);
   
    //    const newClientData = {
    //   id: '3958dc9e-712f-4377-85e9-fec4b6a6442a', // Replace with generated ID
    //   name: `${formData.firstName} ${formData.middleName} ${formData.lastName}`,
    //   email: `<span class="math-inline">\{formData\.firstName\}\.</span>{formData.lastName}@example.com`, // Placeholder email
    //   image_url: '/customers/new-client.png', // Placeholder image
    //   date_of_birth: formData.birthdate,
    //   latest_activity: new Date().toLocaleDateString(), // Current date
    //   status: 'Prospect', // Initial status
    //   user_id: '410544b2-4001-4271-9855-fec4b6a6442a', // Replace with actual user ID
    //   number_of_policies: 0, // Initial number of policies
    //   address: `<span class="math-inline">\{formData\.address1\}</span>{formData.address2 ? `, ${formData.address2}` : ''}, ${formData.city}, ${formData.state} ${formData.zipCode}`,
    //   social_security_number: formData.ssn, // **Security warning: Handle with care!**
    // };

  
  }

  
  

  
  return (
    <form className="space-y-3" onSubmit={handleNewClientForm}>
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Create New Client
        </h1>
        <div className="w-full">
          <div className="grid grid-cols-1 gap-4">
            {/* First Name Field */}
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="first_name"
              >
                Full Name
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="first_name"
                  type="name"
                  name="first_name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value })}
                  required
                />
              </div>
            </div>
            {/* Middle Name Field
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="middle_name"
              >
                Middle Name
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="middle_name"
                  type="name"
                  name="middle_name"
                  placeholder="Middle Name"
                />
              </div>
            </div>
             Last Name Field 
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="last_name"
              >
                Last Name
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="last_name"
                  type="name"
                  name="last_name"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div> */}
          </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
            {/* Birthdate Field */}
            <div>
                <label
                className="mb-3 block text-xs font-medium text-gray-900"
                htmlFor="birthdate"
                >
                Birthdate
                </label>
                <div className="relative">
                <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="birthdate"
                    type="date"
                    name="birthdate"
                  placeholder="MM/DD/YYYY"
                                    value={formData.date_of_birth}
                  onChange={(e) => setFormData({...formData, date_of_birth: e.target.value })}
                    required
                />
                </div>
            </div>
            {/* Social Security Number Field */}
            <div>
                <label
                className="mb-3 block text-xs font-medium text-gray-900"
                htmlFor="ssn"
                >
                Social Security Number
                </label>
                <div className="relative">
                <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="ssn"
                    type="text"
                    name="ssn"
                  placeholder="XXX-XX-XXXX"
                                    value={formData.social_security_number}
                  onChange={(e) => setFormData({...formData, social_security_number: e.target.value })}
                    required
                />
                </div>
            </div>
                  </div>
                  
            <div className="grid grid-cols-1 gap-4 mt-4">
            {/* Address Field */}
            <div>
                <label
                className="mb-3 block text-xs font-medium text-gray-900"
                htmlFor="address_1"
                >
                Address
                </label>
                <div className="relative">
                <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="address_1"
                    type="text"
                    name="address_1"
                  placeholder="Street Address"
                                    value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value })}
                    required
                />
                </div>
            </div>
            {/* Address 2 Field */}
            {/* <div>
                <label
                className="mb-3 block text-xs font-medium text-gray-900"
                htmlFor="address_2"
                >
                Address 2 (Optional)
                </label>
                <div className="relative">
                <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="address_2"
                    type="text"
                    name="address_2"
                    placeholder="Apartment, Suite, etc."
                />
                </div>
            </div>
        </div>
                  

                    <div className="grid grid-cols-3 gap-4 mt-4"> */}
                {/* City Field */}
                {/* <div>
                    <label
                    className="mb-3 block text-xs font-medium text-gray-900"
                    htmlFor="city"
                    >
                    City
                    </label>
                    <div className="relative">
                    <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="city"
                        type="text"
                        name="city"
                        placeholder="City"
                        required
                    />
                    </div>
                </div> */}
                {/* State Field */}
                {/* <div>
                    <label
                    className="mb-3 block text-xs font-medium text-gray-900"
                    htmlFor="state"
                    >
                    State
                    </label>
                    <div className="relative">
                    <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="state"
                        type="text"
                        name="state"
                        placeholder="State"
                        required
                    />
                    </div>
                </div> */}
                {/* Zip Code Field */}
                {/* <div>
                    <label
                    className="mb-3 block text-xs font-medium text-gray-900"
                    htmlFor="zip_code"
                    >
                    Zip Code
                    </label>
                    <div className="relative">
                    <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="zip_code"
                        type="text"
                        name="zip_code"
                        placeholder="Zip Code"
                        required
                    />
                    </div>
                </div> */}
          </div>        


          <div className="grid grid-cols-2 gap-4 mt-4">
            {/* Birthdate Field */}
            <div>
              <label
                className="mb-3 block text-xs font-medium text-gray-900"
                htmlFor="phone_number"
              >
                Phone Number
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="phone_number"
                  type="string"
                  name="phone_number"
                  placeholder="(123) 456-7890"
                  value={formData.phone_number}
                  onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                  required
                />
              </div>
            </div>
            {/* Social Security Number Field */}
            <div>
              <label
                className="mb-3 block text-xs font-medium text-gray-900"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="client@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>
          </div>
          







        </div>
        <button type="submit" className="mt-6 max-w-48 flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
          Create Client <ArrowRightIcon className="ml-2 h-5 w-5 text-gray-50" />
          </button>
      </div>
    </form>
  );
}


