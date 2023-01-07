import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import { View, Text, StyleSheet } from 'react-native';

export default function Contact() {
    return (
        <View>
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
                            <Text>Phonebook App</Text>
                        </View>

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

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: '#475569',
        justifyContent: "space-evenly"
    },
    form: {
        paddingHorizontal: 56,
        paddingVertical: 32
    }
})