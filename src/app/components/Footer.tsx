const Footer = () => {
  return (
    <footer className="absolute mx-auto w-screen left-0 bottom-0 text-center font-bold text-base text-MarineBlue p-4 max-md:p-4 max-md:text-xs  z-10">
      Challenge by
      <a
        className="text-PurplishBlue ml-1 hover:text-StrawberryRed  hover:underline"
        href="https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by
      <a
        className="text-PurplishBlue ml-1 hover:text-StrawberryRed hover:underline"
        href="https://www.frontendmentor.io/profile/SoulRvr29"
        target="_blank"
      >
        Paweł Chudecki
      </a>
      .
    </footer>
  );
};

export default Footer;
