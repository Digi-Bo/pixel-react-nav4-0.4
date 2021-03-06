import { Text, View, FlatList, Image, Pressable } from "react-native";
import React from "react";
import { globalStyles } from "../style/AppStyles";
import  Colors  from "../style/Colors"


const Home = ({ navigation }) => {
  const DATA = [
    {
      id: "1",
      name: "Emma",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam",
      country: "Allemagne",
      totalImg: 3,
      img: "https://cdn.pixabay.com/photo/2017/12/17/08/44/girl-3023853_960_720.jpg",
      favColor: "blueviolet"
    },
    {
      id: "2",
      name: "Marcel",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam",
      country: "France",
      totalImg: 5,
      img: "https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_960_720.jpg",
      favColor: "firebrick"

    },
    {
      id: "3",
      name: "Diana",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam",
      country: "Espagne",
      totalImg: 4,
      img: "https://cdn.pixabay.com/photo/2019/08/13/05/39/girl-4402542_960_720.jpg",
      favColor: "olive"

    },
    {
      id: "4",
      name: "Diego",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam",
      country: "Italie",
      totalImg: 5,
      img: "https://cdn.pixabay.com/photo/2017/03/24/18/59/face-2171923_960_720.jpg",
      favColor: "orangered"

    },
  ];

  const renderProfiles = ({ item }) => {
    return (
          
        <Pressable 
          //onPress = {() => navigation.navigate('Portfolio', item ) }
          onPress= {() => navigation.navigate( {
            routeName: 'Portfolio',
            params: {
              name : item.name, 
              country: item.country, 
              totalImg: item.totalImg,
              favColor: item.favColor
            }
          }

          )}
          style={  ({pressed} ) => [
            {backgroundColor: pressed ? Colors.clicked : Colors.white } , 
            globalStyles.itemContainer
          ]   }>

          <Text style={globalStyles.h1}>{item.name}</Text>
          <Image source={{ uri: item.img }} style={globalStyles.profileImg} />


        <View style={globalStyles.infoContainer}>
          <Text style={globalStyles.h2}>{item.country}</Text>
          <Text style={globalStyles.text}>{item.totalImg}</Text>
        </View>
        </Pressable>
    );
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={DATA}
        renderItem={renderProfiles}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;
