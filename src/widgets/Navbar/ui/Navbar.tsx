import { FunctionComponent } from 'react';
import classNames from 'classnames';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FunctionComponent<NavbarProps> = ({ className }) => {
  return <div className={classNames(cls.Navbar, {}, [className])}></div>;
};

export default Navbar;
