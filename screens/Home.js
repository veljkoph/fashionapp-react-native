import { View, Text, ScrollView, Dimensions } from "react-native";
import React from "react";
import { Video, AVPlaybackStatus } from "expo-av";
import Player from "../components/Home/Player";
import Animated from "react-native-reanimated";
import useVideos from "../hooks/videos/useVideos";
import FashionLoader from "./Global/FashionLoader";
import Error from "./Global/Error";
import { Colors } from "../constants/colors";
//pexels key 563492ad6f9170000100000146c3f93930a7407ea678dbcc8f1ad5de
const data = [
  {
    id: 1,
    url: "https://player.vimeo.com/external/554708468.hd.mp4?s=0dea6a30ca37db03718637cdddb4ac9d4a305d22&profile_id=169&oauth2_token_id=57447761",
  },
  {
    id: 2,
    url: "https://player.vimeo.com/external/559734827.hd.mp4?s=3a04758c2351241c5e0b0df67e34a1b642123123&profile_id=175&oauth2_token_id=57447761",
  },
  {
    id: 3,
    url: "https://player.vimeo.com/external/467409166.hd.mp4?s=a95b5f93b486cdc8f634bb6aec6c9cd631c5a568&profile_id=175&oauth2_token_id=57447761",
  },
  {
    id: 4,
    url: "https://player.vimeo.com/external/565732505.hd.mp4?s=e4ca27475769ab011dedfeaea3ebcbe0ec39432c&profile_id=172&oauth2_token_id=57447761",
  },
];

const Home = () => {
  const video = React.useRef(null);
  const [activeSlide, setActiveSlide] = React.useState(1);
  const { height } = Dimensions.get("screen");
  const [status, setStatus] = React.useState({});

  const { data: videos, isLoading, error } = useVideos();
  console.log(videos?.length);
  if (error) return <Error />;
  if (isLoading) return <FashionLoader />;
  return (
    <Animated.View style={{ height: height }}>
      <ScrollView
        style={{ backgroundColor: Colors.background }}
        directionalLockEnabled={true}
        snapToInterval={height}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={21}
        onMomentumScrollEnd={(event) =>
          setActiveSlide(event.nativeEvent.contentOffset.y / height + 1)
        }
      >
        {videos?.map(
          (video, index) =>
            videos && (
              <Player
                video={video}
                key={video._id}
                activeSlide={activeSlide}
                id={video._id}
                url={video.url}
                image={video.image}
                index={index}
              />
            )
        )}
      </ScrollView>
    </Animated.View>
  );
};

export default Home;
