import React from 'react';
import styles from './helloWorld.module.scss';

export interface HelloWorldProps {
  name: string;
}

export const HelloWorld: React.FC<HelloWorldProps> = ({ name }) => (
  <div className={styles.helloWorld}>
    <p>Hello, {name}</p>
  </div>
);
