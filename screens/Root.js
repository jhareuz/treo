 import React, { useEffect } from 'react';
 import {
   NavigationContainer,
   DefaultTheme as NavigationDefaultTheme,
   DarkTheme as NavigationDarkTheme
 } from '@react-navigation/native';
 import { createDrawerNavigator } from '@react-navigation/drawer';
 
 import {
   Provider as PaperProvider,
   DefaultTheme as PaperDefaultTheme,
   DarkTheme as PaperDarkTheme
 } from 'react-native-paper';
 
 import { DrawerContent } from '../screens/DrawerContent';
 
 import MainTabScreen from '../screens/MainTabScreen';
 import SupportScreen from '../screens/SupportScreen';
 import SettingsScreen from '../screens/SettingsScreen';
 import BookmarkScreen from '../screens/BookmarkScreen';
 
 import RootStackScreen from '../screens/RootStackScreen';
 import { useSelector } from 'react-redux';
 
 const Drawer = createDrawerNavigator();
 
 const Root = () => {
   // const [isLoading, setIsLoading] = React.useState(true);
   // const [userToken, setUserToken] = React.useState(null); 
   const general = useSelector(store => store.general.array)
   const isDarkTheme = useSelector(store => store.general.theme)
 
   const CustomDefaultTheme = {
     ...NavigationDefaultTheme,
     ...PaperDefaultTheme,
     colors: {
       ...NavigationDefaultTheme.colors,
       ...PaperDefaultTheme.colors,
       background: '#ffffff',
       text: '#333333'
     }
   }
 
   const CustomDarkTheme = {
     ...NavigationDarkTheme,
     ...PaperDarkTheme,
     colors: {
       ...NavigationDarkTheme.colors,
       ...PaperDarkTheme.colors,
       background: '#333333',
       text: '#ffffff'
     }
   }
 
   const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
 
 
   return (
       <PaperProvider theme={theme}>
           <NavigationContainer theme={theme}>
             {general[0]?.userToken !== undefined ? (
               <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                 <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
                 <Drawer.Screen name="SupportScreen" component={SupportScreen} />
                 <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
                 <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
               </Drawer.Navigator>
             )
               :
               <RootStackScreen />
             }
           </NavigationContainer>
       </PaperProvider>
   );
 }
 
 export default Root;
 