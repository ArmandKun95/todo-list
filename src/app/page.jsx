import Image from 'next/image'
import moon from '@/public/customers/moon.svg'
import vector from '@/public/customers/vector.svg'
import detective from '@/public/customers/detective.svg'
import plus from '@/public/customers/plus.svg'
import lupa from '@/public/customers/lupa.svg'

function HomePage() {
  return (
    <section className='flex justify-center'>
      <div className='w-[750px] h-full left-[325px]'>
        <div className='flex justify-center items-center flex-col w-[Hug_(750px)] h-[Hug_(135px)] pt-[40px] gap-[18px]'>
          <h1 className='font-medium text-[26px] leading-[39px] text-center text-[#252525]'>
            TODO LIST
          </h1>

          <div className='flex justify-center w-[Fixed_(750px)] h-[Hug_(38px)] gap-[16px]'>
            <input
              className='w-[595px] h-[38px] border-[1px] gap-[436px] pl-4 pr-[16px] py-[8px] rounded-[5px] border-[#6c63ff] icono-placeholder'
              type='text'
              placeholder='Search note...'
              
            />

            <button className='flex items-center justify-between w-[Hug_(85px)] h-[Hug_(38px)] rounded-[5px] p-[10px] gap-[10px] bg-[#6c63ff]'>
              <p className='flex justify-center w-[32px] h-[18px] top-[10px] left-[10px] font-medium text-[18px] leading-[18px] text-[#f7f7f7]'>
                ALL
              </p>
              <Image src={vector} alt='?' width={6} height={3} />
            </button>

            <button className='flex justify-center items-center w-[38px] h-[38px] rounded-[5px] bg-[#6c63ff]'>
              <Image src={moon} alt='?' width={22} height={22} />
            </button>
          </div>
        </div>

        <div className='flex justify-center w-[Hug_(750px)] h-full mt-[30px]'>
          <div className=' w-[520px] h-[545px]'>
            <div className='flex justify-center'>
              <Image src={detective} alt='?' width={221} height={174} />
            </div>
            <div className='mt-[15px]'>
              <strong className='flex items-center justify-center font-normal text-[20px] leading-[20px] tracking-normal text-left'>
                Empty...
              </strong>
            </div>
          </div>
          <div className='flex justify-end items-end'>
            <button className='flex justify-center items-center rounded-full w-[50px] h-[50px] bg-[#6c63ff]'>
              <Image src={plus} alt='?' width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
