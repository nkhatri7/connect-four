import { List, ListItem, Stack, styled, Typography } from "@mui/material";
import CheckIcon from '../../assets/images/icon-check.svg';
import CheckIconHover from '../../assets/images/icon-check-hover.svg';

const GameRulesBox = styled(Stack)`
  width: 100%;
  max-width: 480px;
  max-height: 90%;
  background-color: white;
  border: 3px solid black;
  border-radius: 40px;
  box-shadow: 0 10px black;
  position: relative;
  padding: clamp(15px, calc(30vh - 159px), 30px) 34px 54px;
  margin-bottom: 37.5px;
  @media screen and (max-width: 499px) {
    padding-inline: 20px;
  }
`;

const RulesTextWrapper = styled('div')(() => ({
  width: '100%',
  height: '100%',
  overflowY: 'scroll',
}));

const RulesBoldText = styled(Typography)(() => ({
  fontWeight: '700',
  textTransform: 'uppercase',
}));

const RulesTitle = styled(RulesBoldText)`
  font-size: 56px;
  text-align: center;
  margin-bottom: clamp(18px, calc(22vh - 109.6px), 29px);
  @media screen and (max-width: 320px) {
    font-size: 32px;
    margin-bottom: 16px;
  }
`;

const RulesHeading = styled(RulesBoldText)`
  font-size: 16px;
  color: var(--purple);
  margin-bottom: 16px;
  @media screen and (max-width: 320px) {
    margin-bottom: 5px;
  }
`;

const RulesBodyText = styled(Typography)`
  margin-bottom: clamp(16px, calc(32vh - 169.6px), 32px);
  fontWeight: 500;
  @media screen and (max-width: 320px) {
    margin-bottom: 20px;
  }
`;

const RulesList = styled(List)(() => ({
  counterReset: 'counter',
  listStyle: 'none',
  padding: '0',
  margin: '0',
}));

const RulesListItem = styled(ListItem)`
  counter-increment: counter;
  position: relative;
  padding: 0 0 0 27px;
  font-weight: 500;
  align-items: flex-start;
  &:not(:last-of-type) {
    margin-bottom: 10px;
    @media screen and (max-width: 320px) {
      margin-bottom: 5px;
    }
  }
  &::before {
    content: counter(counter);
    position: absolute;
    left: 0;
    font-weight: 700;
  }
`;

const DoneBtn = styled('button')`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -40px;
  width: 70px;
  height: 75px;
  margin-inline: auto;
  background-color: transparent;
  border: none;
  background-image: url(${CheckIcon});
  @media (hover: hover) and (pointer: fine) {
    background-image: url(${CheckIcon}), url(${CheckIconHover});
    &:hover {
      background-size: 0, 100%;
    }
  }
`;

export { 
  GameRulesBox,
  RulesTextWrapper,
  RulesTitle, 
  RulesHeading, 
  RulesBodyText,
  RulesList,
  RulesListItem,
  DoneBtn,
};