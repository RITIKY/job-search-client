import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);

  useEffect(() => {
    fetch(`https://job-search-server-u2c3.onrender.com/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  const handleApply = async () => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter the URL",
    });
    if (url) {
      Swal.fire(`Entered URL: ${url}`);
    }
  };

  const renderBulletPoints = (text) => {
    if (!text) return null;
    return text.split("\n").map((line, index) => <li key={index}>{line}</li>);
  };

  if (!job) {
    return <p>Loading...</p>; // Loading state
  }

  return (
    <div className="max-w-screen-2xl  container mx-auto xl:px-24 px-4 md:py-10 py-10">
      <h2 className="font-bold text-2xl mb-4">Job Details </h2>
      <h2 className="font-base text-xl mb-4">Job Id: {id}</h2>
      <h2 className="font-semibold text-xl mb-4">Job Opening in {job.companyName}</h2>
      <h1 className="mb-2 text-2xl font-semibold text-blue">{job.jobTitle}</h1>
      <h2 className="mb-2 text-xl">Location : {job.location}</h2>
      <button className="bg-blue px-8 py-2 text-white m-1">
        {job.employmentType}
      </button>
      <button className="bg-blue px-8 py-2 text-white" onClick={handleApply}>
        Apply Now
      </button>
      <h2 className="mt-2 text-xl">Job Description</h2>
      <ul className="mt-2 text-base font-medium text-primary/80">
        {renderBulletPoints(job.description)}
      </ul>
      <h2 className="mt-2 text-xl"> ExperienceLevel : {job.experienceLevel}</h2>

      <h2 className="mt-2 text-xl">Skills Requirement </h2>
      <ul className="list-disc list-inside mt-2 text-base font-medium text-primary/100">
        {job.skills?.map((skill, index) => (
          <li key={index}>{skill.label}</li>
        ))}
      </ul>

      <h2 className="mt-2 text-xl">Expected Salary : {job.minPrice}k - {job.maxPrice}k </h2>
      <h2 className="mt-2 text-xl">Job Posting Date : {job.postingDate} </h2>



    </div>
  );
};

export default JobDetails;
