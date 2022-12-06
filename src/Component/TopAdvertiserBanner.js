import { useSelector } from "react-redux";
import Slider from "react-slick";

const TopAdvertiserBanner=()=>{

    const bannerData = useSelector((state) => state.homePageDataReducer?.productData);
   

    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        
    };
    return(
        <>
        <aside className="ads-banners">
        <div className="container">
        <div data-index="-2" className="slick-slide slick-cloned" aria-hidden="true" >
            
        <Slider {...settings}>
            {bannerData&& bannerData?.data?.topAdvertiserBannerData.map((value,index)=>{
                return(
                    <div key={index}>
                    <div className="card" style={{width: "100%", display: "inline-block"}}>
                        <div className="ad-img">
                            <img src={bannerData?.data?.bannerImagePath + value?.webImage}
                                alt="ad"/>
                                </div>
                    </div>
                </div>
                );
            }) }

</Slider>
           
        </div>
    </div>
</aside>
        </>
    );
}
export default TopAdvertiserBanner;