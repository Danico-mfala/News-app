import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Appbar , useTheme,Chip,Button} from 'react-native-paper';

const categories = ["Business", "Health", "Politics", "Sports", "Technology"];

const API_KEY = "pub_217370aa4d8feee12fcb51a2d8bec0dde6d9b";

const Home = () => {
  const [newsData, setNewsData] = useState(second)
  const [selectedCategories, setSelectedCategories] = useState([]);
  const handleSelect = (val: string) => {
    setSelectedCategories((prev: string[]) =>
      prev.find((p) => p === val)
        ? prev.filter((cat) => cat !== val)
        : [...prev, val]
    );
  };

  const handlePress = async () => {
    const URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=tr&language=en,fr,tr&${selectedCategories.length > 0
        ?`&category=${selectedCategories.join()}`
        : ""
      }`;
    try {
      await fetch(URL)
        .then((res) => res.json())
        .then((data) => setNewsData(data.results));
    } catch (err) {
      console.log(err);
    }
  };
  console.log(Object.keys(newsData[0]));
  
   
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Home" ></Appbar.Content>
      </Appbar.Header>
      <View style={styles.filtersContainer}>
        {categories.map((cat) => (
          <Chip key={cat}
            mode="outlined"
            style={styles.chipItem}
            textStyle={{
              fontWeight: "400",
              color: "white",
              padding:1
            }}
            showSelectedOverlay
            selected={selectedCategories.find((c) => cat === c) ? true : false}
            onPress={() => handleSelect(cat)}
          >
            {cat}
          </Chip>
        ))}
        <Button
          mode='outlined'
          style={styles.button}
          labelStyle={{
            fontSize: 14,
            margin: "auto",
    
          }}
          icon={"sync"}
          onPress={handlePress}>
          Refresh
        </Button>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filtersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical:10,
  },
    chipItem: {
    marginHorizontal: 5,
    marginVertical:5,
  },
  button:{
    maxWidth: 400,
    padding: 0,
    maxHeight:40,
  }
});