const Phone = () => {
  return (
    <div className="ml-[42%] lg:ml-[0]">
      <label htmlFor="phone" className="text-accent">
        Phone:
      </label>
      <br />
      <input
        type="phone"
        id="phone"
        name="phone"
        className="w-[45%] bg-tertiary text-accent"
      />{" "}
      <br />
    </div>
  );
};

export default Phone;
