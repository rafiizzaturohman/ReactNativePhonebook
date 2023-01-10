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
        <View style={s`flex flex-row justify-between ml-4 mr-3`}>
            {/* SEARCH START */}
            <View style={s``}>
                <View style={s`bg-slate-500 rounded-lg`}>
                    <Text style={s`text-lg bg-blue-400 text-white font-bold rounded-md tracking-wide mt-2 px-2`}>Search Contact</Text>
                </View>

                <View style={s`mt-2`}>
                    <View id='searchForm'>
                        <View>
                            <Text style={s`text-md font-semibold tracking-wide`} htmlFor='searchName'>Name</Text>

                            <TextInput name='searchName' onChangeText={searchName => setContact({ ...contact, searchName })} value={contact.searchName} style={s`text-xs border-2 border-blue-200 rounded-lg px-2 py-0.5 w-56`} />
                        </View>

                        <View style={s`mt-2`}>
                            <Text style={s`text-md font-semibold tracking-wide`} htmlFor='searchPhone'>Phone</Text>

                            <TextInput name='searchPhone' onChangeText={searchPhone => setContact({ ...contact, searchPhone })} value={contact.searchPhone} style={s`text-xs border-2 border-blue-200 rounded-lg px-2 py-0.5 w-56`} />
                        </View>
                    </View>

                    <View style={s`flex flex-row mt-9`}>
                        <TouchableOpacity onPress={handleSearch} style={s`bg-blue-500 hover:bg-blue-600 hover:delay-150 rounded-lg font-semibold items-center space-x-3 py-0.5 px-3`}>
                            <Text style={s`text-white text-xl`}>Search</Text>
                        </TouchableOpacity>

                        <TouchableOpacity type='button' onPress={() => setContact({ searchName: '', searchPhone: '' })} style={s`bg-yellow-500 rounded-lg font-semibold items-center py-0.5 px-3 mx-2`}>
                            <Text style={s`text-white text-xl`}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* SEARCH END */}

            {/* ADD FORM START */}
            <View>
                <View style={s`bg-slate-500 rounded-lg`}>
                    <Text style={s`text-lg bg-blue-400 text-white font-bold rounded-md tracking-wide mt-2 px-2`}>Add Contact</Text>
                </View>

                <View style={s`mt-2`}>
                    <View id='inputForm' onSubmit className='space-y-8 mt-8'>
                        <View>
                            <Text style={s`text-md font-semibold tracking-wide`} htmlFor='name'>Name</Text>

                            <TextInput name='name' onChangeText={name => setContact({ ...contact, name })} defaultValue={contact.name} style={s`text-xs border-2 border-blue-200 rounded-lg px-2 py-0.5 w-56`} required />
                        </View>

                        <View style={s`my-2`}>
                            <Text style={s`text-md font-semibold tracking-wide`} htmlFor='phone'>Phone</Text>

                            <TextInput name='phone' onChangeText={phone => setContact({ ...contact, phone })} maxLength={13} defaultValue={contact.phone} style={s`text-xs border-2 border-blue-200 rounded-lg px-2 py-0.5 w-56`} required />
                        </View>

                        <View>
                            <Text style={s`tracking-wide opacity-60 text-md`}>Phone format: 081234567891</Text>
                        </View>

                        <View style={s`flex flex-row mt-4`}>
                            <TouchableOpacity type='button' onPress={handleAdd} style={s`bg-blue-500 rounded-lg font-semibold items-center py-0.5 px-4`}>
                                <Text style={s`text-white text-xl`}>Add</Text>
                            </TouchableOpacity>

                            <TouchableOpacity type='button' onPress={() => setContact({ name: '', phone: '' })} style={s`bg-yellow-500 rounded-lg font-semibold items-center py-0.5 px-3 mx-2`}>
                                <Text style={s`text-white text-xl`}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            {/* ADD FORM END */}
        </View >
    )
}