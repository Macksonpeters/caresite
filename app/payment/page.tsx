import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="pb-50 w-full">
      <div className="py-20 text-center bg-[#675b30] text-white font-[700] border-b-2 flex justify-center flex-col items-center">
        <p className="text-center font-[700]">
          Scan the QR code or click the button below to proceed
        </p>

        <div className=" w-full flex justify-center mt-7">
          <a
            target="_blank"
            href="https://www.paymentshub.com/payment-link?token=ZGE0Yzc5NzQwZmZmYTcyZjgxNWU1ZDMxOWQ4Mzg4MjQ6NzBiZDRlMThlNTg0OWMyZDA0NjU2ZGEzNTk1YzE0ZmI1NGU4ODYxZWQyY2I0MzgwMTQ3ZDg0ODNjNGEyYmRmNTMyNTVlODdmNTkwNDJhZjNkZWUyMWUzMTQxOGY3ZjU0YTA4NGRhNDE5ZTlmMGFmNzRiYWE0YmNhYjMwZDZjYWRkNDhlY2VlZTBjNWJkZDA0MTNkNzIxNmMyM2I2MThjM2M5ZTBkNjY0M2YwZWRmZjEwY2VlNWM1Y2IwNDIyOGQyM2E2MWM0OGI4MjE1MWY0ZDVkYmEzODJmZDI1NDA3ZWRhMDM1Y2JlZmYxNmU2MGE1OTdjMmJjNjk3YWFjNTU4YmNiODkyYmI1YjgwNzUzNjdjNjJhOGUxMmZhYjhhZDY3YTg1Yjk0ZTA5MzFjMWYzNWU5ZWZlNzA3MzA5YmM0ZDFlZWViM2MwYmFmNDA4MjE4MTQ0YWI2ODI1NDY1OWQyZDIyNWEwZDRjOTU5OWE5ZTEyZGZiN2RhNzZjODk2YjFj"
            className={` hover:bg-black bg-[#640d57] text-gray-100 text-[15px] 3xl:text-[1.2rem] py-[10px] px-4 xl:px-7 rounded-[5px] mt-[-2px]`}
          >
            Click to make payment
          </a>
        </div>
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
