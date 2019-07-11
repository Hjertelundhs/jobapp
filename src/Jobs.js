import React from 'react';
import Typography from '@material-ui/core/Typography';
import Job from './Job';

export default function Jobs({ jobs }) {
  return (
    <div className={'jobs'}>
      <Typography variant="h3">Entry level software jobs go here!</Typography>
      {jobs.map(job => (
        <div className={'job'}>
          <Job job={job} />
        </div>
      ))}
    </div>
  );
}
