


const CaseSearchForm = () => {

  
  return (
    <form className="space-y-6">
      <div className="space-x-4">
        <div>
          <label htmlFor="caseNumber" className="block text-sm font-medium text-gray-700">Case Number</label>
          <input type="text" id="caseNumber" name="caseNumber" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="caseStatus" className="block text-sm font-medium text-gray-700">Case Status</label>
          <select id="caseStatus" name="caseStatus" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="all">All</option>
            <option value="closed">Closed</option>
            {/* Add other options here */}
          </select>
        </div>
      </div>
      <div className="space-x-4">
        <div>
          <label htmlFor="clientLastName" className="block text-sm font-medium text-gray-700">Client Last Name</label>
          <input type="text" id="clientLastName" name="clientLastName" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="agentLastName" className="block text-sm font-medium text-gray-700">Agent Last Name</label>
          <input type="text" id="agentLastName" name="agentLastName" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
      </div>
      <div>
        <label htmlFor="followUpDate" className="block text-sm font-medium text-gray-700">Follow Up Date</label>
        <input type="date" id="followUpDate" name="followUpDate" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div>
        <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Search Cases
        </button>
      </div>
    </form>
  );
};

export default function Page() {





  return (
    <main>
      <CaseSearchForm />
    </main>
  );
}