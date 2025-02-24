import {CartCard} from '../components/CartCard';
export const Cart = () => {
  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png"},
  ]
  return (
    <>
    <div>
      <h1 className='flex justify-center items-center text-4xl m-4 mb-6 font-bold'> Cart Items: 2</h1>
    </div>
      <div>
        {products.map((item)=>(
        <CartCard key = {item.id} item = {item}/>
      ))}
    </div>
    </>
  );
};
