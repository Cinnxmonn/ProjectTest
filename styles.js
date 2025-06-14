// styles.js
import { StyleSheet, Dimensions, ImageBackground } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default styles;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8EFDE",
    paddingTop: 0,
    paddingHorizontal: 20,
    
  },
  imageBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: 412,
    height: 325,
    backgroundColor: "#C75C41",
    opacity: 0.8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: "space-between",
    borderRadius: 30,
  },

  locationContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0,0.3)", // semi-transparent
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  locationTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1, // ให้ขยายเต็มพื้นที่ที่เหลือ
    marginRight: 12,
  },
  locationText: {
    color: "white",
    fontSize: 14,
    marginLeft: 8,
    flex: 1, // ให้ text wrap ถ้ายาวเกินไป
  },

 header: {
  width: "100%",
  position: "absolute", // เปลี่ยนจาก "top" เป็น "absolute"
  top: 20, // เพิ่มบรรทัดนี้เพื่อให้ติดด้านบน
  left: 20, // เพิ่มบรรทัดนี้
  right: 0, // เพิ่มบรรทัดนี้
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: 16,
  paddingVertical: 12,
  paddingTop: 30,
  zIndex: 10,
},

  textContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },

  greetingText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },

  actionText: {
    color: "white",
    fontSize: 16,
  },
  
  heartButton: {
    padding: 8,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 20,
    marginLeft: 12,
    
  },

  menu: {
  marginTop: 20,
},

row: {
  flexDirection: "row",
  justifyContent: "space-around",  // ช่องว่างรอบ items
  gap:10,
  marginBottom: 20,
},

// 4 กล่อง
box4: {
  width: "23%", // (100% - 3 gaps) / 4
  height: 80, // กำหนดความสูงให้เท่ากันทุกกล่อง
  backgroundColor: "#ffffff",
  borderRadius: 10,
},

// 3 กล่อง
box3: {
  width: "31%", // (100% - 2 gaps) / 3
  height: 80,
  backgroundColor: "#ffffff", 
  borderRadius: 10,
},

// 2 กล่อง
box2: {
  width: "48%", // (100% - 1 gap) / 2
  height: 80,
  backgroundColor: "#ffffff",
  borderRadius: 10,
},

// 1 กล่อง
box1: {
  width: "100%", // เต็มความกว้าง
  height: 80,
  backgroundColor: "#ffffff",
  borderRadius: 10,
},

boxfood: {
  width:"68%", // (100% - 1 gap) / 2
  height: 80,
  backgroundColor: "#ffffff",
  borderRadius: 10,
},

  detailsContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  // Inline styles ที่ใช้ใน component
  scrollContent: {
    paddingTop: 110,
    paddingHorizontal: 20,
  },

  promotionSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  imageCarousel: {
    height: 200,
    marginTop: 20,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 10,
    overflow: "hidden",
  },
  imageCarouselWithMargin: {
    height: 200,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 10,
    overflow: "hidden",
  },
  carouselImage: {
    width: windowWidth,
    height: "100%",
    resizeMode: "cover",
  },
  demoSection: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#f0f8ff",
    borderRadius: 10,
    marginBottom: 40,
  },
  demoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  backButton: {
    padding: 15,
    backgroundColor: "#6495ED",
    borderRadius: 10,
    alignItems: "center",
  },
  backButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  detailsTitle: {
    fontSize: 24,
    marginBottom: 20,
  },

  sliderContainer: {
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  slider: {
    height: 200,
  },
  sliderImage: {
    width: windowWidth,
    height: 200,
    resizeMode: 'cover',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'white',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export { windowWidth };
