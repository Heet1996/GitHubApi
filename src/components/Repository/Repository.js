import React from 'react';
import RepoInfo from '../UI/Card/Card';

const Repository = ({ repository }) => (
    <div>
      <RepoInfo repository={repository} />
    </div>
  );

export default Repository