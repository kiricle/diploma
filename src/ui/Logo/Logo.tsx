import Image from "next/image";
import LogoSVG from './logo.svg';

export const Logo = () => {
    return <Image width={75} height={75} src={LogoSVG} alt="Logo"/>;
}; 
