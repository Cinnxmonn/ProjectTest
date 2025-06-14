// App.tsx
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import styles
import { styles, windowWidth } from "./styles";

function HomeScreen({ navigation }) {
  const images = [
    require("./assets/spaghetti.jpg"),
    require("./assets/wok.jpg"),
  ];

  // Image slider state and ref
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const [direction, setDirection] = useState("right"); // Add this state

  // รูปภาพทั้งหมด 5 รูป สำหรับ slider
  const sliderImages = [
    require("./assets/slide/1.jpg"),
    require("./assets/slide/2.jpg"),
    require("./assets/slide/3.jpg"),
    require("./assets/slide/4.jpg"),
    require("./assets/slide/5.jpg"),
  ];

  const scrollableImageBackground = {
  ...styles.imageBackground,
  position: "relative" as const, // เปลี่ยนจาก absolute เป็น relative
  width: "100%" as const, // ใช้ความกว้างเต็มหน้าจอ
  alignSelf: "center" as const, // จัดตรงกลาง
  marginHorizontal: 0, // reset margin
  left: 0, // reset left
  right: 0, // reset right
};

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        let nextIndex;

        // Check if we're at the last image and going right
        if (prevIndex === sliderImages.length - 1 && direction === "right") {
          nextIndex = prevIndex - 1;
          setDirection("left"); // Change direction to left
        }
        // Check if we're at the first image and going left
        else if (prevIndex === 0 && direction === "left") {
          nextIndex = prevIndex + 1;
          setDirection("right"); // Change direction to right
        }
        // Continue in current direction
        else if (direction === "right") {
          nextIndex = prevIndex + 1;
        } else {
          nextIndex = prevIndex - 1;
        }

        if (scrollViewRef.current) {
          scrollViewRef.current.scrollTo({
            x: nextIndex * windowWidth,
            animated: true,
          });
        }

        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [sliderImages.length, direction]);

  // Handle manual scroll
  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / windowWidth);
    setCurrentImageIndex(index);

    // Optional: Update direction based on manual scroll
    // You can remove this if you don't want manual scrolling to affect auto-scroll direction
    if (index > currentImageIndex) {
      setDirection("right");
    } else if (index < currentImageIndex) {
      setDirection("left");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageBackground}></View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        
        <View style={styles.header}>
          <View style={styles.textContainer}>
            <Text style={styles.greetingText}>Hi PNG</Text>
            <Text style={styles.actionText}>Let's Book a Ride</Text>
          </View>

          <TouchableOpacity style={styles.heartButton}>
            <Ionicons name="heart-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.locationContainer}>
          <View style={styles.locationTextContainer}>
            <Ionicons name="location-outline" size={20} color="white" />
            <Text style={styles.locationText}>Location</Text>
          </View>
        </View>

        <View style={styles.menu}>
          {/* แถว 3: 2 กล่อง */}
          <View style={styles.row}>
            {[...Array(2)].map((_, i) => (
              <TouchableOpacity
                key={`box3-${i}`}
                style={styles.box2}
                onPress={() => navigation.navigate("Details")}
              />
            ))}
          </View>

          {/* แถว 2: 3 กล่อง */}
          <View style={styles.row}>
            {[...Array(3)].map((_, i) => (
              <TouchableOpacity
                key={`box2-${i}`}
                style={styles.box3}
                onPress={() => navigation.navigate("Details")}
              />
            ))}
          </View>

          <View>
            <Image
              source={require("./assets/slide/2.jpg")}
              style={{
                width: "100%",
                height: 100,
                maxHeight: 100,
                resizeMode: "cover",
                borderRadius: 10,
              }}
            />
          </View>

          {/* Image Slider */}
          <View style={styles.sliderContainer}>
            <ScrollView
              ref={scrollViewRef}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={handleScroll}
              style={styles.slider}
            >
              {sliderImages.map((image, index) => (
                <Image key={index} source={image} style={styles.sliderImage} />
              ))}
            </ScrollView>

            {/* Dots Indicator */}
            <View style={styles.dotsContainer}>
              {sliderImages.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    currentImageIndex === index && styles.activeDot,
                  ]}
                />
              ))}
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
              }}
            >
              Half month, half price
            </Text>
          </View>

          {/* แก้ไขส่วนนี้ให้เลื่อนได้ */}
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
            style={{ marginTop: 10 }}
            contentContainerStyle={{
              paddingLeft: 10,
              paddingRight: 10, // padding ขวาปกติ
            }}
          >
            {[...Array(8)].map((_, i) => (
              <TouchableOpacity
                key={`box3-${i}`}
                style={{
                  marginRight: i === 7 ? 0 : 15, // box สุดท้ายไม่มี marginRight
                  width: 130,
                  height: 150,
                  backgroundColor: "white", // สีพื้นหลัง
                  borderRadius: 10, // มุมโค้ง
                  borderWidth: 1, // ขอบ
                  borderColor: "#ddd", // สีขอบ
                  justifyContent: "center", // จัดตรงกลางแนวตั้ง
                  alignItems: "center", // จัดตรงกลางแนวนอน
                }}
                onPress={() => navigation.navigate("Details")}
              />
            ))}
          </ScrollView>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
              }}
            >
              Half month, half price
            </Text>
          </View>

          {/* แก้ไขส่วนนี้ให้เลื่อนได้ */}
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
            style={{ marginTop: 10 }}
            contentContainerStyle={{
              paddingLeft: 10,
              paddingRight: 10, // padding ขวาปกติ
            }}
          >
            {[...Array(8)].map((_, i) => (
              <TouchableOpacity
                key={`box3-${i}`}
                style={{
                  marginRight: i === 7 ? 0 : 15, // box สุดท้ายไม่มี marginRight
                  width: 130,
                  height: 150,
                  backgroundColor: "white", // สีพื้นหลัง
                  borderRadius: 10, // มุมโค้ง
                  borderWidth: 1, // ขอบ
                  borderColor: "#ddd", // สีขอบ
                  justifyContent: "center", // จัดตรงกลางแนวตั้ง
                  alignItems: "center", // จัดตรงกลางแนวนอน
                }}
                onPress={() => navigation.navigate("Details")}
              />
            ))}
          </ScrollView>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
              }}
            >
              Half month, half price
            </Text>
          </View>

          {/* แก้ไขส่วนนี้ให้เลื่อนได้ */}
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
            style={{ marginTop: 10 }}
            contentContainerStyle={{
              paddingLeft: 10,
              paddingRight: 10, // padding ขวาปกติ
            }}
          >
            {[...Array(8)].map((_, i) => (
              <TouchableOpacity
                key={`box3-${i}`}
                style={{
                  marginRight: i === 7 ? 0 : 15, // box สุดท้ายไม่มี marginRight
                  width: 130,
                  height: 150,
                  backgroundColor: "white", // สีพื้นหลัง
                  borderRadius: 10, // มุมโค้ง
                  borderWidth: 1, // ขอบ
                  borderColor: "#ddd", // สีขอบ
                  justifyContent: "center", // จัดตรงกลางแนวตั้ง
                  alignItems: "center", // จัดตรงกลางแนวนอน
                }}
                onPress={() => navigation.navigate("Details")}
              />
            ))}
          </ScrollView>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
              }}
            >
              Half month, half price
            </Text>
          </View>

          {/* แก้ไขส่วนนี้ให้เลื่อนได้ */}
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
            style={{ marginTop: 10 }}
            contentContainerStyle={{
              paddingLeft: 10,
              paddingRight: 10, // padding ขวาปกติ
            }}
          >
            {[...Array(8)].map((_, i) => (
              <TouchableOpacity
                key={`box3-${i}`}
                style={{
                  marginRight: i === 7 ? 0 : 15, // box สุดท้ายไม่มี marginRight
                  width: 130,
                  height: 150,
                  backgroundColor: "white", // สีพื้นหลัง
                  borderRadius: 10, // มุมโค้ง
                  borderWidth: 1, // ขอบ
                  borderColor: "#ddd", // สีขอบ
                  justifyContent: "center", // จัดตรงกลางแนวตั้ง
                  alignItems: "center", // จัดตรงกลางแนวนอน
                }}
                onPress={() => navigation.navigate("Details")}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.detailsTitle}>This is Details Page</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        id={undefined}
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}