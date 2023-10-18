import React from 'react'

const Delivery = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
            <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[550px] mx-auto my-4' 
                     src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp'
                />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>Get The App</p>
                    <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h2>
                    <p className=''> 
                        Arcu felis bibendum ut tristique. Feugiat vivamus at augue eget arcu dictum. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Enim diam vulputate ut pharetra sit amet. Vel facilisis volutpat est velit egestas dui id ornare. Pellentesque sit amet porttitor eget dolor morbi non. In iaculis nunc sed augue lacus. Suspendisse potenti nullam ac tortor vitae. Quis viverra nibh cras pulvinar mattis nunc sed. Tortor pretium viverra suspendisse potenti nullam. Donec ultrices tincidunt arcu non sodales. Quam pellentesque nec nam aliquam.
                    </p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded font-medium my-6 mx-auto md:mx-0 py-3'>
                       Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Delivery