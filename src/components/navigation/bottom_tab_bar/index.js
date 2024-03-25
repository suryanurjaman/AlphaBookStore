
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../../../utils';
import { hamburger, homeIcon, love, notification, profile, setting } from '../../../assets';
import { DetailBook, Homes, Loved, Profile, Setting } from '../../../screen/main_screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CustomHeader } from '../..';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen options={{
                header: () => {
                    return (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginTop: 36, height: 36, alignItems: 'center', marginBottom: 12 }}>
                            <View>
                                <TouchableOpacity>
                                    <Image source={hamburger} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                                <TouchableOpacity>
                                    <Image source={notification} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ width: 35, height: 35, borderRadius: 35 / 2, backgroundColor: 'pink' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                },
            }} name="HomeScreen" component={Homes} />
            <HomeStack.Screen
                name="Details"
                component={DetailBook}
                options={{
                    header: (props) => <CustomHeader {...props} />
                }}
            />
        </HomeStack.Navigator>
    );
}

const BottomTabBar = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                height: 76,
                paddingTop: 15,
                paddingBottom: 12,
                paddingHorizontal: 12,
            },
            tabBarShowLabel: false,
            headerShown: false
        }}>
            <Tab.Screen name='Home' component={HomeStackScreen} options={{
                tabBarLabel: 'false',
                tabBarIcon: ({ size, focused }) => {
                    return (
                        <View style={{ alignItems: 'center', gap: 10 }}>
                            <Image
                                style={{
                                    width: size,
                                    height: size,
                                    tintColor: focused ? colors.default : colors.icon
                                }}
                                source={homeIcon}
                            />
                            <Text style={{ color: focused ? colors.default : colors.icon }}>
                                Home
                            </Text>
                        </View>
                    );
                }
            }} />
            <Tab.Screen name='Loved' component={Loved} options={{
                tabBarLabel: 'false',
                tabBarIcon: ({ size, focused }) => {
                    return (
                        <View style={{ alignItems: 'center', gap: 10 }}>
                            <Image
                                style={{
                                    width: size,
                                    height: size,
                                    tintColor: focused ? colors.default : colors.icon
                                }}
                                source={love}
                            />
                            <Text style={{ color: focused ? colors.default : colors.icon }}>
                                Saved
                            </Text>
                        </View>
                    );
                }
            }} />
            <Tab.Screen name='Setting' component={Setting} options={{
                tabBarLabel: 'false',
                tabBarIcon: ({ size, focused }) => {
                    return (
                        <View style={{ alignItems: 'center', gap: 10 }}>
                            <Image
                                style={{
                                    width: size,
                                    height: size,
                                    tintColor: focused ? colors.default : colors.icon
                                }}
                                source={setting}
                            />
                            <Text style={{ color: focused ? colors.default : colors.icon }}>
                                Setting
                            </Text>
                        </View>
                    );
                }
            }} />
            <Tab.Screen name='Profile' component={Profile} options={{
                tabBarLabel: 'false',
                tabBarIcon: ({ size, focused }) => {
                    return (
                        <View style={{ alignItems: 'center', gap: 10 }}>
                            <Image
                                style={{
                                    width: size,
                                    height: size,
                                    tintColor: focused ? colors.default : colors.icon
                                }}
                                source={profile}
                            />
                            <Text style={{ color: focused ? colors.default : colors.icon }}>
                                Profile
                            </Text>
                        </View>
                    );
                }
            }} />
        </Tab.Navigator>
    )
}

export default BottomTabBar