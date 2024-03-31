import {
    HomeModernIcon, PlusCircleIcon, WrenchIcon
    

} from '@heroicons/react/24/outline';




export interface FormsData {
  id: string;
  href: string;
  name: string;
  company: string;
  icon: JSX.Element;
}
export const forms = [
    { id: 'Geico-Home', name: 'Geico Home',href: '/pdfs/Geico_Home.pdf', company:'Geico', icon: <HomeModernIcon className="w-5" /> },
    { id: 'Geico-Auto', name: 'Geico Auto',href: '/pdfs/Geico_Auto.pdf',  company:'Geico', icon: <WrenchIcon className="w-5" /> },
    { id: 'All-State-Home', name: 'All State Home',href: '/pdfs/AllState_Home.pdf', company:'All State',icon: <HomeModernIcon className="w-5" /> },
    { id: 'All-State-Auto', name: 'All State Auto',href: '/pdfs/AllState_Auto.pdf', company: 'All State', icon: <WrenchIcon className="w-5" /> },
    { id: 'Random-Auto', name: 'Random Auto',href: '/pdfs/AutoInsurance.pdf', company:'Random',icon: <WrenchIcon className="w-5" /> },
    { id: 'Kaiser-Health', name: 'Kaiser Health',href: '/pdfs/Kaiser_Health.pdf', company:'Kaiser',icon: <PlusCircleIcon className="w-5" /> },
    { id: 'Blue-Cross-Health', name: 'Blue Cross Health',href: '/pdfs/BlueCross_Health.pdf', company:'Blue Cross',icon: <PlusCircleIcon className="w-5" /> },
];