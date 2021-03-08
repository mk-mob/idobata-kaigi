import React,{useState,useEffect} from 'react';
import {List} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {messagesRef} from '../firebase';
import MessageItem from './MessageItem'
const useStyles = makeStyles({
    root: {
        gridRow: 1,
        overflow: 'auto',
        width:'100%',
    }
});

 //key:-MVAbW40JtXj4bH-eDGn value:{name: "motto", text: "hello"}

const MessageList = () => {
    const classes = useStyles();
    const [messages, setMessages] =useState('');

    useEffect(() => {
    messagesRef
    .orderByKey()
    .limitToLast(15)
    .on("value", (snapshot)=>{
       const messages = snapshot.val();

       if(messages === null) return;
       const entries = Object.entries(messages);
       const newMessages = entries.map((entry) =>{
        const [key,nameAndText ]= entry;
        return {key, ...nameAndText};
       });
       console.log(newMessages);
       setMessages(newMessages);
    })
    },[] );
    if(messages){
    return <List className={classes.root}>
        {
            messages.map(({key,name,text}) =>{
            return(   
                <MessageItem key={key} name={name} text={text}> 
                item
                </MessageItem>
            );
            })
        }
    </List>
    }else{
        return <div></div>;
    }
};  

export default MessageList;