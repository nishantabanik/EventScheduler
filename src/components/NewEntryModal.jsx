import { useState } from "react";
import axios from "axios";

const NewEntryModal = ({ onEventCreated }) => {
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        date: "",
        time: "",
        image: "",
        description: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getAuthToken = () => localStorage.getItem("authToken");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const newEvent = {
            title: formData.title,
            location: formData.location,
            date: formData.date,
            time: formData.time,
            image: formData.image,
            description: formData.description,
        };

        try {
            const authToken = getAuthToken();

            if (!authToken) {
                throw new Error("No auth token found, please log in.");
            }

            const response = await axios.post(
                "http://localhost:3001/api/events",
                newEvent,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${authToken}`,
                    },
                }
            );

            if (onEventCreated) {
                onEventCreated(response.data);
            }

            document.getElementById("my_modal_3").close();

            setFormData({
                title: "",
                location: "",
                date: "",
                time: "",
                image: "",
                description: "",
            });
        } catch (error) {
            setError(error.response?.data?.message || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button
                className="btn btn-outline btn-warning text-[#ffd60a]"
                onClick={() => document.getElementById("my_modal_3").showModal()}
            >
                Create a new event
            </button>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => document.getElementById("my_modal_3").close()}
                    >
                        ✕
                    </button>

                    <h3 className="font-bold text-2xl mb-4 text-warning">
                        Create a new banana event!
                    </h3>

                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <span className="label-text text-white">Event Title</span>
                            <input
                                type="text"
                                placeholder="Enter event title"
                                className="input input-bordered my-1 w-full max-w-xs"
                                value={formData.title}
                                onChange={(e) =>
                                    setFormData({ ...formData, title: e.target.value })
                                }
                                required
                            />
                        </div>

                        <div className="flex flex-col mt-2">
                            <span className="label-text text-white">Event Location</span>
                            <input
                                type="text"
                                placeholder="Enter event location"
                                className="input input-bordered my-1 w-full max-w-xs"
                                value={formData.location}
                                onChange={(e) =>
                                    setFormData({ ...formData, location: e.target.value })
                                }
                                required
                            />
                        </div>

                        <div className="flex flex-col mt-2">
                            <span className="label-text text-white">Event Date & Time</span>
                            <div className="flex gap-2">
                                <input
                                    type="date"
                                    className="input input-bordered my-1 w-1/2"
                                    value={formData.date}
                                    onChange={(e) =>
                                        setFormData({ ...formData, date: e.target.value })
                                    }
                                    required
                                />
                                <input
                                    type="time"
                                    className="input input-bordered my-1 w-1/2"
                                    value={formData.time}
                                    onChange={(e) =>
                                        setFormData({ ...formData, time: e.target.value })
                                    }
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col mt-2">
                            <span className="label-text text-white">Event Image (URL)</span>
                            <input
                                type="text"
                                placeholder="Enter image URL"
                                className="input input-bordered my-1 w-full max-w-xs"
                                value={formData.image}
                                onChange={(e) =>
                                    setFormData({ ...formData, image: e.target.value })
                                }
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <span className="label-text text-white mt-2">Event Details</span>
                            <textarea
                                className="textarea textarea-bordered w-full my-1"
                                placeholder="Provide an event description"
                                value={formData.description}
                                onChange={(e) =>
                                    setFormData({ ...formData, description: e.target.value })
                                }
                                required
                            />
                        </div>

                        {error && (
                            <p className="text-red-400 text-sm mt-2">⚠️ {error}</p>
                        )}

                        <div className="flex gap-4 mt-2 justify-end">
                            <button
                                type="submit"
                                className="btn btn-outline btn-warning"
                                disabled={loading}
                            >
                                {loading ? "Creating..." : "Create"}
                            </button>

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