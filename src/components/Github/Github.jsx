import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data = useLoaderData()
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/sxhil296")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center text-white text-3xl p-4 bg-gray-600 m-4">
      <h1>{data.login}</h1>
      <img
        src={data.avatar_url}
        alt="pfp"
        className="rounded-xl "
        width={300}
      />
      Github Followers : {data.followers}
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/sxhil296");
  return response.json();
};
