import React, { useState, useEffect } from 'react';
import { hexToRgbString } from '../../utils/hexToRgb';
import './ColorConverter.css';

export const ColorConverter: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('#9921ff');
  const [rgbResult, setRgbResult] = useState<string | null>('rgb(153, 33, 255)');
  const [error, setError] = useState<boolean>(false);
  const [remaining, setRemaining] = useState<number>(0);

  useEffect(() => {
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  useEffect(() => {
    if (!error && rgbResult) {
      document.body.style.backgroundColor = rgbResult;
    }
  }, [rgbResult, error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    const len = value.length;

    if (len < 7) {
      setRemaining(7 - len);
      setRgbResult(null);
      setError(false);
    } else if (len === 7) {
      setRemaining(0);
      const rgbString = hexToRgbString(value);
      if (rgbString) {
        setRgbResult(rgbString);
        setError(false);
      } else {
        setRgbResult(null);
        setError(true);
      }
    } else {
      setRemaining(0);
      setRgbResult(null);
      setError(true);
    }
  };

  const getMessage = () => {
    if (error) return 'Ошибка! Неверный HEX';
    if (rgbResult) return rgbResult;
    if (remaining > 0) {
      const word = remaining === 1 ? 'символ' : 'символов';
      return `Осталось ввести: ${remaining} ${word}`;
    }
    return '';
  };

  return (
    <div className="container">
      <input
        type="text"
        className="input-field"
        value={inputValue}
        onChange={handleChange}
        placeholder="Введите код цвета..."
        aria-invalid={error}
      />
      <span className={`result ${error ? 'error' : ''}`}>{getMessage()}</span>
    </div>
  );
};
