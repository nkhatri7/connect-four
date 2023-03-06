import { styled } from "@mui/material";

type ScreenWrapperProps = {
  children: JSX.Element | JSX.Element[],
};

const ScreenWrapper = (props: ScreenWrapperProps) => {
  const Wrapper = styled('div')(() => ({
    position: 'absolute',
    inset: '0',
  }));

  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
};

export default ScreenWrapper;