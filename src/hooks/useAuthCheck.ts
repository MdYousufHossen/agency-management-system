import { useEffect, useState } from "react";
import { useAppDispatch } from "~/app/hooks";
import { useCheckuserQuery } from "~/feautres/auth/authApi";
import { userLoggedIn } from "~/feautres/auth/authSlice";
export default function useAuthCheck() {
    const dispatch = useAppDispatch();
    const [authChecked, setAuthChecked] = useState<Boolean>(false);
    const localAuth = localStorage.getItem("auth");

    const { data, isSuccess, refetch, error } = useCheckuserQuery();
    console.log(data, isSuccess, error, "cecc");
    useEffect(() => {
        refetch();
        if (localAuth) {
            const auth = JSON.parse(localAuth);
            if (auth?.token && auth?.user) {
                dispatch(
                    userLoggedIn({
                        token: auth.token,
                        user: auth.user,
                    }),
                );
            }
        }
        setAuthChecked(true);
    }, [dispatch, setAuthChecked]);

    return authChecked;
}
