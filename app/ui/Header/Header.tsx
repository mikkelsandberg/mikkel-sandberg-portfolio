import '@/app/ui/Header/Header.scss';

type HeaderProps = {
  text: string;
};

export default function Header({text}: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header__text">{text}</h1>
    </header>
  );
}
