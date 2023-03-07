import "./Header.scss";

interface HeaderProps {
  titleText: string;
}

const Header = (props: HeaderProps) => {
  return (
    <header id="header">
      <h1 className="text-3xl font-bold">{props.titleText}</h1>
    </header>
  );
};

export default Header;
