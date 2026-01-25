import React from 'react';
import Select from '@rc-component/select';
import '@rc-component/select/assets/index.css';

function CustomSelect({ label, id, icon, children, ...props }) {
  return (
    <div className="mb-4">
      {label && <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>}
      <div className="relative">
        {icon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">{icon}</div>}
        <Select
          id={id}
          className={`w-full rounded-md bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500 ${icon ? 'pl-10' : ''}`}
          {...props}
        >
            {children}
        </Select>
      </div>
    </div>
  );
}

export default CustomSelect;
