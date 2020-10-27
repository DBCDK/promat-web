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
  subjectArea: subjectAreas,
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
