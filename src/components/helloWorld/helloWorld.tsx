import styles from './helloWorld.module.scss';
import { type FC } from 'react';

export interface HelloWorldProps {
  name: string;
}

export const HelloWorld: FC<HelloWorldProps> = ({ name }) => (
  <div className={styles.helloWorld}>
    <p>Hello, {name}</p>
  </div>
);
