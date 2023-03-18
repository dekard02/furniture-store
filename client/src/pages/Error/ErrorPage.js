import React, { useEffect } from "react";
import error from "../../assets/error.webp";
export default function ErrorPage() {
  useEffect(() => {
    document.title = "Error";
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${error})`,
        backgroundSize: "cover",
      }}
      className="w-full h-screen"
    ></div>
  );
}
