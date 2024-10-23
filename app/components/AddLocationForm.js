// // app/components/AddLocationForm.js

// // Mark the file as a Client Component
// "use client";

// import { useState } from 'react';
// import axios from 'axios';

// export default function AddLocation() {
//     const [locationName, setLocationName] = useState('');
//     const [address, setAddress] = useState('');
//     const [message, setMessage] = useState('');

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Create the location object
//         const newLocation = {
//             location_name: locationName,
//             address: address,
//         };

//         try {
//             // Send a POST request to the backend
//             const response = await axios.post('http://localhost:5000/api/locations', newLocation);

//             // Display success message and clear the form
//             setMessage('Location added successfully!');
//             setLocationName('');
//             setAddress('');
//         } catch (err) {
//             console.error('Error adding location:', err);
//             setMessage('Failed to add location. Please try again.');
//         }
//     };

//     return (
//         <div>
//             <h1>Add New Location</h1>

//             {message && <p>{message}</p>}

//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="locationName">Location Name:</label>
//                     <input
//                         type="text"
//                         id="locationName"
//                         value={locationName}
//                         onChange={(e) => setLocationName(e.target.value)}
//                         required
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="address">Address:</label>
//                     <textarea
//                         id="address"
//                         value={address}
//                         onChange={(e) => setAddress(e.target.value)}
//                         required
//                     />
//                 </div>

//                 <button type="submit">Add Location</button>
//             </form>
//         </div>
//     );
// }



// app/components/AddLocationForm.js

"use client";

import { useState } from 'react';
import axios from 'axios';

export default function AddLocation() {
    const [locationName, setLocationName] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create the location object
        const newLocation = {
            location_name: locationName,
            address: address,
        };

        try {
            // Send a POST request to the backend
            const response = await axios.post('http://localhost:5000/api/locations', newLocation);

            // Display success message and clear the form
            setMessage('Location added successfully!');
            setLocationName('');
            setAddress('');
        } catch (err) {
            console.error('Error adding location:', err);
            setMessage('Failed to add location. Please try again.');
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Add New Location</h1>

            {message && (
                <p className={`mb-4 ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                    {message}
                </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Location Name */}
                <div>
                    <label htmlFor="locationName" className="block text-gray-700 font-medium mb-1">
                        Location Name:
                    </label>
                    <input
                        type="text"
                        id="locationName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={locationName}
                        onChange={(e) => setLocationName(e.target.value)}
                        placeholder="Enter location name"
                        required
                    />
                </div>

                {/* Address */}
                <div>
                    <label htmlFor="address" className="block text-gray-700 font-medium mb-1">
                        Address:
                    </label>
                    <textarea
                        id="address"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter address"
                        rows="4"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200"
                >
                    Add Location
                </button>
            </form>
        </div>
    );
}
