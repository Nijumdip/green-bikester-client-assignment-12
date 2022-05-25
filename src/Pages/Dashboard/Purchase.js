import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.int";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Purchase = () => {
    const { id } = useParams();
    const [purchase, setPurchase] = useState({});
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch(`http://localhost:5000/purchase/${id}`)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, []);
    
  
    const onSubmit = data => {
        
        const newOrderQuantity = Number(data.orderQuantity);
        const newOrder = Number(purchase.minimumOrder);
        const newQuantity = Number(purchase.quantity);


        if (newOrderQuantity < newOrder || newOrderQuantity > newQuantity) {
            toast(`your order must be between ${newOrder} and ${newQuantity} !`)
        }
        else {
            console.log(data)
        }
    };
 
   
  return (
    <div className="justify-center items-center px-12">
      <h2 className="text-4xl text-emerald-900 font-bold">Purchase Now</h2>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-2 mt-10">
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10">
            <img src={purchase.img} alt="bike parts" className="rounded-xl w-72 h-72" />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title">Name : {purchase.name}</h2>
            <h6>Description : {purchase.description}</h6>
            <h6>Minimum Order : {purchase.minimumOrder}</h6>
            <h6>Available Quantity : {purchase.quantity}</h6>
            <h6>Price : $ {purchase.price}</h6>
          </div>
        </div>
            
        <div>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4 justify-items-center  mt-4">
        <input className="input input-bordered w-full max-w-xs" {...register("name")}  value={user?.displayName} />
        <input className="input input-bordered w-full max-w-xs" {...register("email")}  value={user?.email} />
        <input className="input input-bordered w-full max-w-xs" {...register("address")} placeholder="Address" />
        <input className="input input-bordered w-full max-w-xs" type="number" {...register("orderQuantity")} placeholder="Order quantity" />
        <input className="input input-bordered w-full max-w-xs" type="number" {...register("phone")} placeholder="Phone Number" />
        <input className=" btn bg-emerald-900 w-full max-w-xs" type="submit" />
      </form>
        </div>
        </div>
    </div>
  );
};

export default Purchase;
