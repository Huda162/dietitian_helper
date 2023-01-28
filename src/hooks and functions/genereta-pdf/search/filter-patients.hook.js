import { useMemo } from 'react';
import useSearch from './search.hook';

const useFilterPatients = patients => {
    const { mySearch } = useSearch();

    const filterdPatients = useMemo(()=>{
        return patients.filter(patient => {
            const doesItMatch = name => {
                name.toLowerCase().includes(mySearch.searchTermsFromURL.toLowerCase().trim());
            }

            let match = doesItMatch(patient.name);

            return match
        });
    }, [mySearch, patients]);
    return patients;
};

export default useFilterPatients;