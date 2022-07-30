import styled from 'styled-components';

import styles from '../styles/Contact.module.css';

const Title = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Contact() {
  return (
    <div>
      <Title>Styled Component</Title>
      <h2 className={styles.title}>Contact page</h2>;
    </div>
  );
}
