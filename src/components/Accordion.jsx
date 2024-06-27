/* eslint-disable react/prop-types */
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

import faqs from '../faqs';

function Accordion() {
  const [current, setCurrent] = useState(1);

  return (
    <div className='w-full max-w-[700px] flex flex-col gap-8 lg:gap-12'>
      <h1 className='w-full font-display text-2xl lg:text-3xl text-center font-extrabold tracking-tight text-secondary-50'>
        Frequently Asked Questions
      </h1>
      <div className='w-full bg-primary-800 rounded-2xl'>
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            id={faq.id}
            current={current}
            setCurrent={setCurrent}
            question={faq.question}
            answers={faq.answers} />
        ))}
      </div>
    </div>
  )
}

function AccordionItem({ question, answers, id, current, setCurrent }) {

  const isOpen = id === current;

  const handleSetOpen = () => {
    setCurrent(id === current ? null : id);
  }

  return (
    <div className='w-full border-b border-primary-600 last:border-b-0'>
      <button onClick={handleSetOpen} className={`text-left w-full text-base lg:text-lg ${isOpen ? 'text-b-yellow' : 'text-secondary-50'} font-medium flex justify-between items-center gap-6 p-4 lg:p-6`}>
        {question}
        {!isOpen ? <PlusIcon className='size-5 weight-600' /> : <MinusIcon className='size-5 weight-600' />}
      </button>
      {isOpen && (
        <div className='mt-[-8px] lg:mt-[-12px] pr-4 pb-4 pl-4 lg:pr-6 lg:pb-6 lg:pl-6'>
          {answers.map((answer, index) => (
            <p key={index} className='text-base lg:text-lg text-secondary-50 leading-7 paragraph-group'>
              {answer}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default Accordion;