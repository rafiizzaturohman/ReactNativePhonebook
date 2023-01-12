import React, { useEffect, useState } from "react";
import ContactItem from "../../components/ContactItem";

import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native';
import { loadContactAsync, addContactAsync, removeContactAsync, updateContactAsync, selectContact, loadMore } from './contactSlice'

export default function ContactList(props) {
    const contact = useSelector(selectContact)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadContactAsync())
    }, [dispatch])

    const scrolling = () => {
        dispatch(loadMore())
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
            onEndReached={scrolling}
            onEndReachedThreshold={3}
            style={{ maxHeight: 620 }}
        />
    )
}