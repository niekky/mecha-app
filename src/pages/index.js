import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className='w-full h-screen bg-orange-700'>
        
        <div className="flex flex-col w-full h-1/2 bg-[url('/img/intro.png')] items-center justify-center transition ease-in-out duration-500 hover:scale-110">
          <div className='flex flex-col w-full h-full backdrop-brightness-50 backdrop-blur-sm transition ease-in-out duration-500 hover:backdrop-blur-none items-center justify-center space-y-8'>
            <div className='flex-col text-7xl font-bold'>M.E.Ch.A.</div>
            <div className='flex-col text-5xl font-light'>Movimiento Estudiantil Chicano de Aztlán</div>
          </div>
          
        </div>

        <div className='flex flex-col w-full h-1/2 bg-orange-900 items-center justify-center px-96 space-y-5'>
          <div className='flex-col text-5xl font-bold '>About us</div>
          <div className='flex-col text-center text-lg'>Movimiento Estudiantil Chicano de Aztlán (Chicano Student Movement of Aztlán) is a student organization founded to raise Mexican American empowerment by using political action and embrace the Mexican culture, history, education, and political/social consciousness for young Chicano. M.E.Ch.A. is the large Chicano organization which is active and spread around the United States. Not only does it raise awareness and political empowerment but also M.E.Ch.A. supports the Mexican American youth in academics through leadership and organizational activities.</div>
        </div>

      </div>

      <div className="flex flex-col w-full h-48 bg-[url('/img/switch.png')]">
        <div className='flex flex-col w-full h-full items-center justify-center backdrop-brightness-50 backdrop-blur-sm'>
          <div className='flex-col text-3xl font-bold'>La Union Hace La Fuerza!</div>
          <div className='flex-col text-xl'>Unity makes strength</div>
        </div>
      </div>

      <div className='flex w-full h-fit bg-orange-800'>

        <div className='flex-col w-1/2 bg-orange-700 px-48 space-y-12 py-24'>
          <div className='text-5xl font-bold'>How big we are?</div>
          <div className='flex-col space-y-6'>
            <div className='text-2xl'>M.E.Ch.A. is active and widely available around the United States including both the West and the East of the States, with more than 400 chapters in universities, community colleges, and high schools.</div>
            <div className='text-2xl'>M.E.Ch.A. in different campuses: </div>
            <div className='text-2xl font-bold'>
              <div>- Chicanx/Latinx community (UCSB)</div>
              <div>- ARIZONA MECHA (U of A)</div>
              <div>- MEChA de UCLA</div>
              <div>- MeCHA de ASU</div>
              <div>- MeCHA at Maricopa Community College</div>
              <div>- MeCHA at Cesar Chavez High School</div>
            </div>
          </div>
        </div>
        
        <div className='flex-col w-1/2 py-36 px-32 justify-center items-center space-y-3'>
          <div className='transition ease-in-out duration-500 hover:scale-110'> 
            <div className="bg-[url('/img/maps.png')] bg-cover h-[500px]"></div>
            <div className='flex justify-center items-center font-bold'>MEChA and earlier Chicano student organizations 1967-2012</div>
          </div>
          
        </div>
      </div>
      
      <div className='flex w-full h-screen bg-orange-900'>
        <div className='flex-col h-screen w-1/2 bg-orange-900 px-48 py-24 space-y-12'>
          <div className='text-5xl font-bold'>History of M.E.Ch.A</div>
          <div className='flex-col space-y-6'>
            <div className='text-xl space-y-6'>
              <div>Founded in 1969 at a conference in Santa Barbara, CA, along with the adopted draft Plan Espiritual de Aztlán (Spiritual Plan of Aztlán)</div>
              <div>Founded based on the belief that tying the students into the large network of activists could help fight against oppression and racism and lead to liberation of Chicano people.</div>
              <div>Improved further institutionalization for the young Mexican American, which motivated Chicanos to attend to school and pursue higher education.</div>
              <div className='italic'>"M.E.Ch.A. played a part in the development of Chicana and Chicano student activism both in the university and in Chicano communities at large. M.E.Ch.A. has influenced the curriculum for Chicanas and Chicanos and has many times succeeded in improving the social conditions in the barrio" - Carlos Munoz Jr</div>
            </div>
          </div>
        </div>
          
        <div className='flex-col w-1/2 py-36 px-32 bg-orange-700 justify-center items-center space-y-3'>
          <div className='transition ease-in-out duration-500 hover:scale-110'>
            <div className="bg-[url('/img/el-plan.jpg')] bg-cover h-[500px]"></div>
            <div className='flex justify-center items-center text-center font-bold'>Chicano activists rally in front of Campbell Hall in a photo that now appears on the wall of North Hall on the UC Santa Barbara campus.</div>
          </div>
          
        </div>
      </div>

      <div className="flex flex-col w-full h-48 bg-[url('/img/switch.png')] bg-cover">
        <div className='flex flex-col w-full h-full items-center justify-center backdrop-brightness-50 backdrop-blur-sm'>
        <div className='flex-col text-3xl font-bold'>Por la Raza habla el espiritu</div>
        <div className='flex-col text-xl'>The spirit speaks for the Race</div>
        </div>
      </div>

      <div className='flex-col flex w-full  bg-orange-800 items-center space-y-16 px-48 py-24'>
        <div className='text-6xl font-bold'>M.E.Ch.A. Goals</div>
        <div className='text-xl text-center space-y-6'>
          <div>Unite Mexican American students and people into a responsive network to respond to prejudice and racism as a large unit</div>
          <div>Further socialization and politicization for liberation on all campuses</div>
          <div>Enhance study programs, curriculum development, entrance programs to welcome more Chicanos into college.</div>
          <div>Educate Mexican Americans about Chicano culture, history, traditions</div>
          <div>Promote academic achievement and completion of rising young Chicanos</div>
          <div>Build relationships between high school and college students</div>
        </div>
        <div className='flex-col bg-orange-700 justify-center items-center'>
          <div className="bg-[url('/img/MEChA_Logo.png')] bg-cover w-[480px] h-[390px]"></div>
        </div>
          
      </div>
        
      <div className='flex w-full bg-orange-900'>

        <div className='flex-col w-1/2 py-24 px-48 bg-orange-700 justify-center items-center space-y-6'>
          <div className='transition ease-in-out duration-500 hover:scale-110'>
            <div className="bg-[url('/img/asu.jpg')] bg-cover h-[360px]"></div>
            <div className='flex justify-center items-center text-center font-bold'>MEChA at ASU.</div>
          </div>

          <div className='transition ease-in-out duration-500 hover:scale-110'>
            <div className="bg-[url('/img/uofu.jpg')] bg-cover h-[360px]"></div>
            <div className='flex justify-center items-center text-center font-bold'>MEChA at UofU.</div>
          </div>

          <div className='transition ease-in-out duration-500 hover:scale-110'>
            <div className="bg-[url('/img/ucla.jpg')] bg-cover h-[360px]"></div>
            <div className='flex justify-center items-center text-center font-bold'>MEChA at UCLA.</div>
          </div>
          
        </div>

        <div className='flex-col h-screen w-1/2 bg-orange-900 px-48 py-48 space-y-12'>
          <div className='text-5xl font-bold'>M.E.Ch.A. Activities</div>
          <div className='flex-col space-y-6'>
            <div className='text-xl space-y-6'>
               <div>General areas that M.E.Ch.A. involves:</div>
               <div className='flex-col italic '>  
                  <div>- Policy social and governmental agencies to make them more responsive to the poeple of the barrio</div>
                  <div>- Carry out research on the econmoic and credit policies of merchants in the barrio and expose fraudulent and exorbitant establishments</div>
                  <div>- Exchange with junior-high and high-school students, help with their projects, teach them organizational techniques, support their actions</div>
                  <div>- Spread the message of the movement by speaking, radio, television, local newspapers, underground papers, posters, art, theaters</div>
                  <div>- Expose discrimination in hiring and renting practices</div>
               </div>
               <div>Aside, M.E.Ch.A. also holds social meetings actively on many different campuses around the States. By this, Mexican American students are able to make friends and join the community.</div>
               <div>M.E.Ch.A. on each campus operates differently, but most of them often participate in activities such as: </div>
               <div className='flex-col font-bold'>  
                  <div>- Club Fairs</div>
                  <div>- Community Events</div>
                  <div>- National Conference</div>
               </div>
            </div>
          </div>
        </div>

      </div>

      <div className='flex-col flex w-full h-fit bg-orange-800 items-center py-36 px-96 space-y-12'>
        <div className='text-5xl font-bold'>Want to be a part of M.E.Ch.A.?</div>
        <div className='flex-col text-center text-2xl space-y-2'>
          <div>Reach out to M.E.Ch.A. if you have any interest or want to support and improve the organization as well as the Chicano community as a whole</div>
          <div>Your help is the big contribution to the bright future of Chicanos</div>
          <div className='italic text-xl'>"Of the community, for the community"</div>
        </div>
      </div>

    </main>
    
  )
}
