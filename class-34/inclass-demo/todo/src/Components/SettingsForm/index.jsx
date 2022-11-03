import { Button, Card, createStyles, Grid, NumberInput, Switch, Text, TextInput } from '@mantine/core';
import { IconSettings } from '@tabler/icons';
import { useContext, useState } from 'react';
import { When } from 'react-if';
import { SettingsContext } from '../../Context/Settings';

const useStyles = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    width: '80%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
  },
  formHeading: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
  },
}))

const SettingsForm = () => {
  const { classes } = useStyles();
  const {
    showCompleted,
    pageItems,
    sort,
    setShowCompleted,
    setPageItems,
    setSort,
    saveLocally,
  } = useContext(SettingsContext);

  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    saveLocally({ showCompleted, pageItems, sort })
  }
  return (
    <>
      <h1 className={classes.h1}><IconSettings /> Manage Settings</h1>
      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm={6}>
          <Card withBorder p="xs">
            <form onSubmit={handleSubmit}>
              <Text>Update Settings</Text>

              <Switch
                label="Show Completed ToDos"
                checked={showCompleted}
                onChange={(event) => setShowCompleted(event.currentTarget.checked)}
              />

              <NumberInput
                mb="sm"
                onChange={(value) => setPageItems(value)}
                label="Items Per Page"
              />

              <TextInput
                mb="sm"
                placeholder={sort}
                onChange={(e) => setSort(e.target.value)}
                label="Sort Keyword"
              />

              <Button type="submit">Show New Settings</Button>
            </form>
          </Card>
        </Grid.Col>
        <Grid.Col xs={12} sm={6}>
          <When condition={show}>
            <Card withBorder p="xs">
              <Card.Section>
                <Text m="xl">Updated Settings</Text>
              </Card.Section>
              <Text m="sm">{showCompleted ? 'Show' : 'Hide'} Completed ToDos</Text>
              <Text m="sm">items Per Page: {pageItems}</Text>
              <Text m="sm">Sort Keyword: {sort}</Text>
            </Card>
          </When>
        </Grid.Col>
      </Grid>
    </>
  )
}

export default SettingsForm;
