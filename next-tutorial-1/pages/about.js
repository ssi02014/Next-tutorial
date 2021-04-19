import React from "react";
import { Divider, Header, List, ListItem } from "semantic-ui-react";

const About = () => {
  return (
    <div>
      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        회사 소개
      </Header>
      <Divider />
      <List>
        <ListItem>
          <List.Icon name="users" />
          <List.Content>Wooahan Agile</List.Content>
        </ListItem>
        <ListItem>
          <List.Icon name="marker" />
          <List.Content>South Korea, Seoul</List.Content>
        </ListItem>
        <ListItem>
          <List.Icon name="mail" />
          <List.Content>ssi02014@naver.com</List.Content>
        </ListItem>
        <ListItem>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://github.com/ssi02014/Next-tutorial">Repository</a>
          </List.Content>
        </ListItem>
      </List>
    </div>
  );
};

export default About;
