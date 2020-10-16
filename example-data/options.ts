import { MediaType } from "../types/general";
import { Options } from "../types/options";

const a: Options = {
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
    a: "12",
  },
  subjectArea: {
    a: "12",
  },
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
