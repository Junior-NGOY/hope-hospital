import { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const PatientContext = createContext();
axios.defaults.baseURL='http://127.0.0.1:8000/api/';//lien vers le backend

export const PatientProvider = ({children}) =>{
  
   // const [formValues, setFormValues] = useState(initialFom);
    const [patients, setPatients]=useState([]);
    const [patient, setPatient]=useState([]);
    const [errors, setErrors]=useState([]);
    const navigate = useNavigate();
   
    const storePatient = async (data)=>{
        try {
            await axios.post('patients',data,{
                headers: { "Content-Type": "aplication/json" },
              }).then(function (resp) {
                //console.log(resp.data);
                navigate('/patients');
              })
              .catch(function (err) {
                console.error(err.response.data);
              });
         
        } catch (e) {
            if(e.response.status === 422){
                console.log(e.response.data.errors)
                setErrors(e.response.data.errors)
            }
        }
        const apiPatients = await axios.get('patients');
        setPatients(apiPatients.data.data);
    };
    const updatePatient = async (data)=> {
        try {
            await axios.put('patients/'+patient.id, data,{
                headers: { "Content-Type": "aplication/json" },
              }).then(function (resp) {
                console.log(resp.data);
                navigate('/patients');
              })
              .catch(function (err) {
                console.error(err.response.data);
              });
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
        const apiPatients = await axios.get('patients');
        setPatients(apiPatients.data.data);
    };
   
    async function getPatients(){
        try {
            const apiPatients = await axios.get('patients');
            //console.log("Ok")
            setPatients(apiPatients.data.data);
        } catch (error) {
            console.error(error.response.data); 
        }
    };
    const getPatient = async (id)=> {
        try {
            
            const response = await axios.get('patients/' + id);
            const apiPatient=response.data.data
            //const apiPatient=response.data
            console.log(apiPatient)
            setPatient(apiPatient);
        } catch (error) {
            
        }
       
    };
    const deletePatient = async (id)=> {
        try {
            if(!window.confirm("Voulez-vous supprimer ?")){
                return;
            }
            await axios.delete('patients/' + id);
            navigate('/patients');
            console.log("c'est fait ....")
            getPatients();
        } catch (error) {
            console.error(error.response.data);
        }
        
    };
    return  (
    <PatientContext.Provider 
        value={{patient,patients,getPatient,getPatients,
             storePatient, errors,setErrors, updatePatient,deletePatient}}
    >
        {children}
    </PatientContext.Provider>)
};
export default  PatientContext;