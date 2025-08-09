import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import PageMeta from "../../../components/common/PageMeta";

const InventoryPage: React.FC = () => {
  return (
    <>
      <PageMeta
        title="RS Yabis | Back Office - Inventaris"
        description="This is React.js Form Elements  Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Inventaris" />
    </>
  );
};

export default InventoryPage;
