import path from 'path';
import fs from 'fs';

import { VERBS, SUBJECTS } from './arrays';
import { getCW, getWord, randomElement } from './utils';

const USED_VERBS_PATH = path.resolve('.', 'usedVerbs');
const USED_SUBJECTS_PATH = path.resolve('.', 'usedSubjects');

export const generate = (dryRun: boolean) => {
  const usedVerbs = getUsedWords(USED_VERBS_PATH);
  const usedSubjects = getUsedWords(USED_SUBJECTS_PATH);

  let unusedVerbs = VERBS.filter((verb) => !usedVerbs.includes(getWord(verb)));
  let unusedSubjects = SUBJECTS.filter(
    (subject) => !usedSubjects.includes(getWord(subject))
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

  const verbWord = getWord(verb);
  const subjectWord = getWord(subject);
  const cw = getCW(verb, subject);

  if (!dryRun) {
    saveUsedWord(USED_VERBS_PATH, verbWord);
    saveUsedWord(USED_SUBJECTS_PATH, subjectWord);
  }

  return { post: `Get ${verbWord}, ${subjectWord}`, cw };
};

const getUsedWords = (path: string) => {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, '');
  }

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
