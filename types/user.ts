import { Email } from "./general";

export enum UserRole {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  REVIWER = "REVIEWER",
}

export interface UserListItem {
  name: string;
  email: Email;
  role: UserRole;
  // TBD
}

export interface ReviewerListItem extends UserListItem {
  // TBD
}

export interface Reviewer extends ReviewerListItem {
  // TBD
}
