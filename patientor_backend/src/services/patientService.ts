import patientData from "../../data/patients";
import { v1 as uuid } from 'uuid';


import { NonSensitivePatientData, Patient, NewPatient } from "../types";

const getPatients = (): NonSensitivePatientData[] => {
    return patientData.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const findById = (id: string): Patient | undefined => {
    const patient = patientData.find((p) => p.id === id);
    return patient;
};

const addPatient = ( patient: NewPatient ): Patient => {
    
    const newPatient = {
        id: uuid(),
        ...patient
    };

    patientData.push(newPatient);

    return newPatient;
};

export default {
    getPatients,
    addPatient,
    findById
};