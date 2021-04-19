import React from "react";

const Error = ({ statusCode }) => {
  return (
    <div>
      {statusCode
        ? `An error ${statusCode} occurred on sever`
        : `An error occurred on client`}
    </div>
  );
};

Error.getInitailProps = ({ res, req }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
