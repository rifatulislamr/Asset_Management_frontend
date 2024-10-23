// pages/transfer.js
"use client"; // Add this line

import { useState } from 'react';

export default function TransferAsset() {
    const [assetId, setAssetId] = useState('');
    const [locationId, setLocationId] = useState('');
    const [transferDate, setTransferDate] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/api/assets/transfer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                asset_id: assetId,
                location_id: locationId,
                transfer_date: transferDate,
            }),
        });

        const data = await response.text();
        setMessage(data);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Transfer Asset</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                    <label htmlFor="assetId" className="block text-gray-700">Asset ID</label>
                    <input
                        type="text"
                        id="assetId"
                        value={assetId}
                        onChange={(e) => setAssetId(e.target.value)}
                        className="border rounded w-full p-2"
                        placeholder="Enter Asset ID"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="locationId" className="block text-gray-700">Location ID</label>
                    <input
                        type="text"
                        id="locationId"
                        value={locationId}
                        onChange={(e) => setLocationId(e.target.value)}
                        className="border rounded w-full p-2"
                        placeholder="Enter Location ID"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="transferDate" className="block text-gray-700">Transfer Date</label>
                    <input
                        type="date"
                        id="transferDate"
                        value={transferDate}
                        onChange={(e) => setTransferDate(e.target.value)}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Transfer Asset
                </button>
            </form>
            {message && <p className="mt-4 text-green-500">{message}</p>}
        </div>
    );
}
