import { Button } from '@mantine/core';
import { createStyles } from '@mantine/core';
import { useContext } from 'react';
import { ModeContext } from '../../Context/Mode/';
import './styles.scss'

export const useStyles = createStyles((theme) => ({
  button: {
    // backgroundColor: theme.colors.teal[9],
    borderRadius: theme.radius.sm,
  },
}));

function Main() {
  const { classes } = useStyles();
  const { mode } = useContext(ModeContext);

  return (
    <>
      <Button
        id="my-button"
        className={classes.button}
        variant="gradient" 
        gradient={{ from: 'cyan.9', to: 'grape.9', deg: 90 }}
        size="md"
        uppercase
      >
        Click me! I Do Nothing!
      </Button>

      <h3>{mode} mode from context!</h3>


      {/* I can do this, confirmed with classMode, but it is painful! */}
      {/* <ModeContext.Consumer>
          {
            ({ mode }) => (
              <>
                <h2>ModeProvider Initial State</h2>
                <h3 data-testid="mode-test">{mode} mode from context!</h3>
              </>
            )
          }
        </ModeContext.Consumer> */}
    </>
  );
}

export default Main;
