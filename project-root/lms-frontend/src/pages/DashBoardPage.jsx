import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";
import DashBoardContent from "../components/dashboard/DashBoardContent";

const DashBoardPage = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <div className="content">
          <DashBoardContent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashBoardPage;
