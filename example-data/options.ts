import { MediaType } from "../types/general";
import { Options } from "../types/options";
import subjectAreas from './subjectAreas'

export const mockOptions: Options = {
  genre: {
    a: "12",
    123: "12",
    vcds: "12",
    qwe: "12",
  },
  bkmType: {
    a: "12",
  },
  targetAudience: {
    adult: "Voksen",
    kids: "Børn / Skole",
    adultKids: "Voksen og Børn",
  },
  subjectArea: subjectAreas
  // {
  //   testA: "Voksen > 10-19 > 12 Erkendelsesteori",
  //   testB: "Voksen > 10-19 > 13 Bibliografi",
  //   testC: "Barn > 10-19 > 10 Bibliometri",
  //   testD: "Barn > 10-19 > 11 Litografi",
  // }
  ,
  paymentCodeByType: {
    [MediaType.BOOK]: {
      aa: "123",
      bb: "hgfdgs",
    },
    [MediaType.EBOOK]: {
      aa: "123",
      bb: "hgfdgs",
    },
    [MediaType.MOVIE]: {
      aa: "123",
      bb: "hgfdgs",
    },
    [MediaType.MUSIC]: {
      aa: "123",
      bb: "hgfdgs",
    },
    [MediaType.MULTIMEDIA]: {
      aa: "123",
      bb: "hgfdgs",
    },
  },
  paymentCodeMetaCompassByType: {
    [MediaType.BOOK]: {
      aa: "123",
      bb: "hgfdgs",
    },
    [MediaType.EBOOK]: {
      aa: "123",
      bb: "hgfdgs",
    },
    [MediaType.MOVIE]: {
      aa: "123",
      bb: "hgfdgs",
    },
    [MediaType.MUSIC]: {
      aa: "123",
      bb: "hgfdgs",
    },
    [MediaType.MULTIMEDIA]: {
      aa: "123",
      bb: "hgfdgs",
    },
  },
  paymentCodeShortByType: {
    [MediaType.BOOK]: {
      aa: "123",
      bb: "hgfdgs",
    },
    [MediaType.EBOOK]: {
      aa: "123",
      bb: "hgfdgs",
    },
    [MediaType.MOVIE]: {
      aa: "123",
      bb: "hgfdgs",
    },
    [MediaType.MUSIC]: {
      aa: "123",
      bb: "hgfdgs",
    },
    [MediaType.MULTIMEDIA]: {
      aa: "123",
      bb: "hgfdgs",
    },
  },
};
