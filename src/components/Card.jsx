import React from "react";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    _id,
    companyName,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    location,
    employmentType,
    postingDate,
    description,
  } = data;

  const renderBulletPoints = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, index) => (
      <li key={index}>{line}</li>
    ));
  };


  return (
    <section className="card">
      <Link
        to={`/job/${_id}`}
        className="flex gap-4 flex-col sm:flex-row items-start"
      >
        <img src={companyLogo} alt="" />
        <div>
          <h4 className="text-primary mb-1">{companyName}</h4>
          <h3 className="text-g font-semibold mb-2">{jobTitle}</h3>

          <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
            <span className="flex items-center gap-2">
              <FiMapPin />
              {location}
            </span>
            <span className="flex items-center gap-2">
              <FiClock />
              {employmentType}
            </span>
            <span className="flex items-center gap-2">
              <FiDollarSign /> {minPrice}k - {maxPrice}k
            </span>
            <span className="flex items-center gap-2">
              <FiCalendar />
              {postingDate}
            </span>
          </div>

          {/* <p className="text-base text-primary/70">{description}</p> */}
          <ul className="text-base text-primary/100">
            {renderBulletPoints(description)}
          </ul>
        </div>
      </Link>
    </section>
  );
};

export default Card;
