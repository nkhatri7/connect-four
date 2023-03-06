import { Box, styled } from "@mui/material";
import PlayCpuIcon from '../../assets/images/player-vs-cpu.svg';
import PlayPlayerIcon from '../../assets/images/player-vs-player.svg';

const HomeMenuBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 480px;
  @media screen and (min-width: 500px) {
    background-color: var(--purple);
    padding: 47px 37px;
    transition: background-color 0.3s ease;
    border-radius: 40px;
    border: 3px solid #000000;
    box-shadow: 0 10px #000000;
  }
`;

const HomeMenuBtn = styled('button')`
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

const PlayCpuBtn = styled(HomeMenuBtn)`
  background-color: var(--red);
  color: #FFFFFF;
  &::after {
    content: url(${PlayCpuIcon});
  }
`;

const PlayPlayerBtn = styled(HomeMenuBtn)`
  background-color: var(--yellow);
  color: #000000;
  &::after {
    content: url(${PlayPlayerIcon});
  }
`;

const GameRulesBtn = styled(HomeMenuBtn)(() => ({
  backgroundColor: '#FFFFFF',
  color: '#000000',
}));

export { HomeMenuBox, PlayCpuBtn, PlayPlayerBtn, GameRulesBtn };