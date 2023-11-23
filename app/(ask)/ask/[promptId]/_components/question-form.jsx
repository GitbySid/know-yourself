'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { SlLike, SlDislike, SlShare } from 'react-icons/sl';
import { twMerge } from 'tailwind-merge';
import { ImSpinner10 } from 'react-icons/im';

export default function QuestionForm({ prompt }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [promptData, setPromptData] = useState({});
  const [selectedChoice1, setSelectedChoice1] = useState('');
  const [selectedChoice2, setSelectedChoice2] = useState('');
  const [selectedChoice3, setSelectedChoice3] = useState('');
  const [answer4, setAnswer4] = useState('');
  const [answer5, setAnswer5] = useState('');

  useEffect(() => {
    const getPromptData = async (label) => {
      axios
        .post('/api/prompt', { label })
        .then((res) => {
          setPromptData(res.data);
          setIsLoading(false);
        })
        .catch(() => {
          setIsError(true);
        });
    };
    getPromptData(prompt?.label);
  }, [prompt?.label]);

  const handleDislike = () => {
    // TODO: Add OnClick
  };
  const handleLike = () => {
    // TODO: Add OnClick
  };
  const handleShare = () => {
    // TODO: Add OnClick
  };

  if (isError) {
    return (
      <div
        className={twMerge(
          'flex items-center justify-center h-[500px] sm:h-[700px] px-20 text-xl text-center mb-80',
          prompt?.backgroundColor === 'orange' && 'bg-orange-light',
          prompt?.backgroundColor === 'green' && 'bg-green-light',
          prompt?.backgroundColor === 'purple' && 'bg-purple-light',
          prompt?.backgroundColor === 'yellow' && 'bg-yellow-light',
          prompt?.backgroundColor === 'pink' && 'bg-pink-light'
        )}
      >
        Something went wrong!
      </div>
    );
  }

  return isLoading ? (
    <div
      className={twMerge(
        'flex items-center justify-center h-[500px] w-full max-w-3xl sm:h-[700px]',
        prompt?.backgroundColor === 'orange' && 'bg-orange-light',
        prompt?.backgroundColor === 'green' && 'bg-green-light',
        prompt?.backgroundColor === 'purple' && 'bg-purple-light',
        prompt?.backgroundColor === 'yellow' && 'bg-yellow-light',
        prompt?.backgroundColor === 'pink' && 'bg-pink-light'
      )}
    >
      <ImSpinner10 className='animate-spin w-24 h-24' />
    </div>
  ) : (
    <>
      <div
        className={twMerge(
          'flex flex-col  text-white text-lg w-full h-full p-2 overflow-auto max-w-3xl',
          prompt?.backgroundColor === 'orange' && 'bg-orange-light',
          prompt?.backgroundColor === 'green' && 'bg-green-light',
          prompt?.backgroundColor === 'purple' && 'bg-purple-light',
          prompt?.backgroundColor === 'yellow' && 'bg-yellow-light',
          prompt?.backgroundColor === 'pink' && 'bg-pink-light'
        )}
      >
        <p className='text-center py-2'>{promptData?.label}</p>
        <div className='my-5'>
          <p
            className={twMerge(
              'text-center',
              prompt?.backgroundColor === 'orange' && 'bg-orange-medium',
              prompt?.backgroundColor === 'green' && 'bg-green-medium',
              prompt?.backgroundColor === 'purple' && 'bg-purple-medium',
              prompt?.backgroundColor === 'yellow' && 'bg-yellow-medium',
              prompt?.backgroundColor === 'pink' && 'bg-pink-medium'
            )}
          >
            {promptData?.question1?.question}
          </p>
          <div className='flex gap-2 justify-between my-2'>
            {promptData?.question1?.choices?.map((choice, index) => (
              <button
                key={index}
                className={twMerge(
                  'text-center w-full py-5',
                  prompt?.backgroundColor === 'orange' && 'bg-orange-medium',
                  prompt?.backgroundColor === 'green' && 'bg-green-medium',
                  prompt?.backgroundColor === 'purple' && 'bg-purple-medium',
                  prompt?.backgroundColor === 'yellow' && 'bg-yellow-medium',
                  prompt?.backgroundColor === 'pink' && 'bg-pink-medium',
                  selectedChoice1 === choice &&
                    prompt?.backgroundColor === 'orange' &&
                    'bg-orange-dark',
                  selectedChoice1 === choice &&
                    prompt?.backgroundColor === 'green' &&
                    'bg-green-dark',
                  selectedChoice1 === choice &&
                    prompt?.backgroundColor === 'purple' &&
                    'bg-purple-dark',
                  selectedChoice1 === choice &&
                    prompt?.backgroundColor === 'yellow' &&
                    'bg-yellow-dark',
                  selectedChoice1 === choice &&
                    prompt?.backgroundColor === 'pink' &&
                    'bg-pink-dark'
                )}
                onClick={() => setSelectedChoice1(choice)}
              >
                {choice}
              </button>
            ))}
          </div>
        </div>
        <div className='my-5'>
          <p
            className={twMerge(
              'text-center',
              prompt?.backgroundColor === 'orange' && 'bg-orange-medium',
              prompt?.backgroundColor === 'green' && 'bg-green-medium',
              prompt?.backgroundColor === 'purple' && 'bg-purple-medium',
              prompt?.backgroundColor === 'yellow' && 'bg-yellow-medium',
              prompt?.backgroundColor === 'pink' && 'bg-pink-medium'
            )}
          >
            {promptData?.question2?.question}
          </p>
          <div className='flex flex-col gap-1 justify-between my-3'>
            {promptData?.question2?.choices?.map((choice, index) => (
              <button
                key={index}
                className={twMerge(
                  'text-center w-full',
                  prompt?.backgroundColor === 'orange' && 'bg-orange-medium',
                  prompt?.backgroundColor === 'green' && 'bg-green-medium',
                  prompt?.backgroundColor === 'purple' && 'bg-purple-medium',
                  prompt?.backgroundColor === 'yellow' && 'bg-yellow-medium',
                  prompt?.backgroundColor === 'pink' && 'bg-pink-medium',
                  selectedChoice2 === choice &&
                    prompt?.backgroundColor === 'orange' &&
                    'bg-orange-dark',
                  selectedChoice2 === choice &&
                    prompt?.backgroundColor === 'green' &&
                    'bg-green-dark',
                  selectedChoice2 === choice &&
                    prompt?.backgroundColor === 'purple' &&
                    'bg-purple-dark',
                  selectedChoice2 === choice &&
                    prompt?.backgroundColor === 'yellow' &&
                    'bg-yellow-dark',
                  selectedChoice2 === choice &&
                    prompt?.backgroundColor === 'pink' &&
                    'bg-pink-dark'
                )}
                onClick={() => setSelectedChoice2(choice)}
              >
                {choice}
              </button>
            ))}
          </div>
        </div>
        <div className='my-5'>
          <p
            className={twMerge(
              'text-center',
              prompt?.backgroundColor === 'orange' && 'bg-orange-medium',
              prompt?.backgroundColor === 'green' && 'bg-green-medium',
              prompt?.backgroundColor === 'purple' && 'bg-purple-medium',
              prompt?.backgroundColor === 'yellow' && 'bg-yellow-medium',
              prompt?.backgroundColor === 'pink' && 'bg-pink-medium'
            )}
          >
            {promptData?.question3?.question}
          </p>
          <div className='flex flex-col gap-1 justify-between my-3'>
            {promptData?.question3?.choices?.map((choice, index) => (
              <button
                key={index}
                className={twMerge(
                  'text-center w-full',
                  prompt?.backgroundColor === 'orange' && 'bg-orange-medium',
                  prompt?.backgroundColor === 'green' && 'bg-green-medium',
                  prompt?.backgroundColor === 'purple' && 'bg-purple-medium',
                  prompt?.backgroundColor === 'yellow' && 'bg-yellow-medium',
                  prompt?.backgroundColor === 'pink' && 'bg-pink-medium',
                  selectedChoice3 === choice &&
                    prompt?.backgroundColor === 'orange' &&
                    'bg-orange-dark',
                  selectedChoice3 === choice &&
                    prompt?.backgroundColor === 'green' &&
                    'bg-green-dark',
                  selectedChoice3 === choice &&
                    prompt?.backgroundColor === 'purple' &&
                    'bg-purple-dark',
                  selectedChoice3 === choice &&
                    prompt?.backgroundColor === 'yellow' &&
                    'bg-yellow-dark',
                  selectedChoice3 === choice &&
                    prompt?.backgroundColor === 'pink' &&
                    'bg-pink-dark'
                )}
                onClick={() => setSelectedChoice3(choice)}
              >
                {choice}
              </button>
            ))}
          </div>
        </div>
        <div className='my-5'>
          <p
            className={twMerge(
              'text-center',
              prompt?.backgroundColor === 'orange' && 'bg-orange-medium',
              prompt?.backgroundColor === 'green' && 'bg-green-medium',
              prompt?.backgroundColor === 'purple' && 'bg-purple-medium',
              prompt?.backgroundColor === 'yellow' && 'bg-yellow-medium',
              prompt?.backgroundColor === 'pink' && 'bg-pink-medium'
            )}
          >
            {promptData?.question4?.question}
          </p>
          <input
            className={twMerge(
              'w-full text-white outline-none my-3 px-3 py-2 placeholder:text-white',
              prompt?.backgroundColor === 'orange' && 'bg-orange-medium',
              prompt?.backgroundColor === 'green' && 'bg-green-medium',
              prompt?.backgroundColor === 'purple' && 'bg-purple-medium',
              prompt?.backgroundColor === 'yellow' && 'bg-yellow-medium',
              prompt?.backgroundColor === 'pink' && 'bg-pink-medium'
            )}
            placeholder='Text...'
            value={answer4}
            onChange={(e) => setAnswer4(e.target.value)}
          />
        </div>
        <div className='my-5'>
          <p
            className={twMerge(
              'text-center',
              prompt?.backgroundColor === 'orange' && 'bg-orange-medium',
              prompt?.backgroundColor === 'green' && 'bg-green-medium',
              prompt?.backgroundColor === 'purple' && 'bg-purple-medium',
              prompt?.backgroundColor === 'yellow' && 'bg-yellow-medium',
              prompt?.backgroundColor === 'pink' && 'bg-pink-medium'
            )}
          >
            {promptData?.question5?.question}
          </p>
          <input
            className={twMerge(
              'w-full text-white outline-none my-3 px-3 py-2 placeholder:text-white',
              prompt?.backgroundColor === 'orange' && 'bg-orange-medium',
              prompt?.backgroundColor === 'green' && 'bg-green-medium',
              prompt?.backgroundColor === 'purple' && 'bg-purple-medium',
              prompt?.backgroundColor === 'yellow' && 'bg-yellow-medium',
              prompt?.backgroundColor === 'pink' && 'bg-pink-medium'
            )}
            placeholder='Text...'
            value={answer5}
            onChange={(e) => setAnswer5(e.target.value)}
          />
        </div>
        <button
          className={twMerge(
            'p-3 mb-3 mx-auto',
            prompt?.backgroundColor === 'orange' && 'bg-orange-dark',
            prompt?.backgroundColor === 'green' && 'bg-green-dark',
            prompt?.backgroundColor === 'purple' && 'bg-purple-dark',
            prompt?.backgroundColor === 'yellow' && 'bg-yellow-dark',
            prompt?.backgroundColor === 'pink' && 'bg-pink-dark'
          )}
        >
          Submit
        </button>
      </div>
      <div
        className={twMerge(
          'flex flex-col my-5  text-white text-lg w-full h-full p-2 overflow-auto max-w-3xl',
          prompt?.backgroundColor === 'orange' && 'bg-orange-light',
          prompt?.backgroundColor === 'green' && 'bg-green-light',
          prompt?.backgroundColor === 'purple' && 'bg-purple-light',
          prompt?.backgroundColor === 'yellow' && 'bg-yellow-light',
          prompt?.backgroundColor === 'pink' && 'bg-pink-light'
        )}
      >
        <div
          className={twMerge(
            ' py-2 my-2',
            prompt?.backgroundColor === 'orange' && 'bg-orange-medium',
            prompt?.backgroundColor === 'green' && 'bg-green-medium',
            prompt?.backgroundColor === 'purple' && 'bg-purple-medium',
            prompt?.backgroundColor === 'yellow' && 'bg-yellow-medium',
            prompt?.backgroundColor === 'pink' && 'bg-pink-medium'
          )}
        >
          <p className='text-center'>{'"Whiplash" (2014) - Short Version'}</p>
          <p className='text-center'>
            {`Why: While not exactly anaction/adventure film, "Whiplash" is
            extremely intense andenergetic, almost like an action movie but set
            in a music school.The movie also tackles the themeof people chasing
            their dreams atgreat personal cost.`}
          </p>
        </div>
        <div
          className={twMerge(
            ' py-2',
            prompt?.backgroundColor === 'orange' && 'bg-orange-medium',
            prompt?.backgroundColor === 'green' && 'bg-green-medium',
            prompt?.backgroundColor === 'purple' && 'bg-purple-medium',
            prompt?.backgroundColor === 'yellow' && 'bg-yellow-medium',
            prompt?.backgroundColor === 'pink' && 'bg-pink-medium'
          )}
        >
          <p className='text-center'>{"'Kung Fu Panda'(2008)"}</p>
          <p className='text-center'>
            {`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
            perspiciatis explicabo obcaecati fugiat aspernatur soluta accusamus
            voluptatum exercitationem alias aliquam hic aut autem, libero
            consequatur mollitia, enim, ducimus necessitatibus debitis laborum!
            Recusandae earum officia voluptatibus debitis dolore unde inventore
            obcaecati!`}
          </p>
        </div>
        <div className='flex mt-8 mb-4 justify-evenly'>
          <button
            className={twMerge(
              'flex gap-2 justify-evenly items-center py-3 px-2 w-[100px]',
              prompt?.backgroundColor === 'orange' && 'bg-orange-dark',
              prompt?.backgroundColor === 'green' && 'bg-green-dark',
              prompt?.backgroundColor === 'purple' && 'bg-purple-dark',
              prompt?.backgroundColor === 'yellow' && 'bg-yellow-dark',
              prompt?.backgroundColor === 'pink' && 'bg-pink-dark'
            )}
            onClick={handleDislike}
          >
            <SlDislike />
            <p>Dislike</p>
          </button>
          <button
            className={twMerge(
              'flex gap-2 justify-evenly items-center py-3 px-2 w-[100px]',
              prompt?.backgroundColor === 'orange' && 'bg-orange-dark',
              prompt?.backgroundColor === 'green' && 'bg-green-dark',
              prompt?.backgroundColor === 'purple' && 'bg-purple-dark',
              prompt?.backgroundColor === 'yellow' && 'bg-yellow-dark',
              prompt?.backgroundColor === 'pink' && 'bg-pink-dark'
            )}
            onClick={handleLike}
          >
            <SlLike />
            <p>Like</p>
          </button>
          <button
            className={twMerge(
              'flex gap-2 justify-evenly items-center py-3 px-2 w-[100px]',
              prompt?.backgroundColor === 'orange' && 'bg-orange-dark',
              prompt?.backgroundColor === 'green' && 'bg-green-dark',
              prompt?.backgroundColor === 'purple' && 'bg-purple-dark',
              prompt?.backgroundColor === 'yellow' && 'bg-yellow-dark',
              prompt?.backgroundColor === 'pink' && 'bg-pink-dark'
            )}
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
