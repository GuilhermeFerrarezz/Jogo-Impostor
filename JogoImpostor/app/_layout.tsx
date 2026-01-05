import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { View } from 'react-native';
import { Text } from 'react-native';
import { Tabs } from "expo-router";
import { useWindowDimensions } from 'react-native';

export default function RootLayout() {
    const { width, height } = useWindowDimensions();
    const barraLaranjaWidth = width * 0.2
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    display: "none"
                },


            }}
        >
            {/* <Tabs.Screen name="index"
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <View
                                style={{
                                borderTopWidth: 2,
                                marginBottom: 12,
                                height: 38,
                                width: barraLaranjaWidth,
                                borderTopColor: focused ? '#ff850b' : 'transparent',
                                alignItems: 'center',
                                justifyContent: 'center',

                                }}
                            >
                                

                                <Entypo
                                    name={'home'}
                                    size={25}
                                    color={color}
                                />
                            </View>


                        );
                    },
                    tabBarLabel: ({ focused, color }) =>
                        <Text style={{ color: color }}>Início</Text>,
                }}
            />
            <Tabs.Screen name="invest"
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        
                        
                        return (

                            <View
                                style={{
                                borderTopWidth: 2,
                                marginBottom: 12,
                                height: 38,
                                width: barraLaranjaWidth,
                                borderTopColor: focused ? '#ff850b' : 'transparent',
                                alignItems: 'center',
                                justifyContent: 'center',

                                }}
                            >
                            
                            <FontAwesome6
                                name={"arrow-trend-up"}
                                size={25}
                                color={color}
                                />
                            </View>
                        );
                    },
                    tabBarLabel: ({ focused, color }) =>
                        <Text style={{ color: color }}>Invest</Text>,
                }}

            />
            <Tabs.Screen name="forum"
                options={{
                    tabBarIcon: ({ focused, color, size }) => {

                     
                        return (
                            <View
                                style={{
                                borderTopWidth: 2,
                                marginBottom: 12,
                                height: 38,
                                width: barraLaranjaWidth,
                                borderTopColor: focused ? '#ff850b' : 'transparent',
                                alignItems: 'center',
                                justifyContent: 'center',

                                }}
                            >
                            <Ionicons
                                name={"leaf"}
                                size={25}
                                color={color}
                                />
                            </View>
                        );
                    },
                    tabBarLabel: ({ focused, color }) =>
                        <Text style={{ color: color }}>Forum</Text>,
                }}
            />
            <Tabs.Screen name="shop"
                options={{
                    tabBarIcon: ({ focused, color, size }) => {

                       
                        return (
                            <View
                                style={{
                                borderTopWidth: 2,
                                marginBottom: 12,
                                height: 38,
                                width: barraLaranjaWidth,
                                borderTopColor: focused ? '#ff850b' : 'transparent',
                                alignItems: 'center',
                                justifyContent: 'center',

                                }}
                            >
                            <Feather
                                name={"shopping-cart"}
                                size={25}
                                color={color}
                                />
                            </View>
                        );
                    },
                    tabBarLabel: ({ focused, color }) =>
                        <Text style={{ color: color }}>Shop</Text>,
                }}
            />
            <Tabs.Screen name="todos"
                options={{
                    tabBarIcon: ({ focused, color, size }) => {

                        
                        return (
                            <View
                                style={{
                                borderTopWidth: 2,
                                marginBottom: 12,
                                height: 38,
                                width: barraLaranjaWidth,
                                borderTopColor: focused ? '#ff850b' : 'transparent',
                                alignItems: 'center',
                                justifyContent: 'center',

                                }}
                            >
                            <AntDesign
                                name={"menu"}
                                size={25}
                                color={color}
                                />
                            </View>
                        );
                    },
                    tabBarLabel: ({ focused, color }) =>
                        <Text style={{ color: color }}>Todos</Text>,
                }}
            /> */}
        </Tabs >
    )
}