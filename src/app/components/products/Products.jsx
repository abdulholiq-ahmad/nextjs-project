import Image from "next/image";
import Link from "next/link";

const Products = ({ data, our }) => {
  console.log(data);

  return (
    <>
      <div className="text-center">
        <p className="lg:text-[48px] md:text-[30px] sm:text-[26px] text-[22px] font-[500] text-[#000] mb-[32px]">{our}</p>
      </div>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.products?.map((item) => (
          <div key={item.id} className="product bg-[#F4F5F7] max-w-80 ">
            <Link href={`/shop/${item.id}`}>
              <Image
                src={item.images[0]}
                alt="product image"
                width="300"
                height="300"
                className="max-h-80 object-contain duration-75 hover:scale-105"
              />
            </Link>
            <div className="product--info p-4 grid gap-1">
              <h4 className="font-semibold text-2xl">{item.title}</h4>
              <p className="text-[#666] text-base">{item.category}</p>
              <p className="text-xl font-normal flex gap-3">
                Rp {item.price}
                <span className="text-base text-[#666] line-through">{item.originalPrice && `Rp ${item.originalPrice}`}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="border border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white duration-300 text-sm text-[#B88E2F] py-3 px-11 font-semibold mx-auto w-fit flex items-center mt-[30px] mb-[30px] ">
        Show More
      </button>
    </>
  );
};

export default Products;
