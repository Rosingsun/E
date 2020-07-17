import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View ,SafeAreaView,SectionList,StyleSheet} from 'react-native';

export default loadDB = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://10.0.2.2:3000/index')
      .then((response) => response.json())
      .then((json) => setData(json.result))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <Text>{item.name} {item.type}{item.url}</Text>
        )}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});
