import SellSidebar from "@/components/SellSidebar";
import SellYourOwn from "@/components/SellYourOwn";
import Footer from "@/components/Footer";

const SellYourProduct = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 p-4 md:p-8 bg-[#F4E3B2]">
        <div className="flex-1">
          <SellYourOwn />
        </div>

        <div className="w-full md:w-1/3 pt-20 hidden md:block">
          <SellSidebar />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SellYourProduct;
