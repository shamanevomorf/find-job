import React ,{useState} from 'react'
import { View ,Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './nearbyjobs.style';
import { COLORS,SIZES } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/usefatch';
const NearbyJobs = () =>{
  const router = useRouter();
  const { data,isLoading,error} = useFetch('search',{
    query: 'React developer',
    num_page: 1
  })
  return (
    <View style={styles.container}>
         <View style={styles.header}>
           <Text style={styles.headerTitle}>Nearby Job</Text>
           <TouchableOpacity>
             <Text style={styles.headerBtn}>Show all</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.cardsContainer}>
              {isLoading ? (
                <ActivityIndicator size="large" color={COLORS.primary} />
              ) : error ? (
                <Text>Something went wrong</Text>
              ) : (
               data?.map((job)=>(
                <NearbyJobCard
                   job={job}
                   key={`nearby-job-${job?.job_id}`}
                   handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
                />
               ))
              )}
         </View>
    </View>
  )
}

export default NearbyJobs;