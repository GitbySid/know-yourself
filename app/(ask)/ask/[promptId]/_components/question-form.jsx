import { SlLike, SlDislike, SlShare } from 'react-icons/sl';

export default function QuestionForm({ prompt }) {
  const handleDislike = () => {
    // TODO: Add OnClick
  };
  const handleLike = () => {
    // TODO: Add OnClick
  };
  const handleShare = () => {
    // TODO: Add OnClick
  };

  return (
    <>
      <div className='flex flex-col bg-orange-light text-white text-lg w-full h-full p-2 overflow-auto max-w-3xl'>
        <p className='text-center py-2'>{prompt.label}</p>
        <div className='my-5'>
          <p className='text-center bg-orange-medium'>Answer Level</p>
          <div className='flex gap-2 justify-between my-2'>
            <button className='text-center bg-orange-medium w-full py-5'>
              Broad
            </button>
            <button className='text-center bg-orange-medium w-full py-5'>
              Medium
            </button>
            <button className='text-center bg-orange-medium w-full py-5'>
              Specific
            </button>
          </div>
        </div>
        <div className='my-5'>
          <p className='text-center bg-orange-medium'>
            How are you feeling right now?
          </p>
          <div className='flex flex-col gap-1 justify-between my-3'>
            <button className='text-center bg-orange-medium w-full'>
              A) Excited and Energetic
            </button>
            <button className='text-center bg-orange-medium w-full'>
              B) Melancholic or Thoughtful
            </button>
            <button className='text-center bg-orange-medium w-full'>
              C) Relaxed or Chill
            </button>
            <button className='text-center bg-orange-medium w-full'>
              D) Curious and Adventurous
            </button>
          </div>
        </div>
        <div className='my-5'>
          <p className='text-center bg-orange-medium'>
            What genre are you in the mood for?
          </p>
          <div className='flex flex-col gap-1 justify-between my-3'>
            <button className='text-center bg-orange-medium w-full'>
              A) Action/Adventure
            </button>
            <button className='text-center bg-orange-medium w-full'>
              B) Drama
            </button>
            <button className='text-center bg-orange-medium w-full'>
              C) Comedy
            </button>
            <button className='text-center bg-orange-medium w-full'>
              D) Mystery/Thriller
            </button>
          </div>
        </div>
        <div className='my-5'>
          <p className='text-center bg-orange-medium'>
            What was the last movie you enjoyed and why did you like it?
          </p>
          <input
            className='bg-orange-medium w-full text-white outline-none my-3 px-3 py-2 placeholder:text-white'
            placeholder='Text...'
          />
        </div>
        <div className='my-5'>
          <p className='text-center bg-orange-medium'>
            Is there a specific theme you're interested in tonight (
            friendship,space, historical events, etc.)?
          </p>
          <input
            className='bg-orange-medium w-full text-white outline-none my-3 px-3 py-2 placeholder:text-white'
            placeholder='Text...'
          />
        </div>
        <button className='p-3 mb-3 bg-orange-dark mx-auto'>Submit</button>
      </div>
      <div className='flex flex-col my-5 bg-orange-light text-white text-lg w-full h-full p-2 overflow-auto max-w-3xl'>
        <div className='bg-orange-medium py-2 my-2'>
          <p className='text-center'>{'"Whiplash" (2014) - Short Version'}</p>
          <p className='text-center'>
            Why: While not exactly anaction/adventure film, "Whiplash" is
            extremely intense andenergetic, almost like an action movie but set
            in a music school.The movie also tackles the themeof people chasing
            their dreams atgreat personal cost.
          </p>
        </div>
        <div className='bg-orange-medium py-2'>
          <p className='text-center'>{"'Kung Fu Panda'(2008)"}</p>
          <p className='text-center'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
            perspiciatis explicabo obcaecati fugiat aspernatur soluta accusamus
            voluptatum exercitationem alias aliquam hic aut autem, libero
            consequatur mollitia, enim, ducimus necessitatibus debitis laborum!
            Recusandae earum officia voluptatibus debitis dolore unde inventore
            obcaecati!
          </p>
        </div>
        <div className='flex mt-8 mb-4 justify-evenly'>
          <button
            className='flex gap-2 justify-evenly items-center py-3 px-2 bg-orange-dark w-[100px]'
            onClick={handleDislike}
          >
            <SlDislike />
            <p>Dislike</p>
          </button>
          <button
            className='flex gap-2 justify-evenly items-center py-3 px-2 bg-orange-dark w-[100px]'
            onClick={handleLike}
          >
            <SlLike />
            <p>Like</p>
          </button>
          <button
            className='flex gap-2 justify-evenly items-center py-3 px-2 bg-orange-dark w-[100px]'
            onClick={handleShare}
          >
            <SlShare />
            <p>Share</p>
          </button>
        </div>
      </div>
    </>
  );
}
