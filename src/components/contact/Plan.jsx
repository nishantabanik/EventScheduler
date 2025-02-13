const Plan = () => {
  return (
    <div className="ml-[42%] lg:ml-[0]">
      <label htmlFor="plan-select" className="text-accent">
        Choose a banana plan:{" "}
      </label>
      <select
        name="plan"
        id="banana-select"
        className=" bg-tertiary text-accent "
      >
        <option value="">--Please choose an option--</option>
        <option value="basic">BASIC BANANA</option>
        <option value="ripe">RIPE & READY</option>
        <option value="royale">BANANA ROYALE</option>
        <p>See more details in intro page:</p>
      </select>
      <br />
      <br />
    </div>
  );
};

export default Plan;
