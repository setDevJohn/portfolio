import { FaRegUser } from 'react-icons/fa';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { FaCode } from 'react-icons/fa6';
import { FaLaptopCode } from 'react-icons/fa6';


interface NavItem {
  label: string;
  path: string;
  icon?: React.ElementType;
}

export const navList: NavItem[] = [
  { label: 'Serviços', path: '/services', icon: FaLaptopCode },
  { label: 'Projetos', path: '/portfolio', icon: MdOutlineWorkOutline },
  { label: 'Habilidades', path: '/habilities', icon: FaCode },
  { label: 'Sobre', path: '/about', icon: FaRegUser },
  { label: 'Contato', path: '/contact', icon: AiOutlineMail },
];