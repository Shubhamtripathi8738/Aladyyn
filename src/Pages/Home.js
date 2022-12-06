import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Banner from "../Component/Banner";
import BottomAdvertiserBanner from "../Component/BottomAdvertiserBanner";
import CoreServices from "../Component/CoreServices";
import TopAdvertiserBanner from "../Component/TopAdvertiserBanner";
import Trending from "../Component/Trending";
import {homepageDataAction } from "../Store/Action";

const Home=()=>{

    const dispatch=useDispatch();
useEffect(()=>{
    homepageDataAction(dispatch);
},[dispatch])


    return(
<>
<Banner/>
<Trending/>
<TopAdvertiserBanner/>
<CoreServices/>
<BottomAdvertiserBanner/>
</>
    );
}
export default Home;