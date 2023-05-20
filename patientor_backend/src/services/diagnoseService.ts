import diagnoseEntry from "../../data/diagnoses";

import { DiagnoseEntry } from "../types";



const getDiagnoses = (): DiagnoseEntry[] => {
    return diagnoseEntry;
};


export default {
    getDiagnoses
};