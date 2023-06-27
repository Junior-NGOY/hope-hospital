import React from 'react';
import{ NavLink}  from 'react-router-dom';
import  { useContext, useEffect } from 'react';
import StructureContext from '../../contexts/StructureContext';
import { useParams } from 'react-router-dom';

function StructureEdit() {
  const {formValues, onChange, errors, setErrors, structure, getStructure, updateStructure} = useContext(StructureContext);
  let {id}=useParams();
  useEffect(()=>{
    getStructure(id)
    setErrors({})
  }, []);
  return (
    <div>
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Edition structure</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><NavLink href="#">Accueil</NavLink></li>
                <li class="breadcrumb-item active">Edition structure</li>
              </ol>
            </div>
          </div>
          <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Editer une structure</h3>
                </div>
                <form onSubmit={updateStructure}>
                  <div class="card-body">
                    <div class="form-group">
                      <label for="nom">Nom</label>
                      <input name='nom' onChange={onChange} value={formValues['nom']} type="text" className="form-control" id="nom" placeholder="Entre nom"/>
                    </div>
                    <div class="form-group">
                      <label for="">Adresse</label>
                      <input name='adresse' onChange={onChange} value={formValues['adresse']} type="" className="form-control" id="adresse" placeholder="Entrer Adresse"/>
                    </div>
                  </div>
                  <div class="card-footer">
                    <button type="submit" className="btn btn-primary">Valider</button>
                    <NavLink to="/structures"><button type="submit" className="btn btn-danger float-right"> Annuler</button></NavLink>
                  </div>
                </form>
          </div>
        </div>
    </section>
    </div>
  )
}

export default StructureEdit