import React from 'react';
import {pushMessage} from '../firebase';
import { IconButton } from '@material-ui/core';
import  SendIcon from  '@material-ui/icons/Send';


const MessageSubmitButton =({name, text, setText}) =>{

return (
<IconButton
 disabled={text === ''}
 onClick ={()=>{
    pushMessage({name:"motto", text});
    setText('');
 }}
 
 >
    <SendIcon/>
</IconButton> 
);
};

export default MessageSubmitButton;