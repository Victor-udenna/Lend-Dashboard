import Input from '@/Components/atom/Input';
import './TableFilterStyle.scss';
import Button from '@/Components/atom/Button';

export default function TableFilter() {
  return (
    <div className="filter">
      <div className="filter__input-container">
        <label htmlFor="organization" className="filter__label">
          Organization
        </label>
        <select id="organization" className="filter__input"></select>
      </div>
      <div className="filter__input-container">
        <label htmlFor="username" className="filter__label">
          Username
        </label>
        <Input id="username" className="filter__input" />
      </div>
      <div className="filter__input-container">
        <label htmlFor="email" className="filter__label">
          Email
        </label>
        <Input id="email" className="filter__input" />
      </div>
      <div className="filter__input-container">
        <label htmlFor="date" className="filter__label">
          Date
        </label>
        <Input id="date" className="filter__input" type="date" />
      </div>
      <div className="filter__input-container">
        <label htmlFor="phone-number" className="filter__label">
          Phone Number
        </label>
        <Input id="phone-number" className="filter__input" />
      </div>
      <div className="filter__input-container">
        <label htmlFor="status" className="filter__label">
          Status
        </label>
        <select id="status" className="filter__input"></select>
      </div>
      <div className="filter__button__container">
        <Button className="filter__reset__button" textValue="Reset" />
        <Button className="filter__action__button" textValue="Filter" />
      </div>
    </div>
  );
}
