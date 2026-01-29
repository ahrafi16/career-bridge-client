import { useLoaderData } from "react-router";

const JobDetails = () => {
    const { title, company } = useLoaderData()

    return (
        <div>
            <h2>{title}</h2>
            <h2>{company}</h2>
        </div>
    );
};

export default JobDetails;