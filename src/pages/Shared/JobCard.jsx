import { BriefcaseBusiness, Clock, MapPin } from 'lucide-react';

const JobCard = ({ job }) => {
    const { title, company_logo, applicationDeadline, jobType, responsibilities, company, location } = job;
    return (
        <div className="w-full border border-gray-200 p-6 rounded-xl">
            <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-100">
                <div className="flex flex-row items-start md:items-center gap-3">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                        <img className='w-10 h-10' src={company_logo} alt={title} />
                    </div>
                    <div className='flex flex-col gap-2 items-start justify-center'>
                        <h3 className="text-2xl font-medium text-gray-50">
                            {company}
                        </h3>
                        <span className='flex items-start gap-1'> <MapPin /> {location}</span>
                    </div>
                </div>
                {/* <span>{applicationDeadline}</span> */}
            </div>
            <div className='my-3 space-y-2'>
                <h2 className='text-xl'>{title}</h2>
                <div className='flex justify-between'>
                    <span className='flex gap-1'> <BriefcaseBusiness />{jobType}</span>
                    <span className='flex gap-1'><Clock />
                        {applicationDeadline}</span>
                </div>
            </div>
            <ul className="list-disc px-5 mt-6 text-gray-100 space-y-2">
                {
                    responsibilities.map(responsibility => (
                        <li>{responsibility}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default JobCard;