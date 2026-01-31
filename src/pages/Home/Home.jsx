import React, { Suspense } from 'react';
import Banner from './Banner';
import BrowseByCategory from './BrowseByCategory';
import HotJobs from './HotJobs';
import Loader from '../Shared/Loader';

const Home = () => {
    const jobsPromise = fetch('http://localhost:3000/jobs')
        .then(res => res.json())
    return (
        <div>
            <Banner></Banner>
            <BrowseByCategory></BrowseByCategory>
            <Suspense fallback={<Loader></Loader>}>
                <HotJobs jobsPromise={jobsPromise}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;