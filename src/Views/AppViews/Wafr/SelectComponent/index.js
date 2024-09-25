import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

const CustomSelectWrapper = styled('div')({
  position: 'relative',
  width: '100%',
});

const CustomSelect = styled('select')(({ theme }) => ({
  appearance: 'none', 
  backgroundColor: 'white',
  border: '1px solid #d1d5db', 
  borderRadius: '0.375rem', 
  padding: '0.75rem 1rem', 
  paddingRight: '2.5rem', 
  width: '100%',
  fontSize: '1rem', 
  lineHeight: '1.5', 
  '&:focus': {
    borderColor: '#3b82f6', 
    outline: 'none',
    boxShadow: '0 0 0 1px #3b82f6', 
  },
}));

const CustomLabel = styled('label')(({ theme }) => ({
  display: 'block',
  fontSize: '1.125rem', 
  fontWeight: 500,
  color: '#4b5563', 
  marginBottom: '0.25rem', 
}));

const Arrow = styled('div')(({ isOpen }) => ({
  position: 'absolute',
  top: '50%',
  right: '1rem', 
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
  width: '0',
  height: '0',
  borderLeft: '0.4rem solid transparent',
  borderRight: '0.4rem solid transparent',
  borderTop: isOpen ? '0.4rem solid #3b82f6' : '0.4rem solid #6b7280', 
  transform: `translateY(-50%) ${isOpen ? 'rotate(180deg)' : ''}`, 
}));

const SelectComponent = ({ lenses, placeholder, label, onLensChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    onLensChange(event.target.value);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-6">
      <CustomLabel>{label}</CustomLabel>
      <CustomSelectWrapper>
        <CustomSelect 
          onChange={handleChange} 
          defaultValue="" 
          onClick={handleClick} 
          onFocus={() => setIsOpen(true)} 
          onBlur={() => setIsOpen(false)}
        >
          <option value="" disabled>{placeholder}</option>
          {lenses.map((lens, index) => (
            <option key={index} value={lens}>{lens}</option>
          ))}
        </CustomSelect>
        <Arrow isOpen={isOpen} />
      </CustomSelectWrapper>
    </div>
  );
};

export default SelectComponent;


