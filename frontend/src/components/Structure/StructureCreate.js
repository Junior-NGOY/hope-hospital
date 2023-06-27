import React from 'react';
import{ NavLink}  from 'react-router-dom';
import  { useContext } from 'react';
import StructureContext from '../../contexts/StructureContext';

function StructureCreate() {
  const {formValues,onChange, storeStructure, errors} = useContext(StructureContext);
  return (
    <div>
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Nouvelle structure</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Accueil</a></li>
                <li class="breadcrumb-item active">Nouvelle structure</li>
              </ol>
            </div>
          </div>
          <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Ajout d'une structure</h3>
                </div>
                <form onSubmit={storeStructure}>
                  <div class="card-body">
                    <div class="form-group">
                      <label for="nom">Nom</label>
                      <input name='nom'  onChange={onChange} value={formValues['nom']} type="text" className="form-control" id=" " placeholder="Entre nom" />
                    </div>
                    <div class="form-group">
                      <label for="">Adresse</label>
                      <input name='adresse' onChange={onChange} value={formValues['adresse']} type="text" className="form-control" id=" " placeholder="Entrer Adresse" />
                    </div>
                  </div>
                  <div class="card-footer">
                    <button type="submit" className="btn btn-primary">Enregistrer</button>
                    <NavLink to="/structures"><button type="submit" className="btn btn-danger float-right"> 
                    Annuler</button></NavLink>
                  </div>
                </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StructureCreate