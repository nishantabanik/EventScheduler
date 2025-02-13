const Message = () => {
  return (
    <div className="ml-[42%] lg:ml-[0]">
      <label htmlFor="message" className="text-accent">
        Message:
      </label>
      <br />
      <textarea
        id="message"
        className="w-[45%] bg-tertiary text-accent"
      ></textarea>{" "}
      <br />
    </div>
  );
};

export default Message;
