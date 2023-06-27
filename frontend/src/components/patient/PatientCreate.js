import React ,{useContext, useState} from 'react';
import{ NavLink}  from 'react-router-dom';
import PatientContext from '../../contexts/PatientContext';


function PatientCreate() {
  const { storePatient, errors} = useContext(PatientContext);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [postnom, setPostNom] = useState('');
  const [sexe, setSexe] = useState('');
  const [datenais, setDateNais] = useState('');
  const [lieunais, setLieuNais] = useState('');
  const [etatcivil, setEtatCivil] = useState('');
  const [profession, setProfession] = useState('');
  const [telephone, setTelephone] = useState('');
  const [adresse, setAdresse] = useState('');
  const [email, setEmail] = useState('');
  const [quartier, setQuartier] = useState('');
  const [commune, setCommune] = useState('');
  const [ville, setVille] = useState('');
  const [province, setProvince] = useState('');
  const [nationalite, setNationalite] = useState('Congolaise');
  const [photo, setPhoto] = useState('');
  const [categorie, setCategorie] = useState('');

  const handleSavePatient =  (event) => {
    event.preventDefault();
    const patient = JSON.stringify ({ 
      prenom, nom,postnom, sexe, datenais,
      lieunais,etatcivil,profession,telephone,
      adresse,email,quartier,commune, ville, province,nationalite,photo,categorie
    });
    storePatient(patient);
  };
  return (
    <section class="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
      <div className="col-sm-6">
        <h1>Nouveau patient</h1>
      </div>
      <div className="col-sm-6">
        <ol className="breadcrumb float-sm-right">
          <li className="breadcrumb-item"><a href="/">Accueil</a></li>
          <li className="breadcrumb-item active">Nouveau patient</li>
        </ol>
      </div>
      </div>
    </div>
    <div className="card card-primary"> 
    <div className="card-header"><h3 class="card-title">Ajout d'un patient</h3></div>
    <div className="card-body">  
      <form  >
      <div className="row">
        <div className="col-md-4">
          <div class="form-group">
            <label htmlFor="nom">Prénom</label>
            <input name='prenom' value={prenom} onChange={(e) => setPrenom(e.target.value)}type="text" className="form-control" id=" " placeholder="Entre nom" />
          </div>
          <div class="form-group">
            <label htmlFor="nom">Nom  </label>
            <input name='nom'  value={nom} onChange={(e) => setNom(e.target.value)} type="text" className="form-control" id=" " placeholder="Entre nom" />
          </div>
          <div class="form-group">
            <label htmlFor="">Postnom</label>
            <input name='postnom' value={postnom} onChange={(e) => setPostNom(e.target.value)} type="text" className="form-control" id=" " placeholder="Entrer Postnom" />
          </div>
          <div class="form-group">
            <label htmlFor="">Sexe</label>
            <select className="form-control" value={sexe} onChange={(e) => setSexe(e.target.value)}>
              <option>Choisir genre</option>
              <option value="Feminin">Feminin</option>
              <option value="Masculin">Masculin</option>
            </select>
          </div>
          <div class="form-group">
            <label for="nom">Lieu de Naissance</label>
            <input name='lieunais' value={lieunais} onChange={(e) => setLieuNais(e.target.value)} type="text" className="form-control" id=" " placeholder="Entre lieu de naissance" />
          </div>
          <div class="form-group">
            <label for="">Date de naissance</label>
            <input name='datenais'  value={datenais} onChange={(e) => setDateNais(e.target.value)} type="date" className="form-control" id=" " placeholder="Entrer Adresse" />
          </div>
        </div>
        <div className="col-md-4">
          <div class="form-group">
            <label htmlFor="etatcivil">Etat-civil</label>
            <select className="form-control" value={etatcivil} onChange={(e) => setEtatCivil(e.target.value)}>
              <option>Choisir Etat-civil</option>
              <option value="Marié">Marié</option>
              <option value="Célibataire">Célibataire</option>
              <option value="Veuf">Veuf</option>
              <option value="Divorcé">Divorcé</option>
            </select>
          </div>
          <div class="form-group">
            <label htmlFor="nom">Profession  </label>
            <input name='nom'  value={profession} onChange={(e) => setProfession(e.target.value)} type="text" className="form-control" id=" " placeholder="Entre nom" />
          </div>
          <div class="form-group">
            <label htmlFor="">Téléphone</label>
            <input name='postnome' value={telephone} onChange={(e) => setTelephone(e.target.value)} type="number" className="form-control" id=" " placeholder="Entrer Postnom" />
          </div>
          <div class="form-group">
            <label htmlFor="">Email</label>
            <input name='email'value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id=" " placeholder="Entrer Adresse" />
          </div>
          <div class="form-group">
            <label htmlFor="nom">Adresse</label>
            <input name='nom'  value={adresse} onChange={(e) => setAdresse(e.target.value)} type="text" className="form-control" id=" " placeholder="Entre nom" />
          </div>
          <div class="form-group">
            <label htmlFor="">Quartier</label>
            <input name='adresse' value={quartier} onChange={(e) => setQuartier(e.target.value)} type="text" className="form-control" id=" " placeholder="Entrer Adresse" />
          </div>
        </div>
        <div className="col-md-4">
          <div class="form-group">
            <label htmlFor="commune">Commune</label>
            <input name='commune' value={commune} onChange={(e) => setCommune(e.target.value)} type="text" className="form-control" id=" " placeholder="Entre commune" />
          </div>
          <div class="form-group">
            <label htmlFor="ville">Ville  </label>
            <input name='ville'  value={ville} onChange={(e) => setVille(e.target.value)} type="text" className="form-control" id=" " placeholder="Entre profession" />
          </div>
          <div class="form-group">
            <label htmlFor="province">Province</label>
            <input name='province' value={province} onChange={(e) => setProvince(e.target.value)} type="text" className="form-control" id=" " placeholder="Entrer Téléphone" />
          </div>
          <div class="form-group">
            <label htmlFor="nationalite">Nationalité</label>
            <input name='nationalite'value={nationalite} onChange={(e) => setNationalite(e.target.value)} type="text" className="form-control" id=" " placeholder="Entrer Email" />
          </div>
          <div class="form-group">
            <label htmlFor="categorie">Catégorie</label>
            <select className="form-control" value={categorie} onChange={(e) => setCategorie(e.target.value)}>
              <option>Choisir la catégorie</option>
              <option value="Indépendant">Particulier</option>
              <option value="Abonné">Abonné</option>
            </select>
          </div>
          <div class="form-group">
            <label htmlFor="photo">Photo</label>
            <input name='photo' value={photo} onChange={(e) => setPhoto(e.target.value)} type="file" className="form-control" id=" " placeholder="Entrer Adresse" />
          </div>
        </div>
      </div>
    
      </form>
    </div>
    <div class="card-footer"><button type="submit" onClick={handleSavePatient} className="btn btn-outline-primary">Enregistrer</button>
        <NavLink to="/patients"><button type="submit" className="btn btn-outline-danger float-right"> 
        Annuler</button></NavLink>
    </div>
    </div>
    </section>
  )
}

export default PatientCreate