import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { Button } from "react-native-elements";
import moment from "moment";
import FullWidthImage from "../../components/FullWidthImage";
import { REGEX_NTH_CHARS } from "../../constants";
import { Container, Content, Subtitle, Title } from "./Details.styled";
import { openLink } from "../../utils";

const Details = ({ route, navigation }) => {
  useEffect(() => {
    navigation.setOptions({ headerTitle: route.params.source.name });
  }, []);

  return (
    <ScrollView>
      <Container>
        <Title onPress={() => openLink(route.params.url)}>
          {route.params.title}
        </Title>
        <Subtitle>{route.params.url}</Subtitle>
        <Subtitle>
          {route.params.author}, {moment(route.params.publishedAt).fromNow()}
        </Subtitle>
      </Container>
      <FullWidthImage uri={route.params.urlToImage} />
      <Container>
        <Content>{route.params.description}</Content>
        <Content>{route.params.content.replace(REGEX_NTH_CHARS, "")} </Content>
        <Button
          type="outline"
          title="Read more"
          onPress={() => openLink(route.params.url)}
        />
      </Container>
    </ScrollView>
  );
};

export default Details;
