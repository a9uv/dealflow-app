"use client"
import { lusitana } from '~/app/ui/fonts';

const states = [
    { "abbreviation": "AL", "name": "Alabama" },
    { "abbreviation": "AK", "name": "Alaska" },
    { "abbreviation": "AZ", "name": "Arizona" },
    { "abbreviation": "AR", "name": "Arkansas" },
    { "abbreviation": "CA", "name": "California" },
    { "abbreviation": "CO", "name": "Colorado" },
    { "abbreviation": "CT", "name": "Connecticut" },
    { "abbreviation": "DE", "name": "Delaware" },
    { "abbreviation": "DC", "name": "District of Columbia" },
    { "abbreviation": "FL", "name": "Florida" },
    { "abbreviation": "GA", "name": "Georgia" },
    { "abbreviation": "HI", "name": "Hawaii" },
    { "abbreviation": "ID", "name": "Idaho" },
    { "abbreviation": "IL", "name": "Illinois" },
    { "abbreviation": "IN", "name": "Indiana" },
    { "abbreviation": "IA", "name": "Iowa" },
    { "abbreviation": "KS", "name": "Kansas" },
    { "abbreviation": "KY", "name": "Kentucky" },
    { "abbreviation": "LA", "name": "Louisiana" },
    { "abbreviation": "ME", "name": "Maine" },
    { "abbreviation": "MD", "name": "Maryland" },
    { "abbreviation": "MA", "name": "Massachusetts" },
    { "abbreviation": "MI", "name": "Michigan" },
    { "abbreviation": "MN", "name": "Minnesota" },
    { "abbreviation": "MS", "name": "Mississippi" },
    { "abbreviation": "MO", "name": "Missouri" },
    { "abbreviation": "MT", "name": "Montana" },
    { "abbreviation": "NE", "name": "Nebraska" },
    { "abbreviation": "NV", "name": "Nevada" },
    { "abbreviation": "NH", "name": "New Hampshire" },
    { "abbreviation": "NJ", "name": "New Jersey" },
    { "abbreviation": "NM", "name": "New Mexico" },
    { "abbreviation": "NY", "name": "New York" },
    { "abbreviation": "NC", "name": "North Carolina" },
    { "abbreviation": "ND", "name": "North Dakota" },
    { "abbreviation": "OH", "name": "Ohio" },
    { "abbreviation": "OK", "name": "Oklahoma" },
    { "abbreviation": "OR", "name": "Oregon" },
    { "abbreviation": "PA", "name": "Pennsylvania" },
    { "abbreviation": "RI", "name": "Rhode Island" },
    { "abbreviation": "SC", "name": "South Carolina" },
    { "abbreviation": "SD", "name": "South Dakota" },
    { "abbreviation": "TN", "name": "Tennessee" },
    { "abbreviation": "TX", "name": "Texas" },
    { "abbreviation": "UT", "name": "Utah" },
    { "abbreviation": "VT", "name": "Vermont" },
    { "abbreviation": "VA", "name": "Virginia" },
    { "abbreviation": "WA", "name": "Washington" },
    { "abbreviation": "WV", "name": "West Virginia" },
    { "abbreviation": "WI", "name": "Wisconsin" },
    { "abbreviation": "WY", "name": "Wyoming" },
    { "abbreviation": "AS", "name": "American Samoa" },
    { "abbreviation": "GU", "name": "Guam" },
    { "abbreviation": "MP", "name": "Northern Mariana Islands" },
    { "abbreviation": "PR", "name": "Puerto Rico" },
    { "abbreviation": "VI", "name": "Virgin Islands" }
]

interface FormData {
    // Define form fields here based on the screenshot
    name: string;
    dateOfBirth: string;
    sex: string;
    healthClass: string;
    smokingHabits: string;
    // ... other fields
}


export default function LifeQuote() {
    


    return (
        <div className="container mx-auto p-4">
            <h2 className={`${lusitana.className} mb-3 text-xl`}>
                Instant Life Insurance Quote
            </h2>

            <form>
                <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                    {/* Fields based on the screenshot, using Tailwind classes for styling */}
                    <div className="w-full">

                        <div className="grid grid-cols-2 gap-16">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Full Name"
                                    // value={formData.name}
                                    // onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone_number" className="block text-gray-700 font-bold mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    id="phone_number"
                                    name="phone_number"
                                    placeholder="(123) 456-7890"
                                    // value={formData.name}
                                    // onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                        </div>


                        {/* ... other fields (date of birth, sex, health class, smoking habits, etc.) */}
                        {/* Date of Birth */}
                        <div className="grid grid-cols-2 gap-16">
                            <div className="mb-4">
                                <label htmlFor="dateOfBirth" className="block text-gray-700 font-bold mb-2">
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    // value={formData.dateOfBirth}
                                    // onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>



                            {/* Sex */}
                            <div className="mb-4">

                                <label htmlFor="sex" className="block text-gray-700 font-bold mb-2">
                                    Sex
                                </label>
                                <div className="flex items-center">



                                    <input
                                        type="radio"
                                        id="sex-male"
                                        name="sex"
                                        value="male"
                                        // checked={formData.sex === 'male'}
                                        // onChange={handleChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="sex-male">Male</label>
                                    <input
                                        type="radio"
                                        id="sex-female"
                                        name="sex"
                                        value="female"
                                        // checked={formData.sex === 'female'}
                                        // onChange={handleChange}
                                        className="mr-2 ml-4"
                                    />
                                    <label htmlFor="sex-female">Female</label>
                                </div>
                            </div>


                        </div>




                        <div className="grid grid-cols-2 gap-16">
                            {/* State */}
                            <div className="mb-4">
                                <label htmlFor="healthClass" className="block text-gray-700 font-bold mb-2">
                                    State
                                </label>
                                <select
                                    id="state"
                                    name="state"
                                    // value={formData.healthClass}
                                    // onChange={handleChange}
                                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    {states.map((state) => (
                                        <option key={state.abbreviation} value={state.abbreviation}>
                                            {state.name}
                                        </option>
                                    ))}
                                </select>
                            </div>




                            {/* Smoking Habits */}


                            <div className="mb-4">
                                <label htmlFor="smokingHabits" className="block text-gray-700 font-bold mb-2">
                                    Smoking Habits
                                </label>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="smokingHabits-yes"
                                        name="smokingHabits"
                                        value="yes"
                                        // checked={formData.sex === 'male'}
                                        // onChange={handleChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="smokingHabits-yes">Yes</label>
                                    <input
                                        type="radio"
                                        id="smokingHabits-no"
                                        name="smokingHabits"
                                        value="no"
                                        // checked={formData.smokingHabits === 'no'}
                                        // onChange={handleChange}
                                        className="mr-2 ml-4"
                                    />
                                    <label htmlFor="smokingHabits-no">No</label>
                                </div>
                            </div>

                        </div>


                        <div className="grid grid-cols-2 gap-16">

                            {/* Health Class */}
                            <div className="mb-4">
                                <label htmlFor="healthClass" className="block text-gray-700 font-bold mb-2">
                                    Health Class
                                </label>
                                <select
                                    id="healthClass"
                                    name="healthClass"
                                    // value={formData.healthClass}
                                    // onChange={handleChange}
                                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option value="preferredplus">Preferred Plus</option>
                                    <option value="excellent">Preferred </option>
                                    <option value="good">Regular Plus</option>
                                    <option value="average">Regular</option>
                                </select>
                            </div>

                            {/* Health Class */}
                            <div className="mb-4">
                                <label htmlFor="healthClass" className="block text-gray-700 font-bold mb-2">
                                    Payment Option
                                </label>
                                <select
                                    id="healthClass"
                                    name="healthClass"
                                    // value={formData.healthClass}
                                    // onChange={handleChange}
                                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option value="monthly">Monthly</option>
                                    <option value="quarterly">Quarterly</option>
                                    <option value="semiannual">Semi-Annual</option>
                                    <option value="annual">Annual</option>
                                </select>
                            </div>

                        </div>






                    </div>



                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    >
                        Compare Now
                    </button>
                </div>
            </form>
        </div>
    )
}