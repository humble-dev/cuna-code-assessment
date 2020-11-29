import React, { createContext, useContext, useState } from 'react';

const DEFAULT = 'default';
const APPROVED = 'approved';
const REJECTED = 'rejected';

const modes = [DEFAULT, APPROVED, REJECTED];

export const LoanContext = createContext({
  status: DEFAULT,
  setStatus: () => null,
});

export const LoanContextProvider = props => {
  const [status, setStatus] = useState(DEFAULT);

  const qualify = () => {
    setStatus(APPROVED);
  };

  const disqualify = () => {
    setStatus(REJECTED);
  };

  const value = {
    modes,
    qualify,
    disqualify,
    status,
  };

  return (
    <LoanContext.Provider value={value}>{props.children}</LoanContext.Provider>
  );
};

export const UseLoanContext = () => useContext(LoanContext);
