import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { WeatherDataType } from '../../types/mainTypes';
import '../../css/searchLocation.css';

type Props = {
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherDataType>>;
};

function SearchLocation({ setWeatherData }: Props) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setWeatherData([]);
  };

  return (
    <div className="searchLocation">
      <div className="searchLocation__innerContainer">
        <input
          type="text"
          value={inputValue}
          placeholder="Search location"
          onChange={handleChange}
          className="searchLocation__input"
        />
        <button onClick={handleSearchClick} className="searchLocation__button">
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
}

export default SearchLocation;
