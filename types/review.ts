import { ID } from "./general";

export interface Review {
  targetAudience: ID[]; // Niveau/målgruppe
  keywords: ID[]; // Emneord
  genres: ID[]; // Genre- og formbetegnelser
  bkmType: ID[]; // BKM-vurdering
  bkmExplanation?: string; // BKM-vurdering
  ageRange?: { min: number; max: number }; // Alder
  teaser: string; // Kort om bogen
  description: string; // Beskrivelse (objektivt, uden vurdering)
  evaluation: string; // Vurdering
  message: string; // Besked
  librarianNotes: string; // Til bibliotekaren
  otherMaterials: string; // Andre bøger om samme emne/genre
}
