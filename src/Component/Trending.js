import { useSelector } from "react-redux";
import Slider from "react-slick";

const Trending=()=>{

    const trendingData = useSelector((state) => state.homePageDataReducer?.productData);
 

 const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    innerWidth:"100px"
};


    return(
        <>
        <section className="trending-services">
    <div className="container">
        <h2>Trending</h2>
        <Slider {...settings}>
        {trendingData&& trendingData?.data?.subcategoryData.map((value,index)=>{
         return(
                        <div key={index}>
                            <div className="card"  style={{width: "100%", display: "inline-block"}}>
                                <div className="service-img"><img
                                        src="https://inszn-ecom.s3.amazonaws.com/986075f1-aee4-427c-841d-b300a8f42dfd.jpeg"
                                        alt="service" style={{width: "500px", height: "350px"}}/></div>
                                <div className="service-name">
                                    <h3>{value.name}</h3>
                                </div>
                            </div>
                        </div>
         );

        })}
             </Slider>           

                        </div>
</section>
        </>
    );
}
export default Trending;