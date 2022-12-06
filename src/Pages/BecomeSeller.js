import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Company from "../Component/Company";
import Freelancer from "../Component/Freelancer";

const BecomeSeller = () => {
  return (
    <>
      <section className="become-seller">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Become an Aladyyn Seller
              </li>
            </ol>
          </nav>

          <div className="section-header">
            <h1>Become an Aladyyn Seller</h1>
            <div className="btn-wrap">
              <a className="btn" href="/seller-sign">
                Seller panel login
              </a>
            </div>
          </div>

          <Tabs>
            <TabList>
              <ul className="mb-3 nav nav-tabs" role="tablist">
                <Tab>
                  <li className="nav-item" role="presentation">
                    <button
                      type="button"
                      id="uncontrolled-tab-example-tab-company"
                      role="tab"
                      data-rr-ui-event-key="company"
                      aria-controls="uncontrolled-tab-example-tabpane-company"
                      className="nav-link active"
                      aria-selected="true"
                    >
                      Company
                    </button>
                  </li>
                </Tab>
                <Tab>
                  <li className="nav-item" role="presentation">
                    <button
                      type="button"
                      id="uncontrolled-tab-example-tab-freelancer"
                      role="tab"
                      data-rr-ui-event-key="freelancer"
                      aria-controls="uncontrolled-tab-example-tabpane-freelancer"
                      className="nav-link"
                      
                    >
                      Freelancer
                    </button>
                  </li>
                </Tab>
              </ul>
            </TabList>
            <div className="tab-content">
              <TabPanel>
                <Company />
              </TabPanel>
              <TabPanel>
                <Freelancer />
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </section>
    </>
  );
};
export default BecomeSeller;

