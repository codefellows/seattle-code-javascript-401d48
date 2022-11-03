import { createStyles, Group, Header, Navbar, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import Login from '../Login';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    padding: theme.spacing.md,
    fontSize: theme.fontSizes.md,
    color: theme.colors.gray[0],
  },
  link: {
    textDecoration: 'none',
    color: theme.colors.gray[0],
  }
}))

const AppHeader = ({ incomplete }) => {
  const { classes } = useStyles();

  return (
    <Header data-testid="todo-header">
      <Navbar className={classes.navbar}>
        <Group position="apart">
          <Group>
            <Link className={classes.link} to="/" default>Home</Link>
            <Link className={classes.link} to="/settings">Settings</Link>
          </Group>
          <Login />
        </Group>
      </Navbar>
    </Header>
  )
}

export default AppHeader
