import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';

const Languages  = [
  {
    id: 1,
    name: 'Hindi',
  },
  {
    id: 2,
    name: 'English',
  },
  {
    id: 3,
    name: 'Spanish',
  },
  {
    id: 4,
    name: 'Bengali',
  },
  {
    id: 5,
    name: 'Russian',
  },
  {
    id: 6,
    name: 'Japanese',
  },
  {
    id: 7,
    name: 'French',
  },
  {
    id: 8,
    name: 'Italian',
  },
  {
    id: 9,
    name: 'Indonesian',
  },
  {
    id: 10,
    name: 'Dutch',
  }
];

const getItem = (name) => {
  Alert.alert(name);
}

const ItemRender = ({name}) => (
  <View style={StyleSheet.item}>
    <Text style={StyleSheet.itemText} onPress={() => getItem(name)}>{name}</Text>
  </View>
)

const ItemDivider = () => {
  return(
    <View 
      style={{ 
        height: 1,
        width: '100%',
        backgroundColor: "#607D8B"
      }}
    />
  );
}

export default function App() {
  return (
    <View style={StyleSheet.MainContainer}>
      <FlatList 
        data={Languages}
        renderItem={({ item }) => <ItemRender name={item.name} />}
        keyExtractor={item => item.id}
        ItemSeparadorComponent={ItemDivider} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
   MainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  item: {
    paddingLeft: 15,
    paddingTop: 8,
    paddingBottom: 8
  },
  itemText: {
    fontSize: 24,
    color: 'black'
  }
});
