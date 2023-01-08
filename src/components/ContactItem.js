import { useCallback, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { s } from "react-native-wind";

export default function ContactItem(props) {
    const [contact, setContact] = useState({
        id: props.users.id,
        name: props.users.name,
        phone: props.users.phone
    })

    const [isEdit, setEdit] = useState({
        editCond: false,
    })

    const editTrue = () => {
        setEdit({
            editCond: true
        })
    }

    const editFalse = () => {
        setEdit({
            editCond: false
        })
    }

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setContact({
            ...contact,
            [name]: value
        });
    }

    const handleUpdate = useCallback((event) => {
        event.preventDefault()
        props.update(contact.name, contact.phone)
        setContact({ name: contact.name, phone: contact.phone })
        editFalse()
    }, [props, contact])


    if (isEdit.editCond) {
        return (
            <View style={s`container shadow-2xl shadow-slate-300 bg-white/80 rounded-lg w-auto h-auto space-y-2 px-8 py-5`}>
                <View>
                    <TextInput value={contact.name} onPress={handleInputChange} style={s`px-2 py-1 border border-blue-400/75 rounded-lg w-full`} required />
                </View>

                <View>
                    <TextInput value={contact.phone} onPress={handleInputChange} style={s`px-2 py-1 border border-blue-400/75 rounded-lg w-full`} required />
                </View>

                <View style={s`flex justify-evenly py-2`}>
                    <TouchableOpacity type='button' onPress={handleUpdate} style='font-semibold tracking-wider'>
                        <Text>Update</Text>
                    </TouchableOpacity>

                    <TouchableOpacity type='button' onPress={editFalse} style='font-semibold tracking-wider'>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    } else {
        return (
            <View style={styles.card}>
                <View style={styles.kard}>
                    <View>
                        <Text>{contact.name}</Text>
                    </View>

                    <View>
                        <Text>{contact.phone}</Text>
                    </View>

                    <View style={styles.button}>
                        <TouchableOpacity type='button' onPress={editTrue}>
                            <Text style={s`font-semibold tracking-wide`}>Edit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity type='button' onPress={props.sent ? props.remove : props.resend}>
                            <Text style={s`font-semibold tracking-wide ml-2`}>{props.users.sent ? 'Delete' : 'Resend'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: 10,
        paddingVertical: 4
    },
    kard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        fontWeight: 400,
        alignItems: "center",
        paddingVertical: 3,
        "&:Hover": {
            opacity: 0.5
        }
    }
});