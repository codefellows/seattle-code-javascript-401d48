import { Card, createStyles, Grid, NumberInput, Switch, Text, TextInput } from '@mantine/core';
import { IconSettings } from '@tabler/icons';
import { useContext } from 'react';
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
  } = useContext(SettingsContext)
  return (
    <>
      <h1 className={classes.h1}><IconSettings /> Manage Settings</h1>
      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm={6}>
          <Card withBorder p="xs">
            <Text>Update Settings</Text>

            <Switch
              label="Show Completed ToDos"
              checked={showCompleted}
              onChange={(event) => setShowCompleted(event.currentTarget.checked)}
            />

            <NumberInput
              onChange={(value) => setPageItems(value)}
              defaultValue={pageItems}
              placeholder={pageItems}
              label="Items Per Page"
            />

            <TextInput
              placeholder={sort}
              // name="text"
              onChange={(e) => setSort(e.target.value)}
              label="Sort Keyword"
            />
          </Card>
        </Grid.Col>
        <Grid.Col xs={12} sm={6}>
          <Grid.Col xs={12} sm={6}>
            <Card withBorder p="xs">
              <Text>results here</Text>
            </Card>
          </Grid.Col>
        </Grid.Col>

      </Grid>
    </>
  )
}

export default SettingsForm;
