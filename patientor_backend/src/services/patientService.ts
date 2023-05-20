import patientData from "../../data/patients";

import { NonSensitivePatientData } from "../types";

const getPatients = (): NonSensitivePatientData[] => {
    return patientData.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

export default {
    getPatients
};