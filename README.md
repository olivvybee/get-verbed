# get-verbed

A fedi bot that generates posts with the format `Get {verbed}, {subject}` (e.g.
"Get petted, nerd"). The canonical version is hosted at
[@getverbed@honeycomb.engineer](https://honeycomb.engineer/@getverbed).

## Contributing

### Setting up

Clone the repo, then run `npm install` to install dependencies.

If you want to be able to make posts with your instance of the bot, you will
need to copy `.env.example` to `.env` and fill in the appropriate values (the
URL of your fedi instance, and an access token for the bot).

### Adding new words

Both the `verb`s and the `subject`s are stored in arrays in
[arrays.ts](/blob/main/arrays.ts). New words can simply be added to these
arrays.

Both word arrays can contain either plain strings or an object containing a word
and a content warning. This should be used if the word you're adding could be
uncomfortable for people (e.g. if it's lewd).

```ts
{ word: 'hand-held', cw: 'extremely lewd' }
```

Duplicate detection runs as a PR check, so you won't be able to merge fi you add
duplicate words to the arrays.

### Prettier

The repo has `prettier` installed to maintain code style, particularly the use
of single/double quotes and trailing commas.

Editors like VSCode should pick up the `.prettierrc` config file automatically
and allow you to format the code according to the rules, but if not you can run
`npm run prettier:format` to format the code before committing.

Prettier runs as a PR check, so if your changes don't match the expected format,
you won't be able to merge.
