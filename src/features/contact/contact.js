
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import { View, Text, StyleSheet } from 'react-native';

export default function Contact() {
    return (
        <View>
            <View>
                <Text style={styles.title}>Phonebook App</Text>
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
                        <View style={{ marginTop: 100 }}>
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
    },
    title: {
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 25,
        paddingVertical: 10,
        backgroundColor: '#0ea5e9',
        color: '#f1f5f9'
    }
})