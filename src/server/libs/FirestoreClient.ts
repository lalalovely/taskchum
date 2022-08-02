import { Firestore } from '@google-cloud/firestore';

import config from '../config/config';

const firestore = new Firestore({
  projectId: config.FIRESTORE_CREDS.project_id,
  credentials: { ...config.FIRESTORE_CREDS },
});

export default firestore;
