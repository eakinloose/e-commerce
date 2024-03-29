import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import { checkUserIsAdmin } from "./utils/utils";

const mapState = ({ user }) => ({
   currentUser: user.currentUser,
});

const useAdminAuth = (props) => {
   const { currentUser } = useSelector(mapState);
   const history = useHistory();

   useEffect(() => {
    return;
   }, [ history]);

   return currentUser;
};

export default useAdminAuth;
