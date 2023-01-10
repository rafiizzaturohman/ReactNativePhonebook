import React, { useEffect, useState } from "react";
import ContactItem from "../../components/ContactItem";

import { useDispatch, useSelector } from 'react-redux'
import { View, FlatList, ScrollView } from 'react-native';
import { loadContactAsync, addContactAsync, removeContactAsync, updateContactAsync, selectContact, loadMore } from './contactSlice'
import { s } from "react-native-wind";

export default function ContactList(props) {
    const contact = useSelector(selectContact)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadContactAsync())
    }, [dispatch])

    const scrolling = () => {
        dispatch(loadMore())
        console.log('loaded')
    }

    const contactRender = ({ item }) => {
        return (
            <ContactItem key={item.id}
                users={item}
                sent={item.sent}
                resend={() => dispatch(addContactAsync({ id: item.id, name: item.name, phone: item.phone }))}
                update={(name, phone) => dispatch(updateContactAsync({ id: item.id, name: name, phone: phone }))}
                remove={() => dispatch(removeContactAsync({ id: item.id }))} />
        )
    }

    return (
        <FlatList
            data={contact}
            renderItem={contactRender}
            keyExtractor={item => item.id}
            onEndReached={() => dispatch(loadMore())}
            onEndReachedThreshold={5}
            style={{ maxHeight: 410 }}
        />
    )

    // return (
    //     <View style={s`my-4 mx-2`}>
    //         {
    //             contact.map((user, index) => (
    //                 <ContactItem
    //                     key={user.id}
    //                     users={user}
    //                     sent={user.sent}
    //                     resend={() => dispatch(addContactAsync({ id: user.id, name: user.name, phone: user.phone }))}
    //                     update={(name, phone) => dispatch(updateContactAsync({ id: user.id, name: name, phone: phone }))}
    //                     remove={() => dispatch(removeContactAsync({ id: user.id }))} />
    //             ))
    //         }
    //     </View>
    // )

    // key={user.id}
    // users={user}
    // sent={user.sent}
    // resend={() => dispatch(addContactAsync({ id: user.id, name: user.name, phone: user.phone }))}
    // update={(name, phone) => dispatch(updateContactAsync({ id: user.id, name: name, phone: phone }))}
    // remove={() => dispatch(removeContactAsync({ id: user.id }))} />

    // <ScrollView scrollEnabled={scrolling} pagingEnabled={true} showsHorizontalScrollIndicator={true}>
    // </ScrollView>
}