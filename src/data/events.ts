import { rashidunEvents } from "./rashidun";
import type { HistoricalEvent } from "../types/chronology";

// Названия тем — по серии Набиля Авади; содержание и связи — по аль-Мубаракфури.
// sortOrder сохраняет последовательность уроков, а не заменяет историческую дату.
// Участники: только подтверждённые связи с уже существующими people; список неполный.
// Общие темы и спорные датировки намеренно не получают выдуманной точной даты.
// См. docs/prophetic-events-sources.md.
export const events: HistoricalEvent[] = [
  ...rashidunEvents,
  {
    "id": "arabia-before-islam",
    "title": "Арабы в эпоху джахилии",
    "description": "Общественная и религиозная жизнь Аравии до начала пророческой миссии.",
    "periodId": "prophetic-era",
    "dateNote": "Вводная обзорная тема, а не единичное датированное событие.",
    "sortOrder": 10,
    "participants": [],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 1",
        "url": "https://www.old.way2allah.com/khotab-series-646.htm"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Арабы в эпоху джахилии",
        "url": "https://shamela.ws/book/9820"
      }
    ]
  },
  {
    "id": "year-of-elephant",
    "title": "Год слона",
    "description": "Поход Абрахи к Каабе и гибель его войска.",
    "periodId": "prophetic-era",
    "start": {
      "hijri": "ок. 53 до х.",
      "gregorian": "ок. 571 г."
    },
    "dateNote": "Датировка дана по аль-Мубаракфури; точный год обсуждается.",
    "sortOrder": 20,
    "participants": [
      {
        "personId": "abraha",
        "role": "Возглавил поход к Каабе",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Год слона",
            "url": "https://shamela.ws/book/9820/40"
          }
        ]
      },
      {
        "personId": "abdMuttalib",
        "role": "Упомянут в повествовании о годе слона",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Год слона",
            "url": "https://shamela.ws/book/9820/40"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 2",
        "url": "https://www.old.way2allah.com/khotab-series-646.htm"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Год слона",
        "url": "https://shamela.ws/book/9820/40"
      }
    ]
  },
  {
    "id": "birth-and-childhood",
    "title": "Рождение Пророка ﷺ, Халима и утрата матери и деда",
    "description": "Рождение в Мекке и ранние годы жизни до перехода под опеку Абу Талиба.",
    "periodId": "prophetic-era",
    "start": {
      "hijri": "ок. 53 до х.",
      "gregorian": "ок. 571 г."
    },
    "dateNote": "Урок объединяет несколько событий детства. Дата начала — по версии автора книги; в карточке личности указан приблизительный 570 год. Конец — приблизительный ориентир по возрасту восьми лет, не точная дата.",
    "sortOrder": 30,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Рождение и детство",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Рождение Пророка ﷺ, Халима и утрата матери и деда",
            "url": "https://shamela.ws/book/9820/43"
          }
        ]
      },
      {
        "personId": "halima",
        "role": "Кормилица Пророка ﷺ",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Рождение Пророка ﷺ, Халима и утрата матери и деда",
            "url": "https://shamela.ws/book/9820/44"
          }
        ]
      },
      {
        "personId": "amina",
        "role": "Мать Пророка ﷺ",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Рождение Пророка ﷺ, Халима и утрата матери и деда",
            "url": "https://shamela.ws/book/9820/46"
          }
        ]
      },
      {
        "personId": "abdMuttalib",
        "role": "Дед и опекун после смерти матери",
        "sortOrder": 30,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Рождение Пророка ﷺ, Халима и утрата матери и деда",
            "url": "https://shamela.ws/book/9820/46"
          }
        ]
      },
      {
        "personId": "abuTalib",
        "role": "Принял опеку после смерти деда",
        "sortOrder": 40,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Рождение Пророка ﷺ, Халима и утрата матери и деда",
            "url": "https://shamela.ws/book/9820/46"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 3",
        "url": "https://www.old.way2allah.com/khotab-series-646.htm"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Рождение Пророка ﷺ, Халима и утрата матери и деда",
        "url": "https://shamela.ws/book/9820/43"
      }
    ],
    "end": {
      "hijri": "ок. 45 до х.",
      "gregorian": "ок. 579 г."
    }
  },
  {
    "id": "marriage-khadija",
    "title": "Женитьба Пророка ﷺ на Хадидже",
    "description": "После торговой поездки состоялся брак с Хадиджей бинт Хувайлид.",
    "periodId": "prophetic-era",
    "sortOrder": 40,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Супруг Хадиджи",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Женитьба Пророка ﷺ на Хадидже",
            "url": "https://shamela.ws/book/9820/49"
          }
        ]
      },
      {
        "personId": "khadija",
        "role": "Супруга Пророка ﷺ",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Женитьба Пророка ﷺ на Хадидже",
            "url": "https://shamela.ws/book/9820/49"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 4",
        "url": "https://www.old.way2allah.com/khotab-series-646.htm"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Женитьба Пророка ﷺ на Хадидже",
        "url": "https://shamela.ws/book/9820/49"
      }
    ]
  },
  {
    "id": "first-revelation",
    "title": "Начало ниспослания откровения",
    "description": "В пещере Хира началось ниспослание Корана Пророку ﷺ.",
    "periodId": "prophetic-era",
    "start": {
      "hijri": "13 до х.",
      "gregorian": "610 г."
    },
    "dateNote": "Год указан как ориентир; автор книги рассматривает разногласия о точном дне.",
    "sortOrder": 50,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Получил первое откровение",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Начало ниспослания откровения",
            "url": "https://shamela.ws/book/9820/54"
          }
        ]
      },
      {
        "personId": "khadija",
        "role": "Поддержала Пророка ﷺ после откровения",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Начало ниспослания откровения",
            "url": "https://shamela.ws/book/9820/55"
          }
        ]
      },
      {
        "personId": "waraqa",
        "role": "Выслушал рассказ о явлении ангела",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Начало ниспослания откровения",
            "url": "https://shamela.ws/book/9820/55"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 5",
        "url": "https://www.old.way2allah.com/khotab-series-646.htm"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Начало ниспослания откровения",
        "url": "https://shamela.ws/book/9820/54"
      }
    ]
  },
  {
    "id": "call-to-islam",
    "title": "Призыв к Аллаху и его открытое провозглашение",
    "description": "Первые последователи приняли ислам; за тайным призывом последовал открытый.",
    "periodId": "prophetic-era",
    "dateNote": "Тема охватывает несколько лет мекканского периода.",
    "sortOrder": 60,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Начал призыв",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Призыв к Аллаху и его открытое провозглашение",
            "url": "https://shamela.ws/book/9820/63"
          }
        ]
      },
      {
        "personId": "abuBakr",
        "role": "Один из первых мусульман и проповедников",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Призыв к Аллаху и его открытое провозглашение",
            "url": "https://shamela.ws/book/9820/63"
          }
        ]
      },
      {
        "personId": "ali",
        "role": "Один из первых принявших ислам",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Призыв к Аллаху и его открытое провозглашение",
            "url": "https://shamela.ws/book/9820/63"
          }
        ]
      },
      {
        "personId": "khadija",
        "role": "Одна из первых принявших ислам",
        "sortOrder": 30,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Призыв к Аллаху и его открытое провозглашение",
            "url": "https://shamela.ws/book/9820/63"
          }
        ]
      },
      {
        "personId": "zayd",
        "role": "Один из первых мусульман",
        "sortOrder": 40,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Призыв к Аллаху и его открытое провозглашение",
            "url": "https://shamela.ws/book/9820/63"
          }
        ]
      },
      {
        "personId": "arqam",
        "role": "Предоставил дом для собраний мусульман",
        "sortOrder": 50,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Призыв к Аллаху и его открытое провозглашение",
            "url": "https://shamela.ws/book/9820/78"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 6",
        "url": "https://www.old.way2allah.com/khotab-series-646.htm"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Призыв к Аллаху и его открытое провозглашение",
        "url": "https://shamela.ws/book/9820/63"
      }
    ]
  },
  {
    "id": "plots-against-prophet",
    "title": "Заговоры многобожников против Пророка ﷺ",
    "description": "Курайшиты пытались остановить призыв, обращаясь к Абу Талибу и обсуждая меры против Пророка ﷺ.",
    "periodId": "prophetic-era",
    "dateNote": "Обзор нескольких эпизодов противодействия в Мекке; не смешивать с заговором перед хиджрой.",
    "sortOrder": 70,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Против него направлялись действия курайшитов",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Заговоры многобожников против Пророка ﷺ",
            "url": "https://shamela.ws/book/9820/69"
          }
        ]
      },
      {
        "personId": "abuTalib",
        "role": "Защищал племянника перед курайшитами",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Заговоры многобожников против Пророка ﷺ",
            "url": "https://shamela.ws/book/9820/69"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 7",
        "url": "https://www.old.way2allah.com/khotab-series-646.htm"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Заговоры многобожников против Пророка ﷺ",
        "url": "https://shamela.ws/book/9820/69"
      }
    ]
  },
  {
    "id": "persecution-mecca",
    "title": "Преследование Пророка ﷺ и верующих курайшитами",
    "description": "Мекканские мусульмане столкнулись с насмешками, давлением и преследованиями.",
    "periodId": "prophetic-era",
    "dateNote": "Тема не имеет одной даты; связи участников добавляются по конкретным эпизодам.",
    "sortOrder": 80,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Подвергался нападениям",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Преследование Пророка ﷺ и верующих курайшитами",
            "url": "https://shamela.ws/book/9820/75"
          }
        ]
      },
      {
        "personId": "abuBakr",
        "role": "Выкупил и освободил Биляля",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Преследование Пророка ﷺ и верующих курайшитами",
            "url": "https://shamela.ws/book/9820/77"
          }
        ]
      },
      {
        "personId": "uthman",
        "role": "Подвергался притеснениям со стороны дяди",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Преследование Пророка ﷺ и верующих курайшитами",
            "url": "https://shamela.ws/book/9820/76"
          }
        ]
      },
      {
        "personId": "bilal",
        "role": "Перенёс пытки в Мекке",
        "sortOrder": 30,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Преследование Пророка ﷺ и верующих курайшитами",
            "url": "https://shamela.ws/book/9820/76"
          }
        ]
      },
      {
        "personId": "musab",
        "role": "Подвергался давлению со стороны матери",
        "sortOrder": 40,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Преследование Пророка ﷺ и верующих курайшитами",
            "url": "https://shamela.ws/book/9820/76"
          }
        ]
      },
      {
        "personId": "ammar",
        "role": "Подвергался пыткам",
        "sortOrder": 50,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Преследование Пророка ﷺ и верующих курайшитами",
            "url": "https://shamela.ws/book/9820/77"
          }
        ]
      },
      {
        "personId": "yasir",
        "role": "Погиб во время преследований",
        "sortOrder": 60,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Преследование Пророка ﷺ и верующих курайшитами",
            "url": "https://shamela.ws/book/9820/77"
          }
        ]
      },
      {
        "personId": "sumayya",
        "role": "Погибла во время преследований",
        "sortOrder": 70,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Преследование Пророка ﷺ и верующих курайшитами",
            "url": "https://shamela.ws/book/9820/77"
          }
        ]
      },
      {
        "personId": "khabbab",
        "role": "Подвергался пыткам",
        "sortOrder": 80,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Преследование Пророка ﷺ и верующих курайшитами",
            "url": "https://shamela.ws/book/9820/77"
          }
        ]
      },
      {
        "personId": "abuJahl",
        "role": "Участвовал в преследованиях мусульман",
        "sortOrder": 90,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Преследование Пророка ﷺ и верующих курайшитами",
            "url": "https://shamela.ws/book/9820/77"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 8",
        "url": "https://www.old.way2allah.com/khotab-series-646.htm"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Преследование Пророка ﷺ и верующих курайшитами",
        "url": "https://shamela.ws/book/9820"
      }
    ]
  },
  {
    "id": "migration-abyssinia",
    "title": "Переселение в Эфиопию",
    "description": "Часть сподвижников переселилась в Эфиопию, спасаясь от преследований.",
    "periodId": "prophetic-era",
    "start": {
      "hijri": "ок. 8 до х.",
      "gregorian": "ок. 615 г."
    },
    "dateNote": "Начало — пятый год пророчества. Пророк ﷺ не переселялся в Эфиопию.",
    "sortOrder": 90,
    "participants": [
      {
        "personId": "uthman",
        "role": "Участник первого переселения вместе с Рукайей",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Переселение в Эфиопию",
            "url": "https://shamela.ws/book/9820/79"
          }
        ]
      },
      {
        "personId": "ruqayya",
        "role": "Переселилась вместе с Усманом",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Переселение в Эфиопию",
            "url": "https://shamela.ws/book/9820/79"
          }
        ]
      },
      {
        "personId": "jafar",
        "role": "Выступал перед негусом от имени мусульман",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Переселение в Эфиопию",
            "url": "https://shamela.ws/book/9820/82"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 9",
        "url": "https://www.old.way2allah.com/khotab-series-646.htm"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Переселение в Эфиопию",
        "url": "https://shamela.ws/book/9820/79"
      }
    ]
  },
  {
    "id": "boycott-year-of-sorrow",
    "title": "Бойкот и год печали",
    "description": "Блокада бану Хашим и бану аль-Мутталиб; позднее — смерть Абу Талиба и Хадиджи.",
    "periodId": "prophetic-era",
    "dateNote": "Объединённая тема: бойкот начался в седьмом году пророчества; год печали относится к десятому.",
    "sortOrder": 100,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Пережил бойкот и утрату близких",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Бойкот и год печали",
            "url": "https://shamela.ws/book/9820/95"
          }
        ]
      },
      {
        "personId": "abuTalib",
        "role": "Защищал Пророка ﷺ; его смерть — часть темы года печали",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Бойкот и год печали",
            "url": "https://shamela.ws/book/9820/101"
          }
        ]
      },
      {
        "personId": "khadija",
        "role": "Её кончина — часть темы года печали",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Бойкот и год печали",
            "url": "https://shamela.ws/book/9820/102"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 10",
        "url": "https://www.old.way2allah.com/khotab-series-646.htm"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Бойкот и год печали",
        "url": "https://shamela.ws/book/9820/95"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Год печали",
        "url": "https://shamela.ws/book/9820/101"
      }
    ]
  },
  {
    "id": "isra-miraj-aqaba",
    "title": "Исра, мирадж и присяга при Акабе",
    "description": "Ночное перенесение и вознесение; присяги жителей Ясриба перед переселением.",
    "periodId": "prophetic-era",
    "dateNote": "Урок объединяет разные события. Точная дата исра и мираджа спорна; дата присяги не используется как дата вознесения.",
    "sortOrder": 110,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Ночное перенесение и вознесение; принимал присяги",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Исра, мирадж и присяга при Акабе",
            "url": "https://shamela.ws/book/9820/122"
          }
        ]
      },
      {
        "personId": "musab",
        "role": "После присяги направлен учить жителей Ясриба",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Исра, мирадж и присяга при Акабе",
            "url": "https://shamela.ws/book/9820/128"
          }
        ]
      },
      {
        "personId": "saadMuadh",
        "role": "Принял ислам во время миссии Мусаба",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Исра, мирадж и присяга при Акабе",
            "url": "https://shamela.ws/book/9820/129"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 11",
        "url": "https://www.old.way2allah.com/khotab-series-646.htm"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Исра, мирадж и присяга при Акабе",
        "url": "https://shamela.ws/book/9820/122"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Первая присяга при Акабе",
        "url": "https://shamela.ws/book/9820/127"
      }
    ]
  },
  {
    "id": "hijra-medina",
    "title": "Переселение в Медину",
    "description": "Пророк ﷺ и Абу Бакр покинули Мекку и направились в Медину.",
    "periodId": "prophetic-era",
    "start": {
      "hijri": "1 г. х.",
      "gregorian": "622 г."
    },
    "sortOrder": 120,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Совершил переселение",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Переселение в Медину",
            "url": "https://shamela.ws/book/9820/146"
          }
        ]
      },
      {
        "personId": "abuBakr",
        "role": "Спутник Пророка ﷺ в пути",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Переселение в Медину",
            "url": "https://shamela.ws/book/9820/146"
          }
        ]
      },
      {
        "personId": "ali",
        "role": "Остался в постели Пророка ﷺ в ночь его ухода",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Переселение в Медину",
            "url": "https://shamela.ws/book/9820/145"
          }
        ]
      },
      {
        "personId": "asma",
        "role": "Разговаривала с разыскивавшими Абу Бакра курайшитами",
        "sortOrder": 30,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Переселение в Медину",
            "url": "https://shamela.ws/book/9820/148"
          }
        ]
      },
      {
        "personId": "abdullahAbuBakr",
        "role": "Приносил сведения к пещере Саур",
        "sortOrder": 40,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Переселение в Медину",
            "url": "https://shamela.ws/book/9820/147"
          }
        ]
      },
      {
        "personId": "amirFuhayra",
        "role": "Помогал укрывавшимся в пещере",
        "sortOrder": 50,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Переселение в Медину",
            "url": "https://shamela.ws/book/9820/147"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 12",
        "url": "https://www.old.way2allah.com/khotab-series-646.htm"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Переселение в Медину",
        "url": "https://shamela.ws/book/9820/146"
      }
    ]
  },
  {
    "id": "beginning-medina",
    "title": "Начало мединского периода",
    "description": "После переселения началось устройство новой мусульманской общины в Медине.",
    "periodId": "prophetic-era",
    "start": {
      "hijri": "1 г. х.",
      "gregorian": "622 г."
    },
    "sortOrder": 130,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Руководил устройством общины",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Начало мединского периода",
            "url": "https://shamela.ws/book/9820/157"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 13",
        "url": "https://www.old.way2allah.com/khotab-series-646.htm"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Начало мединского периода",
        "url": "https://shamela.ws/book/9820/157"
      }
    ]
  },
  {
    "id": "expeditions-before-badr",
    "title": "Походы и отряды до Бадра",
    "description": "Первые походы и отправка отрядов после переселения, до большого сражения при Бадре.",
    "periodId": "prophetic-era",
    "start": {
      "hijri": "1 г. х.",
      "gregorian": "ок. 623 г."
    },
    "dateNote": "Тема охватывает 1–2 гг. х.; григорианский год — приблизительный ориентир начала.",
    "sortOrder": 140,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Возглавил поход на аль-Абва",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Походы и отряды до Бадра",
            "url": "https://shamela.ws/book/9820/176"
          }
        ]
      },
      {
        "personId": "saad",
        "role": "Возглавил отряд к аль-Харрару",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Походы и отряды до Бадра",
            "url": "https://shamela.ws/book/9820/176"
          }
        ]
      },
      {
        "personId": "hamza",
        "role": "Командовал отрядом к побережью",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Походы и отряды до Бадра",
            "url": "https://shamela.ws/book/9820/175"
          }
        ]
      },
      {
        "personId": "miqdad",
        "role": "Присоединился к мусульманам во время похода к Рабигу",
        "sortOrder": 30,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Походы и отряды до Бадра",
            "url": "https://shamela.ws/book/9820/175"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 14",
        "url": "https://www.old.way2allah.com/khotab-series-646.htm"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Походы и отряды до Бадра",
        "url": "https://shamela.ws/book/9820/176"
      }
    ]
  },
  {
    "id": "badr",
    "title": "Великое сражение при Бадре",
    "description": "Мусульмане под руководством Пророка ﷺ встретились с войском курайшитов.",
    "periodId": "prophetic-era",
    "start": {
      "hijri": "2 г. х.",
      "gregorian": "624 г."
    },
    "dateNote": "Рамадан 2 г. х. Список участников пока содержит только проверенные связи с имеющимися карточками.",
    "sortOrder": 150,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Возглавил мусульман",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Великое сражение при Бадре",
            "url": "https://shamela.ws/book/9820/181"
          }
        ]
      },
      {
        "personId": "zubayr",
        "role": "Участник похода, один из всадников",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Великое сражение при Бадре",
            "url": "https://shamela.ws/book/9820/181"
          }
        ]
      },
      {
        "personId": "ali",
        "role": "Знаменосец мухаджиров",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Великое сражение при Бадре",
            "url": "https://shamela.ws/book/9820/182"
          }
        ]
      },
      {
        "personId": "saadMuadh",
        "role": "Знаменосец ансаров",
        "sortOrder": 30,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Великое сражение при Бадре",
            "url": "https://shamela.ws/book/9820/182"
          }
        ]
      },
      {
        "personId": "musab",
        "role": "Нёс общее знамя войска",
        "sortOrder": 40,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Великое сражение при Бадре",
            "url": "https://shamela.ws/book/9820/182"
          }
        ]
      },
      {
        "personId": "miqdad",
        "role": "Командовал левым крылом",
        "sortOrder": 50,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Великое сражение при Бадре",
            "url": "https://shamela.ws/book/9820/182"
          }
        ]
      },
      {
        "personId": "abuLubaba",
        "role": "Назначен оставаться наместником в Медине; не участник боя",
        "sortOrder": 60,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Великое сражение при Бадре",
            "url": "https://shamela.ws/book/9820/182"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 15",
        "url": "https://www.old.way2allah.com/khotab-series-646.htm"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Великое сражение при Бадре",
        "url": "https://shamela.ws/book/9820/181"
      }
    ]
  },
  {
    "id": "banu-qaynuqa",
    "title": "Изгнание бану Кайнука",
    "description": "Противостояние с бану Кайнука в Медине после Бадра.",
    "periodId": "prophetic-era",
    "start": {
      "hijri": "2 г. х.",
      "gregorian": "624 г."
    },
    "sortOrder": 160,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Возглавил поход",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Изгнание бану Кайнука",
            "url": "https://shamela.ws/book/9820/213"
          }
        ]
      },
      {
        "personId": "hamza",
        "role": "Нёс знамя мусульман",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Изгнание бану Кайнука",
            "url": "https://shamela.ws/book/9820/213"
          }
        ]
      },
      {
        "personId": "abuLubaba",
        "role": "Оставлен наместником в Медине",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Изгнание бану Кайнука",
            "url": "https://shamela.ws/book/9820/212"
          }
        ]
      },
      {
        "personId": "muhammadMaslama",
        "role": "Собирал имущество после осады",
        "sortOrder": 30,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Изгнание бану Кайнука",
            "url": "https://shamela.ws/book/9820/213"
          }
        ]
      },
      {
        "personId": "abdullahUbayy",
        "role": "Ходатайствовал за бану Кайнука",
        "sortOrder": 40,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Изгнание бану Кайнука",
            "url": "https://shamela.ws/book/9820/213"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 16",
        "url": "https://www.old.way2allah.com/khotab-series-646.htm"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Изгнание бану Кайнука",
        "url": "https://shamela.ws/book/9820/210"
      }
    ]
  },
  {
    "id": "uhud",
    "title": "Сражение при Ухуде",
    "description": "Курайшиты выступили против Медины после поражения при Бадре.",
    "periodId": "prophetic-era",
    "start": {
      "hijri": "3 г. х.",
      "gregorian": "625 г."
    },
    "sortOrder": 170,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Руководил мусульманским войском",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Сражение при Ухуде",
            "url": "https://shamela.ws/book/9820/225"
          }
        ]
      },
      {
        "personId": "talha",
        "role": "Защищал Пророка ﷺ",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Сражение при Ухуде",
            "url": "https://shamela.ws/book/9820/239"
          }
        ]
      },
      {
        "personId": "saad",
        "role": "Защищал Пророка ﷺ",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Сражение при Ухуде",
            "url": "https://shamela.ws/book/9820/239"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 17",
        "url": "https://www.old.way2allah.com/khotab-series-646.htm"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Сражение при Ухуде",
        "url": "https://shamela.ws/book/9820/220"
      }
    ]
  },
  {
    "id": "hamra-al-asad",
    "title": "Поход к Хамра аль-Асад",
    "description": "После Ухуда мусульмане вышли вслед за отступившим войском курайшитов.",
    "periodId": "prophetic-era",
    "start": {
      "hijri": "3 г. х.",
      "gregorian": "625 г."
    },
    "dateNote": "В каталоге урок имеет краткое название; в расширенном оглавлении сюда также входят ар-Раджи, Бир-Мауна и бану ан-Надир. Здесь датирован только Хамра аль-Асад.",
    "sortOrder": 180,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Руководил выходом после Ухуда",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Поход к Хамра аль-Асад",
            "url": "https://shamela.ws/book/9820/254"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 18",
        "url": "https://rasoulallah.net/ar/videos/category/677"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Поход к Хамра аль-Асад",
        "url": "https://shamela.ws/book/9820/254"
      }
    ]
  },
  {
    "id": "ahzab",
    "title": "Битва союзных племён — аль-Ахзаб",
    "description": "Союз племён выступил против Медины; город защищали с использованием рва.",
    "periodId": "prophetic-era",
    "start": {
      "hijri": "5 г. х.",
      "gregorian": "627 г."
    },
    "sortOrder": 190,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Организовал защиту Медины и участвовал в рытье рва",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Битва союзных племён — аль-Ахзаб",
            "url": "https://shamela.ws/book/9820/271"
          }
        ]
      },
      {
        "personId": "salman",
        "role": "Предложил вырыть ров",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Битва союзных племён — аль-Ахзаб",
            "url": "https://shamela.ws/book/9820/271"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 19",
        "url": "https://rasoulallah.net/ar/videos/category/677"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Битва союзных племён — аль-Ахзаб",
        "url": "https://shamela.ws/book/9820/270"
      }
    ]
  },
  {
    "id": "banu-qurayza",
    "title": "Поход против бану Курайза",
    "description": "После ухода союзных войск мусульмане направились к укреплениям бану Курайза.",
    "periodId": "prophetic-era",
    "start": {
      "hijri": "5 г. х.",
      "gregorian": "627 г."
    },
    "sortOrder": 200,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Возглавил поход",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Поход против бану Курайза",
            "url": "https://shamela.ws/book/9820/281"
          }
        ]
      },
      {
        "personId": "ali",
        "role": "Знаменосец, направленный вперёд к укреплениям",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Поход против бану Курайза",
            "url": "https://shamela.ws/book/9820/281"
          }
        ]
      },
      {
        "personId": "ummSalama",
        "role": "В её доме Пророк ﷺ получил повеление выступить",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Поход против бану Курайза",
            "url": "https://shamela.ws/book/9820/281"
          }
        ]
      },
      {
        "personId": "abuLubaba",
        "role": "Приходил к бану Курайза для беседы",
        "sortOrder": 30,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Поход против бану Курайза",
            "url": "https://shamela.ws/book/9820/282"
          }
        ]
      },
      {
        "personId": "zubayr",
        "role": "Участвовал в наступлении к укреплениям",
        "sortOrder": 40,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Поход против бану Курайза",
            "url": "https://shamela.ws/book/9820/282"
          }
        ]
      },
      {
        "personId": "saadMuadh",
        "role": "Избран для вынесения решения",
        "sortOrder": 50,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Поход против бану Курайза",
            "url": "https://shamela.ws/book/9820/282"
          }
        ]
      },
      {
        "personId": "muhammadMaslama",
        "role": "Наблюдал за пленными после сдачи укреплений",
        "sortOrder": 60,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Поход против бану Курайза",
            "url": "https://shamela.ws/book/9820/282"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 20",
        "url": "https://rasoulallah.net/ar/videos/category/677"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Поход против бану Курайза",
        "url": "https://shamela.ws/book/9820/281"
      }
    ]
  },
  {
    "id": "banu-mustaliq",
    "title": "Поход против бану аль-Мусталик",
    "description": "Поход к аль-Мурайси и связанные с ним события мединского периода.",
    "periodId": "prophetic-era",
    "start": {
      "hijri": "6 г. х.",
      "gregorian": "ок. 628 г."
    },
    "dateNote": "Выбрана датировка аль-Мубаракфури: шаабан 6 г. х.; существуют другие датировки.",
    "sortOrder": 210,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Возглавил поход",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Поход против бану аль-Мусталик",
            "url": "https://shamela.ws/book/9820/291"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 21",
        "url": "https://rasoulallah.net/ar/videos/category/677"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Поход против бану аль-Мусталик",
        "url": "https://shamela.ws/book/9820/291"
      }
    ]
  },
  {
    "id": "hudaybiyyah",
    "title": "Худайбийский мир",
    "description": "Поход для совершения умры завершился соглашением с курайшитами.",
    "periodId": "prophetic-era",
    "start": {
      "hijri": "6 г. х.",
      "gregorian": "628 г."
    },
    "dateNote": "Зуль-када 6 г. х.",
    "sortOrder": 220,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Заключил соглашение",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Худайбийский мир",
            "url": "https://shamela.ws/book/9820/301"
          }
        ]
      },
      {
        "personId": "uthman",
        "role": "Посланник к курайшитам",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Худайбийский мир",
            "url": "https://shamela.ws/book/9820/305"
          }
        ]
      },
      {
        "personId": "umar",
        "role": "Присутствовал при присяге ар-Ридван",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Худайбийский мир",
            "url": "https://shamela.ws/book/9820/305"
          }
        ]
      },
      {
        "personId": "ali",
        "role": "Записал договор",
        "sortOrder": 30,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Худайбийский мир",
            "url": "https://shamela.ws/book/9820/306"
          }
        ]
      },
      {
        "personId": "ummSalama",
        "role": "Дала совет после заключения мира",
        "sortOrder": 40,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Худайбийский мир",
            "url": "https://shamela.ws/book/9820/307"
          }
        ]
      },
      {
        "personId": "khalid",
        "role": "До принятия ислама командовал противостоявшей мусульманам конницей",
        "sortOrder": 50,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Худайбийский мир",
            "url": "https://shamela.ws/book/9820/302"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 22",
        "url": "https://rasoulallah.net/ar/videos/category/677"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Худайбийский мир",
        "url": "https://shamela.ws/book/9820/301"
      }
    ]
  },
  {
    "id": "khaybar",
    "title": "Взятие Хайбара",
    "description": "Поход к укреплениям Хайбара после Худайбийского соглашения.",
    "periodId": "prophetic-era",
    "start": {
      "hijri": "7 г. х.",
      "gregorian": "628 г."
    },
    "dateNote": "Аль-Мубаракфури относит начало похода к мухарраму 7 г. х.",
    "sortOrder": 230,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Руководил походом",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Взятие Хайбара",
            "url": "https://shamela.ws/book/9820/326"
          }
        ]
      },
      {
        "personId": "ali",
        "role": "Возглавил наступление на укрепление Наим",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Взятие Хайбара",
            "url": "https://shamela.ws/book/9820/331"
          }
        ]
      },
      {
        "personId": "jafar",
        "role": "Прибыл из Эфиопии во время взятия Хайбара",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Взятие Хайбара",
            "url": "https://shamela.ws/book/9820/336"
          }
        ]
      },
      {
        "personId": "abuMusa",
        "role": "Прибыл с переселенцами; не участник штурма",
        "sortOrder": 30,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Взятие Хайбара",
            "url": "https://shamela.ws/book/9820/336"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 23",
        "url": "https://rasoulallah.net/ar/videos/category/677"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Взятие Хайбара",
        "url": "https://shamela.ws/book/9820/326"
      }
    ]
  },
  {
    "id": "umrat-al-qada-mutah",
    "title": "Возмещённая умра и сражение при Муте",
    "description": "Мусульмане совершили возмещённую умру; позднее войско было отправлено к Муте.",
    "periodId": "prophetic-era",
    "start": {
      "hijri": "7 г. х.",
      "gregorian": "629 г."
    },
    "dateNote": "Это два события одного урока: умра — зуль-када 7 г. х., Мута — джумада аль-уля 8 г. х.",
    "sortOrder": 240,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Совершил умру; лично в сражении при Муте не участвовал",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Возмещённая умра и сражение при Муте",
            "url": "https://shamela.ws/book/9820/345"
          }
        ]
      },
      {
        "personId": "zayd",
        "role": "Первый назначенный командир при Муте",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Возмещённая умра и сражение при Муте",
            "url": "https://shamela.ws/book/9820/348"
          }
        ]
      },
      {
        "personId": "jafar",
        "role": "Второй назначенный командир при Муте",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Возмещённая умра и сражение при Муте",
            "url": "https://shamela.ws/book/9820/348"
          }
        ]
      },
      {
        "personId": "abdullahRawaha",
        "role": "Третий назначенный командир при Муте",
        "sortOrder": 30,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Возмещённая умра и сражение при Муте",
            "url": "https://shamela.ws/book/9820/348"
          }
        ]
      },
      {
        "personId": "khalid",
        "role": "Принял командование при Муте",
        "sortOrder": 40,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Возмещённая умра и сражение при Муте",
            "url": "https://shamela.ws/book/9820/352"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 24",
        "url": "https://rasoulallah.net/ar/videos/category/677"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Возмещённая умра и сражение при Муте",
        "url": "https://shamela.ws/book/9820/345"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Сражение при Муте",
        "url": "https://shamela.ws/book/9820/348"
      }
    ],
    "end": {
      "hijri": "8 г. х.",
      "gregorian": "629 г."
    }
  },
  {
    "id": "conquest-mecca",
    "title": "Взятие Мекки",
    "description": "После нарушения перемирия мусульманское войско направилось к Мекке.",
    "periodId": "prophetic-era",
    "start": {
      "hijri": "8 г. х.",
      "gregorian": "630 г."
    },
    "dateNote": "Рамадан 8 г. х.",
    "sortOrder": 250,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Руководил вступлением в Мекку",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Взятие Мекки",
            "url": "https://shamela.ws/book/9820/363"
          }
        ]
      },
      {
        "personId": "zubayr",
        "role": "Командовал левым крылом",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Взятие Мекки",
            "url": "https://shamela.ws/book/9820/363"
          }
        ]
      },
      {
        "personId": "abuUbayda",
        "role": "Командовал пешими отрядами",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Взятие Мекки",
            "url": "https://shamela.ws/book/9820/363"
          }
        ]
      },
      {
        "personId": "khalid",
        "role": "Командовал правым крылом",
        "sortOrder": 30,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Взятие Мекки",
            "url": "https://shamela.ws/book/9820/363"
          }
        ]
      },
      {
        "personId": "bilal",
        "role": "Произнёс азан на Каабе",
        "sortOrder": 40,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Взятие Мекки",
            "url": "https://shamela.ws/book/9820/365"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 25",
        "url": "https://rasoulallah.net/ar/videos/category/677"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Взятие Мекки",
        "url": "https://shamela.ws/book/9820/355"
      }
    ]
  },
  {
    "id": "hunayn",
    "title": "Сражение при Хунайне",
    "description": "После взятия Мекки состоялось сражение с хавазин и их союзниками.",
    "periodId": "prophetic-era",
    "start": {
      "hijri": "8 г. х.",
      "gregorian": "630 г."
    },
    "dateNote": "Шавваль 8 г. х.",
    "sortOrder": 260,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Возглавил мусульман и сохранял стойкость при отступлении",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Сражение при Хунайне",
            "url": "https://shamela.ws/book/9820/375"
          }
        ]
      },
      {
        "personId": "abbas",
        "role": "Призывал сподвижников вернуться к бою",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Сражение при Хунайне",
            "url": "https://shamela.ws/book/9820/376"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 26",
        "url": "https://rasoulallah.net/ar/videos/category/677"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Сражение при Хунайне",
        "url": "https://shamela.ws/book/9820/373"
      }
    ]
  },
  {
    "id": "tabuk",
    "title": "Поход на Табук",
    "description": "Подготовка и выступление мусульманского войска к северным границам Аравии.",
    "periodId": "prophetic-era",
    "start": {
      "hijri": "9 г. х.",
      "gregorian": "630 г."
    },
    "dateNote": "Раджаб 9 г. х. Название урока 27 сверено с официальным каналом: Табук, не Ярмук.",
    "sortOrder": 270,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Руководил подготовкой и походом",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Поход на Табук",
            "url": "https://shamela.ws/book/9820/390"
          }
        ]
      },
      {
        "personId": "uthman",
        "role": "Помог снарядить войско",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Поход на Табук",
            "url": "https://shamela.ws/book/9820/390"
          }
        ]
      },
      {
        "personId": "abdurrahman",
        "role": "Пожертвовал средства на подготовку",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Поход на Табук",
            "url": "https://shamela.ws/book/9820/390"
          }
        ]
      },
      {
        "personId": "abuBakr",
        "role": "Пожертвовал средства на подготовку",
        "sortOrder": 30,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Поход на Табук",
            "url": "https://shamela.ws/book/9820/390"
          }
        ]
      },
      {
        "personId": "umar",
        "role": "Пожертвовал средства на подготовку",
        "sortOrder": 40,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Поход на Табук",
            "url": "https://shamela.ws/book/9820/391"
          }
        ]
      },
      {
        "personId": "talha",
        "role": "Пожертвовал средства на подготовку",
        "sortOrder": 50,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Поход на Табук",
            "url": "https://shamela.ws/book/9820/391"
          }
        ]
      },
      {
        "personId": "abbas",
        "role": "Пожертвовал средства на подготовку",
        "sortOrder": 60,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Поход на Табук",
            "url": "https://shamela.ws/book/9820/391"
          }
        ]
      },
      {
        "personId": "muhammadMaslama",
        "role": "Помог со снаряжением; упомянут как возможный наместник в Медине",
        "sortOrder": 70,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Поход на Табук",
            "url": "https://shamela.ws/book/9820/391"
          }
        ]
      },
      {
        "personId": "ali",
        "role": "Оставлен при семье Пророка ﷺ в Медине, не участник похода",
        "sortOrder": 80,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Поход на Табук",
            "url": "https://shamela.ws/book/9820/391"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 27",
        "url": "https://www.youtube.com/watch?v=bzvkMib0g6g"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Поход на Табук",
        "url": "https://shamela.ws/book/9820/387"
      }
    ]
  },
  {
    "id": "farewell-pilgrimage",
    "title": "Прощальное паломничество",
    "description": "Пророк ﷺ совершил хадж вместе с большим числом мусульман.",
    "periodId": "prophetic-era",
    "start": {
      "hijri": "10 г. х.",
      "gregorian": "632 г."
    },
    "sortOrder": 280,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Совершил хадж и обучал паломников",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Прощальное паломничество",
            "url": "https://shamela.ws/book/9820/413"
          }
        ]
      },
      {
        "personId": "aisha",
        "role": "Сопровождала Пророка ﷺ в паломничестве",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Прощальное паломничество",
            "url": "https://shamela.ws/book/9820/413"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 28",
        "url": "https://rasoulallah.net/ar/videos/category/677"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Прощальное паломничество",
        "url": "https://shamela.ws/book/9820/413"
      }
    ]
  },
  {
    "id": "death-prophet",
    "title": "Кончина Пророка ﷺ",
    "description": "Кончина Пророка ﷺ в Медине и реакция сподвижников на эту утрату.",
    "periodId": "prophetic-era",
    "start": {
      "hijri": "11 г. х.",
      "gregorian": "632 г."
    },
    "dateNote": "Указан год; точный день не закрепляется как бесспорный.",
    "sortOrder": 290,
    "participants": [
      {
        "personId": "muhammad",
        "role": "Кончина в Медине",
        "sortOrder": 0,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Кончина Пророка ﷺ",
            "url": "https://shamela.ws/book/9820/424"
          }
        ]
      },
      {
        "personId": "umar",
        "role": "Реакция на известие о кончине",
        "sortOrder": 10,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Кончина Пророка ﷺ",
            "url": "https://shamela.ws/book/9820/424"
          }
        ]
      },
      {
        "personId": "abuBakr",
        "role": "Прибыл после известия о кончине",
        "sortOrder": 20,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Эпизод: Кончина Пророка ﷺ",
            "url": "https://shamela.ws/book/9820/424"
          }
        ]
      },
      {
        "personId": "aisha",
        "role": "Находилась рядом в последние минуты жизни",
        "sortOrder": 30,
        "sources": [
          {
            "title": "Ар-Рахик аль-Махтум",
            "author": "Сафи ар-Рахман аль-Мубаракфури",
            "chapter": "Кончина Пророка ﷺ",
            "url": "https://shamela.ws/book/9820/424"
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Сира Пророка ﷺ — серия уроков",
        "author": "Набиль Авади",
        "chapter": "Урок 29",
        "url": "https://rasoulallah.net/ar/videos/category/677"
      },
      {
        "title": "Ар-Рахик аль-Махтум",
        "author": "Сафи ар-Рахман аль-Мубаракфури",
        "chapter": "Кончина Пророка ﷺ",
        "url": "https://shamela.ws/book/9820/424"
      }
    ]
  }
];
