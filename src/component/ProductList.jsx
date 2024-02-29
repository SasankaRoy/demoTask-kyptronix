import ProductImg from "../assets/productImg.png";
import { motion } from "framer-motion";

export const ProductList = () => {
  return (
    <>
      <div className="h-[90vh]">
        <div className="w-[90%] mx-auto p-3">
          <h2 className="text-[#EA0E68] Exo2__font font-[600] text-2xl my-3">
            Explore Our Products
          </h2>
          <div className="grid grid-cols-4 gap-5 mt-10">
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 1.1, delay: 0.3 }}
              src={ProductImg}
              alt="ProductImg"
            />
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 1.1, delay: 0.6 }}
              src={ProductImg}
              alt="ProductImg"
            />
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 1.1, delay: 0.9 }}
              src={ProductImg}
              alt="ProductImg"
            />
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 1.1, delay: 1.2 }}
              src={ProductImg}
              alt="ProductImg"
            />
          </div>
        </div>
      </div>
    </>
  );
};
