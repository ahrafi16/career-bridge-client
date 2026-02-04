import { useLoaderData, useParams } from "react-router";


const ViewApplications = () => {
    const { job_id } = useParams();
    const applications = useLoaderData();
    console.log("Data off app ", applications)
    return (
        <div className="my-10">
            <h1 className="my-3 font-semibold text-2xl">{applications.length} applications for the job id : {job_id}</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {
                    applications.map(app => (
                        <div key={app._id} className="border-2 border-purple-500 bg-purple-500/20 p-3 rounded-lg hover:border-purple-600 cursor-pointer transition duration-300 hover:scale-105">
                            <p>Job No. {app.jobId}</p>
                            <h1 className="text-lg">Applicants Email : {app.applicant}</h1>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default ViewApplications;