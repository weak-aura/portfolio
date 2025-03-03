import React from 'react';

interface AccordionProps {
  children: React.ReactNode
  title: string
}


export const Accordion = ({children, title}:AccordionProps ) => {
  
  const [emptyArray, setEmptyArray] = React.useState(false)
  const handleSelection = () => {
    setEmptyArray(!emptyArray)
  }

  return (
    <>
      <div className="w-full mb-2 rounded-md overflow-hidden">
        <div className="flex justify-between px-4 py-2 text-2xl text-[--primary-color] cursor-pointer bg-[--primary-background] select-none;" onClick={handleSelection}>
          <h1>{title}</h1>
          <span>{emptyArray ? "-" : "+"}</span>
        </div>

        <div className={`bg-[#F0F6FC] max-h-0 overflow-hidden transition-all duration-500 text-[--primary-color] text-xl ${emptyArray && "h-auto max-h-[999px] transition-all duration-500"}`}>
          <div className="">{children}</div>
        </div>
      </div>

    </>
  );
};

