'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/assets')
            .then(response => setAssets(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-5xl mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center border-2 border-b-gray-400 py-2 ">Asset Management</h1>
                <ul className="space-y-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 space-x-6">
                    {assets.map((asset) => (
                        <li key={asset.asset_id} className="bg-slate-300 p-6 rounded-lg shadow-lg space-y-2">
                            <h1 className='text-xs'>Assset ID: {asset.asset_id}</h1>
                            <h3 className="text-2xl"><span className='font-semibold'>Asset Name:</span> {asset.asset_name}</h3>
                            <p className="text-gray-700 mb-1"><span className='font-bold'>Description : </span>{asset.description}</p>
                            <p className="text-gray-700 uppercase"><span className='font-bold'>Location : </span>{asset.location_name}</p>
                            <p className="text-gray-700 uppercase"><span className='font-bold'>Status: </span>{asset.status}</p>
                            <p className="text-gray-700">Purchase Date: {asset.purchase_date}</p>
                            <p className="text-gray-700">Retirement Date: {asset.retired_date}</p>
                            <p className="text-gray-700">Transfer Date: {asset.transfer_date}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
