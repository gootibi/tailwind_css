import Image from 'next/image'

export default function Home() {
  return (
    <div className=' h-screen Parnet p-4'>
      <div className=' inline-block p-4 text-black bg-white rounded-lg border shadow-md shadow-cyan-500'>
        <h1 className=' text-2xl'>Hello</h1>
        <p className=' mb-4'>This is my div.</p>
        <button className=' px-3 py-2 rounded-lg cursor-pointer bg-cyan-500 shadow-md shadow-cyan-500/50 hover:bg-red-500 hover:shadow-red-800 hover:text-white'>
          Say Hello
        </button>
      </div>
    </div>
  )
}
