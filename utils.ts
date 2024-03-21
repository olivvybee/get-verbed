import { Verb } from './types';

export const getWord = (verb: Verb) => {
  if (typeof verb === 'string') {
    return verb;
  } else {
    return verb.word;
  }
};

export const getCW = (verb: Verb) => {
  if (typeof verb === 'string') {
    return undefined;
  } else {
    return verb.cw;
  }
};

export const randomElement = <T>(array: T[]): T => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};
