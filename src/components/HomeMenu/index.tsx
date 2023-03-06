import { Stack } from '@mui/material';
import Logo from '../Logo';
import { HomeMenuBox, PlayCpuBtn, PlayPlayerBtn, GameRulesBtn } from './styles';

const HomeMenu = () => {
  return (
    <HomeMenuBox>
      <Stack>
        <Logo />
        <Stack width="100%" marginTop="60px" paddingX="10px" spacing='24px'>
          <PlayCpuBtn>Play vs CPU</PlayCpuBtn>
          <PlayPlayerBtn>Play vs Player</PlayPlayerBtn>
          <GameRulesBtn>Game Rules</GameRulesBtn>
        </Stack>
      </Stack>
    </HomeMenuBox>
  );
};

export default HomeMenu;