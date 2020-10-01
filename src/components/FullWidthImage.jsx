import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import { Image } from "react-native-elements";
import styled from "@emotion/native";

const ImageStyled = styled(Image)(({ dimension }) => {
  const win = Dimensions.get("window");

  const ratio = win.width / dimension.width;

  return `
  margin-bottom: 30px;
  width: ${win.width}px;
  height: ${dimension.height * ratio}px;
`;
});

const FullWidthImage = ({ uri }) => {
  const [dimension, setDimension] = useState({
    width: 200,
    height: 200,
  });

  useEffect(() => {
    Image.getSize(uri, (width, height) => {
      setDimension({ width, height });
    });
  }, [uri]);

  return (
    <ImageStyled
      source={{ uri }}
      dimension={dimension}
      PlaceholderContent={<ActivityIndicator />}
    />
  );
};

export default FullWidthImage;
