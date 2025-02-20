import React from "react";
import { useLoaderData } from "react-router-dom";

const GitHub = () =>{

    const data = useLoaderData();
    console.log(data);
    return(
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl' > GitHub UserName: {data.login}
        <br/>
        Total Repo Count: {data.public_repos}
        <img src={data.avatar_url} width={300}></img>
        </div>
    )
}

export default GitHub;


export const githubInfoLoader = async ()=> {
    const response = await fetch('https://api.github.com/users/amityadav0912')
    return response;
}