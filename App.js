import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Medium': Poppins_500Medium,
    'Poppins-Bold': Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <ImageBackground
      style={styles.container}
      source={require('./assets/images/home-page-background.png')}
      resizeMode='cover'
    >
      <Text style={styles.screenTitle}>
        <Text style={styles.boldedTitlePart}>Virtual </Text>Gallery
      </Text>
      <View style={styles.imagesContainer}>
        <View style={styles.topContainer}>
          <Image
            style={styles.smallImage}
            source={require('./assets/images/home-page-digital-art1.png')}
          />
          <Image
            style={styles.smallImage}
            source={require('./assets/images/home-page-digital-art2.png')}
          />
        </View>
        <Image
          style={styles.bigImage}
          source={require('./assets/images/home-page-digital-art3.png')}
        />
      </View>
      <Text style={styles.introText}>Become an artist or a collector</Text>
      <TouchableOpacity>
        <LinearGradient
          colors={['#B24E9D', '#7e3ba1']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.logInBtn}
        >
          <Text style={styles.logInBtnText}>Log In</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity>
        <LinearGradient
          colors={['#B24E9D', '#7e3ba1']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.logInBtn}
        >
          <Text style={styles.logInBtnText}>Create account</Text>
        </LinearGradient>
      </TouchableOpacity>
      <StatusBar style='auto' />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTitle: {
    marginTop: 40,
    fontSize: 36,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
  },
  boldedTitlePart: {
    fontFamily: 'Poppins-Bold',
  },
  imagesContainer: {
    marginTop: 25,
    flexDirection: 'column',
    width: '100%',
  },
  topContainer: {
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  smallImage: {
    width: '48%',
    borderRadius: 7,
  },
  bigImage: {
    width: '96%',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 15,
  },
  introText: {
    marginTop: 25,
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
  },
  logInBtn: {
    width: 200,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.54,
    shadowRadius: 20,
    elevation: 20, 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
  },
  logInBtnText: {
    fontSize: 20, 
    backgroundColor: 'transparent',
    color: '#fff'
  }
});
