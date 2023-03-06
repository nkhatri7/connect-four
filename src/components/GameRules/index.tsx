import { 
  DoneBtn,
  GameRulesBox, 
  RulesBodyText, 
  RulesHeading, 
  RulesList, 
  RulesListItem, 
  RulesTextWrapper, 
  RulesTitle,
} from "./styles";


const GameRules = () => {
  const hideGameRules = () => {
    document.body.setAttribute('data-rules', 'false');
  }

  return (
    <GameRulesBox>
      <RulesTextWrapper>
        <RulesTitle>Rules</RulesTitle>
        <RulesHeading>Objective</RulesHeading>
        <RulesBodyText>
          Be the first player to connect 4 of the same coloured discs in a row 
          (either vertically, horizontally, or diagonally)
        </RulesBodyText>
        <RulesHeading>How to play</RulesHeading>
        <RulesList>
          <RulesListItem>Red goes first in the first game.</RulesListItem>
          <RulesListItem>
            Players must alternate turns, and only one disc can be dropped in 
            each turn.
          </RulesListItem>
          <RulesListItem>
            The game ends when there is a 4-in-a-row or a stalemate.
          </RulesListItem>
          <RulesListItem>
            The started of the previous game goes second on the next game.
          </RulesListItem>
        </RulesList>
        <DoneBtn onClick={hideGameRules}></DoneBtn>
      </RulesTextWrapper>
    </GameRulesBox>
  );
};

export default GameRules;