import { createRestAPIClient } from 'masto';

export enum Visibility {
  Public = 'public',
  Unlisted = 'unlisted',
  Private = 'private',
  Direct = 'direct',
}

export type Verb = string | { word: string; cw: string };
export type Subject = string | { word: string; cw: string };
