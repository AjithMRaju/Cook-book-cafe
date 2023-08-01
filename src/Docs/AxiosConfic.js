import axios from "axios";

const  axiosinstance=axios.create({
    baseURL:`https://www.themealdb.com/api/json/v1/1/`
});

export default axiosinstance;


export const URLS={
    fecthAllArea:`list.php?a=list`,
    fetchAllCategory:`list.php?c=list`,
    filterbyArea:`filter.php?a=`,
    filterbyCategory:`filter.php?c=`,
}

