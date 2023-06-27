import  { useEffect, useContext, React } from 'react';
import PatientContext from '../../contexts/PatientContext';
import{ NavLink}  from 'react-router-dom';
import {
  faEdit,
  faPlusCircle,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PatientIndex() {
  const {patients,getPatients,deletePatient}=useContext(PatientContext);

  useEffect(()=>{
    getPatients();
  }, [])
  return (
    <div>
         <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Patients</h1> 
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><NavLink href="#">Accueil</NavLink></li>
                <li className="breadcrumb-item active">Patients</li>
              </ol>
            </div>
          </div>
        </div> 
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="card card-primary card-outline">
            <div className="card-header">
              <h3 className="card-title"><NavLink to="/patient/create"><button className='btn btn-outline-info'>
                <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>  Patient</button></NavLink></h3>
              <form  className="row float-right">
                    <div className="col-auto">
                      <input
                        className="form-control"
                        type="text"
                      ></input>
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-outline-info">
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                      </button>
                    </div>
            </form>
            </div>  
            <div className="card-body">
           
            <table className="table table-bordered table-hover table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Prénom</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Post-nom</th>
                  <th scope="col">Adresse</th>
                  <th scope="col">Action</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient, index)=>{
                  return(
                    <tr key={patient.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{patient.prenom}</td>
                      <td>{patient.nom}</td>
                      <td>{patient.postnom}</td>
                      <td>{patient.adresse}</td>
                      <td><NavLink to={`/patient/${patient.id}/edit`} ><button className='btn btn-outline-success btn-sm'>
                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                      </button></NavLink></td>   
                      <td><button className='btn btn-outline-danger btn-sm' onClick={() => deletePatient(patient.id)}>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                        </button></td>  
                  </tr>
                  )})}
              
              </tbody>
            </table>
            </div> 
          </div>
        </div> 
      </section>
    </>
    </div>
  )
}

export default PatientIndex