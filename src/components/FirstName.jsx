const FirstName = () => {
  return (
    <div className="ml-[42%] lg:ml-[0]">
      <label htmlFor="firstName" className="text-accent">
        First Name:
      </label>
      <br />
      <input
        type="text"
        id="firstName"
        name="firstName"
        className="w-[45%] bg-tertiary text-accent"
      />
      <br />
    </div>
  );
};

export default FirstName;
