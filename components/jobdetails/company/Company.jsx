import React from 'react'
import { View ,Text,Image } from 'react-native';
import styles from './company.style'
import checkImageURL from '../../../utils';
import { icons } from '../../../constants';
const Company = ({CompanyLogo,jobTitle,companyName,location}) =>{
  return (
    <View style={styles.container}>
         <View style={styles.logoBox}>
            <Image 
              source={{
                uri: checkImageURL(CompanyLogo) ? CompanyLogo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTt2N5vGORr23wYN4mLknOWhiyL0PU0VLLGkse&s=0'
              }}
              style={styles.logoImage}
            />
         </View>
         <View style={styles.jobTitleBox}>
            <Text style={styles.jobTitle}>{jobTitle}</Text>
         </View>
         <View style={styles.companyInfoBox}>
            <Text style={styles.companyName}>{companyName} / </Text>
            <View style={styles.locationBox}>
              <Image
                source={icons.location}
                resizeMode='contain'
                style={styles.locationImage}
              />
              <Text style={styles.locationName}>{location}</Text>
            </View>
         </View>
    </View>
  )
}

export default Company;