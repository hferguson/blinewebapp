import Router from 'next/router';
import useRequest from '../hooks/use-request';
import {useState, useEffect } from 'react';


const Landing = () => {
    // Note to self: to destructure, use array instead of object, [] instead of {}
    // for useState.
    const [status, setStatus] = useState('');

    const { doRequest, errors } = useRequest({
        url: '/api/ping/heartbeat',
        method: 'get',
        body: {},
        onSuccess: (data) => {
            //console.log("Got response from heartbeat service");
            //console.log(data);
            setStatus(data.datestamp);
        }
    });

    useEffect(() => {
        console.log("Begin useEffect");
        const interval = setInterval(() => {
            //console.log("Calling heartbeat service");
            doRequest();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="pageBody">
            <h1>Baseline Web App (blinewebapp) Home page</h1>
            <div className="text-bg-light p-3">
                If you are seeing this, the baseline app is working.
            </div>
            <div>
                <span className="border border-primary">Ping status</span>
                <span><input name="status" value={status} readOnly /></span>
            </div>
            <div>{errors}</div>
        </div>
    )
};

export default Landing;