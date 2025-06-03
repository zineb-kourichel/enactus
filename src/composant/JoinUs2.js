
import React ,{ useState } from "react";
import { firestore } from "../firebase.js";
import { addDoc,collection } from "firebase/firestore";

import "../custom.scss"
function JoinUs(){
    const [Formdata,SetFormData]=useState({
        nom:"",
        prenom:"",
        email:"",
        message:"",
    });

    const [Submited,setSubmited]=useState(false)

    function hundleChange(e){
        SetFormData({...Formdata  //C’est l’opérateur de décomposition (spread). 
        // Il copie tous les champs actuels de l’objet Formdata.
          
          
          ,[e.target.name]:e.target.value})
    }
    
   
      

      const handleSubmit=async(e)=>{
        e.preventDefault();




        ////---------------



        try {
          const docRef = await addDoc(collection(firestore, "formData"), {
              nom: Formdata.nom,
              prenom: Formdata.prenom,
              email: Formdata.email,
              message: Formdata.message,
              timestamp: new Date()
          });
  
          console.log("Document written with ID: ", docRef.id);
          setSubmited(true);
      } catch (e) {
          console.error("Error adding document: ", e);
      }
  
        //console.log("inscription:",{FormData});
        console.log({
            nom: Formdata.nom,
            prenom: Formdata.prenom,
            email: Formdata.email,
            message: Formdata.message
          });

       

      
          



    }

  return(
        <>
        <img src="/images/09.jpg" alt="background" className="background-formulaire" />
        <div className="join-us-container">
          {Submited ? (
            <p>Merci ! Votre demande a été envoyée.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <h1>Rejoinez-nous!</h1>
              <input type="text" placeholder="Nom" name="nom" onChange={hundleChange} required />
              <input type="text" placeholder="Prenom" name="prenom" onChange={hundleChange} required />
              <input type="email" placeholder="Email" name="email" onChange={hundleChange} required />
              <textarea placeholder="Pourquoi vous voulez rejoinez le club" name="message" onChange={hundleChange} />
              <button type="submit">submit</button>
            </form>
          )}
        </div>
      </>
      
      
      
    )


}
export default JoinUs;