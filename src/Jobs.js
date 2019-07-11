import React from 'react';
import { Paper, Typography } from '@material-ui/core/';
import Job from './Job';

export default function Jobs({ jobs }) {
  console.log('Job is: ', jobs[0]);
  return (
    <Paper className={'jobs'}>
      <Typography variant="h4" component="h1">
        Entry level software jobs go here!
      </Typography>
      <Typography variant="body2" id={jobs.id}>
        {jobs.map((job, i) => (
          <Job key={i} job={job} />
        ))}
      </Typography>
    </Paper>
  );
}
