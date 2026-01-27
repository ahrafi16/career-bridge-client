import React, { Suspense } from 'react';
import Banner from './Banner';
import BrowseByCategory from './BrowseByCategory';
import HotJobs from './HotJobs';

const Home = () => {
    const jobsPromise = fetch('http://localhost:3000/jobs')
        .then(res => res.json())
    return (
        <div>
            <Banner></Banner>
            <BrowseByCategory></BrowseByCategory>
            <Suspense fallback={<p>Loading jobs.....</p>}>
                <HotJobs jobsPromise={jobsPromise}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;