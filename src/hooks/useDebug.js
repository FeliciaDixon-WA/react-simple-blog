import { useEffect } from "react";

const useDebug = (param) => {
    
        useEffect(() => {
            console.log(param);
        }, [param]);
    
}
export default useDebug;