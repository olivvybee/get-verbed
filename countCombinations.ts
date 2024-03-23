import { SUBJECTS, VERBS } from './arrays';

export const countCombinations = () => {
  const verbCount = VERBS.length;
  const subjectCount = SUBJECTS.length;
  const combinations = (verbCount * subjectCount).toLocaleString();

  console.log(
    `There are ${verbCount} verbs and ${subjectCount} subjects, resulting in ${combinations} possible combinations.`
  );
};
