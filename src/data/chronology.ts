import type { Person, HistoricalPeriod } from "@/types/chronology";

// Даты предварительные: перед публикацией сверить с источниками.
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  }
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
    "id": "madhhab-imams",
    "title": "Четыре имама мазхабов",
    "description": "Поздняя эпоха Омейядов и ранняя эпоха Аббасидов. Границы блока обозначают годы жизни представленных имамов.",
    "dates": {
      "hijri": "80–241 г. х.",
      "gregorian": "ок. 699–855 гг."
    },
    "groups": [
      {
        "id": "four-imams",
        "title": "Имамы четырёх суннитских мазхабов",
        "people": [
          {
            "personId": "abuHanifa",
            "description": "Имам, к которому восходит ханафитский мазхаб. Куфа."
          },
          {
            "personId": "malik",
            "description": "Имам, к которому восходит маликитский мазхаб. Медина. Автор «Аль-Муватта»."
          },
          {
            "personId": "shafii",
            "description": "Имам, к которому восходит шафиитский мазхаб. Автор «Ар-Рисаля» и «Аль-Умм»."
          },
          {
            "personId": "ahmad",
            "description": "Имам, к которому восходит ханбалитский мазхаб. Багдад. Составитель «Аль-Муснад»."
          }
        ]
      }
    ]
  },
  {
    "id": "abbasid-hadith-scholars",
    "title": "Мухаддисы эпохи Аббасидов",
    "description": "IV–V века хиджры. Время политической раздробленности Аббасидского халифата и возвышения Буидов. Границы блока обозначают годы жизни представленных учёных.",
    "dates": {
      "hijri": "306–430 г. х.",
      "gregorian": "ок. 918–1038 гг."
    },
    "groups": [
      {
        "id": "hadith-masters",
        "title": "Знатоки хадисов и авторы сборников",
        "people": [
          {
            "personId": "daraqutni",
            "description": "Багдадский мухаддис и критик хадисов. Автор «Ас-Сунан» и «Аль-Иляль». Застал установление власти Буидов в Багдаде в 334 г. х."
          },
          {
            "personId": "abuNuaym",
            "description": "Мухаддис из Исфахана. Автор «Хильят аль-аулия ва табакат аль-асфия»."
          }
        ]
      }
    ]
  }
];
