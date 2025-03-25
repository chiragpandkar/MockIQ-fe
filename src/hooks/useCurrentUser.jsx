import { useEffect, useState } from "react";
import { getCurrentUser } from "../apis/services";
import { setUser } from "../store/slices/user.slice";
import { useDispatch } from "react-redux";

const useCurrentUser = () => {
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const [user, setUserState] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const currentUser = await getCurrentUser(token);
                console.log(currentUser)
                if (currentUser) {
                    dispatch(setUser(currentUser.data.user));
                    setUserState(currentUser.data.user);
                }
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        if (token) fetchUser();
    }, [token, dispatch]);

    return { email: user?.email, username: user?.username };
};

export default useCurrentUser;
