import React from "react";
import { List, ListItem, Text } from "native-base";

const ListData = props => {
  const { listings } = props;

  return (
    <List>
      {listings.appdata.map(item => (
        <ListItem key={item.id}>
          <Text>{item.name}</Text>
        </ListItem>
      ))}
    </List>
  );
};

export default ListData;
