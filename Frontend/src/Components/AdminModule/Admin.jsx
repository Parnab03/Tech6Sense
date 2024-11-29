import AdminFooter from "./AdminCommonModule/AdminFooter";
import AdminNav from "./AdminCommonModule/AdminNav";
import AdminStudy from "./AdminStudyModule/Adminstudy";

const Admin = () => {
    return (
        <>
            <AdminNav />
            <AdminStudy />
            <AdminFooter />
        </>
    );
};

export default Admin;
