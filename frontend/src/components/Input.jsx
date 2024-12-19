const Input = ({
  title = null,
  type,
  placeholder,
  id,
  value,
  onChange,
  ...props
}) => {
  return (
    <div className="mb-4">
      {title && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {title}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        {...props}
      />
    </div>
  );
};

export default Input;
