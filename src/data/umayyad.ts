import type { HistoricalEvent, HistoricalPeriod, Person } from "../types/chronology";

// См. docs/umayyad-sources.md. Годы н. э. — приблизительный ориентир.
export const umayyadPeople: Record<string, Person> = {
  "yazidMuawiya": {
    "id": "yazidMuawiya",
    "name": "Язид ибн Муавия",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Халиф Омейядов; правил после Муавии ибн Абу Суфьяна.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=182"
      }
    ]
  },
  "uqbaNafi": {
    "id": "uqbaNafi",
    "name": "Укба ибн Нафи‘",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Военачальник в Ифрикии и Магрибе, основатель Кайруана.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=212"
      }
    ]
  },
  "abuMuhajir": {
    "id": "abuMuhajir",
    "name": "Абу аль-Мухаджир ибн Динар",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Наместник Ифрикии; предшественник Укбы во время его второго назначения.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=213"
      }
    ]
  },
  "kusayla": {
    "id": "kusayla",
    "name": "Кусайла",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Берберский предводитель, противник Укбы ибн Нафи‘ и Зухайра ибн Кайса.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
      }
    ]
  },
  "muawiyaSecond": {
    "id": "muawiyaSecond",
    "name": "Муавия ибн Язид — Муавия II",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Сын Язида ибн Муавии; кратко занимал престол после отца.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=185"
      }
    ]
  },
  "sulaymanSurad": {
    "id": "sulaymanSurad",
    "name": "Сулейман ибн Сурад",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Возглавил движение кающихся — ат-таввабин.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
      }
    ]
  },
  "marwanHakam": {
    "id": "marwanHakam",
    "name": "Марван ибн аль-Хакам",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Омейядский халиф, отец Абд аль-Малика.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=185"
      }
    ]
  },
  "abdMalik": {
    "id": "abdMalik",
    "name": "Абд аль-Малик ибн Марван",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Омейядский халиф, восстановивший единство государства после междоусобиц.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=185"
      }
    ]
  },
  "hajjaj": {
    "id": "hajjaj",
    "name": "Аль-Хаджжадж ибн Юсуф",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Наместник Ирака, руководивший борьбой с восстаниями и восточными походами.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=187"
      }
    ]
  },
  "mukhtar": {
    "id": "mukhtar",
    "name": "Аль-Мухтар ас-Сакафи",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Предводитель выступления в Куфе под лозунгом мести за аль-Хусайна.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
      }
    ]
  },
  "musabZubayr": {
    "id": "musabZubayr",
    "name": "Мус‘аб ибн аз-Зубайр",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Брат Абдуллаха ибн аз-Зубайра; противник аль-Мухтара в Ираке.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
      }
    ]
  },
  "zuhayrQays": {
    "id": "zuhayrQays",
    "name": "Зухайр ибн Кайс аль-Балави",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Военачальник, вернувший Кайруан после победы над Кусайлой.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
      }
    ]
  },
  "shabib": {
    "id": "shabib",
    "name": "Шабиб ибн Язид аш-Шайбани",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Предводитель хариджитского выступления против войск аль-Хаджжаджа.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
      },
      {
        "title": "Сияр а‘лям ан-нубаля · Шабиб",
        "url": "https://www.islamweb.org/ar/library/index.php?ID=493&bk_no=60&flag=1&page=bookcontents"
      }
    ]
  },
  "ghazala": {
    "id": "ghazala",
    "name": "Газаля",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Участница хариджитского выступления, жена Шабиба ибн Язида.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
      },
      {
        "title": "Сияр а‘лям ан-нубаля · Шабиб",
        "url": "https://www.islamweb.org/ar/library/index.php?ID=493&bk_no=60&flag=1&page=bookcontents"
      }
    ],
    "gender": "female"
  },
  "hassanNuman": {
    "id": "hassanNuman",
    "name": "Хассан ибн ан-Ну‘ман",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Военачальник в Ифрикии, противник аль-Кахины.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
      }
    ]
  },
  "kahina": {
    "id": "kahina",
    "name": "Аль-Кахина",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Берберская предводительница, противостоявшая войскам Хассана ибн ан-Ну‘мана.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=215"
      }
    ],
    "gender": "female"
  },
  "ibnAshath": {
    "id": "ibnAshath",
    "name": "Абд ар-Рахман ибн Мухаммад ибн аль-Аш‘ас",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Военачальник, возглавивший восстание против аль-Хаджжаджа.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
      }
    ]
  },
  "walidAbdMalik": {
    "id": "walidAbdMalik",
    "name": "Аль-Валид ибн Абд аль-Малик",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Омейядский халиф времени крупных завоеваний и строительства мечетей.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=193"
      }
    ]
  },
  "musaNusayr": {
    "id": "musaNusayr",
    "name": "Муса ибн Нусайр",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Наместник Магриба и организатор походов в Андалусию.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=215"
      }
    ]
  },
  "tariqZiyad": {
    "id": "tariqZiyad",
    "name": "Тарик ибн Зияд",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Командовал войском, переправившимся в Андалусию.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=215"
      }
    ]
  },
  "qutayba": {
    "id": "qutayba",
    "name": "Кутайба ибн Муслим",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Военачальник, руководивший походами в Мавераннахре.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=229"
      }
    ]
  },
  "tarifMalik": {
    "id": "tarifMalik",
    "name": "Тариф ибн Малик",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Возглавил разведывательный поход в Андалусию.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=216"
      }
    ]
  },
  "roderic": {
    "id": "roderic",
    "name": "Родерих",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Вестготский король, противник Тарика в битве при Вади-Лакка.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=217"
      }
    ]
  },
  "muhammadQasim": {
    "id": "muhammadQasim",
    "name": "Мухаммад ибн аль-Касим",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Руководил походом в Синд при аль-Хаджжадже.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=234"
      }
    ]
  },
  "dahir": {
    "id": "dahir",
    "name": "Дахир",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Правитель Синда, погибший в борьбе с войском Мухаммада ибн аль-Касима.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=234"
      }
    ]
  },
  "sulaymanAbdMalik": {
    "id": "sulaymanAbdMalik",
    "name": "Сулейман ибн Абд аль-Малик",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Омейядский халиф, назначивший преемником Умара ибн Абд аль-Азиза.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=195"
      }
    ]
  },
  "maslamaAbdMalik": {
    "id": "maslamaAbdMalik",
    "name": "Масляма ибн Абд аль-Малика",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Военачальник, возглавлявший осаду Константинополя и борьбу с Ибн аль-Мухаллабом.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=196"
      }
    ]
  },
  "umarAbdAziz": {
    "id": "umarAbdAziz",
    "name": "Умар ибн Абд аль-Азиз",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Омейядский халиф, известный стремлением к справедливости и возвращению неправомерно присвоенного имущества.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=198"
      }
    ]
  },
  "rajaHaywa": {
    "id": "rajaHaywa",
    "name": "Раджа ибн Хайва",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Учёный и советник Сулеймана, участвовавший в выборе Умара ибн Абд аль-Азиза преемником.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=197"
      }
    ]
  },
  "yazidAbdMalik": {
    "id": "yazidAbdMalik",
    "name": "Язид ибн Абд аль-Малика",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Омейядский халиф после Умара ибн Абд аль-Азиза.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=203"
      }
    ]
  },
  "yazidMuhallab": {
    "id": "yazidMuhallab",
    "name": "Язид ибн аль-Мухаллаб",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Военачальник и наместник, возглавивший выступление в Ираке.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=204"
      }
    ]
  },
  "hasanBasri": {
    "id": "hasanBasri",
    "name": "Аль-Хасан аль-Басри",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "110 г. х.",
      "gregorian": "ок. 728–729 гг."
    },
    "cities": [
      "Басра"
    ],
    "description": "Учёный поколения табиинов, передатчик хадисов и наставник в Басре.",
    "dateNote": "Смерть в 110 г. х. по «Сияр»; рождение в этой работе не уточнялось.",
    "sources": [
      {
        "title": "Сияр а‘лям ан-нубаля · Аль-Хасан аль-Басри",
        "url": "https://www.islamweb.net/ar/library/content/60/674/"
      }
    ],
    "categories": [
      "muhaddith"
    ]
  },
  "ibnSirin": {
    "id": "ibnSirin",
    "name": "Мухаммад ибн Сирин",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "110 г. х.",
      "gregorian": "ок. 728–729 гг."
    },
    "cities": [
      "Басра"
    ],
    "description": "Учёный поколения табиинов и передатчик хадисов в Басре.",
    "dateNote": "Смерть в 110 г. х. по «Сияр»; рождение в этой работе не уточнялось.",
    "sources": [
      {
        "title": "Сияр а‘лям ан-нубаля · Аль-Хасан аль-Басри",
        "url": "https://www.islamweb.net/ar/library/content/60/674/"
      }
    ],
    "categories": [
      "muhaddith"
    ]
  },
  "hishamAbdMalik": {
    "id": "hishamAbdMalik",
    "name": "Хишам ибн Абд аль-Малика",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Омейядский халиф, правивший около двадцати лет.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=205"
      }
    ]
  },
  "ghafiqi": {
    "id": "ghafiqi",
    "name": "Абд ар-Рахман аль-Гафики",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Командовал мусульманским войском при Балат аш-Шухада.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=222"
      }
    ]
  },
  "charlesMartel": {
    "id": "charlesMartel",
    "name": "Карл Мартелл",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Франкский военачальник, противник аль-Гафики при Балат аш-Шухада.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=222"
      }
    ]
  },
  "walidYazid": {
    "id": "walidYazid",
    "name": "Аль-Валид ибн Язид — аль-Валид II",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Омейядский халиф, свергнутый сторонниками Язида ибн аль-Валида.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=206"
      }
    ]
  },
  "yazidWalid": {
    "id": "yazidWalid",
    "name": "Язид ибн аль-Валида — Язид III",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Омейядский халиф, известный как ан-Накис.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=206"
      }
    ]
  },
  "marwanMuhammad": {
    "id": "marwanMuhammad",
    "name": "Марван ибн Мухаммад — Марван II",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Последний омейядский халиф в Дамаске.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=207"
      }
    ]
  },
  "dahhakShaybani": {
    "id": "dahhakShaybani",
    "name": "Ад-Даххак ибн Кайс аш-Шайбани",
    "honorific": "",
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [],
    "description": "Предводитель хариджитов в последние годы Омейядского халифата.",
    "dateNote": "Непроверенные даты жизни не заполняются по датам правления или участия в походах.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
      },
      {
        "title": "Islamweb · Выступление ад-Даххака, 127 г. х.",
        "url": "https://islamweb.net/ar/library/content/200/18699/"
      }
    ]
  },
  "abuAyyub": {
    "id": "abuAyyub",
    "name": "Абу Айюб аль-Ансари",
    "honorific": "Да будет доволен им Аллах",
    "isCompanion": true,
    "birth": {
      "hijri": "—",
      "gregorian": "—"
    },
    "death": {
      "hijri": "—",
      "gregorian": "—"
    },
    "cities": [
      "Медина"
    ],
    "description": "Сподвижник Пророка ﷺ, участвовавший в походе к Константинополю и похороненный у его стен.",
    "dateNote": "Точный год смерти зависит от датировки похода; в этой работе не выбран.",
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара · т. 1, с. 177",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=179"
      }
    ]
  }
};

export const umayyadPeriod: HistoricalPeriod = {
  "id": "umayyad",
  "title": "Омейядский халифат",
  "description": "Правления халифов, завоевания, внутренние события и даты жизни учёных в единой хронологии.",
  "dates": {
    "hijri": "41–132 г. х.",
    "gregorian": "661–750 гг."
  },
  "groups": [
    {
      "id": "umayyad-people",
      "title": "Деятели эпохи",
      "people": [
        {
          "personId": "yazidMuawiya"
        },
        {
          "personId": "uqbaNafi"
        },
        {
          "personId": "abuMuhajir"
        },
        {
          "personId": "kusayla"
        },
        {
          "personId": "muawiyaSecond"
        },
        {
          "personId": "sulaymanSurad"
        },
        {
          "personId": "marwanHakam"
        },
        {
          "personId": "abdMalik"
        },
        {
          "personId": "hajjaj"
        },
        {
          "personId": "mukhtar"
        },
        {
          "personId": "musabZubayr"
        },
        {
          "personId": "zuhayrQays"
        },
        {
          "personId": "shabib"
        },
        {
          "personId": "ghazala"
        },
        {
          "personId": "hassanNuman"
        },
        {
          "personId": "kahina"
        },
        {
          "personId": "ibnAshath"
        },
        {
          "personId": "walidAbdMalik"
        },
        {
          "personId": "musaNusayr"
        },
        {
          "personId": "tariqZiyad"
        },
        {
          "personId": "qutayba"
        },
        {
          "personId": "tarifMalik"
        },
        {
          "personId": "roderic"
        },
        {
          "personId": "muhammadQasim"
        },
        {
          "personId": "dahir"
        },
        {
          "personId": "sulaymanAbdMalik"
        },
        {
          "personId": "maslamaAbdMalik"
        },
        {
          "personId": "umarAbdAziz"
        },
        {
          "personId": "rajaHaywa"
        },
        {
          "personId": "yazidAbdMalik"
        },
        {
          "personId": "yazidMuhallab"
        },
        {
          "personId": "hishamAbdMalik"
        },
        {
          "personId": "ghafiqi"
        },
        {
          "personId": "charlesMartel"
        },
        {
          "personId": "walidYazid"
        },
        {
          "personId": "yazidWalid"
        },
        {
          "personId": "marwanMuhammad"
        },
        {
          "personId": "dahhakShaybani"
        },
        {
          "personId": "abuAyyub"
        }
      ]
    },
    {
      "id": "umayyad-scholars",
      "title": "Учёные и авторы",
      "people": [
        {
          "personId": "saidIbnJubayr"
        },
        {
          "personId": "mujahid"
        },
        {
          "personId": "hasanBasri"
        },
        {
          "personId": "ibnSirin"
        },
        {
          "personId": "abuHanifa"
        },
        {
          "personId": "ibnIshaq"
        },
        {
          "personId": "malik"
        },
        {
          "personId": "abuYusuf"
        }
      ]
    }
  ]
};

export const umayyadEvents: HistoricalEvent[] = [
  {
    "id": "umayyad-muawiya",
    "title": "Правление Муавии ибн Абу Суфьяна",
    "description": "После передачи власти аль-Хасаном ибн Али Муавия стал халифом. При нём укрепилось управление государством и возобновились походы. Он был сподвижником Пророка ﷺ и ранее управлял Шамом. Назначение сына Язида преемником стало важным изменением порядка передачи власти; книга приводит объяснение этого решения аль-Худари и Ибн Хальдуном.",
    "periodId": "umayyad",
    "start": {
      "hijri": "41 г. х.",
      "gregorian": "ок. 661–662 гг."
    },
    "sortOrder": 2000,
    "participants": [
      {
        "personId": "muawiya",
        "role": "Халиф и организатор походов",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление Муавии ибн Абу Суфьяна",
            "page": "173–180",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=175"
          }
        ]
      },
      {
        "personId": "hasanAli",
        "role": "Передал власть Муавии",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление Муавии ибн Абу Суфьяна",
            "page": "173–180",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=175"
          }
        ]
      },
      {
        "personId": "yazidMuawiya",
        "role": "Халиф Омейядов; правил после Муавии ибн Абу Суфьяна.",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление Муавии ибн Абу Суфьяна",
            "page": "173–180",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=175"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Правление Муавии ибн Абу Суфьяна",
        "page": "173–180",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=175"
      }
    ],
    "end": {
      "hijri": "60 г. х.",
      "gregorian": "ок. 679–680 гг."
    }
  },
  {
    "id": "umayyad-abu-musa-death",
    "title": "Смерть Абу Мусы аль-Аш‘ари",
    "description": "Скончался сподвижник, передатчик хадисов, знаток Корана и наставник жителей Басры и Куфы.",
    "periodId": "umayyad",
    "start": {
      "hijri": "44 г. х. (одна из датировок)",
      "gregorian": "ок. 664–665 гг."
    },
    "sortOrder": 2010,
    "participants": [
      {
        "personId": "abuMusa",
        "role": "Скончался; Учёный и передатчик хадисов",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Сияр а‘лям ан-нубаля · Абу Муса",
            "url": "https://www.islamweb.com/ar/library/index.php?ID=216&bk_no=60&flag=1&page=bookcontents"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сияр а‘лям ан-нубаля · Абу Муса",
        "url": "https://www.islamweb.com/ar/library/index.php?ID=216&bk_no=60&flag=1&page=bookcontents"
      }
    ],
    "dateNote": "44 г. х. — выбранная датировка аз-Захаби; в источниках также встречаются 42, 43, 50, 52 и 53 г. х."
  },
  {
    "id": "umayyad-constantinople-first",
    "title": "Первая попытка завоевания Константинополя",
    "description": "Муавия направил войско к столице Византии. Поход не привёл к взятию города. Среди участников был Абу Айюб аль-Ансари, умерший во время похода и похороненный у Константинополя. Книга описывает также последующие попытки.",
    "periodId": "umayyad",
    "start": {
      "hijri": "48 или 52 г. х.",
      "gregorian": "ок. 668–669 гг."
    },
    "sortOrder": 2020,
    "participants": [
      {
        "personId": "muawiya",
        "role": "Халиф и организатор походов",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Первая попытка завоевания Константинополя",
            "page": "177–178",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=179"
          }
        ]
      },
      {
        "personId": "yazidMuawiya",
        "role": "Халиф Омейядов; правил после Муавии ибн Абу Суфьяна.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Первая попытка завоевания Константинополя",
            "page": "177–178",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=179"
          }
        ]
      },
      {
        "personId": "abuAyyub",
        "role": "Сподвижник Пророка ﷺ, участвовавший в походе к Константинополю и похороненный у его стен.",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Первая попытка завоевания Константинополя",
            "page": "177–178",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=179"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Первая попытка завоевания Константинополя",
        "page": "177–178",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=179"
      }
    ],
    "dateNote": "В книге приведены альтернативные датировки первого похода: 48 и 52 г. х.; 48 выбран для расположения в ленте. Это не непрерывный период 48–52."
  },
  {
    "id": "umayyad-kairouan",
    "title": "Основание и строительство Кайруана",
    "description": "Укба ибн Нафи‘ основал Кайруан как постоянную базу в Ифрикии. Город находился вдали от побережья, что уменьшало угрозу со стороны византийского флота. Были построены соборная мечеть и жилища.",
    "periodId": "umayyad",
    "start": {
      "hijri": "50 г. х.",
      "gregorian": "ок. 670–671 гг."
    },
    "sortOrder": 2030,
    "participants": [
      {
        "personId": "uqbaNafi",
        "role": "Военачальник в Ифрикии и Магрибе, основатель Кайруана.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Основание и строительство Кайруана",
            "page": "210–211",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=212"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Основание и строительство Кайруана",
        "page": "210–211",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=212"
      }
    ],
    "end": {
      "hijri": "55 г. х.",
      "gregorian": "ок. 674–675 гг."
    }
  },
  {
    "id": "umayyad-abu-muhajir",
    "title": "Назначение Абу аль-Мухаджира ибн Динара наместником Ифрикии",
    "description": "Абу аль-Мухаджир сменил Укбу ибн Нафи‘. Он стремился привлечь берберов на свою сторону; книга связывает с этим периодом принятие ислама Кусайлой и продвижение к Тлемсену.",
    "periodId": "umayyad",
    "start": {
      "hijri": "55 г. х.",
      "gregorian": "ок. 674–675 гг."
    },
    "sortOrder": 2040,
    "participants": [
      {
        "personId": "abuMuhajir",
        "role": "Наместник Ифрикии; предшественник Укбы во время его второго назначения.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Назначение Абу аль-Мухаджира ибн Динара наместником Ифрикии",
            "page": "211–212",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=213"
          }
        ]
      },
      {
        "personId": "kusayla",
        "role": "Берберский предводитель, противник Укбы ибн Нафи‘ и Зухайра ибн Кайса.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Назначение Абу аль-Мухаджира ибн Динара наместником Ифрикии",
            "page": "211–212",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=213"
          }
        ]
      },
      {
        "personId": "muawiya",
        "role": "Халиф и организатор походов",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Назначение Абу аль-Мухаджира ибн Динара наместником Ифрикии",
            "page": "211–212",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=213"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Назначение Абу аль-Мухаджира ибн Динара наместником Ифрикии",
        "page": "211–212",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=213"
      }
    ]
  },
  {
    "id": "umayyad-aisha-death",
    "title": "Смерть Аиши бинт Абу Бакр",
    "description": "Скончалась мать верующих Аиша — одна из крупнейших передатчиц хадисов и знатоков религиозных установлений среди сподвижников. Её похоронили в Медине.",
    "periodId": "umayyad",
    "start": {
      "hijri": "57 или 58 г. х.",
      "gregorian": "ок. 676–677 гг."
    },
    "sortOrder": 2050,
    "participants": [
      {
        "personId": "aisha",
        "role": "Скончался; Мать верующих, знаток хадисов и фикха",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Сияр а‘лям ан-нубаля · Аиша",
            "url": "https://islamweb.net/ar/library/content/60/150/"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сияр а‘лям ан-нубаля · Аиша",
        "url": "https://islamweb.net/ar/library/content/60/150/"
      }
    ],
    "dateNote": "57 или 58 г. х.: обе версии приведены в «Сияр». В ленте используется 57; даты не обозначают продолжительность события."
  },
  {
    "id": "umayyad-uqba-return",
    "title": "Возвращение Укбы ибн Нафи‘ к управлению Ифрикией",
    "description": "Язид ибн Муавия вернул Укбу к управлению Ифрикией. Укба возобновил продвижение на запад; Абу аль-Мухаджир был отстранён.",
    "periodId": "umayyad",
    "start": {
      "hijri": "60 г. х.",
      "gregorian": "ок. 679–680 гг."
    },
    "sortOrder": 2060,
    "participants": [
      {
        "personId": "uqbaNafi",
        "role": "Военачальник в Ифрикии и Магрибе, основатель Кайруана.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Возвращение Укбы ибн Нафи‘ к управлению Ифрикией",
            "page": "212",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
          }
        ]
      },
      {
        "personId": "abuMuhajir",
        "role": "Наместник Ифрикии; предшественник Укбы во время его второго назначения.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Возвращение Укбы ибн Нафи‘ к управлению Ифрикией",
            "page": "212",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
          }
        ]
      },
      {
        "personId": "yazidMuawiya",
        "role": "Халиф Омейядов; правил после Муавии ибн Абу Суфьяна.",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Возвращение Укбы ибн Нафи‘ к управлению Ифрикией",
            "page": "212",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Возвращение Укбы ибн Нафи‘ к управлению Ифрикией",
        "page": "212",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
      }
    ]
  },
  {
    "id": "umayyad-yazid",
    "title": "Правление Язида ибн Муавии",
    "description": "Язид унаследовал власть после смерти Муавии. Его правление сопровождалось острыми конфликтами: в 61 г. х. при Кербеле был убит аль-Хусайн ибн Али; в 63 г. х. произошло сражение при аль-Харре, затем войско направилось к Мекке против Ибн аз-Зубайра.",
    "periodId": "umayyad",
    "start": {
      "hijri": "60 г. х.",
      "gregorian": "ок. 679–680 гг."
    },
    "sortOrder": 2070,
    "participants": [
      {
        "personId": "yazidMuawiya",
        "role": "Халиф Омейядов; правил после Муавии ибн Абу Суфьяна.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление Язида ибн Муавии",
            "page": "180–183",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=182"
          }
        ]
      },
      {
        "personId": "husaynAli",
        "role": "Убит при Кербеле во время правления Язида",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление Язида ибн Муавии",
            "page": "180–183",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=182"
          }
        ]
      },
      {
        "personId": "abdullahZubayr",
        "role": "Противник Омейядов, халиф в Мекке",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление Язида ибн Муавии",
            "page": "180–183",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=182"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Правление Язида ибн Муавии",
        "page": "180–183",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=182"
      }
    ],
    "end": {
      "hijri": "64 г. х.",
      "gregorian": "ок. 683–684 гг."
    }
  },
  {
    "id": "umayyad-uqba-atlantic",
    "title": "Поход Укбы ибн Нафи‘ до Атлантического океана",
    "description": "Укба продолжил походы через Магриб и достиг Атлантического побережья. На обратном пути его войско столкнулось с объединёнными противниками.",
    "periodId": "umayyad",
    "start": {
      "hijri": "60 г. х.",
      "gregorian": "ок. 679–680 гг."
    },
    "sortOrder": 2080,
    "participants": [
      {
        "personId": "uqbaNafi",
        "role": "Военачальник в Ифрикии и Магрибе, основатель Кайруана.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Поход Укбы ибн Нафи‘ до Атлантического океана",
            "page": "212",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Поход Укбы ибн Нафи‘ до Атлантического океана",
        "page": "212",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
      }
    ],
    "dateNote": "Период между возвращением Укбы в Ифрикию и его гибелью; отдельный точный год достижения океана в проверенном фрагменте не установлен.",
    "end": {
      "hijri": "63 г. х.",
      "gregorian": "ок. 682–683 гг."
    }
  },
  {
    "id": "umayyad-umm-salama-death",
    "title": "Смерть Умм Салямы",
    "description": "Скончалась мать верующих Умм Саляма — передатчица хадисов, у которой учились последующие поколения мусульман.",
    "periodId": "umayyad",
    "start": {
      "hijri": "61 г. х. (одна из датировок)",
      "gregorian": "ок. 680–681 гг."
    },
    "sortOrder": 2090,
    "participants": [
      {
        "personId": "ummSalama",
        "role": "Скончался; Мать верующих, передатчица хадисов",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Islamweb · Датировка смерти Умм Салямы",
            "url": "https://islamweb.com/ar/fatwa/245758/"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Islamweb · Датировка смерти Умм Салямы",
        "url": "https://islamweb.com/ar/fatwa/245758/"
      }
    ],
    "dateNote": "61 г. х. — предпочтённая аз-Захаби версия; встречаются и другие годы."
  },
  {
    "id": "umayyad-zubayr-conflict",
    "title": "Начало противостояния Абдуллаха ибн аз-Зубайра и Омейядов",
    "description": "Абдуллах ибн аз-Зубайр выступил против власти Язида. После сражения при аль-Харре войско Язида осадило Мекку, но известие о смерти халифа привело к прекращению этого похода.",
    "periodId": "umayyad",
    "start": {
      "hijri": "63 г. х.",
      "gregorian": "ок. 682–683 гг."
    },
    "sortOrder": 2100,
    "participants": [
      {
        "personId": "abdullahZubayr",
        "role": "Противник Омейядов, халиф в Мекке",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Начало противостояния Абдуллаха ибн аз-Зубайра и Омейядов",
            "page": "182–183",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=184"
          }
        ]
      },
      {
        "personId": "yazidMuawiya",
        "role": "Халиф Омейядов; правил после Муавии ибн Абу Суфьяна.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Начало противостояния Абдуллаха ибн аз-Зубайра и Омейядов",
            "page": "182–183",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=184"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Начало противостояния Абдуллаха ибн аз-Зубайра и Омейядов",
        "page": "182–183",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=184"
      }
    ]
  },
  {
    "id": "umayyad-tahuda",
    "title": "Битва при Тахуде и гибель Укбы ибн Нафи‘",
    "description": "На обратном пути Укба оказался с небольшим отрядом перед войсками Кусайлы и византийцев. В сражении погибли Укба и Абу аль-Мухаджир. Поражение привело к утрате мусульманами контроля над Кайруаном.",
    "periodId": "umayyad",
    "start": {
      "hijri": "63 г. х.",
      "gregorian": "ок. 682–683 гг."
    },
    "sortOrder": 2110,
    "participants": [
      {
        "personId": "uqbaNafi",
        "role": "Военачальник в Ифрикии и Магрибе, основатель Кайруана.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Битва при Тахуде и гибель Укбы ибн Нафи‘",
            "page": "212",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
          }
        ]
      },
      {
        "personId": "abuMuhajir",
        "role": "Наместник Ифрикии; предшественник Укбы во время его второго назначения.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Битва при Тахуде и гибель Укбы ибн Нафи‘",
            "page": "212",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
          }
        ]
      },
      {
        "personId": "kusayla",
        "role": "Берберский предводитель, противник Укбы ибн Нафи‘ и Зухайра ибн Кайса.",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Битва при Тахуде и гибель Укбы ибн Нафи‘",
            "page": "212",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Битва при Тахуде и гибель Укбы ибн Нафи‘",
        "page": "212",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
      }
    ]
  },
  {
    "id": "umayyad-muawiya-second",
    "title": "Правление Муавии II",
    "description": "После смерти Язида власть перешла к его сыну Муавии. Его правление было кратким; после отказа от власти и смерти единство Омейядского государства оказалось под угрозой.",
    "periodId": "umayyad",
    "start": {
      "hijri": "64 г. х.",
      "gregorian": "ок. 683–684 гг."
    },
    "sortOrder": 2120,
    "participants": [
      {
        "personId": "muawiyaSecond",
        "role": "Сын Язида ибн Муавии; кратко занимал престол после отца.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление Муавии II",
            "page": "183",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=185"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Правление Муавии II",
        "page": "183",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=185"
      }
    ],
    "dateNote": "В книге правление помещено в 64 г. х.; точная продолжительность передаётся по-разному."
  },
  {
    "id": "umayyad-zubayr-caliphate",
    "title": "Халифат Абдуллаха ибн аз-Зубайра",
    "description": "Абдуллаха ибн аз-Зубайра признали халифом в Хиджазе и ряде других областей. Марван, затем Абд аль-Малик боролись за восстановление власти Омейядов. Противостояние завершилось осадой Мекки аль-Хаджжаджем и гибелью Ибн аз-Зубайра в 73 г. х.",
    "periodId": "umayyad",
    "start": {
      "hijri": "64 г. х.",
      "gregorian": "ок. 683–684 гг."
    },
    "sortOrder": 2130,
    "participants": [
      {
        "personId": "abdullahZubayr",
        "role": "Противник Омейядов, халиф в Мекке",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Халифат Абдуллаха ибн аз-Зубайра",
            "page": "183–185",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=185"
          }
        ]
      },
      {
        "personId": "marwanHakam",
        "role": "Омейядский халиф, отец Абд аль-Малика.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Халифат Абдуллаха ибн аз-Зубайра",
            "page": "183–185",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=185"
          }
        ]
      },
      {
        "personId": "abdMalik",
        "role": "Омейядский халиф, восстановивший единство государства после междоусобиц.",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Халифат Абдуллаха ибн аз-Зубайра",
            "page": "183–185",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=185"
          }
        ]
      },
      {
        "personId": "hajjaj",
        "role": "Наместник Ирака, руководивший борьбой с восстаниями и восточными походами.",
        "sortOrder": 30,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Халифат Абдуллаха ибн аз-Зубайра",
            "page": "183–185",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=185"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Халифат Абдуллаха ибн аз-Зубайра",
        "page": "183–185",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=185"
      }
    ],
    "end": {
      "hijri": "73 г. х.",
      "gregorian": "ок. 692–693 гг."
    }
  },
  {
    "id": "umayyad-kusayla-kairouan",
    "title": "Захват Кайруана Кусайлой",
    "description": "После гибели Укбы и отступления войска Кусайла занял Кайруан. Возвращение города стало задачей последующих походов.",
    "periodId": "umayyad",
    "start": {
      "hijri": "64 г. х.",
      "gregorian": "ок. 683–684 гг."
    },
    "sortOrder": 2140,
    "participants": [
      {
        "personId": "kusayla",
        "role": "Берберский предводитель, противник Укбы ибн Нафи‘ и Зухайра ибн Кайса.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Захват Кайруана Кусайлой",
            "page": "212",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Захват Кайруана Кусайлой",
        "page": "212",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
      }
    ]
  },
  {
    "id": "umayyad-tawwabin",
    "title": "Восстание кающихся — ат-таввабин",
    "description": "Сторонники аль-Хусайна, раскаявшиеся в том, что не поддержали его, объединились под руководством Сулеймана ибн Сурада. Их выступление завершилось поражением от омейядского войска.",
    "periodId": "umayyad",
    "start": {
      "hijri": "64 г. х.",
      "gregorian": "ок. 683–684 гг."
    },
    "sortOrder": 2150,
    "participants": [
      {
        "personId": "sulaymanSurad",
        "role": "Возглавил движение кающихся — ат-таввабин.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Восстание кающихся — ат-таввабин",
            "page": "185–186",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=187"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Восстание кающихся — ат-таввабин",
        "page": "185–186",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=187"
      }
    ],
    "end": {
      "hijri": "65 г. х.",
      "gregorian": "ок. 684–685 гг."
    }
  },
  {
    "id": "umayyad-marwan",
    "title": "Правление Марвана ибн аль-Хакама",
    "description": "Марван возглавил Омейядов в условиях соперничества с Ибн аз-Зубайром. Победа его сторонников при Мардж-Рахите укрепила власть в Шаме. После него правление перешло к сыну Абд аль-Малику. Книга рассматривает Марвана и Абд аль-Малика в общем подразделе.",
    "periodId": "umayyad",
    "start": {
      "hijri": "64 г. х.",
      "gregorian": "ок. 683–684 гг."
    },
    "sortOrder": 2160,
    "participants": [
      {
        "personId": "marwanHakam",
        "role": "Омейядский халиф, отец Абд аль-Малика.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление Марвана ибн аль-Хакама",
            "page": "183–189",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=185"
          }
        ]
      },
      {
        "personId": "abdMalik",
        "role": "Омейядский халиф, восстановивший единство государства после междоусобиц.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление Марвана ибн аль-Хакама",
            "page": "183–189",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=185"
          }
        ]
      },
      {
        "personId": "abdullahZubayr",
        "role": "Противник Омейядов, халиф в Мекке",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление Марвана ибн аль-Хакама",
            "page": "183–189",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=185"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Правление Марвана ибн аль-Хакама",
        "page": "183–189",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=185"
      }
    ],
    "end": {
      "hijri": "65 г. х.",
      "gregorian": "ок. 684–685 гг."
    }
  },
  {
    "id": "umayyad-abd-malik",
    "title": "Правление Абд аль-Малика ибн Марвана",
    "description": "Абд аль-Малик восстановил единство большей части государства после междоусобиц. Его войска победили сторонников Ибн аз-Зубайра. Книга описывает продолжительные восстания в Ираке, управление аль-Хаджжаджа и последующее укрепление государства.",
    "periodId": "umayyad",
    "start": {
      "hijri": "65 г. х.",
      "gregorian": "ок. 684–685 гг."
    },
    "sortOrder": 2170,
    "participants": [
      {
        "personId": "abdMalik",
        "role": "Омейядский халиф, восстановивший единство государства после междоусобиц.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление Абд аль-Малика ибн Марвана",
            "page": "183–190",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=185"
          }
        ]
      },
      {
        "personId": "hajjaj",
        "role": "Наместник Ирака, руководивший борьбой с восстаниями и восточными походами.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление Абд аль-Малика ибн Марвана",
            "page": "183–190",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=185"
          }
        ]
      },
      {
        "personId": "abdullahZubayr",
        "role": "Противник Омейядов, халиф в Мекке",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление Абд аль-Малика ибн Марвана",
            "page": "183–190",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=185"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Правление Абд аль-Малика ибн Марвана",
        "page": "183–190",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=185"
      }
    ],
    "end": {
      "hijri": "86 г. х.",
      "gregorian": "ок. 705–706 гг."
    }
  },
  {
    "id": "umayyad-mukhtar",
    "title": "Восстание аль-Мухтара ас-Сакафи",
    "description": "Аль-Мухтар установил власть в Куфе, выступая под лозунгом мести за аль-Хусайна и заявляя о поддержке Мухаммада ибн аль-Ханафийи. Его движение было разгромлено Мус‘абом ибн аз-Зубайром.",
    "periodId": "umayyad",
    "start": {
      "hijri": "66 г. х.",
      "gregorian": "ок. 685–686 гг."
    },
    "sortOrder": 2180,
    "participants": [
      {
        "personId": "mukhtar",
        "role": "Предводитель выступления в Куфе под лозунгом мести за аль-Хусайна.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Восстание аль-Мухтара ас-Сакафи",
            "page": "186",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
          }
        ]
      },
      {
        "personId": "musabZubayr",
        "role": "Брат Абдуллаха ибн аз-Зубайра; противник аль-Мухтара в Ираке.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Восстание аль-Мухтара ас-Сакафи",
            "page": "186",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Восстание аль-Мухтара ас-Сакафи",
        "page": "186",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
      }
    ],
    "end": {
      "hijri": "67 г. х.",
      "gregorian": "ок. 686–687 гг."
    }
  },
  {
    "id": "umayyad-ibn-abbas-death",
    "title": "Смерть Абдуллаха ибн Аббаса",
    "description": "В Таифе скончался Абдуллах ибн Аббас — сподвижник, знаток тафсира и наставник Муджахида и Саида ибн Джубайра.",
    "periodId": "umayyad",
    "start": {
      "hijri": "68 г. х.",
      "gregorian": "ок. 687–688 гг."
    },
    "sortOrder": 2190,
    "participants": [
      {
        "personId": "ibnAbbas",
        "role": "Скончался; Сподвижник и толкователь Корана",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Islamweb · Кончина Ибн Аббаса",
            "url": "https://www.islamweb.net/ar/library/content/200/18354/"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Islamweb · Кончина Ибн Аббаса",
        "url": "https://www.islamweb.net/ar/library/content/200/18354/"
      }
    ]
  },
  {
    "id": "umayyad-mams",
    "title": "Поход Зухайра ибн Кайса и битва при Мамсе",
    "description": "Зухайр выступил против Кусайлы и вернул Кайруан под мусульманскую власть. В сражении при Мамсе Кусайла погиб.",
    "periodId": "umayyad",
    "start": {
      "hijri": "69 г. х.",
      "gregorian": "ок. 688–689 гг."
    },
    "sortOrder": 2200,
    "participants": [
      {
        "personId": "zuhayrQays",
        "role": "Военачальник, вернувший Кайруан после победы над Кусайлой.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Поход Зухайра ибн Кайса и битва при Мамсе",
            "page": "212",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
          },
          {
            "title": "Кыссат аль-Ислам · Битва при Мамсе",
            "url": "https://www.islamstory.com/ar/artical/3408133/معركة-ممس-ومقتل-كسيلة-البربري"
          }
        ]
      },
      {
        "personId": "kusayla",
        "role": "Берберский предводитель, противник Укбы ибн Нафи‘ и Зухайра ибн Кайса.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Поход Зухайра ибн Кайса и битва при Мамсе",
            "page": "212",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
          },
          {
            "title": "Кыссат аль-Ислам · Битва при Мамсе",
            "url": "https://www.islamstory.com/ar/artical/3408133/معركة-ممس-ومقتل-كسيلة-البربري"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Поход Зухайра ибн Кайса и битва при Мамсе",
        "page": "212",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
      },
      {
        "title": "Кыссат аль-Ислам · Битва при Мамсе",
        "url": "https://www.islamstory.com/ar/artical/3408133/معركة-ممس-ومقتل-كسيلة-البربري"
      }
    ],
    "dateNote": "В энциклопедии хронология этого фрагмента непоследовательна. Для битвы выбрана датировка 69 г. х. по дополнительному разбору с цитатами из «Аль-Камиль»."
  },
  {
    "id": "umayyad-zuhayr-death",
    "title": "Гибель Зухайра ибн Кайса в столкновении с византийцами",
    "description": "После победы над Кусайлой Зухайр направился на восток. В Барке он вступил в бой с византийцами и погиб.",
    "periodId": "umayyad",
    "start": {
      "hijri": "ок. 69 г. х. (дата спорная)",
      "gregorian": "ок. 688–689 гг."
    },
    "sortOrder": 2210,
    "participants": [
      {
        "personId": "zuhayrQays",
        "role": "Скончался; Военачальник, вернувший Кайруан после победы над Кусайлой.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Гибель Зухайра ибн Кайса в столкновении с византийцами",
            "page": "212",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
          },
          {
            "title": "Аль-Камиль фи-т-тарих · 69 г. х.",
            "url": "https://islamweb.net/ar/library/content/126/665/"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Гибель Зухайра ибн Кайса в столкновении с византийцами",
        "page": "212",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
      },
      {
        "title": "Аль-Камиль фи-т-тарих · 69 г. х.",
        "url": "https://islamweb.net/ar/library/content/126/665/"
      }
    ],
    "dateNote": "Год смерти спорный: 69 г. х. — рабочая датировка по годовому разделу «Аль-Камиль»; энциклопедия указывает 78. Порядок после Мамса установлен по последовательности рассказа, не по точному месяцу."
  },
  {
    "id": "umayyad-byzantine-peace",
    "title": "Мир Абд аль-Малика с Византией",
    "description": "В условиях внутренних конфликтов Абд аль-Малик заключил мир с Византией, согласившись на ежегодные выплаты. Это позволило сосредоточиться на борьбе внутри государства.",
    "periodId": "umayyad",
    "start": {
      "hijri": "70 г. х.",
      "gregorian": "ок. 689–690 гг."
    },
    "sortOrder": 2220,
    "participants": [
      {
        "personId": "abdMalik",
        "role": "Омейядский халиф, восстановивший единство государства после междоусобиц.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Мир Абд аль-Малика с Византией",
            "page": "188",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=190"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Мир Абд аль-Малика с Византией",
        "page": "188",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=190"
      }
    ]
  },
  {
    "id": "umayyad-shabib",
    "title": "Восстание Шабиба ибн Язида",
    "description": "Шабиб возглавил хариджитское выступление и неоднократно сражался с войсками аль-Хаджжаджа. В борьбе участвовала его жена Газаля. После прибытия подкреплений из Шама Шабиб отступил и погиб при переправе через Дуджайль.",
    "periodId": "umayyad",
    "start": {
      "hijri": "76 г. х.",
      "gregorian": "ок. 695–696 гг."
    },
    "sortOrder": 2230,
    "participants": [
      {
        "personId": "shabib",
        "role": "Предводитель хариджитского выступления против войск аль-Хаджжаджа.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Восстание Шабиба ибн Язида",
            "page": "186",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
          },
          {
            "title": "Сияр а‘лям ан-нубаля · Шабиб",
            "url": "https://www.islamweb.org/ar/library/index.php?ID=493&bk_no=60&flag=1&page=bookcontents"
          }
        ]
      },
      {
        "personId": "ghazala",
        "role": "Участница хариджитского выступления, жена Шабиба ибн Язида.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Восстание Шабиба ибн Язида",
            "page": "186",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
          },
          {
            "title": "Сияр а‘лям ан-нубаля · Шабиб",
            "url": "https://www.islamweb.org/ar/library/index.php?ID=493&bk_no=60&flag=1&page=bookcontents"
          }
        ]
      },
      {
        "personId": "hajjaj",
        "role": "Наместник Ирака, руководивший борьбой с восстаниями и восточными походами.",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Восстание Шабиба ибн Язида",
            "page": "186",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
          },
          {
            "title": "Сияр а‘лям ан-нубаля · Шабиб",
            "url": "https://www.islamweb.org/ar/library/index.php?ID=493&bk_no=60&flag=1&page=bookcontents"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Восстание Шабиба ибн Язида",
        "page": "186",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
      },
      {
        "title": "Сияр а‘лям ан-нубаля · Шабиб",
        "url": "https://www.islamweb.org/ar/library/index.php?ID=493&bk_no=60&flag=1&page=bookcontents"
      }
    ],
    "dateNote": "В энциклопедии сведения о Шабибе смешаны с ад-Даххаком. Личность и смерть в 77 г. х. проверены по «Сияр»; начало выступления — около 76 г. х.",
    "end": {
      "hijri": "77 г. х.",
      "gregorian": "ок. 696–697 гг."
    }
  },
  {
    "id": "umayyad-hassan-maghreb",
    "title": "Походы Хассана ибн ан-Ну‘мана в Магрибе",
    "description": "Хассан продолжил завоевания Ифрикии: взял Карфаген, противостоял аль-Кахине и укрепил мусульманскую власть. Книга связывает с его деятельностью развитие Туниса как морской базы.",
    "periodId": "umayyad",
    "start": {
      "hijri": "78 г. х.",
      "gregorian": "ок. 697–698 гг."
    },
    "sortOrder": 2240,
    "participants": [
      {
        "personId": "hassanNuman",
        "role": "Военачальник в Ифрикии, противник аль-Кахины.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Походы Хассана ибн ан-Ну‘мана в Магрибе",
            "page": "212–213",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
          }
        ]
      },
      {
        "personId": "kahina",
        "role": "Берберская предводительница, противостоявшая войскам Хассана ибн ан-Ну‘мана.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Походы Хассана ибн ан-Ну‘мана в Магрибе",
            "page": "212–213",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
          }
        ]
      },
      {
        "personId": "abdMalik",
        "role": "Омейядский халиф, восстановивший единство государства после междоусобиц.",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Походы Хассана ибн ан-Ну‘мана в Магрибе",
            "page": "212–213",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Походы Хассана ибн ан-Ну‘мана в Магрибе",
        "page": "212–213",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=214"
      }
    ],
    "dateNote": "78–86 г. х. — период деятельности Хассана по основной книге; даты отдельных походов в других источниках отличаются.",
    "end": {
      "hijri": "86 г. х.",
      "gregorian": "ок. 705–706 гг."
    }
  },
  {
    "id": "umayyad-turk-campaigns",
    "title": "Походы против тюрков и Рутбиля",
    "description": "После ранних походов времени Праведных халифов наступление возобновилось при Абд аль-Малике. Войско Абдуллаха ибн Аби Бакры столкнулось с тяжёлыми условиями и сопротивлением Рутбиля; затем аль-Хаджжадж направил Ибн аль-Аш‘аса.",
    "periodId": "umayyad",
    "start": {
      "hijri": "79 г. х.",
      "gregorian": "ок. 698–699 гг."
    },
    "sortOrder": 2250,
    "participants": [
      {
        "personId": "hajjaj",
        "role": "Наместник Ирака, руководивший борьбой с восстаниями и восточными походами.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Походы против тюрков и Рутбиля",
            "page": "225–227",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=227"
          }
        ]
      },
      {
        "personId": "ibnAshath",
        "role": "Военачальник, возглавивший восстание против аль-Хаджжаджа.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Походы против тюрков и Рутбиля",
            "page": "225–227",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=227"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Походы против тюрков и Рутбиля",
        "page": "225–227",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=227"
      }
    ],
    "dateNote": "Заголовок книги «Первый поход против тюрков» относится к 22 г. х., до Омейядов. Здесь выделено описанное далее возобновление походов в 79–80 г. х.; географические названия сохранены в историческом контексте книги.",
    "end": {
      "hijri": "80 г. х.",
      "gregorian": "ок. 699–700 гг."
    }
  },
  {
    "id": "umayyad-abu-hanifa-birth",
    "title": "Рождение Абу Ханифы ан-Ну‘мана",
    "description": "Родился ан-Ну‘ман ибн Сабит, впоследствии имам Абу Ханифа — один из крупнейших факихов Куфы, с именем которого связан ханафитский мазхаб.",
    "periodId": "umayyad",
    "start": {
      "hijri": "80 г. х.",
      "gregorian": "ок. 699–700 гг."
    },
    "sortOrder": 2260,
    "participants": [
      {
        "personId": "abuHanifa",
        "role": "Родился; Будущий имам и факих Куфы",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Сияр а‘лям ан-нубаля · Абу Ханифа",
            "url": "https://www.islamweb.net/ar/library/content/60/1094/"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сияр а‘лям ан-нубаля · Абу Ханифа",
        "url": "https://www.islamweb.net/ar/library/content/60/1094/"
      }
    ]
  },
  {
    "id": "umayyad-ibn-ishaq-birth",
    "title": "Рождение Мухаммада ибн Исхака",
    "description": "Родился Мухаммад ибн Исхак — будущий собиратель преданий о жизни Пророка ﷺ и автор одного из важнейших ранних трудов по сире.",
    "periodId": "umayyad",
    "start": {
      "hijri": "80 г. х.",
      "gregorian": "ок. 699–700 гг."
    },
    "sortOrder": 2270,
    "participants": [
      {
        "personId": "ibnIshaq",
        "role": "Родился; Будущий автор труда по сире",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Сияр а‘лям ан-нубаля · Ибн Исхак",
            "url": "https://www.islamweb.net/ar/library/content/60/1116/"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сияр а‘лям ан-нубаля · Ибн Исхак",
        "url": "https://www.islamweb.net/ar/library/content/60/1116/"
      }
    ]
  },
  {
    "id": "umayyad-ibn-ashath",
    "title": "Восстание Ибн аль-Аш‘аса",
    "description": "После конфликта с аль-Хаджжаджем Абд ар-Рахман ибн Мухаммад ибн аль-Аш‘ас поднял восстание. Его поддержала часть жителей Ирака и чтецов Корана. После ряда сражений движение было разгромлено.",
    "periodId": "umayyad",
    "start": {
      "hijri": "82 г. х.",
      "gregorian": "ок. 701–702 гг."
    },
    "sortOrder": 2280,
    "participants": [
      {
        "personId": "ibnAshath",
        "role": "Военачальник, возглавивший восстание против аль-Хаджжаджа.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Восстание Ибн аль-Аш‘аса",
            "page": "186–188",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
          }
        ]
      },
      {
        "personId": "hajjaj",
        "role": "Наместник Ирака, руководивший борьбой с восстаниями и восточными походами.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Восстание Ибн аль-Аш‘аса",
            "page": "186–188",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
          }
        ]
      },
      {
        "personId": "abdMalik",
        "role": "Омейядский халиф, восстановивший единство государства после междоусобиц.",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Восстание Ибн аль-Аш‘аса",
            "page": "186–188",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Восстание Ибн аль-Аш‘аса",
        "page": "186–188",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
      }
    ],
    "dateNote": "Основные сражения книга датирует 82 г. х.; завершение движения и бегство Ибн аль-Аш‘аса относятся к последующему периоду.",
    "end": {
      "hijri": "83 г. х.",
      "gregorian": "ок. 702–703 гг."
    }
  },
  {
    "id": "umayyad-zawiya",
    "title": "Битва при аз-Завии",
    "description": "Войско аль-Хаджжаджа сразилось со сторонниками Ибн аль-Аш‘аса. После поражения Ибн аль-Аш‘ас отступил к Куфе, где его движение получило новую поддержку.",
    "periodId": "umayyad",
    "start": {
      "hijri": "82 г. х.",
      "gregorian": "ок. 701–702 гг."
    },
    "sortOrder": 2290,
    "participants": [
      {
        "personId": "ibnAshath",
        "role": "Военачальник, возглавивший восстание против аль-Хаджжаджа.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Битва при аз-Завии",
            "page": "186–187",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
          }
        ]
      },
      {
        "personId": "hajjaj",
        "role": "Наместник Ирака, руководивший борьбой с восстаниями и восточными походами.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Битва при аз-Завии",
            "page": "186–187",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Битва при аз-Завии",
        "page": "186–187",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
      }
    ],
    "dateNote": "Мухаррам 82 г. х. по книге."
  },
  {
    "id": "umayyad-dayr-jamajim",
    "title": "Битва при Дайр аль-Джамаджим",
    "description": "Продолжительное противостояние войск Ибн аль-Аш‘аса и аль-Хаджжаджа завершилось поражением восставших. Среди сторонников движения были чтецы Корана и учёные.",
    "periodId": "umayyad",
    "start": {
      "hijri": "82 г. х.",
      "gregorian": "ок. 701–702 гг."
    },
    "sortOrder": 2300,
    "participants": [
      {
        "personId": "ibnAshath",
        "role": "Военачальник, возглавивший восстание против аль-Хаджжаджа.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Битва при Дайр аль-Джамаджим",
            "page": "187–188",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=189"
          }
        ]
      },
      {
        "personId": "hajjaj",
        "role": "Наместник Ирака, руководивший борьбой с восстаниями и восточными походами.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Битва при Дайр аль-Джамаджим",
            "page": "187–188",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=189"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Битва при Дайр аль-Джамаджим",
        "page": "187–188",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=189"
      }
    ],
    "dateNote": "Начало сражения — шаабан 82 г. х. по книге; это не дата единственного дня битвы."
  },
  {
    "id": "umayyad-wasit",
    "title": "Основание Васита",
    "description": "Аль-Хаджжадж основал Васит в Ираке. Город стал опорой его управления и местом размещения войска.",
    "periodId": "umayyad",
    "start": {
      "hijri": "84 г. х.",
      "gregorian": "ок. 703–704 гг."
    },
    "sortOrder": 2310,
    "participants": [
      {
        "personId": "hajjaj",
        "role": "Наместник Ирака, руководивший борьбой с восстаниями и восточными походами.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Основание Васита",
            "page": "188",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=190"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Основание Васита",
        "page": "188",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=190"
      }
    ]
  },
  {
    "id": "umayyad-walid",
    "title": "Правление аль-Валида ибн Абд аль-Малика",
    "description": "При аль-Валиде продолжились завоевания на западе и востоке. Книга отмечает строительство мечетей и общественных учреждений, помощь нуждающимся и развитие городской инфраструктуры.",
    "periodId": "umayyad",
    "start": {
      "hijri": "86 г. х.",
      "gregorian": "ок. 705–706 гг."
    },
    "sortOrder": 2320,
    "participants": [
      {
        "personId": "walidAbdMalik",
        "role": "Омейядский халиф времени крупных завоеваний и строительства мечетей.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление аль-Валида ибн Абд аль-Малика",
            "page": "191–193",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=193"
          }
        ]
      },
      {
        "personId": "hajjaj",
        "role": "Наместник Ирака, руководивший борьбой с восстаниями и восточными походами.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление аль-Валида ибн Абд аль-Малика",
            "page": "191–193",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=193"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Правление аль-Валида ибн Абд аль-Малика",
        "page": "191–193",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=193"
      }
    ],
    "end": {
      "hijri": "96 г. х.",
      "gregorian": "ок. 714–715 гг."
    }
  },
  {
    "id": "umayyad-musa-maghreb",
    "title": "Продолжение завоеваний Магриба Мусой ибн Нусайром",
    "description": "Муса сменил Хассана ибн ан-Ну‘мана и продолжил продвижение в Магрибе. Тарик ибн Зияд действовал в авангарде и был поставлен во главе Танжера. В регионе оставались учителя Корана и религиозных установлений.",
    "periodId": "umayyad",
    "start": {
      "hijri": "86 г. х.",
      "gregorian": "ок. 705–706 гг."
    },
    "sortOrder": 2330,
    "participants": [
      {
        "personId": "musaNusayr",
        "role": "Наместник Магриба и организатор походов в Андалусию.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Продолжение завоеваний Магриба Мусой ибн Нусайром",
            "page": "213–214",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=215"
          }
        ]
      },
      {
        "personId": "tariqZiyad",
        "role": "Командовал войском, переправившимся в Андалусию.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Продолжение завоеваний Магриба Мусой ибн Нусайром",
            "page": "213–214",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=215"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Продолжение завоеваний Магриба Мусой ибн Нусайром",
        "page": "213–214",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=215"
      }
    ],
    "dateNote": "Начало — назначение Мусы в 86 г. х.; к разведке Андалусии в 91 г. х. сложились условия для следующего этапа.",
    "end": {
      "hijri": "91 г. х.",
      "gregorian": "ок. 709–710 гг."
    }
  },
  {
    "id": "umayyad-bukhara",
    "title": "Завоевание Бухары",
    "description": "Кутайба ибн Муслим взял Бухару после нескольких походов и сопротивления местных сил. Эти действия стали частью продвижения мусульманского войска в Мавераннахре.",
    "periodId": "umayyad",
    "start": {
      "hijri": "90 г. х.",
      "gregorian": "ок. 708–709 гг."
    },
    "sortOrder": 2340,
    "participants": [
      {
        "personId": "qutayba",
        "role": "Военачальник, руководивший походами в Мавераннахре.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Завоевание Бухары",
            "page": "228–229",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=230"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Завоевание Бухары",
        "page": "228–229",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=230"
      }
    ]
  },
  {
    "id": "umayyad-tarif",
    "title": "Разведывательный поход Тарифа ибн Малика в Андалусию",
    "description": "Муса ибн Нусайр получил предложение о походе в Андалусию и обратился к аль-Валиду. Халиф потребовал сначала проверить обстановку небольшими отрядами. В рамадане Тариф ибн Малик переправился через пролив с разведывательным отрядом.",
    "periodId": "umayyad",
    "start": {
      "hijri": "91 г. х.",
      "gregorian": "ок. 709–710 гг."
    },
    "sortOrder": 2350,
    "participants": [
      {
        "personId": "tarifMalik",
        "role": "Возглавил разведывательный поход в Андалусию.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Разведывательный поход Тарифа ибн Малика в Андалусию",
            "page": "214–215",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=216"
          }
        ]
      },
      {
        "personId": "musaNusayr",
        "role": "Наместник Магриба и организатор походов в Андалусию.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Разведывательный поход Тарифа ибн Малика в Андалусию",
            "page": "214–215",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=216"
          }
        ]
      },
      {
        "personId": "walidAbdMalik",
        "role": "Омейядский халиф времени крупных завоеваний и строительства мечетей.",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Разведывательный поход Тарифа ибн Малика в Андалусию",
            "page": "214–215",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=216"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Разведывательный поход Тарифа ибн Малика в Андалусию",
        "page": "214–215",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=216"
      }
    ],
    "dateNote": "Рамадан 91 г. х. по книге."
  },
  {
    "id": "umayyad-wadi-lakka",
    "title": "Битва при Вади-Лакка",
    "description": "Тарик ибн Зияд переправился в Андалусию и столкнулся с войском Родериха. Победа открыла путь к дальнейшему завоеванию страны. Предыстория включает внутренние конфликты Вестготского королевства и положение его населения.",
    "periodId": "umayyad",
    "start": {
      "hijri": "92 г. х.",
      "gregorian": "ок. 710–711 гг."
    },
    "sortOrder": 2360,
    "participants": [
      {
        "personId": "tariqZiyad",
        "role": "Командовал войском, переправившимся в Андалусию.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Битва при Вади-Лакка",
            "page": "215–220",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=217"
          }
        ]
      },
      {
        "personId": "roderic",
        "role": "Вестготский король, противник Тарика в битве при Вади-Лакка.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Битва при Вади-Лакка",
            "page": "215–220",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=217"
          }
        ]
      },
      {
        "personId": "musaNusayr",
        "role": "Наместник Магриба и организатор походов в Андалусию.",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Битва при Вади-Лакка",
            "page": "215–220",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=217"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Битва при Вади-Лакка",
        "page": "215–220",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=217"
      }
    ]
  },
  {
    "id": "umayyad-india",
    "title": "Первые попытки завоевания Индии",
    "description": "Мухаммад ибн аль-Касим, направленный аль-Хаджжаджем, взял Дайбул и продолжил поход в Синде. В сражении погиб правитель Дахир. После победы войско продвинулось к другим городам региона.",
    "periodId": "umayyad",
    "start": {
      "hijri": "93 г. х.",
      "gregorian": "ок. 711–712 гг."
    },
    "sortOrder": 2370,
    "participants": [
      {
        "personId": "muhammadQasim",
        "role": "Руководил походом в Синд при аль-Хаджжадже.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Первые попытки завоевания Индии",
            "page": "232–233",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=234"
          }
        ]
      },
      {
        "personId": "hajjaj",
        "role": "Наместник Ирака, руководивший борьбой с восстаниями и восточными походами.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Первые попытки завоевания Индии",
            "page": "232–233",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=234"
          }
        ]
      },
      {
        "personId": "dahir",
        "role": "Правитель Синда, погибший в борьбе с войском Мухаммада ибн аль-Касима.",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Первые попытки завоевания Индии",
            "page": "232–233",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=234"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Первые попытки завоевания Индии",
        "page": "232–233",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=234"
      }
    ],
    "dateNote": "93 г. х. — датировка рассказа в основной книге. Историческое название «Индия» здесь относится прежде всего к Синду, а не к завоеванию всего субконтинента."
  },
  {
    "id": "umayyad-samarkand",
    "title": "Завоевание Самарканда",
    "description": "Кутайба ибн Муслим взял Самарканд. В городе была устроена мечеть; завоевание стало важным этапом закрепления мусульманской власти в Мавераннахре.",
    "periodId": "umayyad",
    "start": {
      "hijri": "93 г. х.",
      "gregorian": "ок. 711–712 гг."
    },
    "sortOrder": 2380,
    "participants": [
      {
        "personId": "qutayba",
        "role": "Военачальник, руководивший походами в Мавераннахре.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Завоевание Самарканда",
            "page": "229",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=231"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Завоевание Самарканда",
        "page": "229",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=231"
      }
    ]
  },
  {
    "id": "umayyad-malik-birth",
    "title": "Рождение Малика ибн Анаса",
    "description": "Родился Малик ибн Анас — будущий имам Медины, автор «Аль-Муватта» и учёный, с именем которого связан маликитский мазхаб.",
    "periodId": "umayyad",
    "start": {
      "hijri": "93 г. х.",
      "gregorian": "ок. 711–712 гг."
    },
    "sortOrder": 2390,
    "participants": [
      {
        "personId": "malik",
        "role": "Родился; Будущий имам Медины",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Сияр а‘лям ан-нубаля · Малик, рождение и происхождение",
            "url": "https://islamweb.net/ar/library/index.php?ID=1293&bk_no=60&flag=1&page=bookcontents"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сияр а‘лям ан-нубаля · Малик, рождение и происхождение",
        "url": "https://islamweb.net/ar/library/index.php?ID=1293&bk_no=60&flag=1&page=bookcontents"
      }
    ]
  },
  {
    "id": "umayyad-said-death",
    "title": "Гибель Саида ибн Джубайра",
    "description": "По приказу аль-Хаджжаджа был казнён Саид ибн Джубайр — ученик Ибн Аббаса, знаток тафсира, хадисов и чтения Корана.",
    "periodId": "umayyad",
    "start": {
      "hijri": "95 г. х.",
      "gregorian": "ок. 713–714 гг."
    },
    "sortOrder": 2400,
    "participants": [
      {
        "personId": "saidIbnJubayr",
        "role": "Скончался; Учёный, казнённый аль-Хаджжаджем",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Сияр а‘лям ан-нубаля · Саид ибн Джубайр",
            "url": "https://islamweb.net/ar/library/content/60/568/"
          }
        ]
      },
      {
        "personId": "hajjaj",
        "role": "Распорядился о казни Саида ибн Джубайра",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Сияр а‘лям ан-нубаля · Саид ибн Джубайр",
            "url": "https://islamweb.net/ar/library/content/60/568/"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сияр а‘лям ан-нубаля · Саид ибн Джубайр",
        "url": "https://islamweb.net/ar/library/content/60/568/"
      }
    ],
    "dateNote": "Шаабан 95 г. х. по «Сияр»."
  },
  {
    "id": "umayyad-mosque",
    "title": "Завершение строительства Омейядской мечети в Дамаске",
    "description": "При аль-Валиде было завершено строительство соборной мечети Дамаска. Она стала одним из крупнейших архитектурных сооружений Омейядского государства.",
    "periodId": "umayyad",
    "start": {
      "hijri": "96 г. х.",
      "gregorian": "ок. 714–715 гг."
    },
    "sortOrder": 2410,
    "participants": [
      {
        "personId": "walidAbdMalik",
        "role": "Омейядский халиф времени крупных завоеваний и строительства мечетей.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Завершение строительства Омейядской мечети в Дамаске",
            "page": "191–193",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=193"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Завершение строительства Омейядской мечети в Дамаске",
        "page": "191–193",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=193"
      }
    ]
  },
  {
    "id": "umayyad-sulayman",
    "title": "Правление Сулеймана ибн Абд аль-Малика",
    "description": "Сулейман унаследовал власть после брата аль-Валида. Его правление сопровождалось сменой наместников и новым походом на Константинополь. Перед смертью он назначил преемником Умара ибн Абд аль-Азиза.",
    "periodId": "umayyad",
    "start": {
      "hijri": "96 г. х.",
      "gregorian": "ок. 714–715 гг."
    },
    "sortOrder": 2420,
    "participants": [
      {
        "personId": "sulaymanAbdMalik",
        "role": "Омейядский халиф, назначивший преемником Умара ибн Абд аль-Азиза.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление Сулеймана ибн Абд аль-Малика",
            "page": "193–196",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=195"
          }
        ]
      },
      {
        "personId": "umarAbdAziz",
        "role": "Омейядский халиф, известный стремлением к справедливости и возвращению неправомерно присвоенного имущества.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление Сулеймана ибн Абд аль-Малика",
            "page": "193–196",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=195"
          }
        ]
      },
      {
        "personId": "maslamaAbdMalik",
        "role": "Военачальник, возглавлявший осаду Константинополя и борьбу с Ибн аль-Мухаллабом.",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление Сулеймана ибн Абд аль-Малика",
            "page": "193–196",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=195"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Правление Сулеймана ибн Абд аль-Малика",
        "page": "193–196",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=195"
      }
    ],
    "end": {
      "hijri": "99 г. х.",
      "gregorian": "ок. 717–718 гг."
    }
  },
  {
    "id": "umayyad-china",
    "title": "Походы в земли Китая",
    "description": "Кутайба продвинулся к Кашгару. Далее книга рассказывает об обмене посольствами с правителем Китая. Поход к пограничным областям и дипломатические контакты не означали завоевания Китая.",
    "periodId": "umayyad",
    "start": {
      "hijri": "96 г. х.",
      "gregorian": "ок. 714–715 гг."
    },
    "sortOrder": 2430,
    "participants": [
      {
        "personId": "qutayba",
        "role": "Военачальник, руководивший походами в Мавераннахре.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Походы в земли Китая",
            "page": "229–232",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=231"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Походы в земли Китая",
        "page": "229–232",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=231"
      }
    ],
    "dateNote": "96 г. х. по книге. Географические обозначения передают терминологию источника."
  },
  {
    "id": "umayyad-constantinople-second",
    "title": "Вторая попытка завоевания Константинополя",
    "description": "Сулейман направил войско под командованием Маслямы ибн Абд аль-Малика к Константинополю. Осада сопровождалась тяжёлыми лишениями и не привела к взятию города. После смены халифа войску было приказано вернуться.",
    "periodId": "umayyad",
    "start": {
      "hijri": "98 г. х.",
      "gregorian": "ок. 716–717 гг."
    },
    "sortOrder": 2440,
    "participants": [
      {
        "personId": "sulaymanAbdMalik",
        "role": "Омейядский халиф, назначивший преемником Умара ибн Абд аль-Азиза.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Вторая попытка завоевания Константинополя",
            "page": "194",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=196"
          }
        ]
      },
      {
        "personId": "maslamaAbdMalik",
        "role": "Военачальник, возглавлявший осаду Константинополя и борьбу с Ибн аль-Мухаллабом.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Вторая попытка завоевания Константинополя",
            "page": "194",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=196"
          }
        ]
      },
      {
        "personId": "umarAbdAziz",
        "role": "Омейядский халиф, известный стремлением к справедливости и возвращению неправомерно присвоенного имущества.",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Вторая попытка завоевания Константинополя",
            "page": "194",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=196"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Вторая попытка завоевания Константинополя",
        "page": "194",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=196"
      }
    ],
    "dateNote": "98–99 г. х. — период в основной книге; в других хронологиях окончание осады относят к 100 г. х.",
    "end": {
      "hijri": "99 г. х.",
      "gregorian": "ок. 717–718 гг."
    }
  },
  {
    "id": "umayyad-umar-appointed",
    "title": "Назначение Умара ибн Абд аль-Азиза преемником Сулеймана",
    "description": "По совету Раджи ибн Хайвы Сулейман составил распоряжение о передаче власти Умару ибн Абд аль-Азизу. После смерти Сулеймана документ был оглашён и Умару принесли присягу.",
    "periodId": "umayyad",
    "start": {
      "hijri": "99 г. х.",
      "gregorian": "ок. 717–718 гг."
    },
    "sortOrder": 2450,
    "participants": [
      {
        "personId": "sulaymanAbdMalik",
        "role": "Омейядский халиф, назначивший преемником Умара ибн Абд аль-Азиза.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Назначение Умара ибн Абд аль-Азиза преемником Сулеймана",
            "page": "195–196",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=197"
          }
        ]
      },
      {
        "personId": "umarAbdAziz",
        "role": "Омейядский халиф, известный стремлением к справедливости и возвращению неправомерно присвоенного имущества.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Назначение Умара ибн Абд аль-Азиза преемником Сулеймана",
            "page": "195–196",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=197"
          }
        ]
      },
      {
        "personId": "rajaHaywa",
        "role": "Учёный и советник Сулеймана, участвовавший в выборе Умара ибн Абд аль-Азиза преемником.",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Назначение Умара ибн Абд аль-Азиза преемником Сулеймана",
            "page": "195–196",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=197"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Назначение Умара ибн Абд аль-Азиза преемником Сулеймана",
        "page": "195–196",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=197"
      }
    ]
  },
  {
    "id": "umayyad-umar",
    "title": "Правление Умара ибн Абд аль-Азиза",
    "description": "Умар стремился вернуть неправомерно присвоенное имущество, ограничить личное использование казны и улучшить положение подданных. Книга описывает его внимание к справедливости, нуждающимся и содержанию людей, занятых общественными делами.",
    "periodId": "umayyad",
    "start": {
      "hijri": "99 г. х.",
      "gregorian": "ок. 717–718 гг."
    },
    "sortOrder": 2460,
    "participants": [
      {
        "personId": "umarAbdAziz",
        "role": "Омейядский халиф, известный стремлением к справедливости и возвращению неправомерно присвоенного имущества.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление Умара ибн Абд аль-Азиза",
            "page": "196–201",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=198"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Правление Умара ибн Абд аль-Азиза",
        "page": "196–201",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=198"
      }
    ],
    "end": {
      "hijri": "101 г. х.",
      "gregorian": "ок. 719–720 гг."
    }
  },
  {
    "id": "umayyad-yazid-second",
    "title": "Правление Язида ибн Абд аль-Малика",
    "description": "Язид занял престол после Умара ибн Абд аль-Азиза. Крупным внутренним конфликтом его правления стало восстание Язида ибн аль-Мухаллаба, подавленное войском Маслямы.",
    "periodId": "umayyad",
    "start": {
      "hijri": "101 г. х.",
      "gregorian": "ок. 719–720 гг."
    },
    "sortOrder": 2470,
    "participants": [
      {
        "personId": "yazidAbdMalik",
        "role": "Омейядский халиф после Умара ибн Абд аль-Азиза.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление Язида ибн Абд аль-Малика",
            "page": "201–203",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=203"
          }
        ]
      },
      {
        "personId": "yazidMuhallab",
        "role": "Военачальник и наместник, возглавивший выступление в Ираке.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление Язида ибн Абд аль-Малика",
            "page": "201–203",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=203"
          }
        ]
      },
      {
        "personId": "maslamaAbdMalik",
        "role": "Военачальник, возглавлявший осаду Константинополя и борьбу с Ибн аль-Мухаллабом.",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление Язида ибн Абд аль-Малика",
            "page": "201–203",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=203"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Правление Язида ибн Абд аль-Малика",
        "page": "201–203",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=203"
      }
    ],
    "end": {
      "hijri": "105 г. х.",
      "gregorian": "ок. 723–724 гг."
    }
  },
  {
    "id": "umayyad-muhallab",
    "title": "Восстание Язида ибн аль-Мухаллаба",
    "description": "Язид ибн аль-Мухаллаб вышел из заключения и поднял выступление в Ираке. Аль-Хасан аль-Басри предостерегал жителей от участия в междоусобной борьбе. Войско Маслямы разгромило восставших; Ибн аль-Мухаллаб погиб.",
    "periodId": "umayyad",
    "start": {
      "hijri": "101 г. х.",
      "gregorian": "ок. 719–720 гг."
    },
    "sortOrder": 2480,
    "participants": [
      {
        "personId": "yazidMuhallab",
        "role": "Военачальник и наместник, возглавивший выступление в Ираке.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Восстание Язида ибн аль-Мухаллаба",
            "page": "202–203",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=204"
          }
        ]
      },
      {
        "personId": "maslamaAbdMalik",
        "role": "Военачальник, возглавлявший осаду Константинополя и борьбу с Ибн аль-Мухаллабом.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Восстание Язида ибн аль-Мухаллаба",
            "page": "202–203",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=204"
          }
        ]
      },
      {
        "personId": "hasanBasri",
        "role": "Учёный поколения табиинов, передатчик хадисов и наставник в Басре.",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Восстание Язида ибн аль-Мухаллаба",
            "page": "202–203",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=204"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Восстание Язида ибн аль-Мухаллаба",
        "page": "202–203",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=204"
      }
    ],
    "dateNote": "Заголовок основной книги относит начало к 101 г. х.; поражение движения — к следующему году.",
    "end": {
      "hijri": "102 г. х.",
      "gregorian": "ок. 720–721 гг."
    }
  },
  {
    "id": "umayyad-mujahid-death",
    "title": "Смерть Муджахида ибн Джабра",
    "description": "Скончался Муджахид ибн Джабр — ученик Ибн Аббаса и один из крупнейших ранних толкователей Корана.",
    "periodId": "umayyad",
    "start": {
      "hijri": "104 г. х. (одна из датировок)",
      "gregorian": "ок. 722–723 гг."
    },
    "sortOrder": 2490,
    "participants": [
      {
        "personId": "mujahid",
        "role": "Скончался; Ученик Ибн Аббаса, толкователь Корана",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Сияр а‘лям ан-нубаля · Муджахид",
            "url": "https://www.islamweb.net/amp/ar/library/content/60/625/"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сияр а‘лям ан-нубаля · Муджахид",
        "url": "https://www.islamweb.net/amp/ar/library/content/60/625/"
      }
    ],
    "dateNote": "104 г. х. — выбранная версия; в «Сияр» приведены также 102, 103 и другие годы."
  },
  {
    "id": "umayyad-hisham",
    "title": "Правление Хишама ибн Абд аль-Малика",
    "description": "Хишам возглавлял государство около двадцати лет. Книга отмечает упорядочение государственного делопроизводства; на границах продолжались походы и войны.",
    "periodId": "umayyad",
    "start": {
      "hijri": "105 г. х.",
      "gregorian": "ок. 723–724 гг."
    },
    "sortOrder": 2500,
    "participants": [
      {
        "personId": "hishamAbdMalik",
        "role": "Омейядский халиф, правивший около двадцати лет.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление Хишама ибн Абд аль-Малика",
            "page": "203",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=205"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Правление Хишама ибн Абд аль-Малика",
        "page": "203",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=205"
      }
    ],
    "end": {
      "hijri": "125 г. х.",
      "gregorian": "ок. 742–743 гг."
    }
  },
  {
    "id": "umayyad-hasan-death",
    "title": "Смерть аль-Хасана аль-Басри",
    "description": "В Басре скончался аль-Хасан аль-Басри — учёный поколения табиинов, передатчик хадисов и известный наставник.",
    "periodId": "umayyad",
    "start": {
      "hijri": "110 г. х.",
      "gregorian": "ок. 728–729 гг."
    },
    "sortOrder": 2510,
    "participants": [
      {
        "personId": "hasanBasri",
        "role": "Скончался; Учёный поколения табиинов, передатчик хадисов и наставник в Басре.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Сияр а‘лям ан-нубаля · Аль-Хасан аль-Басри",
            "url": "https://www.islamweb.net/ar/library/content/60/674/"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сияр а‘лям ан-нубаля · Аль-Хасан аль-Басри",
        "url": "https://www.islamweb.net/ar/library/content/60/674/"
      }
    ],
    "dateNote": "Раджаб 110 г. х. по «Сияр»."
  },
  {
    "id": "umayyad-sirin-death",
    "title": "Смерть Мухаммада ибн Сирина",
    "description": "В Басре скончался Мухаммад ибн Сирин — учёный поколения табиинов и передатчик хадисов.",
    "periodId": "umayyad",
    "start": {
      "hijri": "110 г. х.",
      "gregorian": "ок. 728–729 гг."
    },
    "sortOrder": 2520,
    "participants": [
      {
        "personId": "ibnSirin",
        "role": "Скончался; Учёный поколения табиинов и передатчик хадисов в Басре.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Сияр а‘лям ан-нубаля · Смерть аль-Хасана и Ибн Сирина",
            "url": "https://www.islamweb.net/ar/library/content/60/674/"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сияр а‘лям ан-нубаля · Смерть аль-Хасана и Ибн Сирина",
        "url": "https://www.islamweb.net/ar/library/content/60/674/"
      }
    ],
    "dateNote": "110 г. х.; по «Сияр», пережил аль-Хасана аль-Басри на сто дней."
  },
  {
    "id": "umayyad-abu-yusuf-birth",
    "title": "Рождение Абу Юсуфа Якуба ибн Ибрахима",
    "description": "Родился Якуб ибн Ибрахим — будущий ученик Абу Ханифы, крупный ханафитский факих и верховный судья при Аббасидах.",
    "periodId": "umayyad",
    "start": {
      "hijri": "113 г. х.",
      "gregorian": "ок. 731–732 гг."
    },
    "sortOrder": 2530,
    "participants": [
      {
        "personId": "abuYusuf",
        "role": "Родился; Будущий факих и судья",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Сияр а‘лям ан-нубаля · Кади Абу Юсуф",
            "url": "https://islamweb.net/ar/library/content/60/1441/"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сияр а‘лям ан-нубаля · Кади Абу Юсуф",
        "url": "https://islamweb.net/ar/library/content/60/1441/"
      }
    ]
  },
  {
    "id": "umayyad-poitiers",
    "title": "Битва при Балат аш-Шухада",
    "description": "Войско Абд ар-Рахмана аль-Гафики встретилось с франками под командованием Карла Мартелла. Аль-Гафики погиб; мусульманское войско отступило. Сражение известно также как битва при Пуатье или Туре.",
    "periodId": "umayyad",
    "start": {
      "hijri": "114 г. х.",
      "gregorian": "ок. 732–733 гг."
    },
    "sortOrder": 2540,
    "participants": [
      {
        "personId": "ghafiqi",
        "role": "Командовал мусульманским войском при Балат аш-Шухада.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Битва при Балат аш-Шухада",
            "page": "220–224",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=222"
          }
        ]
      },
      {
        "personId": "charlesMartel",
        "role": "Франкский военачальник, противник аль-Гафики при Балат аш-Шухада.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Битва при Балат аш-Шухада",
            "page": "220–224",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=222"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Битва при Балат аш-Шухада",
        "page": "220–224",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=222"
      }
    ]
  },
  {
    "id": "umayyad-hisham-death",
    "title": "Смерть Хишама ибн Абд аль-Малика",
    "description": "Смерть Хишама завершила его длительное правление. Власть перешла к аль-Валиду ибн Язиду.",
    "periodId": "umayyad",
    "start": {
      "hijri": "125 г. х.",
      "gregorian": "ок. 742–743 гг."
    },
    "sortOrder": 2550,
    "participants": [
      {
        "personId": "hishamAbdMalik",
        "role": "Скончался; Омейядский халиф, правивший около двадцати лет.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Смерть Хишама ибн Абд аль-Малика",
            "page": "203",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=205"
          }
        ]
      },
      {
        "personId": "walidYazid",
        "role": "Омейядский халиф, свергнутый сторонниками Язида ибн аль-Валида.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Смерть Хишама ибн Абд аль-Малика",
            "page": "203",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=205"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Смерть Хишама ибн Абд аль-Малика",
        "page": "203",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=205"
      }
    ],
    "dateNote": "Раби‘ аль-ахир 125 г. х. по книге."
  },
  {
    "id": "umayyad-walid-second",
    "title": "Правление аль-Валида ибн Язида ибн Абд аль-Малика",
    "description": "При аль-Валиде усилились конфликты внутри Омейядского дома. Выступление его двоюродного брата Язида ибн аль-Валида завершилось гибелью халифа и очередной сменой власти.",
    "periodId": "umayyad",
    "start": {
      "hijri": "125 г. х.",
      "gregorian": "ок. 742–743 гг."
    },
    "sortOrder": 2560,
    "participants": [
      {
        "personId": "walidYazid",
        "role": "Омейядский халиф, свергнутый сторонниками Язида ибн аль-Валида.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление аль-Валида ибн Язида ибн Абд аль-Малика",
            "page": "204",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=206"
          }
        ]
      },
      {
        "personId": "yazidWalid",
        "role": "Омейядский халиф, известный как ан-Накис.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление аль-Валида ибн Язида ибн Абд аль-Малика",
            "page": "204",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=206"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Правление аль-Валида ибн Язида ибн Абд аль-Малика",
        "page": "204",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=206"
      }
    ],
    "end": {
      "hijri": "126 г. х.",
      "gregorian": "ок. 743–744 гг."
    }
  },
  {
    "id": "umayyad-yazid-third",
    "title": "Правление Язида ибн аль-Валида — ан-Накиса",
    "description": "Язид пришёл к власти после свержения аль-Валида. Его короткое правление проходило в условиях внутренних конфликтов и завершилось смертью во время эпидемии.",
    "periodId": "umayyad",
    "start": {
      "hijri": "126 г. х.",
      "gregorian": "ок. 743–744 гг."
    },
    "sortOrder": 2570,
    "participants": [
      {
        "personId": "yazidWalid",
        "role": "Омейядский халиф, известный как ан-Накис.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление Язида ибн аль-Валида — ан-Накиса",
            "page": "204–205",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=206"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Правление Язида ибн аль-Валида — ан-Накиса",
        "page": "204–205",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=206"
      }
    ],
    "dateNote": "Джумада аль-ахира — зу-ль-хиджжа 126 г. х. по основной книге."
  },
  {
    "id": "umayyad-marwan-second",
    "title": "Правление Марвана ибн Мухаммада",
    "description": "Марван стал последним омейядским халифом в Дамаске. Его правление сопровождалось восстаниями и борьбой с Аббасидами, завершившейся падением Омейядского халифата на востоке. Перед ним кратко правил Ибрахим ибн аль-Валид.",
    "periodId": "umayyad",
    "start": {
      "hijri": "127 г. х.",
      "gregorian": "ок. 744–745 гг."
    },
    "sortOrder": 2580,
    "participants": [
      {
        "personId": "marwanMuhammad",
        "role": "Последний омейядский халиф в Дамаске.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Правление Марвана ибн Мухаммада",
            "page": "205",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=207"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Правление Марвана ибн Мухаммада",
        "page": "205",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=207"
      }
    ],
    "dateNote": "Начало 127 г. х. принято по основной книге; в других источниках встречается конец 126 г. х.",
    "end": {
      "hijri": "132 г. х.",
      "gregorian": "ок. 749–750 гг."
    }
  },
  {
    "id": "umayyad-dahhak",
    "title": "Восстание ад-Даххака ибн Кайса аш-Шайбани",
    "description": "Ад-Даххак возглавил хариджитов, занял Куфу и распространил власть на другие области. Марван ибн Мухаммад выступил против него; ад-Даххак погиб в сражении.",
    "periodId": "umayyad",
    "start": {
      "hijri": "127 г. х.",
      "gregorian": "ок. 744–745 гг."
    },
    "sortOrder": 2590,
    "participants": [
      {
        "personId": "dahhakShaybani",
        "role": "Предводитель хариджитов в последние годы Омейядского халифата.",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Восстание ад-Даххака ибн Кайса аш-Шайбани",
            "page": "186",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
          },
          {
            "title": "Islamweb · Выступление ад-Даххака, 127 г. х.",
            "url": "https://islamweb.net/ar/library/content/200/18699/"
          },
          {
            "title": "Islamweb · Гибель ад-Даххака, 128 г. х.",
            "url": "https://islamweb.net/ar/library/content/200/18706/"
          }
        ]
      },
      {
        "personId": "marwanMuhammad",
        "role": "Последний омейядский халиф в Дамаске.",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
            "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
            "volume": "1",
            "chapter": "Восстание ад-Даххака ибн Кайса аш-Шайбани",
            "page": "186",
            "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
          },
          {
            "title": "Islamweb · Выступление ад-Даххака, 127 г. х.",
            "url": "https://islamweb.net/ar/library/content/200/18699/"
          },
          {
            "title": "Islamweb · Гибель ад-Даххака, 128 г. х.",
            "url": "https://islamweb.net/ar/library/content/200/18706/"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями",
        "author": "Коллектив исследований и исламских наук; предисловие Рагиба ас-Сирджани",
        "volume": "1",
        "chapter": "Восстание ад-Даххака ибн Кайса аш-Шайбани",
        "page": "186",
        "url": "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf#page=188"
      },
      {
        "title": "Islamweb · Выступление ад-Даххака, 127 г. х.",
        "url": "https://islamweb.net/ar/library/content/200/18699/"
      },
      {
        "title": "Islamweb · Гибель ад-Даххака, 128 г. х.",
        "url": "https://islamweb.net/ar/library/content/200/18706/"
      }
    ],
    "dateNote": "Это отдельный деятель, не Шабиб ибн Язид. Даты уточнены по годовым разделам Islamweb: выступление в 127, гибель в 128 г. х.; указана также версия 129 г. х.",
    "end": {
      "hijri": "128 г. х.",
      "gregorian": "ок. 745–746 гг."
    }
  }
];

export const boundaryScholarEvents: HistoricalEvent[] = [
  {
    "id": "boundary-shaybani-birth",
    "title": "Рождение Мухаммада ибн аль-Хасана аш-Шайбани",
    "description": "Родился будущий ханафитский факих, ученик Абу Ханифы и Абу Юсуфа. В «Сияр» указан 132 г. х., в справке Шамили — 131 г. х.",
    "periodId": "early-schools",
    "start": {
      "hijri": "131–132 г. х.",
      "gregorian": "ок. 749–750 гг."
    },
    "sortOrder": 3000,
    "dateNote": "Граница эпох: месяц рождения не установлен. Карточка размещена в начале раздела ранних Аббасидов для единственного места в ленте; это не утверждение о рождении после смены династии.",
    "participants": [
      {
        "personId": "shaybani",
        "role": "Родился",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Сияр · Мухаммад ибн аль-Хасан",
            "url": "https://www.islamweb.net/ar/library/content/60/1487/"
          },
          {
            "title": "Шамиля · Аш-Шайбани",
            "url": "https://shamela.ws/author/277"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сияр · Мухаммад ибн аль-Хасан",
        "url": "https://www.islamweb.net/ar/library/content/60/1487/"
      },
      {
        "title": "Шамиля · Аш-Шайбани",
        "url": "https://shamela.ws/author/277"
      }
    ]
  },
  {
    "id": "boundary-ibn-qasim-birth",
    "title": "Рождение Абдуррахмана ибн аль-Касима",
    "description": "Родился будущий египетский факих, ученик имама Малика и передатчик его учения. Справка Шамили указывает 132 г. х.",
    "periodId": "early-schools",
    "start": {
      "hijri": "132 г. х.",
      "gregorian": "ок. 750 г."
    },
    "sortOrder": 3010,
    "dateNote": "Граница эпох: месяц рождения не установлен. Карточка размещена в начале раздела ранних Аббасидов для единственного места в ленте; это не утверждение о рождении после смены династии.",
    "participants": [
      {
        "personId": "ibnQasim",
        "role": "Родился",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Шамиля · Ибн аль-Касим",
            "url": "https://shamela.ws/author/2545"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Шамиля · Ибн аль-Касим",
        "url": "https://shamela.ws/author/2545"
      }
    ]
  }
];
