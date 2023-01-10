import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import { View, Text, StyleSheet } from 'react-native';
import { s } from "react-native-wind";


export default function Contact() {
    return (
        <View>
            <View style={s`py-3 bg-blue-500`}>
                <Text style={s`text-xl text-center text-white font-bold tracking-wide`}>Phonebook App</Text>
            </View>
            <View>
                {/* CARD FORM START */}
                <View>
                    <View>
                        <View>
                            <ContactForm />
                        </View>
                    </View>
                </View>
                {/* CARD FORM END */}
                <View>
                    <Text style={s`bg-blue-500 py-min4 my-4`}></Text>
                </View>
                {/* CARD LIST START */}
                <View>
                    <View>
                        <View>
                            <ContactList />
                        </View>
                    </View>
                </View>
                {/* CARD LIST END */}
            </View>
        </View >
    )
}