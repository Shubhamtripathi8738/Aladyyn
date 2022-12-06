import { useSelector } from "react-redux";
import Slider from "react-slick";

const Banner = () => {
  const bannerData = useSelector((state) => state.homePageDataReducer?.productData);
 



  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    innerWidth:"100px"
};
  return (
    <>
      <section className="banner" style={{ overflow: "hidden", padding: "10px" }}>
      <Slider {...settings}>
        {bannerData &&
          bannerData?.data?.bannerData.map((value, index) => {
            return (
             
                <div key={index}>
                  <div
                    className="container"
                    // style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="banner-wrap">
                      <div className="banner-right">
                        <div className="img-wrap" >
                          <img
                            src={bannerData?.data?.bannerImagePath + value?.webImage}
                            alt="banner"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
            );
          })}
          </Slider>
      </section>
    </>
  );
};
export default Banner;
