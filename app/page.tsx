import Image from 'next/image'

export default function Home() {
  return (
    <div className=' flex justify-between bg-red-300'>
      <div>
      <p className=' my-2 ml-1 bg-red-500 text-white'>word</p>
      </div>
      <div className=' flex'>
        <p className=' m-2 px-2 bg-gray-400 hover:bg-gray-700 hover:text-white hover:rotate-6 cursor-pointer rounded-[5px]'>button 1</p>
        <p className=' m-2 px-2 bg-gray-400 hover:bg-gray-700 hover:text-white hover:rotate-6 cursor-pointer'>button 2</p>
      </div>
      {/* <h1 className=' text-3xl '>Title 1</h1>
      <h2 className=' text-2xl'>Title 2</h2>
      <h3 className=' text-xl'>Title 3</h3>
      <p className='text-base uppercase'>A regural paragraph.</p>
      <p className='text-sm'>A description pragraph.</p>
      <p className='text-xs note'>A little note.</p> */}
    </div>
  )
}
