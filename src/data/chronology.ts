import type { Person, HistoricalPeriod, PersonCategory } from "@/types/chronology";

// Статичные данные. Даты до хиджры и спорные датировки отмечены отдельно.
// Григорианские годы служат вторичным ориентиром, не точной конвертацией года хиджры.
export const categoryLabels: Record<PersonCategory, string> = {
  "muhaddith": "Мухаддис",
  "hanafi": "Ханафитский мазхаб",
  "maliki": "Маликитский мазхаб",
  "shafii": "Шафиитский мазхаб",
  "hanbali": "Ханбалитский мазхаб",
  "historian": "Историк"
};

export const people: Record<string, Person> = {
  "muhammad": {
    "id": "muhammad",
    "name": "Мухаммад — Посланник Аллаха",
    "honorific": "Да благословит его Аллах и приветствует",
    "birth": {
      "hijri": "ок. 53 до х.",
      "gregorian": "ок. 570 г."
    },
    "death": {
      "hijri": "11 г. х.",
      "gregorian": "632 г."
    },
    "cities": [
      "Мекка",
      "Медина"
    ]
  },
  "abuBakr": {
    "id": "abuBakr",
    "name": "Абу Бакр ас-Сиддик",
    "honorific": "Да будет доволен им Аллах",
    "birth": {
      "hijri": "ок. 50 до х.",
      "gregorian": "ок. 573 г."
    },
    "death": {
      "hijri": "13 г. х.",
      "gregorian": "634 г."
    },
    "cities": [
      "Мекка",
      "Медина"
    ]
  },
  "umar": {
    "id": "umar",
    "name": "Умар ибн аль-Хаттаб",
    "honorific": "Да будет доволен им Аллах",
    "birth": {
      "hijri": "ок. 40 до х.",
      "gregorian": "ок. 584 г."
    },
    "death": {
      "hijri": "23 г. х.",
      "gregorian": "644 г."
    },
    "cities": [
      "Мекка",
      "Медина"
    ]
  },
  "uthman": {
    "id": "uthman",
    "name": "Усман ибн Аффан",
    "honorific": "Да будет доволен им Аллах",
    "birth": {
      "hijri": "ок. 47 до х.",
      "gregorian": "ок. 576 г."
    },
    "death": {
      "hijri": "35 г. х.",
      "gregorian": "656 г."
    },
    "cities": [
      "Мекка",
      "Медина"
    ]
  },
  "ali": {
    "id": "ali",
    "name": "Али ибн Абу Талиб",
    "honorific": "Да будет доволен им Аллах",
    "birth": {
      "hijri": "ок. 23 до х.",
      "gregorian": "ок. 600 г."
    },
    "death": {
      "hijri": "40 г. х.",
      "gregorian": "661 г."
    },
    "cities": [
      "Мекка",
      "Медина",
      "Куфа"
    ]
  },
  "talha": {
    "id": "talha",
    "name": "Тальха ибн Убайдуллах",
    "honorific": "Да будет доволен им Аллах",
    "birth": {
      "hijri": "ок. 28 до х.",
      "gregorian": "ок. 595 г."
    },
    "death": {
      "hijri": "36 г. х.",
      "gregorian": "656 г."
    },
    "cities": [
      "Медина"
    ]
  },
  "zubayr": {
    "id": "zubayr",
    "name": "Аз-Зубайр ибн аль-Аввам",
    "honorific": "Да будет доволен им Аллах",
    "birth": {
      "hijri": "ок. 28 до х.",
      "gregorian": "ок. 594 г."
    },
    "death": {
      "hijri": "36 г. х.",
      "gregorian": "656 г."
    },
    "cities": [
      "Медина"
    ]
  },
  "abdurrahman": {
    "id": "abdurrahman",
    "name": "Абдуррахман ибн Ауф",
    "honorific": "Да будет доволен им Аллах",
    "birth": {
      "hijri": "ок. 43 до х.",
      "gregorian": "ок. 580 г."
    },
    "death": {
      "hijri": "32 г. х.",
      "gregorian": "ок. 652 г."
    },
    "cities": [
      "Медина"
    ]
  },
  "saad": {
    "id": "saad",
    "name": "Саад ибн Абу Ваккас",
    "honorific": "Да будет доволен им Аллах",
    "birth": {
      "hijri": "ок. 23 до х.",
      "gregorian": "ок. 600 г."
    },
    "death": {
      "hijri": "55 г. х.",
      "gregorian": "ок. 674–675 гг."
    },
    "cities": [
      "Медина",
      "Куфа"
    ]
  },
  "said": {
    "id": "said",
    "name": "Саид ибн Зайд",
    "honorific": "Да будет доволен им Аллах",
    "birth": {
      "hijri": "ок. 22 до х.",
      "gregorian": "ок. 600 г."
    },
    "death": {
      "hijri": "51 г. х.",
      "gregorian": "ок. 671 г."
    },
    "cities": [
      "Медина"
    ]
  },
  "abuUbayda": {
    "id": "abuUbayda",
    "name": "Абу Убайда ибн аль-Джаррах",
    "honorific": "Да будет доволен им Аллах",
    "birth": {
      "hijri": "ок. 40 до х.",
      "gregorian": "ок. 583 г."
    },
    "death": {
      "hijri": "18 г. х.",
      "gregorian": "639 г."
    },
    "cities": [
      "Медина"
    ]
  },
  "abuHanifa": {
    "id": "abuHanifa",
    "name": "Абу Ханифа ан-Нуман",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "80 г. х.",
      "gregorian": "ок. 699 г."
    },
    "death": {
      "hijri": "150 г. х.",
      "gregorian": "767 г."
    },
    "cities": [
      "Куфа",
      "Багдад"
    ],
    "categories": [
      "hanafi",
      "muhaddith"
    ],
    "description": "Имам, к которому восходит ханафитский мазхаб. Куфа."
  },
  "malik": {
    "id": "malik",
    "name": "Малик ибн Анас",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "93 г. х.",
      "gregorian": "ок. 711 г."
    },
    "death": {
      "hijri": "179 г. х.",
      "gregorian": "795 г."
    },
    "cities": [
      "Медина"
    ],
    "categories": [
      "maliki",
      "muhaddith"
    ],
    "description": "Имам, к которому восходит маликитский мазхаб. Медина. Автор «Аль-Муватта»."
  },
  "shafii": {
    "id": "shafii",
    "name": "Мухаммад ибн Идрис аш-Шафии",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "150 г. х.",
      "gregorian": "767 г."
    },
    "death": {
      "hijri": "204 г. х.",
      "gregorian": "820 г."
    },
    "cities": [
      "Мекка",
      "Медина",
      "Багдад",
      "Фустат"
    ],
    "categories": [
      "shafii",
      "muhaddith"
    ],
    "description": "Имам, к которому восходит шафиитский мазхаб. Автор «Ар-Рисаля» и «Аль-Умм»."
  },
  "ahmad": {
    "id": "ahmad",
    "name": "Ахмад ибн Ханбаль",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "164 г. х.",
      "gregorian": "780 г."
    },
    "death": {
      "hijri": "241 г. х.",
      "gregorian": "855 г."
    },
    "cities": [
      "Багдад"
    ],
    "categories": [
      "hanbali",
      "muhaddith"
    ],
    "description": "Имам, к которому восходит ханбалитский мазхаб. Багдад. Составитель «Аль-Муснад»."
  },
  "daraqutni": {
    "id": "daraqutni",
    "name": "Али ибн Умар ад-Даракутни",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "306 г. х.",
      "gregorian": "ок. 918–919 гг."
    },
    "death": {
      "hijri": "385 г. х.",
      "gregorian": "995 г."
    },
    "cities": [
      "Багдад"
    ],
    "categories": [
      "muhaddith",
      "shafii"
    ],
    "description": "Багдадский мухаддис и критик хадисов. Автор «Ас-Сунан» и «Аль-Иляль». Застал установление власти Буидов в Багдаде в 334 г. х."
  },
  "abuNuaym": {
    "id": "abuNuaym",
    "name": "Абу Нуайм Ахмад аль-Исфахани",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "336 г. х.",
      "gregorian": "948 г."
    },
    "death": {
      "hijri": "430 г. х.",
      "gregorian": "1038 г."
    },
    "cities": [
      "Исфахан"
    ],
    "categories": [
      "muhaddith",
      "shafii",
      "historian"
    ],
    "description": "Мухаддис из Исфахана. Автор «Хильят аль-аулия ва табакат аль-асфия»."
  },
  "bukhari": {
    "id": "bukhari",
    "name": "Мухаммад ибн Исмаил аль-Бухари",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "194 г. х.",
      "gregorian": "810 г."
    },
    "death": {
      "hijri": "256 г. х.",
      "gregorian": "870 г."
    },
    "cities": [
      "Бухара",
      "Нишапур"
    ],
    "categories": [
      "muhaddith"
    ],
    "description": "Автор «Аль-Джами ас-сахих» и «Аль-Адаб аль-муфрад».",
    "sources": [
      {
        "title": "البخاري - المكتبة الشاملة",
        "url": "https://shamela.ws/author/215"
      }
    ]
  },
  "muslim": {
    "id": "muslim",
    "name": "Муслим ибн аль-Хаджжадж",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "204 г. х.",
      "gregorian": "ок. 819–820 г."
    },
    "death": {
      "hijri": "261 г. х.",
      "gregorian": "875 г."
    },
    "cities": [
      "Нишапур"
    ],
    "categories": [
      "muhaddith"
    ],
    "description": "Автор «Сахих Муслим».",
    "sources": [
      {
        "title": "مسلم - المكتبة الشاملة",
        "url": "https://shamela.ws/author/242"
      }
    ],
    "dateNote": "Указана датировка рождения 204 г. х.; встречаются также 201 и 206 г. х."
  },
  "abuDawud": {
    "id": "abuDawud",
    "name": "Абу Дауд Сулейман ибн аль-Ашас",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "202 г. х.",
      "gregorian": "ок. 817–818 г."
    },
    "death": {
      "hijri": "275 г. х.",
      "gregorian": "889 г."
    },
    "cities": [
      "Тарсус",
      "Басра"
    ],
    "categories": [
      "muhaddith"
    ],
    "description": "Автор «Сунан Аби Дауд».",
    "sources": [
      {
        "title": "أبو داود - المكتبة الشاملة",
        "url": "https://shamela.ws/author/216"
      }
    ]
  },
  "tirmidhi": {
    "id": "tirmidhi",
    "name": "Абу Иса Мухаммад ат-Тирмизи",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "209 г. х.",
      "gregorian": "824 г."
    },
    "death": {
      "hijri": "279 г. х.",
      "gregorian": "892 г."
    },
    "cities": [
      "Термез"
    ],
    "categories": [
      "muhaddith"
    ],
    "description": "Автор «Аль-Джами» и «Аш-Шамаиль аль-мухаммадийя».",
    "sources": [
      {
        "title": "الترمذي - المكتبة الشاملة",
        "url": "https://shamela.ws/author/217"
      }
    ]
  },
  "nasai": {
    "id": "nasai",
    "name": "Ахмад ибн Шуайб ан-Насаи",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "215 г. х.",
      "gregorian": "ок. 830 г."
    },
    "death": {
      "hijri": "303 г. х.",
      "gregorian": "915 г."
    },
    "cities": [
      "Фустат"
    ],
    "categories": [
      "muhaddith"
    ],
    "description": "Автор «Ас-Сунан аль-кубра» и «Аль-Муджтаба».",
    "sources": [
      {
        "title": "النسائي - المكتبة الشاملة",
        "url": "https://shamela.ws/author/49"
      }
    ]
  },
  "ibnMajah": {
    "id": "ibnMajah",
    "name": "Мухаммад ибн Язид ибн Маджа",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "209 г. х.",
      "gregorian": "824 г."
    },
    "death": {
      "hijri": "273 г. х.",
      "gregorian": "887 г."
    },
    "cities": [
      "Казвин"
    ],
    "categories": [
      "muhaddith",
      "historian"
    ],
    "description": "Автор «Сунан Ибн Маджа».",
    "sources": [
      {
        "title": "ابن ماجه - المكتبة الشاملة",
        "url": "https://shamela.ws/author/218"
      }
    ]
  },
  "darimi": {
    "id": "darimi",
    "name": "Абдуллах ибн Абдуррахман ад-Дарими",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "181 г. х.",
      "gregorian": "797 г."
    },
    "death": {
      "hijri": "255 г. х.",
      "gregorian": "869 г."
    },
    "cities": [
      "Самарканд"
    ],
    "categories": [
      "muhaddith"
    ],
    "description": "Автор сборника, известного как «Сунан ад-Дарими».",
    "sources": [
      {
        "title": "الدارمي - المكتبة الشاملة",
        "url": "https://shamela.ws/author/224"
      }
    ]
  },
  "ibnKhuzayma": {
    "id": "ibnKhuzayma",
    "name": "Мухаммад ибн Исхак ибн Хузайма",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "223 г. х.",
      "gregorian": "838 г."
    },
    "death": {
      "hijri": "311 г. х.",
      "gregorian": "924 г."
    },
    "cities": [
      "Нишапур"
    ],
    "categories": [
      "muhaddith",
      "shafii"
    ],
    "description": "Автор «Сахих Ибн Хузайма».",
    "sources": [
      {
        "title": "Islamweb · Сияр алям ан-нубаля · Ибн Хузайма",
        "url": "https://www.islamweb.net/ar/library/content/60/2925/ابن-خزيمة"
      }
    ]
  },
  "ibnHibban": {
    "id": "ibnHibban",
    "name": "Абу Хатим Мухаммад ибн Хиббан",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "ок. 270–279 г. х.",
      "gregorian": "ок. 883–893 г."
    },
    "death": {
      "hijri": "354 г. х.",
      "gregorian": "965 г."
    },
    "cities": [
      "Буст",
      "Самарканд",
      "Нишапур"
    ],
    "categories": [
      "muhaddith"
    ],
    "description": "Автор «Ас-Сахих» и «Ас-Сикат».",
    "sources": [
      {
        "title": "Islamweb · Сияр алям ан-нубаля · Ибн Хиббан",
        "url": "https://islamweb.net/ar/library/content/60/3461/ابن-حبان"
      }
    ],
    "dateNote": "Аз-Захаби указывает рождение в 270-х годах хиджры без точного года."
  },
  "bayhaqi": {
    "id": "bayhaqi",
    "name": "Абу Бакр Ахмад аль-Байхаки",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "384 г. х.",
      "gregorian": "994 г."
    },
    "death": {
      "hijri": "458 г. х.",
      "gregorian": "1066 г."
    },
    "cities": [
      "Хусрауджирд",
      "Нишапур"
    ],
    "categories": [
      "muhaddith",
      "shafii"
    ],
    "description": "Автор «Ас-Сунан аль-кубра» и «Даляиль ан-нубувва».",
    "sources": [
      {
        "title": "Islamweb · Сияр алям ан-нубаля · аль-Байхаки",
        "url": "https://www.islamweb.net/ar/library/content/60/4370/البيهقي"
      }
    ]
  },
  "abuYusuf": {
    "id": "abuYusuf",
    "name": "Абу Юсуф Якуб ибн Ибрахим",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "113 г. х.",
      "gregorian": "731 г."
    },
    "death": {
      "hijri": "182 г. х.",
      "gregorian": "798 г."
    },
    "cities": [
      "Куфа",
      "Багдад"
    ],
    "categories": [
      "hanafi",
      "muhaddith"
    ],
    "description": "Ученик Абу Ханифы, главный судья. Автор «Аль-Харадж».",
    "sources": [
      {
        "title": "أبو يوسف القاضي - المكتبة الشاملة",
        "url": "https://shamela.ws/author/276"
      }
    ]
  },
  "shaybani": {
    "id": "shaybani",
    "name": "Мухаммад ибн аль-Хасан аш-Шайбани",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "132 г. х.",
      "gregorian": "750 г."
    },
    "death": {
      "hijri": "189 г. х.",
      "gregorian": "805 г."
    },
    "cities": [
      "Куфа",
      "Багдад",
      "Ракка"
    ],
    "categories": [
      "hanafi",
      "muhaddith"
    ],
    "description": "Ученик Абу Ханифы и Абу Юсуфа. Автор «Аль-Асл».",
    "sources": [
      {
        "title": "محمد بن الحسن الشيباني - المكتبة الشاملة",
        "url": "https://shamela.ws/author/277"
      }
    ],
    "dateNote": "В «Сияр» приведён 132 г. х., в справке «Шамили» — 131 г. х.; год рождения спорный."
  },
  "tahawi": {
    "id": "tahawi",
    "name": "Абу Джафар Ахмад ат-Тахави",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "239 г. х.",
      "gregorian": "853 г."
    },
    "death": {
      "hijri": "321 г. х.",
      "gregorian": "933 г."
    },
    "cities": [
      "Фустат"
    ],
    "categories": [
      "hanafi",
      "muhaddith"
    ],
    "description": "Автор «Шарх маани аль-асар».",
    "sources": [
      {
        "title": "إسلام ويب - سير أعلام النبلاء - الطبقة الثامنة عشر - الطحاوي- الجزء رقم15",
        "url": "https://www.islamweb.net/ar/library/content/60/3052/%D8%A7%D9%84%D8%B7%D8%AD%D8%A7%D9%88%D9%8A"
      }
    ]
  },
  "karkhi": {
    "id": "karkhi",
    "name": "Абуль-Хасан Убайдуллах аль-Кархи",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "ок. 260 г. х.",
      "gregorian": "ок. 874 г."
    },
    "death": {
      "hijri": "340 г. х.",
      "gregorian": "952 г."
    },
    "cities": [
      "Багдад"
    ],
    "categories": [
      "hanafi"
    ],
    "description": "Один из ведущих ханафитских факихов Багдада.",
    "sources": [
      {
        "title": "إسلام ويب - سير أعلام النبلاء - الطبقة التاسعة عشرة - الكرخي- الجزء رقم15",
        "url": "https://www.islamweb.net/ar/library/content/60/3277/%D8%A7%D9%84%D9%83%D8%B1%D8%AE%D9%8A"
      }
    ]
  },
  "jassas": {
    "id": "jassas",
    "name": "Абу Бакр Ахмад ар-Рази аль-Джассас",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "305 г. х.",
      "gregorian": "917 г."
    },
    "death": {
      "hijri": "370 г. х.",
      "gregorian": "981 г."
    },
    "cities": [
      "Багдад"
    ],
    "categories": [
      "hanafi"
    ],
    "description": "Автор «Ахкам аль-Куран» и «Аль-Фусуль фи-ль-усуль».",
    "sources": [
      {
        "title": "أبو بكر الرازي الجصاص - المكتبة الشاملة",
        "url": "https://shamela.ws/author/21"
      }
    ]
  },
  "dabusi": {
    "id": "dabusi",
    "name": "Абу Зайд Абдуллах ад-Дабуси",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "Не установлен",
      "gregorian": "—"
    },
    "death": {
      "hijri": "430 г. х.",
      "gregorian": "1039 г."
    },
    "cities": [
      "Бухара"
    ],
    "categories": [
      "hanafi"
    ],
    "description": "Факих и усулист. Автор «Таквим аль-адилля».",
    "sources": [
      {
        "title": "إسلام ويب - سير أعلام النبلاء - الطبقة الثالثة والعشرون - الدبوسي- الجزء رقم17",
        "url": "https://www.islamweb.net/ar/library/content/60/4167/%D8%A7%D9%84%D8%AF%D8%A8%D9%88%D8%B3%D9%8A"
      }
    ]
  },
  "sarakhsi": {
    "id": "sarakhsi",
    "name": "Шамс аль-Аимма Мухаммад ас-Сарахси",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "Не установлен",
      "gregorian": "—"
    },
    "death": {
      "hijri": "483 г. х.",
      "gregorian": "1090 г."
    },
    "cities": [
      "Сарахс",
      "Узген"
    ],
    "categories": [
      "hanafi"
    ],
    "description": "Автор «Аль-Мабсут» и «Усуль ас-Сарахси».",
    "sources": [
      {
        "title": "شمس الأئمة السرخسي - المكتبة الشاملة",
        "url": "https://shamela.ws/author/441"
      }
    ],
    "dateNote": "Год рождения не установлен. Для смерти выбран 483 г. х.; встречаются другие датировки."
  },
  "kasani": {
    "id": "kasani",
    "name": "Аляуддин Абу Бакр аль-Касани",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "Не установлен",
      "gregorian": "—"
    },
    "death": {
      "hijri": "587 г. х.",
      "gregorian": "1191 г."
    },
    "cities": [
      "Алеппо"
    ],
    "categories": [
      "hanafi"
    ],
    "description": "Автор «Бадаи ас-санаи фи тартиб аш-шараи».",
    "sources": [
      {
        "title": "الكاساني - المكتبة الشاملة",
        "url": "https://shamela.ws/author/102"
      }
    ]
  },
  "marghinani": {
    "id": "marghinani",
    "name": "Бурхануддин Али аль-Маргинани",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "511 г. х.",
      "gregorian": "1117 г."
    },
    "death": {
      "hijri": "593 г. х.",
      "gregorian": "1197 г."
    },
    "cities": [
      "Маргилан",
      "Самарканд"
    ],
    "categories": [
      "hanafi"
    ],
    "description": "Автор «Аль-Хидая».",
    "sources": [
      {
        "title": "المرغيناني - المكتبة الشاملة",
        "url": "https://shamela.ws/author/1454"
      }
    ]
  },
  "ibnAbidin": {
    "id": "ibnAbidin",
    "name": "Мухаммад Амин ибн Абидин",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "1198 г. х.",
      "gregorian": "1784 г."
    },
    "death": {
      "hijri": "1252 г. х.",
      "gregorian": "1836 г."
    },
    "cities": [
      "Дамаск"
    ],
    "categories": [
      "hanafi"
    ],
    "description": "Автор «Радд аль-мухтар аля ад-Дурр аль-мухтар».",
    "sources": [
      {
        "title": "ابن عابدين - المكتبة الشاملة",
        "url": "https://shamela.ws/author/558"
      }
    ]
  },
  "ibnQasim": {
    "id": "ibnQasim",
    "name": "Абдуррахман ибн аль-Касим",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "132 г. х.",
      "gregorian": "750 г."
    },
    "death": {
      "hijri": "191 г. х.",
      "gregorian": "806 г."
    },
    "cities": [
      "Фустат",
      "Медина"
    ],
    "categories": [
      "maliki"
    ],
    "description": "Ученик Малика; один из главных передатчиков его фикха.",
    "sources": [
      {
        "title": "ابن القاسم - المكتبة الشاملة",
        "url": "https://shamela.ws/author/2545"
      }
    ]
  },
  "sahnun": {
    "id": "sahnun",
    "name": "Сахнун Абдуссалям ат-Танухи",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "160 г. х.",
      "gregorian": "776 г."
    },
    "death": {
      "hijri": "240 г. х.",
      "gregorian": "854 г."
    },
    "cities": [
      "Кайруан"
    ],
    "categories": [
      "maliki"
    ],
    "description": "Кади Кайруана. Передатчик и составитель «Аль-Мудаввана».",
    "sources": [
      {
        "title": "إسلام ويب - سير أعلام النبلاء - الطبقة الثالثة عشر - سحنون- الجزء رقم12",
        "url": "https://www.islamweb.net/amp/ar/library/content/60/2143/%D8%B3%D8%AD%D9%86%D9%88%D9%86"
      }
    ]
  },
  "ibnAbiZayd": {
    "id": "ibnAbiZayd",
    "name": "Абдуллах ибн Абу Зайд аль-Кайравани",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "310 г. х.",
      "gregorian": "922 г."
    },
    "death": {
      "hijri": "386 г. х.",
      "gregorian": "996 г."
    },
    "cities": [
      "Кайруан"
    ],
    "categories": [
      "maliki"
    ],
    "description": "Автор «Ар-Рисаля» и «Ан-Навадир ва-з-зиядат».",
    "sources": [
      {
        "title": "ابن أبي زيد القيرواني - المكتبة الشاملة",
        "url": "https://shamela.ws/author/428"
      }
    ]
  },
  "qadiAbdWahhab": {
    "id": "qadiAbdWahhab",
    "name": "Кади Абдульваххаб аль-Багдади",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "362 г. х.",
      "gregorian": "973 г."
    },
    "death": {
      "hijri": "422 г. х.",
      "gregorian": "1031 г."
    },
    "cities": [
      "Багдад",
      "Фустат"
    ],
    "categories": [
      "maliki"
    ],
    "description": "Автор «Ат-Талькин» и «Аль-Мауна».",
    "sources": [
      {
        "title": "القاضي عبد الوهاب - المكتبة الشاملة",
        "url": "https://shamela.ws/author/1047"
      }
    ]
  },
  "ibnAbdBarr": {
    "id": "ibnAbdBarr",
    "name": "Абу Умар Юсуф ибн Абд аль-Барр",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "368 г. х.",
      "gregorian": "978 г."
    },
    "death": {
      "hijri": "463 г. х.",
      "gregorian": "1071 г."
    },
    "cities": [
      "Кордова",
      "Шатива"
    ],
    "categories": [
      "maliki",
      "muhaddith",
      "historian"
    ],
    "description": "Автор «Ат-Тамхид», «Аль-Истизкар» и «Аль-Истииаб».",
    "sources": [
      {
        "title": "ابن عبد البر - المكتبة الشاملة",
        "url": "https://shamela.ws/author/76"
      }
    ]
  },
  "baji": {
    "id": "baji",
    "name": "Абу-ль-Валид Сулейман аль-Баджи",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "403 г. х.",
      "gregorian": "1013 г."
    },
    "death": {
      "hijri": "474 г. х.",
      "gregorian": "1081 г."
    },
    "cities": [
      "Мекка",
      "Багдад",
      "Альмерия"
    ],
    "categories": [
      "maliki",
      "muhaddith"
    ],
    "description": "Автор «Аль-Мунтака», комментария к «Аль-Муватта».",
    "sources": [
      {
        "title": "إسلام ويب - سير أعلام النبلاء - الطبقة الخامسة والعشرون - أبو الوليد الباجي- الجزء رقم18",
        "url": "https://gcp.islamweb.net/ar/library/index.php?ID=4563&bk_no=60&flag=1&page=bookcontents"
      }
    ]
  },
  "ibnRushd": {
    "id": "ibnRushd",
    "name": "Абу-ль-Валид ибн Рушд аль-Джадд",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "450 г. х.",
      "gregorian": "1058 г."
    },
    "death": {
      "hijri": "520 г. х.",
      "gregorian": "1126 г."
    },
    "cities": [
      "Кордова"
    ],
    "categories": [
      "maliki"
    ],
    "description": "Ибн Рушд-старший. Автор «Аль-Баян ва-т-тахсиль».",
    "sources": [
      {
        "title": "ابن رشد الجد - المكتبة الشاملة",
        "url": "https://shamela.ws/author/1105"
      }
    ]
  },
  "qadiIyad": {
    "id": "qadiIyad",
    "name": "Кади Ияд ибн Муса",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "476 г. х.",
      "gregorian": "1083 г."
    },
    "death": {
      "hijri": "544 г. х.",
      "gregorian": "1149 г."
    },
    "cities": [
      "Сеута",
      "Гранада",
      "Марракеш"
    ],
    "categories": [
      "maliki",
      "muhaddith",
      "historian"
    ],
    "description": "Автор «Аш-Шифа» и «Тартиб аль-мадарик».",
    "sources": [
      {
        "title": "القاضي عياض - المكتبة الشاملة",
        "url": "https://shamela.ws/author/662"
      }
    ]
  },
  "qarafi": {
    "id": "qarafi",
    "name": "Шихабуддин Ахмад аль-Карафи",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "ок. 626 г. х.",
      "gregorian": "ок. 1228–1229 г."
    },
    "death": {
      "hijri": "684 г. х.",
      "gregorian": "1285 г."
    },
    "cities": [
      "Каир"
    ],
    "categories": [
      "maliki"
    ],
    "description": "Автор «Аз-Захира» и «Аль-Фурук».",
    "sources": [
      {
        "title": "القرافي - المكتبة الشاملة",
        "url": "https://shamela.ws/author/615"
      }
    ],
    "dateNote": "Рождение около 626 г. х. — распространённая приблизительная датировка."
  },
  "khalil": {
    "id": "khalil",
    "name": "Халиль ибн Исхак аль-Джунди",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "Не установлен",
      "gregorian": "—"
    },
    "death": {
      "hijri": "776 г. х.",
      "gregorian": "1374 г."
    },
    "cities": [
      "Каир"
    ],
    "categories": [
      "maliki"
    ],
    "description": "Автор «Мухтасар Халиль» и «Ат-Таудих».",
    "sources": [
      {
        "title": "خليل بن إسحاق الجندي - المكتبة الشاملة",
        "url": "https://shamela.ws/author/568"
      }
    ],
    "dateNote": "Год рождения не установлен. В справке «Шамили» смерть датирована 776 г. х.; встречается также 767 г. х."
  },
  "muzani": {
    "id": "muzani",
    "name": "Абу Ибрахим Исмаил аль-Музани",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "175 г. х.",
      "gregorian": "791 г."
    },
    "death": {
      "hijri": "264 г. х.",
      "gregorian": "878 г."
    },
    "cities": [
      "Фустат"
    ],
    "categories": [
      "shafii"
    ],
    "description": "Ученик аш-Шафии. Автор «Мухтасар аль-Музани».",
    "sources": [
      {
        "title": "المزني - المكتبة الشاملة",
        "url": "https://shamela.ws/author/429"
      }
    ]
  },
  "shirazi": {
    "id": "shirazi",
    "name": "Абу Исхак Ибрахим аш-Ширази",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "393 г. х.",
      "gregorian": "1003 г."
    },
    "death": {
      "hijri": "476 г. х.",
      "gregorian": "1083 г."
    },
    "cities": [
      "Шираз",
      "Багдад"
    ],
    "categories": [
      "shafii",
      "historian"
    ],
    "description": "Преподаватель Низамии. Автор «Аль-Мухаззаб».",
    "sources": [
      {
        "title": "أبو إسحاق الشيرازي - المكتبة الشاملة",
        "url": "https://shamela.ws/author/627"
      }
    ]
  },
  "juwayni": {
    "id": "juwayni",
    "name": "Имам аль-Харамайн Абдульмалик аль-Джувайни",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "419 г. х.",
      "gregorian": "1028 г."
    },
    "death": {
      "hijri": "478 г. х.",
      "gregorian": "1085 г."
    },
    "cities": [
      "Нишапур",
      "Мекка",
      "Медина"
    ],
    "categories": [
      "shafii"
    ],
    "description": "Автор «Нихаят аль-матлаб» и «Аль-Бурхан».",
    "sources": [
      {
        "title": "الجويني، أبو المعالي - المكتبة الشاملة",
        "url": "https://shamela.ws/author/1010"
      }
    ]
  },
  "ghazali": {
    "id": "ghazali",
    "name": "Абу Хамид Мухаммад аль-Газали",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "450 г. х.",
      "gregorian": "1058 г."
    },
    "death": {
      "hijri": "505 г. х.",
      "gregorian": "1111 г."
    },
    "cities": [
      "Тус",
      "Нишапур",
      "Багдад",
      "Дамаск"
    ],
    "categories": [
      "shafii"
    ],
    "description": "Автор «Аль-Васит», «Аль-Ваджиз» и «Аль-Мустасфа».",
    "sources": [
      {
        "title": "أبو حامد الغزالي - المكتبة الشاملة",
        "url": "https://shamela.ws/author/619"
      }
    ]
  },
  "rafii": {
    "id": "rafii",
    "name": "Абуль-Касим Абдулькарим ар-Рафии",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "555 г. х.",
      "gregorian": "1160 г."
    },
    "death": {
      "hijri": "623 г. х.",
      "gregorian": "1226 г."
    },
    "cities": [
      "Казвин"
    ],
    "categories": [
      "shafii",
      "muhaddith",
      "historian"
    ],
    "description": "Один из двух шейхов мазхаба. Автор «Аль-Азиз шарх аль-Ваджиз».",
    "sources": [
      {
        "title": "الرافعي - المكتبة الشاملة",
        "url": "https://shamela.ws/author/434"
      }
    ],
    "dateNote": "В «Сияр» указан 555 г. х., в справке «Шамили» — 557 г. х."
  },
  "nawawi": {
    "id": "nawawi",
    "name": "Мухйиддин Яхья ан-Навави",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "631 г. х.",
      "gregorian": "1233 г."
    },
    "death": {
      "hijri": "676 г. х.",
      "gregorian": "1277 г."
    },
    "cities": [
      "Нава",
      "Дамаск"
    ],
    "categories": [
      "shafii",
      "muhaddith"
    ],
    "description": "Автор «Минхадж ат-талибин», «Аль-Маджму» и «Рияд ас-салихин».",
    "sources": [
      {
        "title": "النووي - المكتبة الشاملة",
        "url": "https://shamela.ws/author/44"
      }
    ]
  },
  "subki": {
    "id": "subki",
    "name": "Таджуддин Абдульваххаб ас-Субки",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "727 г. х.",
      "gregorian": "1327 г."
    },
    "death": {
      "hijri": "771 г. х.",
      "gregorian": "1370 г."
    },
    "cities": [
      "Каир",
      "Дамаск"
    ],
    "categories": [
      "shafii",
      "historian",
      "muhaddith"
    ],
    "description": "Автор «Табакат аш-шафиийя аль-кубра» и «Джам аль-джавами».",
    "sources": [
      {
        "title": "تاج الدين ابن السبكي - المكتبة الشاملة",
        "url": "https://shamela.ws/author/723"
      }
    ]
  },
  "ansari": {
    "id": "ansari",
    "name": "Закария аль-Ансари",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "823 г. х.",
      "gregorian": "1420 г."
    },
    "death": {
      "hijri": "926 г. х.",
      "gregorian": "1520 г."
    },
    "cities": [
      "Каир"
    ],
    "categories": [
      "shafii",
      "muhaddith"
    ],
    "description": "Автор «Асна аль-маталиб» и «Фатх аль-Ваххаб».",
    "sources": [
      {
        "title": "زكريا الأنصاري - المكتبة الشاملة",
        "url": "https://shamela.ws/author/6"
      }
    ],
    "dateNote": "Выбран 823 г. х.; существуют другие датировки рождения."
  },
  "haytami": {
    "id": "haytami",
    "name": "Шихабуддин Ахмад ибн Хаджар аль-Хайтами",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "909 г. х.",
      "gregorian": "1504 г."
    },
    "death": {
      "hijri": "974 г. х.",
      "gregorian": "1567 г."
    },
    "cities": [
      "Каир",
      "Мекка"
    ],
    "categories": [
      "shafii",
      "muhaddith",
      "historian"
    ],
    "description": "Автор «Тухфат аль-мухтадж».",
    "sources": [
      {
        "title": "ابن حجر الهيتمي - المكتبة الشاملة",
        "url": "https://shamela.ws/author/479"
      }
    ]
  },
  "ramli": {
    "id": "ramli",
    "name": "Шамсуддин Мухаммад ар-Рамли",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "919 г. х.",
      "gregorian": "1513 г."
    },
    "death": {
      "hijri": "1004 г. х.",
      "gregorian": "1596 г."
    },
    "cities": [
      "Каир"
    ],
    "categories": [
      "shafii"
    ],
    "description": "Автор «Нихаят аль-мухтадж».",
    "sources": [
      {
        "title": "شمس الدين الرملي - المكتبة الشاملة",
        "url": "https://shamela.ws/author/498"
      }
    ]
  },
  "khallal": {
    "id": "khallal",
    "name": "Абу Бакр Ахмад аль-Халляль",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "234 или 235 г. х.",
      "gregorian": "ок. 848–850 г."
    },
    "death": {
      "hijri": "311 г. х.",
      "gregorian": "923 г."
    },
    "cities": [
      "Багдад"
    ],
    "categories": [
      "hanbali",
      "muhaddith",
      "historian"
    ],
    "description": "Собирал и систематизировал ответы имама Ахмада. Автор «Ас-Сунна».",
    "sources": [
      {
        "title": "أبو بكر الخلال - المكتبة الشاملة",
        "url": "https://shamela.ws/author/284"
      }
    ]
  },
  "khiraqi": {
    "id": "khiraqi",
    "name": "Абуль-Касим Умар аль-Хираки",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "Не установлен",
      "gregorian": "—"
    },
    "death": {
      "hijri": "334 г. х.",
      "gregorian": "945 г."
    },
    "cities": [
      "Багдад",
      "Дамаск"
    ],
    "categories": [
      "hanbali"
    ],
    "description": "Автор «Мухтасар аль-Хираки».",
    "sources": [
      {
        "title": "الخرقي - المكتبة الشاملة",
        "url": "https://shamela.ws/author/584"
      }
    ]
  },
  "ibnAqil": {
    "id": "ibnAqil",
    "name": "Абу-ль-Вафа Али ибн Акиль",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "431 г. х.",
      "gregorian": "1040 г."
    },
    "death": {
      "hijri": "513 г. х.",
      "gregorian": "1119 г."
    },
    "cities": [
      "Багдад"
    ],
    "categories": [
      "hanbali"
    ],
    "description": "Автор «Аль-Фунун» и «Аль-Вадих» по усуль аль-фикх.",
    "sources": [
      {
        "title": "أبو الوفاء ابن عقيل - المكتبة الشاملة",
        "url": "https://shamela.ws/author/2609"
      }
    ]
  },
  "jilani": {
    "id": "jilani",
    "name": "Абдулькадир аль-Джилани",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "471 г. х.",
      "gregorian": "1078 г."
    },
    "death": {
      "hijri": "561 г. х.",
      "gregorian": "1166 г."
    },
    "cities": [
      "Багдад"
    ],
    "categories": [
      "hanbali"
    ],
    "description": "Ханбалитский факих и проповедник, преподавал в Багдаде.",
    "sources": [
      {
        "title": "إسلام ويب - سير أعلام النبلاء - الطبقة التاسعة والعشرون - الشيخ عبد القادر- الجزء رقم20",
        "url": "https://islamweb.net/ar/library/content/60/5282/%D8%A7%D9%84%D8%B4%D9%8A%D8%AE-%D8%B9%D8%A8%D8%AF-%D8%A7%D9%84%D9%82%D8%A7%D8%AF%D8%B1"
      }
    ]
  },
  "ibnJawzi": {
    "id": "ibnJawzi",
    "name": "Абу-ль-Фарадж Абдуррахман ибн аль-Джаузи",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "508 г. х.",
      "gregorian": "1114 г."
    },
    "death": {
      "hijri": "597 г. х.",
      "gregorian": "1201 г."
    },
    "cities": [
      "Багдад"
    ],
    "categories": [
      "hanbali",
      "muhaddith",
      "historian"
    ],
    "description": "Автор «Аль-Мунтазам», «Зад аль-масир» и «Сайд аль-хатыр».",
    "sources": [
      {
        "title": "ابن الجوزي - المكتبة الشاملة",
        "url": "https://shamela.ws/author/51"
      }
    ],
    "dateNote": "В справке «Шамили» — 508 г. х.; также встречается 510 г. х."
  },
  "ibnQudama": {
    "id": "ibnQudama",
    "name": "Муваффакуддин Абдуллах ибн Кудама",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "541 г. х.",
      "gregorian": "1147 г."
    },
    "death": {
      "hijri": "620 г. х.",
      "gregorian": "1223 г."
    },
    "cities": [
      "Дамаск",
      "Багдад"
    ],
    "categories": [
      "hanbali"
    ],
    "description": "Автор «Аль-Мугни», «Аль-Кафи» и «Умдат аль-фикх».",
    "sources": [
      {
        "title": "ابن قدامة - المكتبة الشاملة",
        "url": "https://shamela.ws/author/474"
      }
    ]
  },
  "majd": {
    "id": "majd",
    "name": "Мадждуддин Абдуссалям ибн Таймийя",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "ок. 590 г. х.",
      "gregorian": "ок. 1194 г."
    },
    "death": {
      "hijri": "652 г. х.",
      "gregorian": "1254 г."
    },
    "cities": [
      "Харран"
    ],
    "categories": [
      "hanbali",
      "muhaddith"
    ],
    "description": "Дед Такиюддина ибн Таймийи. Автор «Аль-Мухаррар» и «Аль-Мунтака».",
    "sources": [
      {
        "title": "مجد الدين بن تيمية - المكتبة الشاملة",
        "url": "https://shamela.ws/author/988"
      }
    ]
  },
  "ibnTaymiyya": {
    "id": "ibnTaymiyya",
    "name": "Такиюддин Ахмад ибн Таймийя",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "661 г. х.",
      "gregorian": "1263 г."
    },
    "death": {
      "hijri": "728 г. х.",
      "gregorian": "1328 г."
    },
    "cities": [
      "Харран",
      "Дамаск",
      "Каир",
      "Александрия"
    ],
    "categories": [
      "hanbali",
      "muhaddith"
    ],
    "description": "Факих и автор трудов по тафсиру, усуль аль-фикх и другим наукам.",
    "sources": [
      {
        "title": "ابن تيمية - المكتبة الشاملة",
        "url": "https://shamela.ws/author/54"
      }
    ]
  },
  "ibnQayyim": {
    "id": "ibnQayyim",
    "name": "Шамсуддин Мухаммад ибн Каййим аль-Джаузийя",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "691 г. х.",
      "gregorian": "1292 г."
    },
    "death": {
      "hijri": "751 г. х.",
      "gregorian": "1350 г."
    },
    "cities": [
      "Дамаск"
    ],
    "categories": [
      "hanbali",
      "muhaddith"
    ],
    "description": "Автор «Зад аль-маад» и «Илям аль-муваккиин».",
    "sources": [
      {
        "title": "ابن قـيم الجــوزية",
        "url": "https://islamweb.net/ar/article/143744/%D8%A7%D8%A8%D9%86-%D9%82%D9%8A%D9%85-%D8%A7%D9%84%D8%AC%D9%88%D8%B2%D9%8A%D8%A9"
      }
    ]
  },
  "mardawi": {
    "id": "mardawi",
    "name": "Аляуддин Али аль-Мардави",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "817 г. х.",
      "gregorian": "1414 г."
    },
    "death": {
      "hijri": "885 г. х.",
      "gregorian": "1480 г."
    },
    "cities": [
      "Дамаск"
    ],
    "categories": [
      "hanbali",
      "muhaddith"
    ],
    "description": "Автор «Аль-Инсаф» и «Ат-Танких аль-мушби».",
    "sources": [
      {
        "title": "المرداوي - المكتبة الشاملة",
        "url": "https://shamela.ws/author/580"
      }
    ]
  },
  "ibnIshaq": {
    "id": "ibnIshaq",
    "name": "Мухаммад ибн Исхак",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "80 г. х.",
      "gregorian": "ок. 699–700 г."
    },
    "death": {
      "hijri": "151 г. х.",
      "gregorian": "768 г."
    },
    "cities": [
      "Медина",
      "Багдад"
    ],
    "categories": [
      "historian",
      "muhaddith"
    ],
    "description": "Один из ранних авторов сиры Посланника Аллаха ﷺ.",
    "sources": [
      {
        "title": "محمد بن إسحاق - المكتبة الشاملة",
        "url": "https://shamela.ws/author/726"
      }
    ]
  },
  "ibnHisham": {
    "id": "ibnHisham",
    "name": "Абдульмалик ибн Хишам",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "Не установлен",
      "gregorian": "—"
    },
    "death": {
      "hijri": "218 г. х.",
      "gregorian": "833 г."
    },
    "cities": [
      "Басра",
      "Фустат"
    ],
    "categories": [
      "historian"
    ],
    "description": "Автор редакции сиры Ибн Исхака, известной как «Сира Ибн Хишама».",
    "sources": [
      {
        "title": "عبد الملك بن هشام - المكتبة الشاملة",
        "url": "https://shamela.ws/author/448"
      }
    ],
    "dateNote": "Год рождения не установлен. Аз-Захаби предпочитает 218 г. х. для смерти; в справке «Шамили» указан 213 г. х."
  },
  "tabari": {
    "id": "tabari",
    "name": "Абу Джафар Мухаммад ибн Джарир ат-Табари",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "224 г. х.",
      "gregorian": "839 г."
    },
    "death": {
      "hijri": "310 г. х.",
      "gregorian": "923 г."
    },
    "cities": [
      "Амоль",
      "Багдад"
    ],
    "categories": [
      "historian",
      "muhaddith"
    ],
    "description": "Автор «Тарих ар-русуль ва-ль-мулюк» и «Джами аль-баян».",
    "sources": [
      {
        "title": "ابن جرير الطبري - المكتبة الشاملة",
        "url": "https://shamela.ws/author/59"
      }
    ]
  },
  "masudi": {
    "id": "masudi",
    "name": "Абу-ль-Хасан Али аль-Масуди",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "Не установлен",
      "gregorian": "—"
    },
    "death": {
      "hijri": "345 или 346 г. х.",
      "gregorian": "956–957 г."
    },
    "cities": [
      "Багдад",
      "Фустат"
    ],
    "categories": [
      "historian"
    ],
    "description": "Историк и путешественник. Автор «Мурудж аз-захаб».",
    "sources": [
      {
        "title": "المسعودي - المكتبة الشاملة",
        "url": "https://shamela.ws/author/506"
      }
    ],
    "dateNote": "Год рождения не установлен. В «Сияр» — смерть в 345 г. х., в справке «Шамили» — в 346 г. х."
  },
  "ibnAthir": {
    "id": "ibnAthir",
    "name": "Иззуддин Али ибн аль-Асир",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "555 г. х.",
      "gregorian": "1160 г."
    },
    "death": {
      "hijri": "630 г. х.",
      "gregorian": "1233 г."
    },
    "cities": [
      "Джазира ибн Умар",
      "Мосул"
    ],
    "categories": [
      "historian",
      "muhaddith"
    ],
    "description": "Автор «Аль-Камиль фи-т-тарих» и «Усд аль-габа».",
    "sources": [
      {
        "title": "عز الدين ابن الأثير - المكتبة الشاملة",
        "url": "https://shamela.ws/author/244"
      }
    ]
  },
  "dhahabi": {
    "id": "dhahabi",
    "name": "Шамсуддин Мухаммад аз-Захаби",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "673 г. х.",
      "gregorian": "1274 г."
    },
    "death": {
      "hijri": "748 г. х.",
      "gregorian": "1348 г."
    },
    "cities": [
      "Дамаск"
    ],
    "categories": [
      "historian",
      "muhaddith",
      "shafii"
    ],
    "description": "Автор «Тарих аль-ислам» и «Сияр алям ан-нубаля».",
    "sources": [
      {
        "title": "شمس الدين الذهبي - المكتبة الشاملة",
        "url": "https://shamela.ws/author/362"
      }
    ]
  },
  "ibnKathir": {
    "id": "ibnKathir",
    "name": "Имадуддин Исмаил ибн Касир",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "701 г. х.",
      "gregorian": "ок. 1301–1302 г."
    },
    "death": {
      "hijri": "774 г. х.",
      "gregorian": "1373 г."
    },
    "cities": [
      "Дамаск"
    ],
    "categories": [
      "historian",
      "muhaddith",
      "shafii"
    ],
    "description": "Автор «Аль-Бидая ва-н-нихая» и тафсира Корана.",
    "sources": [
      {
        "title": "ابن كثير - المكتبة الشاملة",
        "url": "https://shamela.ws/author/3"
      }
    ],
    "dateNote": "Выбран 701 г. х. по справке «Шамили»; встречаются другие датировки рождения."
  },
  "ibnKhaldun": {
    "id": "ibnKhaldun",
    "name": "Валиюддин Абдуррахман ибн Хальдун",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "732 г. х.",
      "gregorian": "1332 г."
    },
    "death": {
      "hijri": "808 г. х.",
      "gregorian": "1406 г."
    },
    "cities": [
      "Тунис",
      "Фес",
      "Гранада",
      "Каир"
    ],
    "categories": [
      "historian",
      "maliki"
    ],
    "description": "Автор «Китаб аль-Ибар» и его «Мукаддимы».",
    "sources": [
      {
        "title": "ابن خلدون - المكتبة الشاملة",
        "url": "https://shamela.ws/author/731"
      }
    ]
  },
  "maqrizi": {
    "id": "maqrizi",
    "name": "Такиюддин Ахмад аль-Макризи",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "766 г. х.",
      "gregorian": "1364–1365 г."
    },
    "death": {
      "hijri": "845 г. х.",
      "gregorian": "1442 г."
    },
    "cities": [
      "Каир",
      "Дамаск"
    ],
    "categories": [
      "historian"
    ],
    "description": "Автор «Аль-Хитат» и «Ас-Сулюк» по истории Египта.",
    "sources": [
      {
        "title": "المقريزي - المكتبة الشاملة",
        "url": "https://shamela.ws/author/693"
      }
    ]
  },
  "suyuti": {
    "id": "suyuti",
    "name": "Джалялюддин Абдуррахман ас-Суюти",
    "honorific": "Да помилует его Аллах",
    "birth": {
      "hijri": "849 г. х.",
      "gregorian": "1445 г."
    },
    "death": {
      "hijri": "911 г. х.",
      "gregorian": "1505 г."
    },
    "cities": [
      "Каир"
    ],
    "categories": [
      "historian",
      "muhaddith",
      "shafii"
    ],
    "description": "Автор «Тарих аль-хуляфа» и «Хусн аль-мухадара».",
    "sources": [
      {
        "title": "الجلال السيوطي - المكتبة الشاملة",
        "url": "https://shamela.ws/author/7"
      }
    ]
  }
};

// Подборки известных представителей, без ранжирования. По 10 факихов сверх основателей.
export const collections = {
  "muhaddith": [
    "bukhari",
    "muslim",
    "abuDawud",
    "tirmidhi",
    "nasai",
    "ibnMajah",
    "darimi",
    "ibnKhuzayma",
    "ibnHibban",
    "bayhaqi"
  ],
  "hanafi": [
    "abuYusuf",
    "shaybani",
    "tahawi",
    "karkhi",
    "jassas",
    "dabusi",
    "sarakhsi",
    "kasani",
    "marghinani",
    "ibnAbidin"
  ],
  "maliki": [
    "ibnQasim",
    "sahnun",
    "ibnAbiZayd",
    "qadiAbdWahhab",
    "ibnAbdBarr",
    "baji",
    "ibnRushd",
    "qadiIyad",
    "qarafi",
    "khalil"
  ],
  "shafii": [
    "muzani",
    "shirazi",
    "juwayni",
    "ghazali",
    "rafii",
    "nawawi",
    "subki",
    "ansari",
    "haytami",
    "ramli"
  ],
  "hanbali": [
    "khallal",
    "khiraqi",
    "ibnAqil",
    "jilani",
    "ibnJawzi",
    "ibnQudama",
    "majd",
    "ibnTaymiyya",
    "ibnQayyim",
    "mardawi"
  ],
  "historian": [
    "ibnIshaq",
    "ibnHisham",
    "tabari",
    "masudi",
    "ibnAthir",
    "dhahabi",
    "ibnKathir",
    "ibnKhaldun",
    "maqrizi",
    "suyuti"
  ]
};

export const periods: HistoricalPeriod[] = [
  {
    "id": "prophetic-era",
    "title": "Эпоха Посланника Аллаха ﷺ",
    "description": "От начала откровения до кончины Пророка ﷺ.",
    "dates": {
      "hijri": "13 до х. — 11 г. х.",
      "gregorian": "610–632 гг."
    },
    "groups": [
      {
        "id": "prophet",
        "title": "Посланник Аллаха ﷺ",
        "people": [
          {
            "personId": "muhammad",
            "featured": true
          }
        ]
      },
      {
        "id": "ten-companions",
        "title": "Десять обрадованных Раем",
        "people": [
          {
            "personId": "abuBakr"
          },
          {
            "personId": "umar"
          },
          {
            "personId": "uthman"
          },
          {
            "personId": "ali"
          },
          {
            "personId": "talha"
          },
          {
            "personId": "zubayr"
          },
          {
            "personId": "abdurrahman"
          },
          {
            "personId": "saad"
          },
          {
            "personId": "said"
          },
          {
            "personId": "abuUbayda"
          }
        ]
      }
    ]
  },
  {
    "id": "rashidun",
    "title": "Период праведных халифов",
    "description": "Четыре праведных халифа и годы их правления.",
    "dates": {
      "hijri": "11–40 г. х.",
      "gregorian": "632–661 гг."
    },
    "groups": [
      {
        "id": "caliphs",
        "title": "Праведные халифы",
        "people": [
          {
            "personId": "abuBakr",
            "description": "Первый халиф · правление 11–13 г. х."
          },
          {
            "personId": "umar",
            "description": "Второй халиф · правление 13–23 г. х."
          },
          {
            "personId": "uthman",
            "description": "Третий халиф · правление 23–35 г. х."
          },
          {
            "personId": "ali",
            "description": "Четвёртый халиф · правление 35–40 г. х."
          }
        ]
      }
    ]
  },
  {
    "id": "early-schools",
    "title": "Поздние Омейяды и ранние Аббасиды",
    "description": "Хронологический раздел: личности расположены по году смерти по хиджре. Название эпохи — ориентир; государства в разных регионах существовали параллельно.",
    "dates": {
      "hijri": "41–199 г. х.",
      "gregorian": "ок. 661–815 гг."
    },
    "groups": [
      {
        "id": "early-schools-scholars",
        "title": "Учёные и авторы · по году смерти",
        "people": [
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
          },
          {
            "personId": "shaybani"
          },
          {
            "personId": "ibnQasim"
          }
        ]
      }
    ]
  },
  {
    "id": "abbasid-scholarship",
    "title": "Расцвет учёности при Аббасидах",
    "description": "Хронологический раздел: личности расположены по году смерти по хиджре. Название эпохи — ориентир; государства в разных регионах существовали параллельно.",
    "dates": {
      "hijri": "200–333 г. х.",
      "gregorian": "ок. 815–945 гг."
    },
    "groups": [
      {
        "id": "abbasid-scholarship-scholars",
        "title": "Учёные и авторы · по году смерти",
        "people": [
          {
            "personId": "shafii"
          },
          {
            "personId": "ibnHisham"
          },
          {
            "personId": "sahnun"
          },
          {
            "personId": "ahmad"
          },
          {
            "personId": "darimi"
          },
          {
            "personId": "bukhari"
          },
          {
            "personId": "muslim"
          },
          {
            "personId": "muzani"
          },
          {
            "personId": "ibnMajah"
          },
          {
            "personId": "abuDawud"
          },
          {
            "personId": "tirmidhi"
          },
          {
            "personId": "nasai"
          },
          {
            "personId": "tabari"
          },
          {
            "personId": "ibnKhuzayma"
          },
          {
            "personId": "khallal"
          },
          {
            "personId": "tahawi"
          }
        ]
      }
    ]
  },
  {
    "id": "regional-dynasties",
    "title": "Аббасиды и региональные династии",
    "description": "Хронологический раздел: личности расположены по году смерти по хиджре. Название эпохи — ориентир; государства в разных регионах существовали параллельно.",
    "dates": {
      "hijri": "334–499 г. х.",
      "gregorian": "ок. 945–1106 гг."
    },
    "groups": [
      {
        "id": "regional-dynasties-scholars",
        "title": "Учёные и авторы · по году смерти",
        "people": [
          {
            "personId": "khiraqi"
          },
          {
            "personId": "karkhi"
          },
          {
            "personId": "masudi"
          },
          {
            "personId": "ibnHibban"
          },
          {
            "personId": "jassas"
          },
          {
            "personId": "daraqutni"
          },
          {
            "personId": "ibnAbiZayd"
          },
          {
            "personId": "qadiAbdWahhab"
          },
          {
            "personId": "abuNuaym"
          },
          {
            "personId": "dabusi"
          },
          {
            "personId": "bayhaqi"
          },
          {
            "personId": "ibnAbdBarr"
          },
          {
            "personId": "baji"
          },
          {
            "personId": "shirazi"
          },
          {
            "personId": "juwayni"
          },
          {
            "personId": "sarakhsi"
          }
        ]
      }
    ]
  },
  {
    "id": "seljuk-ayyubid-era",
    "title": "Сельджуки, Зангиды и Айюбиды",
    "description": "Хронологический раздел: личности расположены по году смерти по хиджре. Название эпохи — ориентир; государства в разных регионах существовали параллельно.",
    "dates": {
      "hijri": "500–656 г. х.",
      "gregorian": "ок. 1106–1258 гг."
    },
    "groups": [
      {
        "id": "seljuk-ayyubid-era-scholars",
        "title": "Учёные и авторы · по году смерти",
        "people": [
          {
            "personId": "ghazali"
          },
          {
            "personId": "ibnAqil"
          },
          {
            "personId": "ibnRushd"
          },
          {
            "personId": "qadiIyad"
          },
          {
            "personId": "jilani"
          },
          {
            "personId": "kasani"
          },
          {
            "personId": "marghinani"
          },
          {
            "personId": "ibnJawzi"
          },
          {
            "personId": "ibnQudama"
          },
          {
            "personId": "rafii"
          },
          {
            "personId": "ibnAthir"
          },
          {
            "personId": "majd"
          }
        ]
      }
    ]
  },
  {
    "id": "mamluk-era",
    "title": "Мамлюкская эпоха",
    "description": "Хронологический раздел: личности расположены по году смерти по хиджре. Название эпохи — ориентир; государства в разных регионах существовали параллельно.",
    "dates": {
      "hijri": "657–923 г. х.",
      "gregorian": "ок. 1258–1517 гг."
    },
    "groups": [
      {
        "id": "mamluk-era-scholars",
        "title": "Учёные и авторы · по году смерти",
        "people": [
          {
            "personId": "nawawi"
          },
          {
            "personId": "qarafi"
          },
          {
            "personId": "ibnTaymiyya"
          },
          {
            "personId": "dhahabi"
          },
          {
            "personId": "ibnQayyim"
          },
          {
            "personId": "subki"
          },
          {
            "personId": "ibnKathir"
          },
          {
            "personId": "khalil"
          },
          {
            "personId": "ibnKhaldun"
          },
          {
            "personId": "maqrizi"
          },
          {
            "personId": "mardawi"
          },
          {
            "personId": "suyuti"
          }
        ]
      }
    ]
  },
  {
    "id": "ottoman-era",
    "title": "Османская эпоха",
    "description": "Хронологический раздел: личности расположены по году смерти по хиджре. Название эпохи — ориентир; государства в разных регионах существовали параллельно.",
    "dates": {
      "hijri": "924–1300 г. х.",
      "gregorian": "ок. 1518–1883 гг."
    },
    "groups": [
      {
        "id": "ottoman-era-scholars",
        "title": "Учёные и авторы · по году смерти",
        "people": [
          {
            "personId": "ansari"
          },
          {
            "personId": "haytami"
          },
          {
            "personId": "ramli"
          },
          {
            "personId": "ibnAbidin"
          }
        ]
      }
    ]
  }
];
