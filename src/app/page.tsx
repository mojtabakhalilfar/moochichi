import Article from "@/components/home/Article";
import Banners from "@/components/home/Banners";
import WhyUs from "@/components/home/WhyUs";
import Discount from "@/components/home/Discount";
import Information from "@/components/home/Information";
import Mostpopular from "@/components/home/Mostpopular";


export default function Home() {
  return (
    <div className="">
      <Information/>
      <Mostpopular/>
      <Banners/>
      <Discount/>
      <WhyUs children=""></WhyUs>
      <Article/>
    </div>
  );
}
