import { Stack } from '@mui/material';
import Logo from '../Logo';
import ScreenWrapper from '../ScreenWrapper';
import { 
  MenuWrapper,
  MenuSection,
  MenuBox, 
  MenuBtnContainer,
  PlayCpuBtn, 
  PlayPlayerBtn, 
  GameRulesBtn, 
} from './styles';

const MainMenu = () => {
  return (
    <ScreenWrapper>
      <MenuWrapper>
        <MenuSection>
          <MenuBox>
            <Stack spacing='60px'>
              <Logo />
              <MenuBtnContainer spacing='24px'>
                <PlayCpuBtn>Play vs CPU</PlayCpuBtn>
                <PlayPlayerBtn>Play vs Player</PlayPlayerBtn>
                <GameRulesBtn>Game Rules</GameRulesBtn>
              </MenuBtnContainer>
            </Stack>
          </MenuBox>
        </MenuSection>
        <MenuSection>
          
        </MenuSection>
      </MenuWrapper>
    </ScreenWrapper>
  );
};

export default MainMenu;