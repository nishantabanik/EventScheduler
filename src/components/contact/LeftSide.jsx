import FirstName from "./FirstName"; //import FirstName
import SecondName from "./SecondName"; //import SecondName
import Email from "./Email"; //import Email
import Phone from "./Phone"; //import Phone
import Message from "./Message"; //import Message
import Plan from "./Plan"; //import Plan
import IntroPage from "./IntroPage"; //import IntroPage
import ContactSend from "./ContactSend"; //import ContactSend
import BackToHome from "./BackToHome"; //import BackToHome
const LeftSide = () => {
  return (
    <form action="" className="w-full justify-center items-center lg:w-[50%]">
      <FirstName />
      <SecondName />
      <Email />
      <Phone />
      <Message />
      <Plan />
      <IntroPage />
      <ContactSend />
      <BackToHome />
    </form>
  );
};

export default LeftSide;
