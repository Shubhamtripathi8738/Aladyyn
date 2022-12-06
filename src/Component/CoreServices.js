import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CoreServices = () => {
  const coreServicesData = useSelector(
    (state) => state.homePageDataReducer?.productData
  );

  return (
    <>
      <section className="core-services">
        <div className="container">
          <div className="service-block-first">
            <h2>Our Core Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="services-block">
              {coreServicesData &&
                coreServicesData?.data?.categoryData.map((value, index) => {
                  return (
                    <div key={index}>
                      <div className="services-block">
                        <div className="service-wrap">
                          <Link to={`/category/${value.name}`}>
                            <div className="img-wrap">
                              <img
                                src={
                                  coreServicesData?.data?.categoryImagePath +
                                  value?.categoryIcon
                                }
                                alt="service"
                              />
                            </div>
                            <div className="service-info">{value.name}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CoreServices;
