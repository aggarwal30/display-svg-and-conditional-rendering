function EventBasics(){

    const handleChangeForm=(e)=>{

        console.log(e);

       console.log(e.target.name);

       console.log(e.target.value);

    }

      

    const handleFormSubmit =()=>{

        setTimeout(()=> {
            console.log(" Form Submission Time Out!!!!");
                    }, 3000);
                }
                
        console.log("form is submitted");

    

    const handleSubmission = (e)=>{

        e.preventDefault();

    }

    return(

        <>

            <div>

                <form   onSubmit={handleSubmission} style={{marginLeft:'50%', padding:'10px'}}>

                    <h2>Form Submission</h2>

                    <input type="text" 

                           name="Rohan"

                           value="x"

                           onChange={handleChangeForm}

                    />

                </form>

                <button style={{marginLeft:'55%'}} onClick={handleFormSubmit}>Submit</button>

            </div>

        </>

    )

}
export default  EventBasics;