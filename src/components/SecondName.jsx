const SecondName = () => {
  return (
    <div className="ml-[42%] lg:ml-[0]">
      <label htmlFor="secondName" className="text-accent">
        Second Name:
      </label>
      <br />
      <input
        type="text"
        id="secondName"
        name="secondName"
        className="w-[45%] bg-tertiary text-accent"
      />

      <br />
    </div>
  );
};

export default SecondName;
