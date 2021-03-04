import React,{useState} from 'react';
import Main from './Main';
import SignIn from './SignIn';

export default () => {
  const [name, setName] = useState('');
  console.log('NAME',{name});
  if(name === ''){
    return <SignIn setName={setName}/>
  }else{
    return <Main name = {name}/>
  }
};
