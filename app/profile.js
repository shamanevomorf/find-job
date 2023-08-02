import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import { images } from '../constants';
const Profile = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: images.profile }} style={styles.profileImage} resizeMode='contain' />
      <Text style={styles.name}>shaman</Text>
      <Text style={styles.bio}>Shaman is a curious soul with a passion for exploring the mysteries of the natural world. With a heart attuned to the rhythms of the earth and a mind open to ancient wisdom, Shaman seeks to bridge the gap between the mundane and the spiritual. Through rituals, storytelling, and deep connections with nature, Shaman seeks to heal not only the body but also the spirit. A wanderer of both physical landscapes and ethereal realms, Shaman's journey is one of self-discovery, transformation, and a quest for balance between the seen and the unseen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      padding: 20,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    bio: {
      fontSize: 16,
      textAlign: 'center',
    },
});
export default Profile;
