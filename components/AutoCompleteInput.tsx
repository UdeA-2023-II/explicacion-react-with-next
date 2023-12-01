import React, { useState, useEffect, useRef } from 'react';

type AutoCompleteInputProps = {
  suggestions: string[];
};

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setActiveSuggestionIndex(0);
  }, [inputValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const filtered = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Arrow down
    if (event.key === "ArrowDown") {
      setActiveSuggestionIndex(activeSuggestionIndex < filteredSuggestions.length - 1 ? activeSuggestionIndex + 1 : 0);
    }
    // Arrow up
    else if (event.key === "ArrowUp") {
      setActiveSuggestionIndex(activeSuggestionIndex > 0 ? activeSuggestionIndex - 1 : filteredSuggestions.length - 1);
    }
    // Enter
    else if (event.key === "Enter") {
      setInputValue(filteredSuggestions[activeSuggestionIndex]);
      setFilteredSuggestions([]);
    }
  };

  return (
    <div className="relative">
      <input
        ref={inputRef}
        className="w-full p-2 border border-gray-300 rounded mx-2 my-2"
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {filteredSuggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-auto">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={suggestion}
              className={`p-2 ${index === activeSuggestionIndex ? 'bg-blue-100' : ''}`}
              onClick={() => handleSuggestionClick(suggestion)}
              onMouseEnter={() => setActiveSuggestionIndex(index)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export  {AutoCompleteInput};
