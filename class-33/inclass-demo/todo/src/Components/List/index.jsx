import { Badge, Card, CloseButton, createStyles, Group, Pagination, Text } from '@mantine/core';
import { useContext, useState } from 'react';
import { When } from 'react-if';
import { SettingsContext } from '../../Context/Settings';

const useStyles = createStyles((theme) => ({
  badge: {
    textTransform: 'capitalize',
    fontSize: theme.fontSizes.xs,
    margin: '3px',
  }
}))

const List = ({ list, toggleComplete, deleteItem }) => {
  const { classes } = useStyles();

  const { pageItems, showCompleted } = useContext(SettingsContext)
  const [page, setPage] = useState(1);

  // pagination
  const listToRender = showCompleted ? list : list.filter(item => !item.complete);
  const listStart = pageItems * (page - 1);
  const listEnd = listStart + pageItems;
  const pageCount = Math.ceil(listToRender.length / pageItems);
  const displayList = listToRender.slice(listStart, listEnd);

  return (
    <>
      {displayList.map(item => (
        <Card key={item.id} withBorder shadow="md" pb="xs" mb="sm">
          <Card.Section withBorder>
            <Group position="apart">
              <Group position="left">
                <Badge
                  onClick={() => toggleComplete(item.id)}
                  className={classes.badge}
                  color={item.complete ? "green" : "red"}
                  variant="filled"
                >
                  {item.complete ? 'complete' : 'pending'}
                </Badge>
                <Text>{item.assignee}</Text>
              </Group>
              <CloseButton title="Delete ToDo Item" onClick={() => deleteItem(item.id)} />
            </Group>
          </Card.Section>
          <Text align="left">{item.text}</Text>
          <Text align="right"><small>Difficulty: {item.difficulty}</small></Text >
        </Card>
      ))}

      <When condition={listToRender.length > 0}>
        <Pagination page={page} onChange={setPage} total={pageCount} />
      </When>
    </>
  )
}

export default List;
