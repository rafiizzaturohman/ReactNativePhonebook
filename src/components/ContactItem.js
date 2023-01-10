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

    const handleUpdate = useCallback((event) => {
        event.preventDefault()
        props.update(contact.name, contact.phone)
        setContact({ name: contact.name, phone: contact.phone })
        editFalse()
    }, [props, contact])


    if (isEdit.editCond) {
        return (
            <View style={s`rounded-lg w-auto h-auto space-y-2 px-8 py-5`}>
                <View>
                    <TextInput value={contact.name} onChangeText={name => setContact({ ...contact, name })} style={s`px-2 py-0.5 border border-blue-400/75 rounded-lg w-full`} required />
                </View>

                <View style={s`mt-2`}>
                    <TextInput value={contact.phone} onChangeText={phone => setContact({ ...contact, phone })} maxLength={13} style={s`px-2 py-0.5 border border-blue-400/75 rounded-lg w-full`} required />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity type='button' onPress={handleUpdate} style={s`font-semibold tracking-wider`}>
                        <Text>Update</Text>
                    </TouchableOpacity>

                    <TouchableOpacity type='button' onPress={editFalse} style={s`font-semibold tracking-wider ml-2`}>
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
                        <Text style={s`text-base`}>{contact.name}</Text>
                    </View>

                    <View>
                        <Text style={s`text-base`}>{contact.phone}</Text>
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
        alignItems: 'center'
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        fontWeight: 400,
        alignItems: "center",
        paddingVertical: 3
    }
});