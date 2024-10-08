import React from 'react'
import {Text, View , ScrollView , ActivityIndicator , RefreshControl} from 'react-native'
import { Stack , useRouter , useSearchParams } from 'expo-router'
import { useCallback, useState } from 'react';
import ScreenHeaderBtn from '../../components/common/header/ScreenHeaderBtn';
import Company from '../../components/jobdetails/company/Company'
import JobAbout from '../../components/jobdetails/about/About'
import JobTabs from '../../components/jobdetails/tabs/Tabs'
import JobFooter from '../../components/jobdetails/footer/Footer'
import Specific from '../../components/jobdetails/specifics/Specifics'
import useFetch from '../../hook/usefatch';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES, icons } from '../../constants';
const tabs =['About','Qualifications','Responsibilties']
const JobDetails = () =>{
    const params = useSearchParams();
    const router = useRouter();
    const {data,isLoading,error,refetch} = useFetch('job-details',{
        job_id: params.id
    })
    const [refreshing ,setRefreshing] = useState();
    const [activeTab ,setActiveTab] = useState(tabs[0]);
    const onRefresh = useCallback(()=>{
        setRefreshing(true);
        refetch();
        setRefreshing(false);
    },[])
    const displayTabContent = () =>{
        switch (activeTab) {
            case 'Qualifications':
                return <Specific 
                    title="Qualifications" 
                    points={data[0].job_highlights?.Qualifications ?? ['N/A']}
                />
                break;
            case 'About':
                return <JobAbout 
                    info={data[0].job_description ?? 'No Data Provided'}
                />
                break;
            case 'Responsibilties':
                return <Specific 
                    title="Responsibilties" 
                    points={data[0].job_highlights?.Responsibilities ?? ['N/A']}
                />
                break;
        
            default:
                break;
        }
    }
    return (
        <SafeAreaView style={{flex:1,backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
             options={{
                headerStyle:{backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerBackVisible:false,
                headerLeft: () => <ScreenHeaderBtn iconUrl={icons.left} dimension="60%"  handlePress={() => router.back()} />,
                headerRight: () => <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />,
                headerTitle:""
             }}
            />
            <ScrollView showsVerticalScrollIndicator={false} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
             {isLoading ?(
                <ActivityIndicator size='large' color={COLORS.primary} />
             ):error ?(
                <Text>Something went wrong</Text>
             ): data.length === 0 ?(
                <Text>No data</Text>
             ):(
                <View style={{padding: SIZES.medium,paddingBottom:100}}>
                  <Company
                    companyLogo={data[0].employer_logo}
                    jobTitle={data[0].job_title}
                    companyName={data[0].employer_name}
                    location={data[0].job_country}
                  />
                  <JobTabs
                    tabs={tabs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  {displayTabContent()}
                </View>
             )}
            </ScrollView>
            <JobFooter
               url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results'}
            />
        </SafeAreaView>
    )
}

export default JobDetails