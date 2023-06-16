import * as React from 'react';
import * as st from './buttonList.module.css';

const ButtonList = ({ children }: { children: React.ReactNode }) => {
  return <div className={st.container}>{children}</div>;
};

export default ButtonList;
