import { Query, DocumentData } from "@firebase/firestore-types";
import { firestore } from "./initializeFirebase";

const batchDelete = async (query: Query<DocumentData>) => {
  const snapshot = await query.get();
  const batchSize = snapshot.size;

  if (batchSize === 0) return;

  const batch = firestore.batch();

  snapshot.docs.forEach((doc) => batch.delete(doc.ref));

  await batch.commit();

  process.nextTick(() => batchDelete(query));
};

export default batchDelete;
