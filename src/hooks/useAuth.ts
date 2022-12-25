import { useAppSelector } from "~/app/hooks";

export default function useAuth() {
    const auth = useAppSelector((state) => state.auth);
    if (auth?.token && auth?.user) {
        return true;
    } else {
        return false;
    }
}
