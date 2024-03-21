import path from 'path';
import fs from 'fs';

import { VERBS, SUBJECTS } from './arrays';

const USED_VERBS_PATH = path.resolve('.', 'usedVerbs');
const USED_SUBJECTS_PATH = path.resolve('.', 'usedSubjects');

export const generate = () => {
  const usedVerbs = getUsedWords(USED_VERBS_PATH);
  const usedSubjects = getUsedWords(USED_SUBJECTS_PATH);

  let unusedVerbs = VERBS.filter((verb) => !usedVerbs.includes(verb));
  let unusedSubjects = SUBJECTS.filter(
    (subject) => !usedSubjects.includes(subject)
  );

  if (!unusedVerbs.length) {
    resetUsedWords(USED_VERBS_PATH);
    unusedVerbs = VERBS;
  }

  if (!unusedSubjects.length) {
    resetUsedWords(USED_SUBJECTS_PATH);
    unusedSubjects = SUBJECTS;
  }

  const verb = randomElement(unusedVerbs);
  const subject = randomElement(unusedSubjects);

  usedVerbs.push(verb);
  usedSubjects.push(subject);

  saveUsedWord(USED_VERBS_PATH, verb);
  saveUsedWord(USED_SUBJECTS_PATH, subject);

  return `Get ${verb}, ${subject}`;
};

const getUsedWords = (path: string) => {
  const contents = fs.readFileSync(path, 'utf-8');
  return contents.split('\n').filter((str) => !!str.length);
};

const saveUsedWord = (path: string, word: string) => {
  const usedWords = getUsedWords(path);
  usedWords.push(word);
  const contents = usedWords.join('\n');
  fs.writeFileSync(path, contents);
};

const resetUsedWords = (path: string) => {
  fs.writeFileSync(path, '');
};

const randomElement = <T>(array: T[]): T => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};
