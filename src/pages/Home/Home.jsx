import React, { Suspense } from 'react';
import Banner from './Banner';
import BrowseByCategory from './BrowseByCategory';
import HotJobs from './HotJobs';
import Loader from '../Shared/Loader';
import JobsOfTheDay from './JobsOfTheDay';

const Home = () => {
    const jobsPromise = fetch('http://localhost:3000/jobs')
        .then(res => res.json())
    return (
        <div>
            <Banner></Banner>
            <BrowseByCategory></BrowseByCategory>
            <JobsOfTheDay></JobsOfTheDay>
            <Suspense fallback={<Loader></Loader>}>
                <HotJobs jobsPromise={jobsPromise}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;