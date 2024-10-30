import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState({})
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/anuradhalohar`)
    //         .then(res => res.json())
    //         .then(res => setData(res))
    // }, [])

    const data = useLoaderData()

    return (
        <div className='w-full bg-gray-700 m-4 p-4 text-white text-3xl  flex justify-center text-left font-semibold '>
            <img src={data.avatar_url} alt="Profile Photo" className='rounded-2xl' />

            <div className='mx-10 p-10 border-s-4 tracking-widest'>
                <div className='m-4'>Github Name : {data.name}</div>
                <div className='m-4'>Github Login : {data.login}</div>
                <div className='m-4'>Github Id : {data.id}</div>
                <div className='m-4'>Github Followers : {data.followers}</div>
                <div className='m-4'>Github Following : {data.following}</div>
                <div className='m-4'>Github Repositories : {data.public_repos}</div>
            </div>
        </div>
    )
}

export default Github


export const githunInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/anuradhalohar')
    return response.json()
}0