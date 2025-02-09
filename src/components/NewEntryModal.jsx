const NewEntryModal = () => {

    return(
        <div>
            <button className="btn btn-outline btn-warning text-[#ffd60a]" onClick={()=>document.getElementById('my_modal_3').showModal()}>Create a new event</button>
                <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-2xl mb-4">Create a new banana event!</h3>
                    <div className="flex flex-col">
                        <span className="label-text"> Event Title</span>
                        <input type="text" placeholder="Enter event title" className="input input-bordered my-1 w-full max-w-xs" />
                    </div>
                    <div className="flex flex-col mt-2">
                        <span className="label-text"> Event Location</span>
                        <input type="text" placeholder="Enter event location" className="input input-bordered my-1 w-full max-w-xs" />
                    </div>
                    <div className="flex flex-col mt-2">
                        <span className="label-text"> Event Date & Time</span>
                        <div className="flex gap-2">
                            <input type="date" className="input input-bordered my-1 w-1/2" />
                            <input type="time" className="input input-bordered my-1 w-1/2" />
                        </div>
                    </div>
                    <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Event Image</span>
                        </div>
                        <input type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
                        <div className="label">
                        </div>
                    </label>
                    <div className="flex flex-col">
                        <span className="label-text"> Event Details</span>
                        <textarea className="textarea textarea-bordered w-full my-1" placeholder="Provide an event description"></textarea>
                    </div>
                    <div className="flex gap-4 mt-2 justify-end">
                    <button className="btn btn-outline btn-success">Create</button>
                    <button className="btn btn-outline">Cancel</button>
                    </div>
                </div>
                </dialog>
        </div>
    );
};

export default NewEntryModal;