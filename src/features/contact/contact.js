import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import { View, Text, StyleSheet } from 'react-native';
import { s } from "react-native-wind";


export default function Contact() {
    return (
        <View style={s`max-h-screen overflow-y-scroll`}>
            <View style={s`shadow-md py-3 bg-blue-100`}>
                <Text style={s`text-xl text-center text-black font-bold tracking-wide`}>Phonebook App</Text>
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