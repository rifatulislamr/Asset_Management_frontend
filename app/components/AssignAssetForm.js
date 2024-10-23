'use client';
import { useState } from 'react';
import axios from 'axios';

export default function AssignAssetForm() {
    const [asset_id, setAssetId] = useState('');
    const [location_id, setLocationId] = useState('');
    const [transfer_date, setTransferDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/assign', {
                asset_id,
                location_id,
                transfer_date,
            });
            alert('Asset assigned successfully');
            setAssetId('');
            setLocationId('');
            setTransferDate('');
        } catch (error) {
            console.error(error);
            alert('Error assigning asset');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
            <h2 className="text-xl font-bold mb-4">Assign Asset to Location</h2>
            <div className="mb-4">
                <label className="block mb-1">Asset ID</label>
                <input
                    type="text"
                    value={asset_id}
                    onChange={(e) => setAssetId(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Location ID</label>
                <input
                    type="text"
                    value={location_id}
                    onChange={(e) => setLocationId(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Transfer Date</label>
                <input
                    type="date"
                    value={transfer_date}
                    onChange={(e) => setTransferDate(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
                Assign Asset
            </button>
        </form>
    );
}
