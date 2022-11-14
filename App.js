import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

function HomeScreen({ navigation }) {
  const appTitle = 'Movie night!'
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{appTitle}</Text>
      <StatusBar style="auto" />

      <View>
        <Button
          title="Start"
          onPress={() => navigation.navigate('Movie List')}></Button>
      </View>
    </View>
  )
}

function MovieList({ navigation }) {
  const movies = 'Movie list';
  return (
    <View style={styles.container}>
      <Text style={styles.movies}>{movies}</Text>
      <View>
        <Text>Movie List Page. Qui i dati della API</Text>
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}></Button>
        <Button
          title="Go to movie detail"
          onPress={() => navigation.navigate('Movie Details')}></Button>
        <Button
          title="To the Top"
          onPress={() => navigation.popToTop}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

function MovieDetail({ navigation }) {
  const movieTitle = 'Movie Title'
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movieTitle}</Text>
      <View>
        <Text styles={styles.title}>{movieTitle}</Text>
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}></Button>
        <Button
          title="Go Home"
          onPress={() => navigation.navigate('Home')}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '' }}
        />
        <Stack.Screen
          name="Movie List"
          component={MovieList}
          options={{ title: 'Choose your next adventure' }}
        />
        <Stack.Screen
          name="Movie Details"
          component={MovieDetail}
          options={{ title: 'Movie Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40
  },
  movies: {
    fontSize: 30
  }
});
