import { CaseStatus } from "./case";
import { FaustNumber, ISBN, WeekCode } from "./general";

enum RecordType {
    SINGLE = "SINGLE", // singlepost
    VOLUME = "VOLUME" // bind
}

export interface RecordListItem {
  title: string; // Titel
  type: RecordType // Type
  status?: CaseStatus; // Status
  author: string; // Forfatter
  faust: FaustNumber; // Faustnr.
  weekCode: WeekCode; // Ugekode
}

export interface Record extends RecordListItem {
  series: string; // Serie 
  publisher: string; // Forlag
  corporation: string; // Korporation
  barcode?: string; // Stregkodenummer
  technicalInfo?: string; // Tekn. opl.
  dk5: string; // DK5
  isbn: ISBN; // ISBN
}
