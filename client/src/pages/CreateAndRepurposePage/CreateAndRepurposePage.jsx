import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import bellIcon from "../../assets/bell.png";
import logoutIcon from "../../assets/logout.png";
import { generateBreadcrumb } from "../../Utility/generateBreadcrumb";

const CreateAndRepurposePage = () => {
  const breadcrumb = generateBreadcrumb(window.location.href);
  return (
    <div className="project_details_page">
      <div>
        <Sidebar />
      </div>
      <div className="project_details_page_main">
        <div className="project_details_page_breadcrumb">
          {breadcrumb}
          <div className="project_details_page_breadcrumb_Icons">
            <div>
              <img src={bellIcon} alt=""  />
            </div>
            <div>
              <img src={logoutIcon} alt=""  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAndRepurposePage;
