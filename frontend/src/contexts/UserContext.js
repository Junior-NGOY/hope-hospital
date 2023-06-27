import { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const UserContext = createContext();
axios.defaults.baseURL='http://127.0.0.1:8000/api/';//lien vers le backend

export const UserProvider = ({children}) =>{
  
   // const [formValues, setFormValues] = useState(initialFom);
    const [patients, setPatients]=useState([]);
    const [users, setUsers]=useState([]);
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
   
    async function getUsers(){
        try {
            const apiUsers = await axios.get('users');
            //console.log("Ok")
            setUsers(apiUsers.data.data);
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
    const deleteUser = async (id)=> {
        try {
            if(!window.confirm("Voulez-vous supprimer user ?")){
                return;
            }
            await axios.delete('users/' + id);
            navigate('/users');
            console.log("c'est fait ....ok")
            getUsers();
        } catch (error) {
            console.error(error.response.data);
        }
        
    };
    return  (
    <UserContext.Provider 
        value={{patient,users,getPatient,getUsers,
             storePatient, errors,setErrors, updatePatient,deleteUser}}
    >
        {children}
    </UserContext.Provider>)
};
export default  UserContext;