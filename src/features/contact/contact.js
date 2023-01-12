import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import { View, Text } from 'react-native';
import { s } from "react-native-wind";
import { useState } from 'react';


export default function Contact() {
    const [user, setUser] = useState({
        isEdit: false
    })

    const handeSearch = (value) => {
        setUser({
            isEdit: value
        })
    }

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
                            {
                                !user.isEdit && <ContactForm />
                            }
                        </View>
                    </View>
                </View>
                {/* CARD FORM END */}
                <View>
                    <Text style={s`bg-blue-500 my-2`}></Text>
                </View>
                {/* CARD LIST START */}
                <View>
                    <View>
                        <View>
                            <ContactList toggle={handeSearch} />
                        </View>
                    </View>
                </View>
                {/* CARD LIST END */}
            </View>
        </View >
    )
}