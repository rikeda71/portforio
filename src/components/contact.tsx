import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { library, IconName } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Typography from '@material-ui/core/Typography';

library.add(fab);

interface ContactInterface {
  link: string;
  name: IconName;
}

const Contact: React.FC = () => {
  const contacts: Array<ContactInterface> = [
    { name: 'twitter', link: 'https://twitter.com/ikechan0829' },
    { name: 'github', link: 'https://github.com/s14t284' },
    { name: 'instagram', link: 'https://instagram.com/iryuya' },
    { name: 'facebook', link: 'https://www.facebook.com/ryuya.ikeda.33' },
  ];

  const decoratedContact = (contacts: Array<ContactInterface>) => (
    <Typography variant='h6'>
      <ul>
        <li>
          <FontAwesomeIcon icon={faEnvelope} /> rikeda71 [at] gmail.com
        </li>
        {contacts.map((contact: ContactInterface) => {
          return (
            <li className='contact' key={contact.name}>
              <FontAwesomeIcon icon={['fab', contact.name]} />{' '}
              <a href={contact.link}>{contact.name}</a>
            </li>
          );
        })}
      </ul>
    </Typography>
  );
  return <div className='contact'>{decoratedContact(contacts)}</div>;
};

export default Contact;
