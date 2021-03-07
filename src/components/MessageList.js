import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {messagesRef} from '../firebase';

const useStyles = makeStyles({
    root: {
        gridRow: 1,

    }
});

 //key:-MVAbW40JtXj4bH-eDGn value:{name: "motto", text: "hello"}

const MessageList = () => {
    const classes = useStyles();
    const [messages, setMessages] =useState('');

    useEffect(() => {
    messagesRef
    .orderByKey()
    .limitToLast(3)
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

    return <div className={classes.root}>MessageList</div>;

};  

export default MessageList;