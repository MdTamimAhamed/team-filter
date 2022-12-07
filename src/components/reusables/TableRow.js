import { useEffect, useState } from 'react';

const TableRow = ({ attributes, children, alignment }) => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (attributes) setColumns(mapAttributesToColumns());
  }, [attributes]);

  function mapAttributesToColumns() {
    let attrArr = [];
    if (!attributes) return [];

    for (let key in attributes) {
      attrArr.push(attributes[key]);
    }

    return attrArr;
  }

  return (
    <tr className='bg-slate-200 border-b border-gray-500 border-solid'>
      {columns?.map(column => (
        <td className={`p-2 ${alignment || 'text-center'}`} key={Math.random()}>
          {column}
        </td>
      ))}
      {children}
    </tr>
  );
};

export default TableRow;
