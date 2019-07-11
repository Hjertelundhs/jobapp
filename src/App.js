import React, { useEffect, useState } from 'react';
import './App.css';
import Jobs from './Jobs';

const JOB_API_URL = 'http://localhost:3001/jobs';

async function fetchJobs(setJobCallBack) {
  const res = await fetch(JOB_API_URL);
  const json = await res.json();
  setJobCallBack(json);
  console.log({ json });
}

function App() {
  const [jobList, setJobList] = useState([]);
  useEffect(() => {
    fetchJobs(setJobList);
  }, []);

  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
