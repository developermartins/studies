'use client' // Error components must be Client Components

import { useEffect } from "react";

const error = ({ error, reset }) => {

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
};

export default error;
