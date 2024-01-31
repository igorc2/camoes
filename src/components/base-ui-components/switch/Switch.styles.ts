import { switchClasses } from "@mui/base";
import { styled } from "@mui/system";

const brandColors = {
  blackPearl: '#00262B',
  warmBlack: '#003D4A'
};

const colors = {
  white: "#fff"
}

// background: ${theme.palette.mode === 'dark' ? brandColors.blackPearl : brandColors.blackPearl};

export const Root = styled('span')(
  ({ theme }) => `
  box-sizing: border-box;
  font-size: 0;
  position: relative;
  display: inline-block;
  margin: 10px;
  cursor: pointer;

  width: 52px;
  height: 32px;
  background: ${colors.white};
  border-radius: 1.143rem;
  transition: all 250ms;

  &:hover .${switchClasses.thumb} {
    box-shadow: 0px 0px 0px 12px rgba(0,38,43,0.2);
  }

  &.${switchClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchClasses.track} {
    box-sizing: border-box;
    background: ${colors.white};
    border: 2px solid ${brandColors.warmBlack};
    border-radius: 24px;
    display: block;
    height: 100%;
    width: 100%;

    transition: all 250ms;
    position: absolute;
  }

  &:hover .${switchClasses.track} {
    background: ${colors.white};
    border-color: ${brandColors.warmBlack};
  }

  &:active .${switchClasses.thumb} {
    width: 30px;
    height: 30px;
    margin: 0;
    border-color: ${brandColors.warmBlack};
    left: 1px;
    top: 1px;
    box-shadow: 0px 0px 0px 6px rgba(0,38,43,0.2);
  }

  &.${switchClasses.focusVisible} .${switchClasses.track} {
    box-shadow: 0 0 0 3px ${brandColors.warmBlack};
  }

  & .${switchClasses.thumb} {
    
    margin: 4px;
      
    box-sizing: border-box;
    border: 1px solid ${brandColors.warmBlack};
    display: block;
    width: 16px;
    height: 16px;
    top: 4px;
    left: 4px;
    border-radius: 16px;
    background-color: ${brandColors.warmBlack};
    position: relative;
    transition: all 250ms;
  }

  &.${switchClasses.checked} {
    
    .${switchClasses.thumb} {
      border: none;
      left: 24px;
      margin: 0;
      background: ${colors.white};
      width: 24px;
      height: 24px;
      box-shadow: 0px 0px 0px 8px rgba(0,38,43,0.2);
    }

    &:active .${switchClasses.thumb} {
      left: 22px;
      border: none;
      width: 28px;
      height: 28px;
      border-color: 2px solid ${brandColors.warmBlack};
      box-shadow: 0px 0px 0px 6px rgba(0,38,43,0.2);
      top: 2px;
    }

    .${switchClasses.track} {

      background: ${brandColors.warmBlack};
    }
  }

  &:hover .${switchClasses.checked} .${switchClasses.track} {
    background: ${colors.white};
  }

  & .${switchClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }


    

  `,
);
