import { useState } from "react";
import axios from "axios";

const NewEntryModal = ({ onEventCreated }) => {
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        date: "",
        description: "",
    });

    // Loading status
    const [loading, setLoading] = useState(false);

    // Error handling
    const [error, setError] = useState(null);

    // Get Auth Token from local storage
    const getAuthToken = () => localStorage.getItem("authToken");

    // Date formatting for further processing
    const formattedDate = formData.date;

    // POST request to create a new event incl. auth token
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Event object
        const newEvent = {
            title: formData.title,
            location: formData.location,
            date: formattedDate,
            description: formData.description,
        };

        // 🚀 Debugging: Logging JSON Payload 
        console.log("📡 JSON Payload:", JSON.stringify(newEvent, null, 2));


        // 🚀 Debugging: Logging new event
        console.log("📡 Send new event:", newEvent);
        console.log("📆 Send Date:", `${formData.date}T${formData.time}:00Z`);

        try {
            // get auth token from local storage
            const authToken = getAuthToken();

            if(!authToken) {
                throw new Error ("No auth token found, please log in.");
            }

            // 🚀 Debugging: Logging token
            console.log("🔑 Auth-Token:", authToken);

            const response = await axios.post(
                "http://localhost:3001/api/events",
                newEvent,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${authToken}`, // Send Token as Bearer-Token
                    },
                }
            );

            console.log("Event successfully created:", response.data);


            // If "onEventCreated" is passed as prop, update event list
            if (onEventCreated) {
                onEventCreated(response.data);
            }

            // Close modal
            document.getElementById("my_modal_3").close();

            // Reset form
            setFormData({
                title: "",
                location: "",
                date: "",
                description: "",
            });

        } catch (error) {
            console.error("🚨 Fehler beim Erstellen des Events:", error.response?.data || error.message);
            
            // 🚀 Debugging: Display detailed API-error
            if (error.response) {
                console.log("🔴 API Status:", error.response.status);
                console.log("📄 API Response Data:", JSON.stringify(error.response.data, null, 2));
                console.log("📄 API Headers:", JSON.stringify(error.response.headers, null, 2));
            }
            
            setError(error.response?.data?.message || error.message);
        } finally {
            setLoading(false);
        }
    };

    return(
        <div>
        <button 
            className="btn btn-outline btn-warning text-[#ffd60a]" 
            onClick={() => document.getElementById("my_modal_3").showModal()}
        >
            Create a new event
        </button>

        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                {/* Close-button */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
                        onClick={() => document.getElementById("my_modal_3").close()}>✕</button>

                <h3 className="font-bold text-2xl mb-4 text-warning">Create a new banana event!</h3>

                {/* Submit form */}
                <form onSubmit={handleSubmit}>
                    {/* Event Title */}
                    <div className="flex flex-col">
                        <span className="label-text text-white">Event Title</span>
                        <input 
                            type="text" 
                            placeholder="Enter event title" 
                            className="input input-bordered my-1 w-full max-w-xs"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            required
                        />
                    </div>

                    {/* Event Location */}
                    <div className="flex flex-col mt-2">
                        <span className="label-text text-white">Event Location</span>
                        <input 
                            type="text" 
                            placeholder="Enter event location" 
                            className="input input-bordered my-1 w-full max-w-xs"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            required
                        />
                    </div>

                    {/* Event Date & Time */}
                    <div className="flex flex-col mt-2">
                        <span className="label-text text-white">Event Date & Time</span>
                        <div className="flex gap-2">
                            <input 
                                type="date" 
                                className="input input-bordered my-1 w-1/2"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    {/* Event Description */}
                    <div className="flex flex-col">
                        <span className="label-text text-white mt-2">Event Details</span>
                        <textarea 
                            className="textarea textarea-bordered w-full my-1" 
                            placeholder="Provide an event description"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            required
                        />
                    </div>

                    {/* Display error */}
                    {error && <p className="text-red-400 text-sm mt-2">⚠️ {error}</p>}

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-2 justify-end">
                        {/* Submit-Button including Loading-Status */}
                        <button 
                            type="submit" 
                            className="btn btn-outline btn-warning" 
                            disabled={loading}
                        >
                            {loading ? "Creating..." : "Create"}
                        </button>

                        {/* Cancel-Button to close Modal */}
                        <button 
                            type="button" 
                            className="btn btn-outline"
                            onClick={() => document.getElementById("my_modal_3").close()} 
                            >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </dialog>
    </div>
    );
};

export default NewEntryModal;