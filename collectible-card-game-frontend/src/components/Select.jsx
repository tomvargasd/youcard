import React from 'react';

function Select({ label, id, value, onChange, children, icon, ...props }) {
  return (
    <div className="mb-4">
      {label && <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>}
      <div className="relative">
        {icon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{icon}</div>}
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className={`block w-full px-4 py-2 rounded-md bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500 ${icon ? 'pl-10' : ''}`}
          {...props}
        >
          {children}
        </select>
      </div>
    </div>
  );
}

export default Select;
