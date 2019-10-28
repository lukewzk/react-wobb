import React from "react";

const JobDetails = (props) => {
  console.log(props)
  const id = props.match.params.id
  return (
    <div className="container section job-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Company Name - {id}</span>
          <p>Job descriptions</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
