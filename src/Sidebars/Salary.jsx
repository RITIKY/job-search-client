import React from "react";
import Button from "./Button";
import InputField from "../components/InputField";

const Salary = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Salary</h4>
      <div>
        <Button onClickHandler={handleClick} value="" title="Hourly" />
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="yearly" title="Yearly" />
      </div>
      <div className="mt-4">
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span> All
        </label>

        <InputField
          handleChange={handleChange}
          value={300}
          title="> 300k"
          name="test2"
        />

        <InputField
          handleChange={handleChange}
          value={500}
          title="> 500k"
          name="test2"
        />

        <InputField
          handleChange={handleChange}
          value={800}
          title="> 800k"
          name="test2"
        />

        <InputField
          handleChange={handleChange}
          value={1000}
          title="> 1000k"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Salary;
