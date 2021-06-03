import styles from './Pressdown.module.css';
import { useState, useEffect } from 'react';

const Pressdown =  () => {

  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // If pressed key is our target key then set to true
  const downHandler = ({key}) => {
      setKeyPressed(key);
  }

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return (keyPressed);
}

export default Pressdown;
