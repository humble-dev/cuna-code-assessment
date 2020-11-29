import React, { createContext } from 'react'

const DEFAULT = 'default'
const APPROVED = 'approved'
const REJECTED = 'rejected'

export const LoanStatusContext = createContext({
  status: DEFAULT,
  setStatus: () => null,
})

export const LoanStatusContextProvider = props => {
  const [status, setStatus] = useState(DEFAULT)

  const approveLoan = () => {
    setStatus(APPROVED)
  }

  const rejectLoan = () => {
    setStatus(REJECTED)
  }

  const resetStatus = () => {
    setStatus(DEFAULT)
  }

  const getStatus
}
