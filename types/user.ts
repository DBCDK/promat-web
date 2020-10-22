import { Email, ID, ISO8601Timestamp, MediaType } from "./general";

export enum UserRole {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR", // Redaktør
  REVIWER = "REVIEWER", // Anmelder
}

export enum UserStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum AddressType {
  PRIVATE = "PRIVATE",
  INSTITUTION = "INSTITUTION",
}

export enum ReviewerType {
  PUBLIC = "PUBLIC", // Offentligt bibliotek
  SCHOOL = "SCHOOL", // Skolebibliotek
  CHILDREN = "CHILDREN", // Børn
  ADULTS = "ADULTS", // Voksne
}

export interface Address {
  street: string; // Adresse 1
  streetExtra: string; // Adresse 2
  zip: string; // Post nr
  city: string; // By
  phone: string; // Telefon
  email: Email; // Email
}

export interface UserListItem {
  id: ID;
  name: string; // Navnehenvisning 1
  email: Email; // Email
  role: UserRole; //Brugertype
  status: UserStatus; // Status
  institutionName: string; // Institution
  generalComment: string; // Generel kommentar
}

interface UserBasicDetails extends UserListItem {
  firstName: string; // Fornavn
  lastName: string; // Efternavn
  nameExtra: string; // Navnehenvisning 2
  hasWriteAccess: boolean; // Skriverettigheder
  payrollNumber: string; // Lønnummer
  activeAddressType: AddressType; // Anvend adresse
  privateAddress: Address;
  institutionAddress: Address;
  favoriteMediaType: MediaType; // Yndlingsmaterialetype
  autobiography: string; // Selvbiografi
  subjectAreasOfInterest: {
    // Interesseområder
    id: ID;
    description?: string; // Kommentar
  }[];
  reviewerType: { [key in ReviewerType]: boolean }; // Anmeldertype
  deactivationPeriod?: {
    // Deaktivering
    start: ISO8601Timestamp;
    end: ISO8601Timestamp;
  };
}

// Used when updating/creating a reviewer
export interface UserCreateOrUpdateRequest
  extends Omit<UserBasicDetails, "id"> {
  partnerId: ID; // Partner
}

// Used when retrieving reviewer details
export interface UserResponse extends UserListItem, UserBasicDetails {
  caseCapacity?: {
    new: number; // Nye sager
    inProgress: number; // Igangværende sager
    rejected: number; // Afviste sager
  };
  partner: UserListItem; // Partner
}

// interface OauthRedirectParams {
//   code: string;
// }

// interface OauthTokenResponse {
//   access_token: string;
//   token_type: "Bearer";
//    : number;
// }
