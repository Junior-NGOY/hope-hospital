import React from 'react';
import {  Route,Routes} from 'react-router-dom';
import StructureIndex from '../Structure/StructureIndex';
import StructureCreate from '../Structure/StructureCreate';
import StructureEdit from '../Structure/StructureEdit';
//Patient
import PatientIndex from '../patient/PatientIndex';
import PatientCreate from '../patient/PatientCreate';
import PatientEdit from '../patient/PatientEdit';

//User
import UserIndex from '../utilisateur/UserIndex';
import UserCreate from '../utilisateur/UserCreate';
import UserEdit from '../utilisateur/UserEdit';

function Content() {
  return (
    <div> 
        <Routes>
            <Route path="/structures" element={<StructureIndex />}></Route>
            <Route path="/structure/create" element={<StructureCreate />}></Route>
            <Route path="/structure/:id/edit" element={<StructureEdit />}></Route>
          
            <Route path="/patients" element={<PatientIndex />}></Route>
            <Route path="/patient/create" element={<PatientCreate />}></Route>
            <Route path="/patient/:id/edit" element={<PatientEdit />}></Route>

            <Route path="/users" element={<UserIndex />}></Route>
            <Route path="/user/create" element={<UserCreate />}></Route>
            <Route path="/user/:id/edit" element={<UserEdit />}></Route>
        </Routes>
    </div>
  )
}

export default Content