import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { create, search } from './contactSlice';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { s } from "react-native-wind";

export default function ContactForm() {
    const dispatch = useDispatch()
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        searchName: '',
        searchPhone: ''
    })

    const handleAdd = useCallback(() => {
        dispatch(create(contact.name, contact.phone))
        setContact({ name: '', phone: '' })
    }, [dispatch, contact])

    const handleSearch = useCallback(() => {
        dispatch(search(contact.searchName, contact.searchPhone))
        // setContact({ name: '', phone: '' })
    }, [contact])

    return (
        <View style={s`flex flex-row justify-evenly`}>
            {/* SEARCH START */}
            <View>
                <View style={s`bg-slate-500 rounded-lg px-4 py-1`}>
                    <Text style={s`text-md bg-blue-400 text-white font-bold rounded-sm tracking-wide mt-2 px-2`}>Search Contact</Text>
                </View>

                <View style={s`mx-3`}>
                    <View id='searchForm'>
                        <View>
                            <Text style={s`text-md font-semibold tracking-wide`} htmlFor='searchName'>Name</Text>

                            <TextInput name='searchName' onChangeText={searchName => setContact({ ...contact, searchName })} value={contact.searchName} style={s`text-xs border-2 border-blue-200 rounded-lg px-2 py-0.5 w-full`} />
                        </View>

                        <View style={s`mt-2`}>
                            <Text style={s`text-md font-semibold tracking-wide`} htmlFor='searchPhone'>Phone</Text>

                            <TextInput name='searchPhone' onChangeText={searchPhone => setContact({ ...contact, searchPhone })} value={contact.searchPhone} style={s`text-xs border-2 border-blue-200 rounded-lg px-2 py-0.5 w-full`} />
                        </View>
                    </View>

                    <View style={s`flex flex-row mt-6`}>
                        <TouchableOpacity onPress={handleSearch} style={s`bg-blue-500 hover:bg-blue-600 hover:delay-150 rounded-lg font-semibold items-center space-x-3 py-0.5 px-3 my-2`}>
                            <Text style={s`tracking-wide font-semibold text-white`}>Search</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* SEARCH END */}

            {/* ADD FORM START */}
            <View className=''>
                <View style={s`bg-slate-500 rounded-lg px-4 py-1`}>
                    <Text style={s`text-md bg-blue-400 text-white font-bold rounded-sm tracking-wide mt-2 px-2`}>Add Contact</Text>
                </View>

                <View style={s`mx-3`}>
                    <View id='inputForm' onSubmit className='space-y-8 mt-8'>
                        <View>
                            <Text style={s`text-md font-semibold tracking-wide`} htmlFor='name'>Name</Text>

                            <TextInput name='name' onChangeText={name => setContact({ ...contact, name })} defaultValue={contact.name} style={s`text-xs border-2 border-blue-200 rounded-lg px-2 py-0.5 w-full`} required />
                        </View>

                        <View style={s`my-2`}>
                            <Text style={s`text-md font-semibold tracking-wide`} htmlFor='phone'>Phone</Text>

                            <TextInput name='phone' onChangeText={phone => setContact({ ...contact, phone })} maxLength={13} defaultValue={contact.phone} style={s`text-xs border-2 border-blue-200 rounded-lg px-2 py-0.5 w-full`} required />
                        </View>

                        <Text className='tracking-wide opacity-60'>Phone format: 0812345678912</Text>

                        <View style={styles.button}>
                            <TouchableOpacity type='button' onPress={handleAdd} style={s`bg-blue-500 hover:bg-blue-600 hover:delay-150 rounded-lg font-semibold items-center space-x-3 py-0.5 px-3`}>
                                <Text style={s`text-white`}>Add</Text>
                            </TouchableOpacity>

                            <TouchableOpacity type='button' onPress={() => setContact({ name: '', phone: '' })} style={s`mx-2`}>
                                <Text style={s`font-bold`}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            {/* ADD FORM END */}
        </View >
    )
}

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        fontWeight: 400,
        alignItems: "center",
        paddingVertical: 4,
        "&:Hover": {
            opacity: 0.5
        }
    },
    formBlock: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputForm: {
        borderStyle: 'solid',
        borderRadius: 5,
        borderColor: '#475569',
        borderWidth: 1,
        width: 300,
        paddingVertical: -80
    },
    title: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 18,
        paddingTop: 5,
        paddingHorizontal: 10
    }
});