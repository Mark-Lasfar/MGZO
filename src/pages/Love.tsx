import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreProduct, stateProps } from "../../type";
// import CartProduct from "@/components/CartProduct";
import ResetCart from "@/components/ResetCart";
import Link from "next/link";
// import FavoritePayment from "@/components/FavoritePayment";
import FavoriteProduct from "@/components/FavoriteProduct";
import ResetFavorite from "@/components/ResetFavorite";
import { addUser } from "@/store/nextSlice";
import { signIn, useSession } from "next-auth/react";
import { BiCaretDown } from "react-icons/bi";
// import ResetResetFavorite from "@/components/ResetFavorite";

const FavoritePage = () =>{
    const {favoriteData} = useSelector((state:stateProps) => state.next);
    const { data: session } = useSession();
    const {userInfo} = useSelector(
        (state:stateProps)=>state.next);
        const dispatch = useDispatch()
        console.log(userInfo)
    useEffect(()=>{
        if(session){
            dispatch(addUser({
                name:session?.user?.name,
                email:session?.user?.email,
                image:session?.user?.image,


            })
        );
        }
    },[session]);
        
    return(
        <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-5 gap-10 py-4">
            {
                favoriteData.length > 0 ?(<>
                    <div className="bg-white col-span-4 p-4 rounded-lg">
                        <div className="flex items-center justify-between border-b-[1px]
                        border-b-gray-400 pb-1">
                            <p className="text-2xl font-semibold text-amazon_blue">Shopping favorite</p>
                            <p className="text-lg font-semibold text-amazon_blue">Subtotal</p>
                        </div>
                        <div>
                            {
                                favoriteData.map((item: StoreProduct) =>(
                                    <div key={item.id} className="pt-2 flex flex-col gap-2">
                                        <FavoriteProduct item={item}/>
                                    </div>
                                ))
                            }

                            <ResetFavorite/>
                        </div>
                    </div>

                    <div className="bg-white h-64 col-span-1 rounded-lg flex
                    items-center justify-center">
                        
                        {
                userInfo?<div 
                 className="flex items-center px-2 border border-transparent hover:border-black cursor-pointer duration-300 h-[70%] gap-1">
                    <img src={userInfo.image} alt="userImage"
                    className="w-8 h-8 rounded-full object-cover"/>
                    <div className="text-xs text-gray-100 flec flex-col
                    justify-between">
                        <p className="text-black font-bold">{userInfo.name}</p>
                        <p>{userInfo.email}</p>
                    </div>
                </div>:<div onClick={()=>signIn()} className="text-xs text-gray-100 flex flex-col justify-center px-2 border
            border-transparent hover:border-black cursor-pointer duration-300 h-[70%]">
                <p>Hello, sign in</p>
                <p className="text-black font-bold flex">Account & Lists{" "}<span>
                    <BiCaretDown/></span></p>
            </div>
            }
                        {/* <FavoritePayment/> */}
                    </div>
                </>
                ):(
                <div className="bg-white h-64 col-span-5 flex flex-col items-center
                justify -center py-5 rounded-lg shadow-lg">
                    <h1 className="text-lg font-medium">Your favorite is Empty</h1>
                    <Link href="/">
                    <button className="w-52 h-10 bg-amazon_blue text-white rounded-text-sm
                    font-semibold hover:bg-amazon_yellow hover:text-black">Go to Shopping</button>
                    </Link>
                </div>)
            }
        </div>

    );
};

export default FavoritePage;
