// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   TextInput,
//   ScrollView,
//   Dimensions,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const windowWidth = Dimensions.get("window").width;

// function HomeScreen({ navigation }) {
//   const images = [
//   require("./assets/spaghetti.jpg"),
//   require("./assets/wok.jpg"),
// ];


//   return (
//     <View style={{ flex: 1 }}>
//       {/* Header fixed on top */}
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.iconButton}>
//           <Ionicons name="scan" size={24} color="black" />
//         </TouchableOpacity>

//         <TextInput
//           style={styles.searchInput}
//           placeholder="pizza"
//           placeholderTextColor="#999"
//         />

//         <Image
//           source={{ uri: "https://example.com/your-user-image.jpg" }}
//           style={styles.userImage}
//         />
//       </View>

//       {/* ScrollView for the whole content */}
//       <ScrollView
//         style={{ flex: 1 }}
//         contentContainerStyle={{ paddingTop: 110, paddingHorizontal: 20 }}
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={styles.menu}>
//           <View style={styles.row}>
//             {[...Array(4)].map((_, i) => (
//               <TouchableOpacity
//                 key={`box1-${i}`}
//                 style={styles.box}
//                 onPress={() => navigation.navigate("Details")}
//               />
//             ))}
//           </View>

//           <View style={styles.row}>
//             {[...Array(4)].map((_, i) => (
//               <TouchableOpacity
//                 key={`box2-${i}`}
//                 style={styles.box}
//                 onPress={() => navigation.navigate("Details")}
//               />
//             ))}
//           </View>

//           <View style={styles.row}>
//             {[...Array(2)].map((_, i) => (
//               <TouchableOpacity
//                 key={`wideBox-${i}`}
//                 style={styles.wideBox}
//                 onPress={() => navigation.navigate("Details")}
//               />
//             ))}
//           </View>

//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               justifyContent: "space-between",
//               paddingHorizontal: 10,
//               marginTop: 10,
//             }}
//           >
//             <Text>Half month, half price</Text>
//             <Ionicons name="arrow-forward" size={20} color="black" />
//           </View>

//           <View
//             style={{
//               height: 200,
//               marginTop: 20,
//               borderWidth: 2,
//               borderColor: "gray",
//               borderRadius: 10,
//               overflow: "hidden",
//             }}
//           >
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               pagingEnabled
//               snapToInterval={windowWidth}
//               decelerationRate="fast"
//             >
//               {images.map((img, index) => (
//                 <Image
//                   key={index}
//                   source={{ img }}
//                   style={{
//                     width: windowWidth,
//                     height: "100%",
//                     resizeMode: "cover",
//                   }}
//                 />
//               ))}
//             </ScrollView>
//           </View>

//           <View
//             style={{
//               marginTop: 20,
//               padding: 20,
//               backgroundColor: "#f0f8ff",
//               borderRadius: 10,
//               marginBottom: 40, // เพิ่ม margin bottom เผื่อ scroll ถึงสุด
//             }}
//           >
//             <Text
//               style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}
//             >
//               Demo
//             </Text>
//             <Text>
//               Here is an example of a View that is added below the ScrollView.
//               You can add buttons, images, or other content as needed.
//             </Text>
//           </View>

//           <View style={styles.row}>
//             {[...Array(4)].map((_, i) => (
//               <TouchableOpacity
//                 key={`box1-${i}`}
//                 style={styles.box}
//                 onPress={() => navigation.navigate("Details")}
//               />
//             ))}
//           </View>

//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               justifyContent: "space-between",
//               paddingHorizontal: 10,
//               marginTop: 10,
//             }}
//           >
//             <Text>Half month, half price</Text>
//             <Ionicons name="arrow-forward" size={20} color="black" />
//           </View>

//           <View
//             style={{
//               height: 200,
//               marginTop: 20,
//               marginBottom: 20,
//               borderWidth: 2,
//               borderColor: "gray",
//               borderRadius: 10,
//               overflow: "hidden",
//             }}
//           >
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               pagingEnabled
//               snapToInterval={windowWidth}
//               decelerationRate="fast"
//             >
//               {images.map((img, index) => (
//                 <Image
//                   key={index}
//                   source={{ img }}
//                   style={{
//                     width: windowWidth,
//                     height: "100%",
//                     resizeMode: "cover",
//                   }}
//                 />
//               ))}
//             </ScrollView>
//           </View>

//           <View style={styles.row}>
//             {[...Array(4)].map((_, i) => (
//               <TouchableOpacity
//                 key={`box1-${i}`}
//                 style={styles.box}
//                 onPress={() => navigation.navigate("Details")}
//               />
//             ))}
//           </View>

//            <View
//             style={{
//               marginTop: 20,
//               padding: 20,
//               backgroundColor: "#f0f8ff",
//               borderRadius: 10,
//               marginBottom: 40, // เพิ่ม margin bottom เผื่อ scroll ถึงสุด
//             }}
//           >
//             <Text
//               style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}
//             >
//               Demo
//             </Text>
//             <Text>
//               Here is an example of a View that is added below the ScrollView.
//               You can add buttons, images, or other content as needed.
//             </Text>
//           </View>

//          <View style={styles.row}>
//             {[...Array(2)].map((_, i) => (
//               <TouchableOpacity
//                 key={`wideBox-${i}`}
//                 style={styles.wideBox}
//                 onPress={() => navigation.navigate("Details")}
//               />
//             ))}
//           </View>

//           <View style={styles.row}>
//             {[...Array(2)].map((_, i) => (
//               <TouchableOpacity
//                 key={`wideBox-${i}`}
//                 style={styles.wideBox}
//                 onPress={() => navigation.navigate("Details")}
//               />
//             ))}
//           </View>

//         </View>
//       </ScrollView>
//     </View>
//   );
// }


// function DetailsScreen({ navigation }) {
//   return (
//     <View style={styles.detailsContainer}>
//       <Text style={{ fontSize: 24, marginBottom: 20 }}>
//         This is Details Page
//       </Text>
//       <TouchableOpacity
//         onPress={() => navigation.goBack()}
//         style={{
//           padding: 15,
//           backgroundColor: "#6495ED",
//           borderRadius: 10,
//           alignItems: "center",
//         }}
//       >
//         <Text style={{ color: "white", fontWeight: "bold" }}>Go Back</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{ headerShown: false }}
//       >
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     paddingTop: 100,
//     paddingHorizontal: 20,
//   },
//   header: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     height: 110,
//     backgroundColor: "#6495ED",
//     zIndex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingTop: 40,
//     justifyContent: "space-between",
//   },
//   iconButton: {
//     padding: 8,
//   },
//   searchInput: {
//     flex: 1,
//     marginHorizontal: 10,
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     height: 40,
//     borderWidth: 1,
//     borderColor: "#ccc",
//   },
//   userImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: "#ccc",
//   },
//   menu: {
//     marginTop: 20,
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 10,
//   },
//   box: {
//     width: "23%",
//     aspectRatio: 1,
//     backgroundColor: "#87CEFA",
//     borderRadius: 10,
//     opacity: 0.3,
//   },
//   wideBox: {
//     width: "48%",
//     aspectRatio: 3,
//     backgroundColor: "white",
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: "gray",
//     opacity: 0.3,
//   },
//   detailsContainer: {
//     flex: 1,
//     backgroundColor: "white",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 20,
//   },
// });
