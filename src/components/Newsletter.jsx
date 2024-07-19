import React from "react";
import { FaNewspaper } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaNewspaper />
          Email Me for jobs
        </h3>
        <p className="text-primary/75 text-base mb-4 ">
          Corporate India's hiring sentiment for the next three months is one of
          the highest across the world, with 37 per cent of employers planning
          to increase their staff strength amid buoyant domestic demand
          conditions, says a survey.
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@mail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get Noticed Faster
        </h3>
        <ul className="text-primary/75 text-base mb-4 ">
          <li>1. Use networking instead of applying “cold”</li>
          <li>2. Always tailor your resume</li>
          <li>
            3. Introduce yourself to people and organizations before they’re
            hiring
          </li>
          <li>
            4. Let the hiring manager know you’re interested and direct them to
            your application
          </li>
          <li>5. Follow up after applying</li>
          <li>6. Find a great recruiter to work with</li>
          <li>7. Have a stand-out LinkedIn profile</li>
          <li>8. Send a unique cover letter</li>
        </ul>
        <div className="w-full space-y-4">
          <input
            type="submit"
            value={"Apply all this"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
