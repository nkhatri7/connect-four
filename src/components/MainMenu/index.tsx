import { Stack } from '@mui/material';
import GameRules from '../GameRules';
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
  const showGameRules = () => {
    document.body.setAttribute('data-rules', 'true');
  };

  return (
    <ScreenWrapper>
      <MenuWrapper className='main-menu-wrapper'>
        <MenuSection>
          <MenuBox>
            <Stack spacing='60px'>
              <Logo />
              <MenuBtnContainer spacing='24px'>
                <PlayCpuBtn>Play vs CPU</PlayCpuBtn>
                <PlayPlayerBtn>Play vs Player</PlayPlayerBtn>
                <GameRulesBtn onClick={showGameRules}>Game Rules</GameRulesBtn>
              </MenuBtnContainer>
            </Stack>
          </MenuBox>
        </MenuSection>
        <MenuSection>
          <GameRules />
        </MenuSection>
      </MenuWrapper>
    </ScreenWrapper>
  );
};

export default MainMenu;