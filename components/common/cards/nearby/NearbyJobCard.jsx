import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import checkImageURL from '../../../../utils';
import styles from '../nearby/nearbyjobcard.style'
const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{ uri: checkImageURL(job.employer_logo) ? job.employer_logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTt2N5vGORr23wYN4mLknOWhiyL0PU0VLLGkse&s=0' }}
          resizeMode='contain'
          style={styles.logImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard;