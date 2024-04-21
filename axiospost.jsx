import { useState } from 'react';

import axios  from 'axios';

 

const AxiosPostData = ()=>{

    const [userData, setUserData] = useState({

        branch:'',

        Qualification:''

    });

 

   const handleFormChange = (e) =>{

     setUserData({...userData, [e.target.name]: e.target.value

    });

   }

 

   const handleFormSubmit=(e)=>{

    e.preventDefault();

 

    const finalUserData = [{

        branch:userData.branch,

        Qualification:userData.Qualification

    }];
    axios.post("https://api.github.com/users", finalUserData)

    .then((response)=>{

        console.log(response);

    })

   }

 

    return(

       <>

        <h2>Posting Data </h2>

        <form onSubmit={handleFormSubmit}> 

        <label htmlFor='branch'>Branch</label>  <br />

        <input type='text'

         name='branch'

         id='branch'

         value={userData.branch} onChange={handleFormChange}></input>

         <br />

         <label htmlFor='Qualification'>Qualification</label>  <br />

        <input type='text'

         name='Qualification'

         id='Qualification'

         value={userData.Qualification} onChange={handleFormChange}></input>

         <button type='submit' >Click To Insert</button>

        </form>

       </>

 

    );

}

 

export default AxiosPostData;