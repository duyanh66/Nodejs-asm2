import React, { useEffect, useState } from 'react'

const Home = (props: any) => {
  // const [data, setdata] = useState([]);
  // useEffect(() => {

  // })
  return (
    <>
      <div className="trademark" >
        <div className="circle">
          <div className="circle1">
            <div className="circle1-content">
              <div className="w-[1000px] px-4 py-4">
                <img src="https://notagamer.net/wp-content/uploads/2023/02/Broken-Covenant-Xayah-and-Rakan.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-3 ml-[200px]  ">
          {props?.data?.data?.map((data: any) =>
            <div className=" rounded-lg bg-zinc-400 border-2 border-black w-[250px] mb-4  " key={data._id}>
              <div className="grid-item-img flex justify-center">
                <img src={data.image} />
              </div>
              <div className="grid-item-name text-center">
                <h3 className='font-blod text-[25px]'>{data.name}</h3>
                <p>Mô tả:{data.description}</p>
                <p className='font-extrabold text-pink-300'>$ {data.price}</p>
              </div>
            </div>)}
        </div>
      </div>

    </>
  )
}

export default Home