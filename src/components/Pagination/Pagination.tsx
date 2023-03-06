import { PaginationProps } from '../../types';

const Pagination = ({ next, previous, set, current, pages }: PaginationProps) => {
  const numbersOfpages = [];

  for (let i = 1; i <= pages; i++) {
    numbersOfpages.push(i);
  }

  return (
    <ul className="inline-flex -space-x-px">
      <li
        onClick={() => previous()}
        className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
      >
        Previous
      </li>
      {numbersOfpages.map(number => (
        <li
          key={number}
          onClick={() => set(number)}
          className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer ${
            current === number && 'text-blue-600 border-gray-300 bg-blue-50 '
          }`}
        >
          {number}
        </li>
      ))}

      <li
        onClick={() => next()}
        className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg
              hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400
              dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
      >
        Next
      </li>
    </ul>
  );
};

export default Pagination;
