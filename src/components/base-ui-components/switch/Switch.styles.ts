import { switchClasses } from "@mui/base";
import { styled } from "@mui/system";

const brandColors = {
  blackPearl: '#00262B',
  warmBlack: '#003D4A'
};

const colors = {
  white: "fff"
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
  border: 2px solid ${brandColors.warmBlack};
  background: ${colors.white};
  border-radius: 1.143rem;
  transition: all 250ms;

  &.${switchClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchClasses.track} {
    box-sizing: border-box;
    background: ${colors.white};
    border: 1px solid ${brandColors.warmBlack};
    border-radius: 24px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
    box-shadow: inset 0px 1px 1px ${
      theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.05)'
    };
  }

  &:hover .${switchClasses.track} {
    background: ${brandColors.blackPearl};
    border-color: ${brandColors.warmBlack};
  }

  &.${switchClasses.focusVisible} .${switchClasses.track} {
    box-shadow: 0 0 0 3px ${brandColors.warmBlack};
  }

  & .${switchClasses.thumb} {
    box-sizing: border-box;
    border: 1px solid ${brandColors.warmBlack};
    display: block;
    width: 16px;
    height: 16px;
    top: 4px;
    left: 4px;
    border-radius: 16px;
    background-color: #FFF;
    position: relative;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
    box-shadow: 0px 1px 2px ${
      theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.1)'
    };
  }

  &.${switchClasses.checked} {
    .${switchClasses.thumb} {
      left: 18px;
      background-color: #fff;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
    }

    .${switchClasses.track} {
      border: none;
      background: ${colors.white};
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
