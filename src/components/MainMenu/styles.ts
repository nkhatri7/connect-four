import { Box, Stack, styled } from "@mui/material";
import PlayCpuIcon from '../../assets/images/player-vs-cpu.svg';
import PlayPlayerIcon from '../../assets/images/player-vs-player.svg';

const MenuWrapper = styled(Stack)`
  height: 200%;
  transition: all var(--transition-time);
  background-color: var(--purple);
  padding: 0 10px;
  @media screen and (min-width: 500px) {
    background-color: var(--dark-purple);
  }
`;

const MenuSection = styled(Stack)(() => ({
  height: '50%',
  justifyContent: 'center',
  alignItems: 'center',
}));

const MenuBox = styled(Box)`
  width: 100%;
  max-width: 480px;
  background-color: var(--purple);
  @media screen and (min-width: 500px) {
    padding: 47px 37px;
    transition: background-color var(--transition-time);
    border-radius: 40px;
    border: 3px solid #000000;
    box-shadow: 0 10px #000000;
  }
`;

const MenuBtnContainer = styled(Stack)(() => ({
  width: '100%',
  padding: '0 10px',
}));

const MenuBtn = styled('button')`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 87px;
  padding-inline: 20px;
  border: 3px solid #000000;
  border-radius: 20px;
  box-shadow: 0 10px #000000;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  &::after {
    position: relative;
    right: -3px;
    height: 46px;
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border: 3px solid var(--dark-purple);
      box-shadow: 0 10px var(--dark-purple);
    }
  }
`;

const PlayCpuBtn = styled(MenuBtn)`
  background-color: var(--red);
  color: #FFFFFF;
  &::after {
    content: url(${PlayCpuIcon});
  }
`;

const PlayPlayerBtn = styled(MenuBtn)`
  background-color: var(--yellow);
  color: #000000;
  &::after {
    content: url(${PlayPlayerIcon});
  }
`;

const GameRulesBtn = styled(MenuBtn)(() => ({
  backgroundColor: '#FFFFFF',
  color: '#000000',
}));

export { 
  MenuWrapper,
  MenuSection,
  MenuBox, 
  MenuBtnContainer,
  PlayCpuBtn, 
  PlayPlayerBtn, 
  GameRulesBtn,
};