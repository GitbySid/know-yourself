'use client';

import { useState, useContext } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { SlLike, SlDislike, SlShare } from 'react-icons/sl';
import { twMerge } from 'tailwind-merge';
import { ImSpinner10 } from 'react-icons/im';
import { BiMessageAltDetail } from 'react-icons/bi';
import { IoIosSend } from 'react-icons/io';

import { PromptContext } from '@/contexts/PromptProvider';

const PROMPT_TO_LIGHT_CLASS_MAP = {
  orange: 'bg-orange-light',
  green: 'bg-green-light',
  purple: 'bg-purple-light',
  yellow: 'bg-yellow-light',
  pink: 'bg-pink-light',
};

const PROMPT_TO_MEDIUM_CLASS_MAP = {
  orange: 'bg-orange-medium',
  green: 'bg-green-medium',
  purple: 'bg-purple-medium',
  yellow: 'bg-yellow-medium',
  pink: 'bg-pink-medium',
};

const PROMPT_TO_DARK_CLASS_MAP = {
  orange: 'bg-orange-dark',
  green: 'bg-green-dark',
  purple: 'bg-purple-dark',
  yellow: 'bg-yellow-dark',
  pink: 'bg-pink-dark',
};

export default function QuestionForm({ promptId }) {
  const { getPredefinedPrompt } = useContext(PromptContext);
  const prompt = getPredefinedPrompt(promptId);

  const [selectedChoice1, setSelectedChoice1] = useState('');
  const [selectedChoice2, setSelectedChoice2] = useState('');
  const [selectedChoice3, setSelectedChoice3] = useState('');
  const [answer4, setAnswer4] = useState('');
  const [answer5, setAnswer5] = useState('');
  const [feedback, setFeedback] = useState('');

  const getPromptData = async (url) => axios.get(url).then((res) => res.data);

  const {
    data: promptData,
    error,
    isLoading,
  } = useSWR(`/api/prompt?promptId=${promptId}`, getPromptData);

  const handleDislike = () => {
    // TODO: Add OnClick
  };

  const handleLike = () => {
    // TODO: Add OnClick
  };

  const handleShare = () => {
    // TODO: Add OnClick
  };

  const handleFeedback = () => {
    // TODO: Add OnClick
  };

  if (error) {
    return (
      <div
        className={twMerge(
          'flex items-center justify-center h-[500px] sm:h-[700px] px-20 text-xl text-center mb-80',
          PROMPT_TO_LIGHT_CLASS_MAP[prompt?.backgroundColor]
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
        PROMPT_TO_LIGHT_CLASS_MAP[prompt?.backgroundColor]
      )}
    >
      <ImSpinner10 className='animate-spin w-24 h-24' />
    </div>
  ) : (
    <>
      <div
        className={twMerge(
          'flex flex-col  text-white text-lg w-full h-full p-2 overflow-auto max-w-3xl',
          PROMPT_TO_LIGHT_CLASS_MAP[prompt?.backgroundColor]
        )}
      >
        <p className='text-center py-2'>{promptData?.label}</p>
        <div className='my-5'>
          <p
            className={twMerge(
              'text-center',
              PROMPT_TO_MEDIUM_CLASS_MAP[prompt?.backgroundColor]
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
                  selectedChoice1 === choice
                    ? PROMPT_TO_DARK_CLASS_MAP[prompt?.backgroundColor]
                    : PROMPT_TO_MEDIUM_CLASS_MAP[prompt?.backgroundColor]
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
              PROMPT_TO_MEDIUM_CLASS_MAP[prompt?.backgroundColor]
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
                  selectedChoice2 === choice
                    ? PROMPT_TO_DARK_CLASS_MAP[prompt?.backgroundColor]
                    : PROMPT_TO_MEDIUM_CLASS_MAP[prompt?.backgroundColor]
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
              PROMPT_TO_MEDIUM_CLASS_MAP[prompt?.backgroundColor]
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
                  selectedChoice3 === choice
                    ? PROMPT_TO_DARK_CLASS_MAP[prompt?.backgroundColor]
                    : PROMPT_TO_MEDIUM_CLASS_MAP[prompt?.backgroundColor]
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
              PROMPT_TO_MEDIUM_CLASS_MAP[prompt?.backgroundColor]
            )}
          >
            {promptData?.question4?.question}
          </p>
          <input
            className={twMerge(
              'w-full text-white outline-none my-3 px-3 py-2 placeholder:text-white',
              PROMPT_TO_MEDIUM_CLASS_MAP[prompt?.backgroundColor]
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
              PROMPT_TO_MEDIUM_CLASS_MAP[prompt?.backgroundColor]
            )}
          >
            {promptData?.question5?.question}
          </p>
          <input
            className={twMerge(
              'w-full text-white outline-none my-3 px-3 py-2 placeholder:text-white',
              PROMPT_TO_MEDIUM_CLASS_MAP[prompt?.backgroundColor]
            )}
            placeholder='Text...'
            value={answer5}
            onChange={(e) => setAnswer5(e.target.value)}
          />
        </div>
        <button
          className={twMerge(
            'p-3 mb-3 mx-auto',
            PROMPT_TO_DARK_CLASS_MAP[prompt?.backgroundColor]
          )}
        >
          Submit
        </button>
      </div>
      <div
        className={twMerge(
          'flex flex-col my-5  text-white text-lg w-full h-full p-2 overflow-auto max-w-3xl',
          PROMPT_TO_LIGHT_CLASS_MAP[prompt?.backgroundColor]
        )}
      >
        <div
          className={twMerge(
            ' py-2 my-2',
            PROMPT_TO_MEDIUM_CLASS_MAP[prompt?.backgroundColor]
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
            PROMPT_TO_MEDIUM_CLASS_MAP[prompt?.backgroundColor]
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
              PROMPT_TO_DARK_CLASS_MAP[prompt?.backgroundColor]
            )}
            onClick={handleDislike}
          >
            <SlDislike />
            <p>Dislike</p>
          </button>
          <button
            className={twMerge(
              'flex gap-2 justify-evenly items-center py-3 px-2 w-[100px]',
              PROMPT_TO_DARK_CLASS_MAP[prompt?.backgroundColor]
            )}
            onClick={handleLike}
          >
            <SlLike />
            <p>Like</p>
          </button>
          <button
            className={twMerge(
              'flex gap-2 justify-evenly items-center py-3 px-2 w-[100px]',
              PROMPT_TO_DARK_CLASS_MAP[prompt?.backgroundColor]
            )}
            onClick={handleShare}
          >
            <SlShare />
            <p>Share</p>
          </button>
        </div>
      </div>
      <div
        className={twMerge(
          'flex flex-col items-center text-white text-lg w-full h-full p-2 overflow-auto max-w-3xl',
          PROMPT_TO_LIGHT_CLASS_MAP[prompt?.backgroundColor]
        )}
      >
        <div
          className={twMerge(
            'flex gap-2 justify-center items-center py-3 px-2 hover:bg max w-full',
            PROMPT_TO_MEDIUM_CLASS_MAP[prompt?.backgroundColor]
          )}
        >
          <BiMessageAltDetail />
          <p>Give Feedback</p>
        </div>
        <textarea
          name='feedback'
          id='feedback'
          cols='30'
          rows='5'
          className={twMerge(
            'w-full text-white outline-none my-3 px-3 py-2 placeholder:text-white',
            PROMPT_TO_MEDIUM_CLASS_MAP[prompt?.backgroundColor]
          )}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button
          className={twMerge(
            'flex gap-2 justify-evenly items-center py-3 px-2 w-[100px]',
            PROMPT_TO_DARK_CLASS_MAP[prompt?.backgroundColor],
            'peer-checked:h-[200px] peer-checked:overflow-scroll transition-[height] duration-1000 ease-in-out'
          )}
          onClick={handleFeedback}
        >
          <IoIosSend />
          <p>Send</p>
        </button>
      </div>
    </>
  );
}
