import { useState } from 'react';
import TabBody from './TabBody';
import TabHeader from './TabHeader';

const Tabs = ({ children }) => {
  return (
    <section className='flex flex-col w-full my-4 shadow-sm shadow-neutral-500'>
      {children}
    </section>
  );
};

export default Tabs;
