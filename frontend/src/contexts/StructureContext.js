import { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const StructureContext = createContext();
axios.defaults.baseURL='http://127.0.0.1:8000/api/';//lien vers le backend

export const StructureProvider = ({children}) =>{
    const initialFom = {
        nom:'',
        adresse:''
    };
    const [formValues, setFormValues] = useState(initialFom);
    const [structures, setStructures]=useState([]);
    const [structure, setStructure]=useState([]);
    const [errors, setErrors]=useState([]);
    const navigate = useNavigate();
   
    const onChange = (e) =>{
        const {name, value} = e.target;
        setFormValues({...formValues,[name]:value})
    };
    const storeStructure = async (e)=> {
        e.preventDefault();
        try {
            //alert(formValues.adresse);
            await axios.post('structures', formValues);
            console.log('Ok')
            setFormValues(initialFom);
            navigate('/structures');
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
        const apiStructures = await axios.get('structures');
        setStructures(apiStructures.data.data);
    };
    const updateStructure = async (e)=> {
        e.preventDefault();
        try {
            await axios.put('structures/'+structure.id, formValues);
            setFormValues(initialFom);
            navigate('/structures');
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
        const apiStructures = await axios.get('structures');
        setStructures(apiStructures.data.data);
    };
    const getStructures = async ()=> {
        const apiStructures = await axios.get('structures');
        setStructures(apiStructures.data.data);
    };
    const getStructure = async (id)=> {
        const response = await axios.get('structures/' + id);
        console.log("Ok")
        const apiStructure=response.data.data
        setStructure(apiStructure);
        setFormValues({
            nom:apiStructure.nom,
            adresse:apiStructure.adresse,
        })
    };
    const deleteStructure = async (id)=> {
        if(!window.confirm("Voulez-vous supprimer ?")){
            return;
        }
        await axios.delete('structures/' + id);
       // navigate('');
       getStructures();
    };
    return  (
    <StructureContext.Provider 
        value={{structure,structures,getStructure,getStructures, onChange, 
            formValues, storeStructure, errors,setErrors, updateStructure,deleteStructure}}
    >
        {children}
    </StructureContext.Provider>)
};
export default  StructureContext;