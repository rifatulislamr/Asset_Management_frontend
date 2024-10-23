// pages/history.js
"use client"; // Add this line

import { useState } from 'react';

export default function AssetHistory() {
    const [assetId, setAssetId] = useState('');
    const [locations, setLocations] = useState([]);

    const fetchHistory = async () => {
        const response = await fetch(`http://localhost:5000/api/assets/${assetId}/locations`);
        const data = await response.json();
        setLocations(data);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Asset Location History</h1>
            <div className="mb-4">
                <label htmlFor="assetId" className="block text-gray-700">Asset ID</label>
                <input
                    type="text"
                    id="assetId"
                    value={assetId}
                    onChange={(e) => setAssetId(e.target.value)}
                    className="border rounded w-full p-2"
                    placeholder="Enter Asset ID"
                />
                <button
                    onClick={fetchHistory}
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                >
                    Get History
                </button>
            </div>

            {locations.length > 0 ? (
                <table className="table-auto w-full mt-4">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Transfer Date</th>
                            <th className="px-4 py-2">Location Name</th>
                            <th className="px-4 py-2">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {locations.map((location) => (
                            <tr key={location.id}>
                                <td className="border px-4 py-2">{location.transfer_date}</td>
                                <td className="border px-4 py-2">{location.location_name}</td>
                                <td className="border px-4 py-2">{location.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No location history found for this asset.</p>
            )}
        </div>
    );
}
