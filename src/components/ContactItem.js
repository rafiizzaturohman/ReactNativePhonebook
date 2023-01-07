import { useCallback, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';

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
            <View style={styles.card} >
                <View>
                    <TextInput value={contact.name} onPress={handleInputChange} style='px-2 py-1 border border-blue-400/75 rounded-lg w-full' required />
                </View>

                <View>
                    <TextInput type='tel' pattern='[08][0-9]{11}' name='phone' id='phone' value={contact.phone} onPress={handleInputChange} style='px-2 py-1 border border-blue-400/75 rounded-lg w-full' required />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity type='button' onPress={handleUpdate} style='transition hover:text-slate-400 hover:delay-100 font-semibold tracking-wider'>
                        <Text>Update</Text>
                    </TouchableOpacity>

                    <TouchableOpacity type='button' onPress={editFalse} style='transition hover:text-slate-400 hover:delay-100 font-semibold tracking-wider'>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    } else {
        return (
            <View style={styles.card} >
                <View>
                    <Text>{contact.name}</Text>
                </View>

                <View>
                    <Text>{contact.phone}</Text>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity type='button' onPress={editTrue}>
                        <Text>Edit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity type='button' onPress={props.sent ? props.remove : props.resend}>
                        <Text>{props.users.sent ? 'Delete' : 'Resend'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: '#475569',
        justifyContent: "space-evenly",
        paddingHorizontal: 6,
        paddingVertical: 4,
    },
    button: {
        fontWeight: 400,
        alignItems: "center",
        flex: 1,
        justifyContent: 'space-evenly',
        paddingVertical: 4,
        "&:Hover": {
            opacity: 0.5
        }
    }
});