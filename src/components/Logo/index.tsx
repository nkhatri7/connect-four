import { styled } from "@mui/material";
import LogoSvg from '../../assets/images/logo.svg';

const StyledImage = styled('img')(() => ({
  height: '60px',
}));

const Logo = () => {
  return (
    <StyledImage src={LogoSvg} />
  );
};

export default Logo;