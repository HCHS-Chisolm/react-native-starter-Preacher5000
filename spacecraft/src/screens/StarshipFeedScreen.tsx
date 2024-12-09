import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import { default as data } from "../../api/data.json";
const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
export const StarshipFeedScreen = () => {
  return (
    <View style={styles.container}>
       <FlatList
        data={data.results}
        renderItem={({item}) => <Item title={item.name} />}
        keyExtractor={(item) => item.url}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
  },
  headerContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  
});