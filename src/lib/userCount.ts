import { useState, useEffect } from 'react';

interface PersonalInformation {
  firstname: string;
  lastname: string;
  email: string;
  phone_number: string;
  bvn: string;
  gender: string;
  children: number;
  residence_type: number;
}

interface EducationEmployment {
  education_level: string;
  is_employed: boolean;
  employment_sector: string;
  employment_duration: string;
  office_email: string;
  min_monthly_income: number;
  max_monthly_income: number;
  loan_repayment: number;
}

interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
}

interface Guarantor {
  firstname: string;
  lastname: string;
  phone_number: string;
  email: string;
  relationship: string;
}

type User = {
  id?: number;
  userid: string;
  status: string;
  withLoan: boolean;
  withSavings: boolean;
  dateJoined: any;
  personal_information: PersonalInformation;
  education_employment: EducationEmployment;
  socials: Socials;
  guarantor: Guarantor;
};

const useUserCount = (data: [User] | any) => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [userwithLoan, setUserwithloan] = useState(0);
  const [userwithSavings, setUserwithsaving] = useState(0);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setTotalUsers(data.length);

      const filterActiveUsers = data.filter((user: User) => user.status === 'active');
      setActiveUsers(filterActiveUsers.length);

      const filterLoanUsers = data.filter((user: User) => user.withLoan === true);
      setUserwithloan(filterLoanUsers.length);

      const filterSavingsUsers = data.filter((user: User) => user.withSavings === true);
      setUserwithsaving(filterSavingsUsers.length);
    }
  }, [data]);

  return { totalUsers, activeUsers, userwithLoan, userwithSavings };
};

export default useUserCount;