import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { create, search } from './contactSlice';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function ContactForm() {
    const dispatch = useDispatch()
    const [contact, setContact] = useState({
        addCond: false,
        name: '',
        phone: '',
        searchName: '',
        searchPhone: ''
    })


    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setContact({
            ...contact,
            [name]: value
        });
    }

    const handleSubmit = useCallback((event) => {
        event.preventDefault()
        dispatch(create(contact.name, contact.phone))
        setContact({ addCond: true, name: '', phone: '' })
    }, [dispatch, contact])

    const handleSearch = useCallback((event) => {
        event.preventDefault()
        dispatch(search(contact.searchName, contact.searchPhone))
        // setContact({ name: '', phone: '' })
    }, [contact])

    if (contact.addCond) {
        return (
            <View>
                {/* SEARCH START */}
                <View className='container'>
                    <View className='bg-blue-500 rounded-lg px-4 py-1'>
                        <Text className=' text-lg text-white font-bold'>Search Contact</Text>
                    </View>

                    <View className=''>
                        <View id='searchForm' className='space-y-8 mt-8'>
                            <View className='space-x-5 flex justify-evenly items-center'>
                                <Text className='text-lg font-semibold tracking-wide' htmlFor='searchName'>Name</Text>
                                <TextInput type='text' id='searchName' name='searchName' onChange={handleInputChange} value={contact.searchName} className='text-lg border-2 border-blue-200 rounded-lg px-4 py-2 w-full' />
                            </View>

                            <View className='space-x-4 flex justify-evenly items-center'>
                                <Text className='text-lg font-semibold tracking-wide' htmlFor='searchPhone'>Phone</Text>
                                <TextInput type='tel' id='searchPhone' name='searchPhone' onChange={handleInputChange} value={contact.searchPhone} className='text-lg border-2 border-blue-200 rounded-lg px-4 py-2 w-full' />
                            </View>
                        </View>

                        <View>
                            <TouchableOpacity onPress={handleSearch}>
                                <Text>Search</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* SEARCH END */}

                {/* ADD FORM START */}
                <View className='container mt-10'>
                    <View className='bg-blue-500 rounded-lg px-4 py-1'>
                        <Text className=' text-lg text-white font-bold'>Add Contact</Text>
                    </View>

                    <View className=''>
                        <View id='inputForm' className='space-y-8 mt-8'>
                            <View className='space-x-5 flex justify-evenly items-center'>
                                <Text className='text-lg font-semibold tracking-wide' htmlFor='name'>Name</Text>
                                <TextInput type='text' id='name' name='name' onChange={handleInputChange} value={contact.name} className='text-lg border-2 border-blue-200 rounded-lg px-4 py-2 w-full' onInvalid={e => e.target.setCustomValidity('Please enter name here')} onInput={e => e.target.setCustomValidity('')} required />
                            </View>

                            <View className='space-x-4 flex justify-evenly items-center'>
                                <Text className='text-lg font-semibold tracking-wide' htmlFor='phone'>Phone</Text>
                                <TextInput type='tel' pattern='[08][0-9]{11}' id='phone' name='phone' onChange={handleInputChange} value={contact.phone} className='text-lg border-2 border-blue-200 rounded-lg px-4 py-2 w-full' onInvalid={e => e.target.setCustomValidity('Please enter phone here')} onInput={e => e.target.setCustomValidity('')} required />
                            </View>

                            <Text className='tracking-wide opacity-60'>Phone format: 0812345678912</Text>

                            <View className='flex space-x-2'>
                                <TouchableOpacity onPress={handleSubmit} className='transition flex text-white bg-blue-500 hover:bg-blue-600 hover:delay-150 rounded-lg font-semibold items-center space-x-3 py-1 px-3'>
                                    <Text>Add</Text>
                                </TouchableOpacity>

                                <TouchableOpacity type='TouchableOpacity' onPress={() => setContact({ addCond: false, name: '', phone: '' })} className='transition flex text-white bg-amber-500 hover:bg-amber-600 hover:delay-150 rounded-lg font-semibold items-center space-x-2 py-1 px-3'>
                                    <Text>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                {/* ADD FORM END */}
            </View >
        )
    } else {
        return (
            <View>
                {/* SEARCH START */}
                <View className='container'>
                    <View className='bg-blue-500 rounded-lg px-4 py-1'>
                        <Text className=' text-lg text-white font-bold'>Search Contact</Text>
                    </View>

                    <View onSubmit={handleSearch} className=''>
                        <View id='searchForm' className='space-y-8 mt-8'>
                            <View className='space-x-6 flex justify-evenly items-center'>
                                <Text className='text-lg font-semibold tracking-wide' htmlFor='searchName'>Name</Text>
                                <TextInput type='text' id='searchName' name='searchName' onChange={handleInputChange} value={contact.searchName} className='text-lg border-2 border-blue-200 rounded-lg px-4 py-2 w-full' />
                            </View>

                            <View className='space-x-5 flex justify-evenly items-center'>
                                <Text className='text-lg font-semibold tracking-wide' htmlFor='searchPhone'>Phone</Text>
                                <TextInput type='text' id='searchPhone' name='searchPhone' onChange={handleInputChange} value={contact.searchPhone} className='text-lg border-2 border-blue-200 rounded-lg px-4 py-2 w-full' />
                            </View>
                        </View>

                        <View>
                            <TouchableOpacity className='hidden' type="submit" id="submit">
                                <Text>Search</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* SEARCH END */}

                {/* BUTTON ADD START */}
                <View className='container mt-10'>
                    <TouchableOpacity type='TouchableOpacity' onClick={() => setContact({ addCond: true, name: contact.name || '', phone: contact.phone || '' })} className='transition flex text-white bg-blue-500 hover:bg-blue-600 hover:delay-150 rounded-lg font-semibold items-center space-x-3 py-1 px-6'>
                        <Text>Add Contact</Text>
                    </TouchableOpacity>
                </View>
                {/* BUTTON ADD END */}
            </View>
        )
    }
}