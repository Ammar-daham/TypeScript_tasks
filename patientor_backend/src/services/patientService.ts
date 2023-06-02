import patientData from "../../data/patients";
import { v1 as uuid } from 'uuid';


import { NonSensitivePatientData, Patient, NewPatient, NewEntry, Entry, HealthCheckEntry, OccupationalHealthcareEntry, HospitalEntry, parseDiagnosisCodes} from "../types";

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

const addEntry = ( id: string, entry: NewEntry ): Entry => {
    const patient = findById(id);

  if (!patient) {
    throw new Error('Patient not found');
  }

  // Create a new entry with a unique ID
  const newEntry: Entry = {
    id: uuid(),
    diagnosisCodes: parseDiagnosisCodes(entry.diagnosisCodes),
    ...entry,
  };

  // Check if the entry type is valid
  switch (newEntry.type) {
    case 'HealthCheck':
      validateHealthCheckEntry(newEntry);
      break;
    case 'OccupationalHealthcare':
      validateOccupationalHealthcareEntry(newEntry);
      break;
    case 'Hospital':
      validateHospitalEntry(newEntry);
      break;
    default:
      throw new Error('Invalid entry type');
  }

  patient.entries.push(newEntry);

  return newEntry;
};

// Validate the fields for HealthCheckEntry
const validateHealthCheckEntry = (entry: HealthCheckEntry): void => {
    if (!entry.description || !entry.date || !entry.specialist || !entry.healthCheckRating ) {
      throw new Error('Missing required fields for HealthCheckEntry');
    }
  };
  
  // Validate the fields for OccupationalHealthcareEntry
  const validateOccupationalHealthcareEntry = (entry: OccupationalHealthcareEntry): void => {
    if (!entry.description || !entry.date || !entry.specialist || !entry.sickLeave) {
      throw new Error('Missing required fields for OccupationalHealthcareEntry');
    }
  };
  
  // Validate the fields for HospitalEntry
  const validateHospitalEntry = (entry: HospitalEntry): void => {
    if (!entry.description || !entry.date || !entry.specialist || !entry.discharge) {
      throw new Error('Missing required fields for HospitalEntry');
    }
  };

export default {
    getPatients,
    addPatient,
    findById,
    addEntry
};