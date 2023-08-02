import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import checkImageUrl from '../../../../utils'
import styles from './popularjobcard.style'
const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{ uri: checkImageUrl(item.employer_logo) ? item.employer_logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTt2N5vGORr23wYN4mLknOWhiyL0PU0VLLGkse&s=0' }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard;