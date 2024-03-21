import { createRestAPIClient } from 'masto';

export enum Visibility {
  Public = 'public',
  Unlisted = 'unlisted',
  Private = 'private',
  Direct = 'direct',
}
