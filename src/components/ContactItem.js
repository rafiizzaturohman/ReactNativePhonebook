import { useCallback, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';

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
                <View style='flex space-x-3 items-center'>
                    <input type='text' name='name' id='name' value={contact.name} onChange={handleInputChange} style='px-2 py-1 border border-blue-400/75 rounded-lg w-full' required />
                </View>

                <View style='flex space-x-4 items-center'>
                    <input type='tel' pattern='[08][0-9]{11}' name='phone' id='phone' value={contact.phone} onChange={handleInputChange} style='px-2 py-1 border border-blue-400/75 rounded-lg w-full' required />
                </View>

                <View style='flex justify-evenly py-2'>
                    <button type='button' onClick={handleUpdate} style='transition hover:text-slate-400 hover:delay-100 font-semibold tracking-wider'>Update</button>

                    <button type='button' onClick={editFalse} style='transition hover:text-slate-400 hover:delay-100 font-semibold tracking-wider'>Cancel</button>
                </View>
            </View>
        )
    } else {
        return (
            <View style='transition ease-in-out shadow-lg shadow-slate-300 bg-white/80 rounded-lg w-auto h-auto space-y-4 px-8 py-5  border-2 border-blue-200 hover:-translate-y-1 hover:scale-103' >
                <View style='flex space-x-3 items-center'>
                    <Text>{contact.name}</Text>
                </View>

                <View style='flex space-x-4 items-center opacity-60'>
                    <Text>{contact.phone}</Text>
                </View>

                <View style='flex justify-evenly py-2'>
                    <TouchableOpacity type='button' onClick={editTrue} style='transition hover:text-slate-400 hover:delay-100 font-semibold tracking-wider'>Edit</TouchableOpacity>

                    <TouchableOpacity type='button' onClick={props.sent ? props.remove : props.resend} style='transition hover:text-slate-400 hover:delay-100 font-semibold tracking-wider'>
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
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    buttonEdit: {
        fontWeight: 400,
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
});