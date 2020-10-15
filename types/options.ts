import { MediaType } from "./general";

export interface Options {
  // Genre
  genre: {
    [key in string]: string;
  };

  // BKM Type
  bkmType: {
    [key in string]: string;
  };

  // Niveau/målgruppe
  targetAudience: {
    [key in string]: string;
  };

  // Emneområde
  subjectArea: {
    [key in string]: string;
  };

  // Betalingskode
  paymentCodeByType: {
    [key in MediaType]: {
      [key in string]: string;
    };
  };

  // Betalingskode for kort om
  paymentCodeShortByType: {
    [key in MediaType]: {
      [key in string]: string;
    };
  };

  // Betalingskode for metakompas
  paymentCodeMetaCompassByType: {
    [key in MediaType]: {
      [key in string]: string;
    };
  };
}
