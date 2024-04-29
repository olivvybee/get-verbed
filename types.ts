import { createRestAPIClient } from 'masto';

export enum Visibility {
  Public = 'public',
  Unlisted = 'unlisted',
  Private = 'private',
  Direct = 'direct',
}

export type Entry = string | { word: string; cw: string };
