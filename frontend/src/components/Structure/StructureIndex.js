import  { useEffect, useContext } from 'react';
import{ NavLink}  from 'react-router-dom';
import StructureContext from '../../contexts/StructureContext';
import {
  faEdit,
  faPlusCircle,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function StructureIndex() {
  const {structures,getStructures,deleteStructure}=useContext(StructureContext);

  useEffect(()=>{
    getStructures();
  }, [])

  return (
    <>
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Structures</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><NavLink href="#">Accueil</NavLink></li>
                <li class="breadcrumb-item active">Structures</li>
              </ol>
            </div>
          </div>
        </div> 
      </section>
      <section class="content">
        <div class="container-fluid">
          <div class="card card-primary card-outline">
            <div class="card-header">
              <h3 class="card-title"><NavLink to="/structure/create"><button className='btn btn-outline-info'>
                <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>  Structure</button></NavLink></h3>
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
            <div class="card-body">
           
            <table className="table table-bordered table-hover table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Adresse</th>
                  <th scope="col">Action</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {structures.map((structure, index)=>{
                  return(
                    <tr key={structure.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{structure.nom}</td>
                      <td>{structure.adresse}</td>
                      <td><NavLink to={`/structure/${structure.id}/edit`} ><button className='btn btn-outline-success btn-sm'>
                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                      </button></NavLink></td>   
                      <td><button className='btn btn-outline-danger btn-sm' onClick={() => deleteStructure(structure.id)}>
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
  )
}

export default StructureIndex