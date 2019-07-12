import React, { useState } from 'react';
import { Button, MobileStepper, Paper, Typography } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import Job from './Job';
import JobModal from './JobModal';

export default function Jobs({ jobs }) {
  //Modal
  const [open, setOpen] = useState(false);
  const [seletedJob, setSelectedJob] = useState({});

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  //Pagination
  const numJobs = jobs.length;
  const numPages = Math.ceil(numJobs / 50);

  const [activeStep, setActiveStep] = useState(0);

  const jobsOnPage = jobs.slice(activeStep * 50, activeStep * 50 + 50);
  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    topFunction();
  }

  function toStart() {
    setActiveStep(0);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  console.log('Job is: ', jobs[0]);
  return (
    <Paper className={'jobs'}>
      <JobModal open={open} job={seletedJob} handleClose={handleClose} />
      <Typography variant="h4" component="h1">
        Entry level software jobs go here!
      </Typography>
      <Typography variant="h6" component="h2">
        <Button className="home-btn" onClick={toStart}>
          Home
        </Button>
        Found {numJobs} jobs
        <MobileStepper
          variant="progress"
          steps={numPages}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === 4}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
        Page {activeStep + 1} of {numPages}
      </Typography>
      <Typography variant="subtitle1" id={jobs.id}>
        {jobsOnPage.map((job, i) => (
          <Job
            key={i}
            job={job}
            onClick={() => {
              handleClickOpen();
              setSelectedJob(job);
            }}
          />
        ))}
        <div>
          Page {activeStep + 1} of {numPages}
        </div>

        <MobileStepper
          variant="progress"
          steps={numPages}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === 4}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </Typography>
    </Paper>
  );
}
