import React from 'react'

function Card({username, btnText="Visit Me"}) {
    return (
        <>
            <div className="relative h-[400px] w-[300px] rounded-md m-4 ">
                <img
                    src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/f8239007-7d36-45ce-a0a1-fdf91052b10e/299f5e14-73c4-4a9b-99c9-e44adbc218cf.png"
                    alt="AirMax Pro"
                    className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-lg font-semibold text-white">{username}</h1>
                    <p className="mt-2 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                        debitis?
                    </p>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                        {btnText}→
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card
