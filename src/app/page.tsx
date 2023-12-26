import Image from "next/image"

export default function Home() {
  return (
    <main style={{backgroundImage:`url("bg.png")`, backgroundSize: "cover",backgroundRepeat:"no-repeat"}} className="flex min-h-screen flex-col  bg-zinc-950 space-y-10">
      {/*
      - navigation bar 
      */}
      <div className='bg-zinc-950 min-w-max py-5 px-52'>
        <p className='text-3xl'>bocchi.read</p>
        <p className='text-xl font-light'>การอ่านบจจิแค่ทำโดยเด็กวิทย์คอม</p>
      </div>
      {/*
      - ตัวโชว์หรือเหี้ยไรสักอย่าง
      */}
      <div className='flex bg-opacity-40 outline outline-1 outline-zinc-700 shadow-medium bg-zinc-900 backdrop-blur-lg min-w-min space-x-10 space-y-10 px-52'>
          <Image
            src="/vol.jpg"
            width={300}
            height={200}
            alt="wtf"
          />
          <ul className='space-y-5'>
          <p className='text-6xl'>Bocchi the Rock!</p>
          <p className='text-3xl'>Genre: Comedy/Slice of Life</p>
          <p className="text-xl">mee text na jar</p>
          <button className='px-5 py-2 text-3xl bg-fuchsia-400 bg-opacity-40 outline outline-2   outline-fuchsia-800'><a href="https://cubari.moe/read/gist/cmF3L3BpeWFwaGF0bGlhbXdpbGFpL2J0ci9tYXN0ZXIvQm9jY2hpVGhlUm9jay5qc29u/">
          Read</a></button>
        </ul>
      </div>  
    </main>
  )
}
