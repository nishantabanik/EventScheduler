const Email = () => {
  return (
    <div className="ml-[42%] lg:ml-[0]">
      <label htmlFor="email" className="text-accent">
        Email:
      </label>
      <br />
      <input
        type="email"
        id="email"
        name="email"
        className="w-[45%] bg-tertiary text-accent"
      />{" "}
      <br />
    </div>
  );
};

export default Email;
