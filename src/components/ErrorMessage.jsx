import React from "react";

const ErrorMessage = ({ errorMsg }) => {
  return (
    <div className="text-center my-[30%]">
      <p className="text-white mx-auto capitalize">
        {errorMsg || "something went wrong"}
      </p>
    </div>
  );
};

export default ErrorMessage;
