import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="pb-50 w-full">
      <div className="py-20 text-center bg-[#675b30] text-white font-[700] border-b-2 flex justify-center flex-col items-center">
        <p className="text-center font-[700]">Scan the QR code and proceed</p>

        <img
          src={
            "https://s3.amazonaws.com/public-304257298154/PA/3862ec44e50a6b44e4d285f2cc1017e63622d61c00f3fd3c842cadabd346894421cdc8531b7093eb438bb4cf93d42363b5ecf5ec1243185857dbcd0d8d27eaa9/qrcode.png"
          }
          alt="Payment-qr-code"
          width={500}
          height={100}
          className="w-[80%] sm:w-[350px] h-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default Page;
