import bannerBelleza from "../assets/images/imagen1.png";
import bannerNutricion from "../assets/images/imagen2.png";
import bannerBienestar from "../assets/images/imagen3.png";

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerBelleza})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320, marginRight:20}}>
                    <span className="bg-transparent text-white text-uppercase px-3 py-2">Belleza</span>
                </div>
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerNutricion})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320}}>
                    <span className="bg-transparent text-white text-uppercase px-3 py-2">Nutrición</span>
                    <p></p>
                </div>
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerBienestar})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320, marginLeft:20}}>
                    <span className="bg-transparent text-white text-uppercase px-3 py-2">Bienestar</span>
                </div>
            </div>
        </div>
    )
}

export default Banner;