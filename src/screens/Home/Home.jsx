import React, { useEffect, useState } from "react";
import { ScrollView, RefreshControl, SafeAreaView } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import Axios from "axios";
import { API, MAX_SUBTITLE_LEN } from "../../constants";
import { NoNewsFeed, Subtitle, Title } from "./Home.styled";

const Home = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => onRefresh, []);

  const onRefresh = () => {
    setRefreshing(true);
    Axios.get(API.FETCH_NEWS_TODAY)
      .then(({ data }) => {
        setArticles(data.articles);
        setRefreshing(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {articles.length === 0 && <NoNewsFeed>No newsfeed</NoNewsFeed>}
        {articles.length > 0 &&
          articles.map((article, i) => (
            <ListItem
              key={i}
              bottomDivider
              onPress={() => navigation.navigate("Details", article)}
              style={{ marginTop: 0, backgroundColor: "#fff" }}
            >
              <Avatar source={{ uri: article.urlToImage }} />
              <ListItem.Content>
                <Title>{article.title}</Title>
                <Subtitle style={{ flexDirection: "row" }}>
                  {article.description &&
                    article.description.substring(0, MAX_SUBTITLE_LEN)}
                  {article.description &&
                    article.description.length > MAX_SUBTITLE_LEN &&
                    "..."}
                </Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
