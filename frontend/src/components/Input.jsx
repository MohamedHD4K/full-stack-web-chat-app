const Input = ({
  title = null,
  type,
  placeholder,
  id,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      {title && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {title}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full rounded-md border border-gray-300 shadow-lg
        focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm 
        bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200 
        dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
      />
    </div>
  );
};

export default Input;
