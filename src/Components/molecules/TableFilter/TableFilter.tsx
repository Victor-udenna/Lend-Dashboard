import React, { useState } from 'react';
import Input from '@/Components/atom/Input';
import './TableFilterStyle.scss';
import Button from '@/Components/atom/Button';

interface FilterValues {
  organization: string;
  username: string;
  email: string;
  date: string;
  phoneNumber: string;
  status: string;
}

interface TableFilterProps {
  onFilterApply: (filterValues: FilterValues) => void;
}

export default function TableFilter({ onFilterApply }: TableFilterProps) {
  const [organization, setOrganization] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState('');

  const handleFilter = () => {
    const filterValues: FilterValues = {
      organization,
      username,
      email,
      date,
      phoneNumber,
      status,
    };
    onFilterApply(filterValues);
  };

  const resetFilter = () => {
    setOrganization('');
    setUsername('');
    setEmail('');
    setDate('');
    setPhoneNumber('');
    setStatus('');
  };

  return (
    <div className="filter">
      <div className="filter__input-container">
        <label htmlFor="organization" className="filter__label">
          Organization
        </label>
        <select
          id="organization"
          className="filter__input"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        >
          <option value="">Select Organization</option>
          <option value="Lendsqr">Lendsqr</option>
          <option value="TechCorp">TechCorp</option>
          <option value="Initech">Initech</option>
          <option value="Globex">Globex</option>
          <option value="Umbrella">Umbrella</option>
        </select>
      </div>
      <div className="filter__input-container">
        <label htmlFor="username" className="filter__label">
          Username
        </label>
        <Input
          id="username"
          type="text"
          className="filter__input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="filter__input-container">
        <label htmlFor="email" className="filter__label">
          Email
        </label>
        <Input
          id="email"
          type="email"
          className="filter__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="filter__input-container">
        <label htmlFor="date" className="filter__label">
          Date
        </label>
        <Input
          id="date"
          className="filter__input"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="filter__input-container">
        <label htmlFor="phone-number" className="filter__label">
          Phone Number
        </label>
        <Input
          id="phone-number"
          type="tel"
          className="filter__input"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="filter__input-container">
        <label htmlFor="status" className="filter__label">
          Status
        </label>
        <select
          id="status"
          className="filter__input"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Select Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="pending">Pending</option>
          <option value="blacklisted">Blacklisted</option>
        </select>
      </div>
      <div className="filter__button__container">
        <Button
          className="filter__reset__button"
          textValue="Reset"
          onClick={resetFilter}
        />
        <Button
          className="filter__action__button"
          textValue="Filter"
          onClick={handleFilter}
        />
      </div>
    </div>
  );
}
