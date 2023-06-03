import { AuthContext } from "@/src/context/AuthContext";
import {getToken} from "@/src/services/helper";
import axios from "axios";
import {useEffect, useState} from "react";

const AuthProvider = ({children}) => {
    const [user,
        setUser] = useState();
    const [isLoading,
        setIsLoading] = useState(false);

    // GET AUTH TOKEN FROM LOCALSTORAGE;
    const AUTH_TOKEN = getToken();

    // CHECK EVERY TIME FOR UPDATE USER DATA WHEN AUTH TOKEN IS CHANGED
    useEffect(() => {
        if(AUTH_TOKEN) {
            fatchUserData(AUTH_TOKEN);
        }
    }, [AUTH_TOKEN]);

    // FATCH USER DATA
    const fatchUserData = async(token) => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/users/me`, {
                headers: {
                    Authorization: `${process.env.NEXT_PUBLIC_BEARER} ${token}`
                }
            });

            const data = response.data;
              
            if (data) {
                setUser(data)
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false)
        }

    }

    // SET USER FROM OUTSIDE OF PROVIDER
    const handleUser = (values) => setUser(values)

    return (
        <AuthContext.Provider
          value={{ user: user, setUser: handleUser, isLoading }}
        >
          {children}
        </AuthContext.Provider>
    );

}

export default AuthProvider;