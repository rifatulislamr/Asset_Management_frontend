import { useState } from 'react';
import axios from 'axios';

export default function RetireAssetForm() {
    const [asset_id, setAssetId] = useState('');
    const [retirement_date, setRetirementDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/retire', {
                asset_id,
                retirement_date,
            });
            alert('Asset retired successfully');
            setAssetId('');
            setRetirementDate('');
        } catch (error) {
            console.error(error);
            alert('Error retiring asset');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
            <h2 className="text-xl font-bold mb-4">Retire Asset</h2>
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
                <label className="block mb-1">Retirement Date</label>
                <input
                    type="date"
                    value={retirement_date}
                    onChange={(e) => setRetirementDate(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
                Retire Asset
            </button>
        </form>
    );
}
