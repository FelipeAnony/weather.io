import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import '../../css/searchLocation.css';
import apiHelper from '../../helpers/apiHelper';
import { debounceHelper } from '../../helpers/debounceHelper';
import { SearchCityResponse } from '../../types/apiHelperTypes';

type Props = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
};

function SearchLocation({ setCity }: Props) {
  const [inputValue, setInputValue] = useState('');
  const [searchListIsOpen, setSearchListIsOpen] = useState(false);
  const [searchOptionsList, setSearchOptionsList] =
    useState<SearchCityResponse>([]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    if (inputValue.length < 1) return;
    const loadData = async () => {
      try {
        const data = await apiHelper.searchCity(inputValue);
        setSearchOptionsList(data);
        setSearchListIsOpen(true);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  };

  const handleListOptionClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setCity(e.currentTarget.id);
  };

  useEffect(() => {
    const loadData = async () => {
      console.log('executado');
      try {
        const data = await apiHelper.searchCity(inputValue);
        setSearchOptionsList(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (inputValue.length > 2) {
      //prevents unnecessary requests
      debounceHelper(loadData, 300);

      setSearchListIsOpen(true);
    } else {
      //close and clear SearchOptionList
      setSearchOptionsList([]);
      setSearchListIsOpen(false);
    }
  }, [inputValue]);

  useEffect(() => {
    if (searchOptionsList.length < 3) {
      setSearchListIsOpen(false);
    }
  }, [searchOptionsList]);

  return (
    <div className="searchLocation">
      <div className="searchLocation__innerContainer">
        <input
          type="text"
          value={inputValue}
          placeholder="Search location"
          onChange={handleChange}
          className="searchLocation__input"
          autoFocus
        />
        <button onClick={handleSearchClick} className="searchLocation__button">
          <AiOutlineSearch />
        </button>
      </div>
      <div
        className={
          searchListIsOpen ? 'searchLocation__searchList' : 'hiddenElement'
        }
      >
        {searchOptionsList.length > 0 &&
          searchOptionsList.map((e) => (
            <div
              key={e.id}
              id={e.name}
              className="searchLocation__searchOption"
              onClick={handleListOptionClick}
            >
              {e.name} - {e.region}
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchLocation;
