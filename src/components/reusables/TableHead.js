import React from 'react';
import PropTypes from 'prop-types';

const TableHead = ({ titles, children, bgColor }) => {
  return (
    <thead className={bgColor || 'bg-configBlue'}>
      <tr>
        {titles?.map(title => (
          <th className='py-2 px-1' key={Math.random().toFixed(2)}>
            {title}
          </th>
        ))}
        {children}
      </tr>
    </thead>
  );
};

TableHead.propTypes = {
  titles: PropTypes.array.isRequired
};

export default TableHead;
