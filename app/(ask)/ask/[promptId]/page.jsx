import QuestionForm from './_components/question-form';

export default function PromptPage({ params }) {
  return (
    <div className='flex flex-col items-center justify-center p-5 sm:p-10 mb-20'>
      <QuestionForm promptId={params.promptId} />
    </div>
  );
}
