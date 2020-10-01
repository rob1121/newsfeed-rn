import React from "react";
import { ListItem } from "react-native-elements";
import styled from "@emotion/native";

export const Title = styled(ListItem.Title)`
  color: #253787;
  font-weight: bold;
`;

export const Subtitle = styled(ListItem.Subtitle)`
  color: #999;
`;

export const NoNewsFeed = styled.Text`
  margin-top: 30px;
  color: #999;
  text-align: center;
`;
