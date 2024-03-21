import { createRestAPIClient } from 'masto';
import { Visibility } from './types';

interface PostStatusArgs {
  visibility?: Visibility;
  inReplyToId?: string;
  contentWarning?: string;
}

export const postStatus = async (
  status: string,
  options: PostStatusArgs = {}
) => {
  const url = process.env.FEDI_INSTANCE_URL;
  if (!url) {
    throw new Error('No FEDI_INSTANCE_URL found. Check your .env file.');
  }

  const accessToken = process.env.FEDI_ACCESS_TOKEN;
  if (!accessToken) {
    throw new Error('No FEDI_ACCESS_TOKEN found. Check your .env file.');
  }

  const { visibility = 'unlisted', inReplyToId, contentWarning } = options;

  const client = createRestAPIClient({ url, accessToken });
  return client.v1.statuses.create({
    status,
    visibility,
    inReplyToId,
    spoilerText: contentWarning,
  });
};
