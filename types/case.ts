import { ReviewerListItem, UserListItem } from "./user";
import { Review } from "./review";
import {
  FaustNumber,
  ID,
  ISO8601Date,
  ISO8601Timestamp,
  WeekCode,
  ISBN,
} from "./general";

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
  dueDate: ISO8601Date;
  weekCode: WeekCode;
}

export interface Case extends CaseListItem {
  faust: FaustNumber;
  author: string;
  series: string;
  publisher: string;
  corporation: string;
  messages: CaseMessage[];
  editor: UserListItem;
  barcode?: string;
  technicalInfo?: string;
  dk5: string;
  isbn: ISBN;
  review: Review;
}
