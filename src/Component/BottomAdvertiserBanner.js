import { useSelector } from "react-redux";
import Slider from "react-slick";

const BottomAdvertiserBanner=()=>{

    const bottomAdvertiserData = useSelector((state) => state.homePageDataReducer?.productData);
   


   const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    
};

    return(
        <>
        <aside className="ads-banners last">
    <div className="container">
       
<div data-index="-2" className="slick-slide slick-cloned" aria-hidden="true"
>
<Slider {...settings}>
    {bottomAdvertiserData&& bottomAdvertiserData?.data?.bottomAdvertiserBannerData?.map((value,index)=>{
        return(
<div key={index}>
    <div style={{width: "100%", display: "inline-block"}}>
        <div className="card">
            <div className="ad-img"><img
                    src={bottomAdvertiserData?.data?.bannerImagePath + value?.webImage}
                    alt="ad"/></div>
        </div>
    </div>
</div>
        );
    })}
</Slider>
</div> 
    </div>
</aside>

        </>
    );
}
export default BottomAdvertiserBanner;