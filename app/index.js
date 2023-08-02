import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import Welcom from '../components/home/welcome/Welcome';
import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn';
import Nearbyjobs from '../components/home/nearby/NearbyJobs'
import Popularjobs from '../components/home/popular/Popularjobs'

export default function Home() {
  const router = useRouter();
  const [searchTerm ,setSearchTerm] = useState("")
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderBtn iconUrl={icons.menu} dimension="100%" />,
          headerRight: () => <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" handlePress={() => router.push('/profile')}  />,
          headerTitle: ""
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex:1,padding:SIZES.medium}}>
          <Welcom 
            searchTerm={searchTerm}
            handleClick={()=>{
              if(searchTerm){
                router.push(`/search/${searchTerm}`)
              }
            }}
            setSearchTerm={setSearchTerm}
          />
          <Popularjobs/>
          <Nearbyjobs/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
