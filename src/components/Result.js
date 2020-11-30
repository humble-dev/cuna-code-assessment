import React, { useState, useEffect } from 'react';
import DisqualifiedPage from '../pages/Disqualified.Page';
import QualifiedPage from '../pages/Qualified.Page';

// 'Result' is analogous to a Y-branch that splits off to the 'Qualified' or 'Disqualified' views.
const Result = props => {
  const body = props.location.body;

  const [qualified, setQualified] = useState(null);

  useEffect(() => {
    if (body.qualified) setQualified(true);
    else setQualified(false);
  }, [body]);

  if (qualified) return <QualifiedPage />;
  if (!qualified) return <DisqualifiedPage message={body.msg} />;
  return null;
};

export default Result;
