import { UserListItem } from "./user";
import { Review } from "./review";
import {
  FaustNumber,
  ID,
  ISO8601Date,
  ISO8601Timestamp,
  WeekCode,
} from "./general";
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
  reviewer: UserListItem;
  assignedDate: ISO8601Date;
  dueDate: ISO8601Date; // Angiv afleveringsfrist
  weekCode: WeekCode;
}

interface CaseBasicDetails {
  title: string;
  paymentCode: ID; // Betalingskode
  paymentCodeShort: ID; // Betalingskode for kort om
  paymentCodeMetaCompass: ID; // Betalingskode for metakompas
  extraFields: { [key in CaseExtraField]: boolean };
  assignedDate: ISO8601Date;
  dueDate: ISO8601Date; // Angiv afleveringsfrist
  weekCode: WeekCode;
}

// Used when creating cases
export interface CaseCreateRequest extends CaseBasicDetails {
  reviewerId: ID;
  faust: FaustNumber;
  newMessage?: string;
}

// Used when updating cases
export interface CaseUpdateRequest extends CaseBasicDetails {
  newMessage?: string;
  status: CaseStatus;
}

// Used when retrieving an existing case
export interface CaseResponse extends CaseBasicDetails {
  id: ID;
  editor: UserListItem; // Redaktør
  messages?: CaseMessage[]; // Beskeder
  reviewer: UserListItem; // Anmelder
  record: Record;
  review?: Review;
  status: CaseStatus;
}
