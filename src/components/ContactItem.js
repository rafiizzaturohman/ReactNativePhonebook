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
            <View style={s`rounded-lg w-auto h-auto space-y-2 px-8 py-5 bg-blueGray-200 mx-5 rounded-xl`}>
                <View>
                    <TextInput value={contact.name} onChangeText={name => setContact({ ...contact, name })} maxLength={30} style={s`text-md px-2 py-0.5 border border-blue-400/75 rounded-md w-full text-black`} required />
                </View>

                <View style={s`mt-2`}>
                    <TextInput value={contact.phone} onChangeText={phone => setContact({ ...contact, phone })} maxLength={13} style={s`text-md px-2 py-0.5 border border-blue-400/75 rounded-lg w-full text-black`} required />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity type='button' onPress={handleUpdate} style={s`font-semibold tracking-wider`}>
                        <Text style={s`text-md font-semibold`}>Update</Text>
                    </TouchableOpacity>

                    <TouchableOpacity type='button' onPress={editFalse} style={s`font-semibold tracking-wider ml-2`}>
                        <Text style={s`text-md font-semibold`}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    } else {
        return (
            <View style={styles.card}>
                <View style={styles.kard}>
                    <View>
                        <View>
                            <Text style={s`text-lg font-semibold text-coolGray-600`}>{contact.name}</Text>
                        </View>

                        <View>
                            <Text style={s`text-md`}>{contact.phone}</Text>
                        </View>
                    </View>

                    <View style={styles.button}>
                        <TouchableOpacity type='button' onPress={editTrue}>
                            <Text style={s`text-md font-semibold tracking-wide`}>Edit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity type='button' onPress={props.sent ? props.remove : props.resend}>
                            <Text style={s`text-md font-semibold tracking-wide ml-2`}>{props.users.sent ? 'Delete' : 'Resend'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 20,
        marginVertical: 5,
    },
    kard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: '#bae6fd',
        paddingHorizontal: 20,
        paddingBottom: 5,
        borderRadius: 10
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        fontWeight: 400,
        alignItems: "center",
        paddingVertical: 3
    }
});