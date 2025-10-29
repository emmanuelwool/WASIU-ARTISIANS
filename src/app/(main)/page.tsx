import AboutSetion from "./_components/AboutSetion";
import AllServices from "./_components/AllServices";
import Categorie from "./_components/categorie";
import Herosection from "./_components/herosection";
import PopularHiring from "./_components/PopularHirng";
import PopularServices from "./_components/PopularServices";

export default function page() {
    return(
        <>
        
        <Herosection />
        <Categorie />
        <PopularServices />
        <PopularHiring />
        <AboutSetion />
        <AllServices />
        </>
    )
}