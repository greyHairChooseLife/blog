import * as React from 'react';
import * as st from './contact.module.css';

const Contact = () => {
  const contactList = {
    github: 'https://github.com/greyHairChooseLife',
    email: 'greyhairchooselife@gmail.com',
    mobile: '010 9639 7703',
  };

  const onClickCopy = (each: string) => {
    const value = contactList[each as keyof typeof contactList];
    window.navigator.clipboard.writeText(value);
  };

  return (
    <div className={st.my}>
      <h3>Contact</h3>
      <p>(click to copy)</p>
      {Object.keys(contactList).map((each) => (
        <li className={st.list}>
          <span>{each}</span>
          <button onClick={() => onClickCopy(each)}>
            {contactList[each as keyof typeof contactList]}
          </button>
        </li>
      ))}
    </div>
  );
};

export default Contact;
