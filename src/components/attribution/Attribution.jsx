import React from "react";

export default function Attribution() {
  return (
    <div className=" flex flex-col items-center gap-2 justify-center w-full pt-2 pb-12">
      <h1>Aryan ©</h1>
      <div className="flex items-center gap-2">
        <p>Made using</p>
        <div className="w-32">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="tmdb logo"
          />
        </div>
          <p>API.</p>
      </div>
    </div>
  );
}
