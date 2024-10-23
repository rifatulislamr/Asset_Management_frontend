'use client';
import { useState } from 'react';
import axios from 'axios';

export default function AssetForm() {
    const [asset_name, setAssetName] = useState('');
    const [description, setDescription] = useState('');
    const [purchase_date, setPurchaseDate] = useState('');
    const [retired_date, setRetirementDate] = useState('');
    const [status, setStatus] = useState('active');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/assets', {
                asset_name,
                description,
                purchase_date,
                retired_date,
                status
            });



            alert('Asset created successfully');
            setAssetName('');
            setDescription('');
            setPurchaseDate('');
            setRetirementDate('');
            setStatus('active');
        } catch (error) {
            console.error(error);
            alert('Error creating asset');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-md">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Asset Name:</label>
                <input
                    type="text"
                    value={asset_name}
                    onChange={(e) => setAssetName(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Purchase Date:</label>
                <input
                    type="date"
                    value={purchase_date}
                    onChange={(e) => setPurchaseDate(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Retired Date:</label>
                <input
                    type="date"
                    value={retired_date}
                    onChange={(e) => setRetirementDate(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Status:</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="active">Active</option>
                    <option value="retired">Retired</option>
                </select>
            </div>
            <button
                type="submit"
                className="w-full  bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
                Submit
            </button>
        </form>
    );
}
