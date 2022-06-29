import { TbTemperatureCelsius, TbTemperatureFahrenheit } from 'react-icons/tb';
import '../../css/switch.css';

type Props = {
  value: 'celsius' | 'fahrenheit';
  setValue: React.Dispatch<React.SetStateAction<'celsius' | 'fahrenheit'>>;
};

function Switch({ value, setValue }: Props) {
  return (
    <section className="switch">
      <span className="switch__unit">Unit:</span>
      <div className="switch__innerContainer">
        <div
          className={`switch__selector ${
            value === 'celsius'
              ? 'switch__selector--left'
              : 'switch__selector--rigth'
          }`}
        >
          <div className="switch__pointer"></div>
        </div>
        <div
          className="switch__celsiusIcon"
          onClick={() => setValue('celsius')}
        >
          <TbTemperatureCelsius title="celsius" />
        </div>
        <div
          className="switch__fahrenheitIcon"
          onClick={() => setValue('fahrenheit')}
        >
          <TbTemperatureFahrenheit title="fahrenheit" />
        </div>
      </div>
    </section>
  );
}
export default Switch;
