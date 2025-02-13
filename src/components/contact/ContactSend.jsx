const ContactSend = () => {
  const handleClick = () => {
    alert("Message and Info send!");
  };
  return (
    <div className="">
      <button
        onClick={handleClick}
        type="submit"
        className="btn btn-outline btn-warning text-accent   onClick={onClick} text-lg hover:text-xl ml-[42%] lg:ml-[0] lg:text-2xl px-12 rounded-xl lg:hover:text-3xl"
      >
        Send
      </button>
    </div>
  );
};

export default ContactSend;
