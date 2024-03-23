import { config as loadEnv } from 'dotenv';
import yargs, { boolean } from 'yargs';
import { hideBin } from 'yargs/helpers';
import { generate } from './generate';
import { postStatus } from './postStatus';
import { Visibility } from './types';
import { countCombinations } from './countCombinations';

interface MainArgs {
  dryRun?: boolean;
  visibility?: Visibility;
  count?: boolean;
}

const main = async ({
  dryRun = false,
  visibility,
  count = false,
}: MainArgs) => {
  if (count) {
    countCombinations();
    process.exit(0);
  }

  const { post, cw } = generate(dryRun);

  if (dryRun) {
    console.log(`This is a dry run, but I would have posted "${post}".`);
  } else {
    postStatus(post, { visibility, contentWarning: cw });
  }
};

const argv = yargs(hideBin(process.argv))
  .option('dry-run', {
    alias: 'd',
    type: 'boolean',
    description: "Generate a post, but don't post to fedi",
  })
  .option('visibility', {
    type: 'string',
    choices: Object.values(Visibility),
    description: 'Set the visibility of the post',
  })
  .option('count', {
    alias: 'c',
    type: 'boolean',
    description:
      'Count the number of possible combinations of verbs and subjects',
  })
  .help()
  .alias('h', 'help')
  .parseSync();

loadEnv();
main(argv);
