import Image from "next/image";
import LogoSVG from './logo.svg';

export const Logo = () => {
    return <Image width={125} height={100} src={LogoSVG} alt="Logo"/>;
}; 
