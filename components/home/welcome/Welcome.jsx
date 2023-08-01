import React ,{useState} from 'react'
import { 
  View ,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';

import { useRoute, useRouter } from 'expo-router';
import styles from './welcome.style';
import { icons , SIZES } from '../../../constants';

const jobsType = ["Full-Time", "Part-Time", "contractor"]

const Welcom = () =>{
  const router = useRouter();
  const [ activeJobType , setActiveJobType] = useState('Full-Time')
  const handleJobTypePress = (item) => {
    setActiveJobType(item);
  };
  return (
    <View>
      <View style={styles.container}>
          <Text style={styles.userName}>Hello Shaman</Text>
          <Text style={styles.welcomeMessage}>Find Your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput style={styles.searchInput}
            value=""
            onChange={()=>{}}
            placeholder="What are you looking for?" />
          </View>
          <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
            <Image 
              source={icons.search}
              resizeMode="contain"
              style={styles.searchBtnImage} 
            />
          </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
         <FlatList
          horizontal // Set horizontal prop to create a horizontal list
          showsHorizontalScrollIndicator={false} // Optional: hide horizontal scrollbar
           data={jobsType}
           renderItem={({item})=>(
                <TouchableOpacity 
                  style={styles.tab(activeJobType,item)}
                  onPress={() => {
                    handleJobTypePress(item);
                    router.push(`/search/${item}`)
                  }}
                  
                >
                  <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
            contentContainerStyle={{columnGap : SIZES.small}}
         />
      </View>
    </View>
  )
}

export default Welcom;