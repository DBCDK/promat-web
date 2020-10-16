import { ReviewerListItem, UserListItem } from "./user";
import { Review } from "./review";
import { ID, ISO8601Date, ISO8601Timestamp, WeekCode } from "./general";
import { Record } from "./record";

export enum CaseStatus {
  REQUESTED = "REQUESTED",
  REJECTED_BY_EDITOR = "REJECTED_BY_EDITOR",
  REJECTED_BY_REVIEWER = "REJECTED_BY_REVIEWER",
  DEACTIVATED = "DEACTIVATED",
  UNPUBLISHED = "UNPUBLISHED",
  REJECTED = "REJECTED",
  DEADLINE_EXCEEDED = "DEADLINE_EXCEEDED",
  AWAITING_APPROVAL = "AWAITING_APPROVAL",
  PUBLISHED_WITHOUT_PAYMENT = "PUBLISHED_WITHOUT_PAYMENT",
  PUBLISHED = "UNPUBLISHED",
  EXPORTED_BUT_DELETED = "EXPORTED_BUT_DELETED",
  EXPORTED = "EXPORTED",
}

export enum CaseExtraField {
  BKM = "BKM", // BKM-vurdering
  KEYWORDS = "KEYWORDS", // Emneord
  AGE_RANGE = "AGE_RANGE", // Alder
  GENRE = "GENRE", // Genre
  TARGET_AUDIENCE = "TARGET_AUDIENCE", // Niveau/målgruppe
  META_COMPASS = "META_COMPASS", // Metakompas
}

export interface CaseMessage {
  timestamp: ISO8601Timestamp;
  body: string;
  creator: UserListItem;
}

export interface CaseListItem {
  id: ID;
  status: CaseStatus; 
  title: string;
  assignedReviewer: ReviewerListItem;
  assignedDate: ISO8601Date; 
  dueDate: ISO8601Date; // Angiv afleveringsfrist
  weekCode: WeekCode;
}

export interface Case extends CaseListItem {
  record: Record;
  messages?: CaseMessage[]; // Beskeder
  editor: UserListItem; // Redaktør
  review?: Review; 
  paymentCode: ID; // Betalingskode
  paymentCodeShort: ID; // Betalingskode for kort om
  paymentCodeMetaCompass: ID; // Betalingskode for metakompas
  extraFields: { [key in CaseExtraField]: boolean };
  // Used for submitting cases using the form
  newMessage?: string
}
