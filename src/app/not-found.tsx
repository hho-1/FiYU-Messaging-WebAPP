import React from "react";

const NotFound = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 flex items-center justify-start h-screen md:px-8">
      <div className="max-w-lg mx-auto text-center">
        <h3 className="text-gray-950 font-semibold">404 Error</h3>
        <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl mt-4">
          Page can not be found.
        </h3>
        <p className="mt-4">
          Sorry, the page you are looking for could not be found. It may be
          removed or the route of the page is wrong.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          <button className="block py-2 px-4 text-white font-medium bg-main hover:bg-orange-600 rounded-lg">
            Go Back
          </button>
          <button className="block py-2 px-4 text-gray font-medium hover:bg-gray-600 hover:text-zinc-50 rounded-lg border">
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
