import type { HistoricalEvent, HistoricalPeriod, Person } from "../types/chronology";

const chronologyBook = "Аль-Маусу‘а аль-муяссара фи-т-тарих аль-ислями";
const pdf = "https://turkistanilibrary.com/sites/default/files/elmewsuetul-muyessere-fi-tarih-islami.pdf";

const bookSource = (page: number) => ({
  title: chronologyBook,
  chapter: "Халифат Бану аль-Аббас",
  page: String(page),
  url: `${pdf}#page=${page}`
});

export const abbasidPeople: Record<string, Person> = {
  "abbasSaffah": {
    id: "abbasSaffah",
    name: "Абу аль-Аббас ас-Саффах",
    honorific: "",
    birth: { hijri: "Не установлено", gregorian: "—" },
    death: { hijri: "136 г. х.", gregorian: "753–754 гг." },
    cities: ["Куфа", "Анбар"],
    description: "Первый халиф из династии Аббасидов.",
    dateNote: "Год рождения в использованной главе не указан.",
    sources: [bookSource(245)]
  },
  "abbasMansur": {
    id: "abbasMansur",
    name: "Абу Джафар аль-Мансур",
    honorific: "",
    birth: { hijri: "Не установлено", gregorian: "—" },
    death: { hijri: "158 г. х.", gregorian: "775 г." },
    cities: ["Куфа", "Багдад"],
    description: "Второй халиф Аббасидов; при нём началось строительство Багдада.",
    dateNote: "Год рождения в использованной главе не указан.",
    sources: [bookSource(249), bookSource(251)]
  },
  "abbasMahdi": {
    id: "abbasMahdi",
    name: "Мухаммад аль-Махди ибн аль-Мансур",
    honorific: "",
    birth: { hijri: "Не установлено", gregorian: "—" },
    death: { hijri: "169 г. х.", gregorian: "785 г." },
    cities: ["Багдад"],
    description: "Третий халиф Аббасидов.",
    dateNote: "Год рождения в использованной главе не указан.",
    sources: [bookSource(251)]
  },
  "abbasHadi": {
    id: "abbasHadi",
    name: "Муса аль-Хади ибн аль-Махди",
    honorific: "",
    birth: { hijri: "Не установлено", gregorian: "—" },
    death: { hijri: "170 г. х.", gregorian: "786 г." },
    cities: ["Багдад"],
    description: "Четвёртый халиф Аббасидов.",
    dateNote: "Год рождения в использованной главе не указан.",
    sources: [bookSource(253)]
  },
  "harunRashid": {
    id: "harunRashid",
    name: "Харун ар-Рашид",
    honorific: "",
    birth: { hijri: "Не установлено", gregorian: "—" },
    death: { hijri: "193 г. х.", gregorian: "809 г." },
    cities: ["Багдад", "Тус"],
    description: "Пятый халиф Аббасидов; правил в 170–193 гг. х.",
    dateNote: "Год рождения в использованной главе не указан.",
    sources: [bookSource(255), bookSource(271)]
  },
  "abbasAmin": {
    id: "abbasAmin",
    name: "Мухаммад аль-Амин ибн Харун",
    honorific: "",
    birth: { hijri: "Не установлено", gregorian: "—" },
    death: { hijri: "198 г. х.", gregorian: "813 г." },
    cities: ["Багдад"],
    description: "Халиф Аббасидов после Харуна ар-Рашида.",
    dateNote: "Год рождения в использованной главе не указан.",
    sources: [bookSource(271)]
  },
  "abbasMamun": {
    id: "abbasMamun",
    name: "Абдуллах аль-Ма’мун ибн Харун",
    honorific: "",
    birth: { hijri: "Не установлено", gregorian: "—" },
    death: { hijri: "218 г. х.", gregorian: "833 г." },
    cities: ["Мерв", "Багдад"],
    description: "Сын Харуна ар-Рашида; получил власть после гибели аль-Амина.",
    dateNote: "Период его правления выходит за границы этого раздела.",
    sources: [bookSource(271)]
  }
};

export const abbasidPeriod: HistoricalPeriod = {
  id: "early-schools",
  title: "Ранние Аббасиды",
  description: "Становление Аббасидского халифата и первые поколения учёных. Личности и события расположены в хронологическом порядке; границы относятся к началу раздела о ранних Аббасидах.",
  dates: {
    hijri: "132–199 г. х.",
    gregorian: "750–815 гг."
  },
  groups: [
    {
      id: "early-abbasid-rulers",
      title: "Халифы Аббасидов",
      people: [
        { personId: "abbasSaffah", description: "Первый халиф · 132–136 г. х." },
        { personId: "abbasMansur", description: "Второй халиф · 136–158 г. х." },
        { personId: "abbasMahdi", description: "Третий халиф · 158–169 г. х." },
        { personId: "abbasHadi", description: "Четвёртый халиф · 169–170 г. х." },
        { personId: "harunRashid", description: "Пятый халиф · 170–193 г. х." },
        { personId: "abbasAmin", description: "Шестой халиф · 193–198 г. х." },
        { personId: "abbasMamun", description: "Халиф с 198 г. х." }
      ]
    },
    {
      id: "early-schools-scholars",
      title: "Учёные и авторы · по году смерти",
      people: [
        { personId: "ibnAbbas" },
        { personId: "saidIbnJubayr" },
        { personId: "mujahid" },
        { personId: "abuHanifa" },
        { personId: "ibnIshaq" },
        { personId: "malik" },
        { personId: "abuYusuf" },
        { personId: "shaybani" },
        { personId: "ibnQasim" }
      ]
    }
  ]
};

export const abbasidEvents: HistoricalEvent[] = [
  {
    id: "abbasid-caliphate",
    title: "Переход власти к Аббасидам",
    description: "После победы сторонников Аббасидов в 132 г. х. в Куфе был провозглашён халифом Абу аль-Аббас ас-Саффах.",
    periodId: "early-schools",
    start: { hijri: "132 г. х.", gregorian: "749–750 гг." },
    sortOrder: 20,
    participants: [
      {
        personId: "abbasSaffah",
        role: "Первый халиф Аббасидов",
        sortOrder: 0,
        sources: [bookSource(245)]
      }
    ],
    sources: [bookSource(245)]
  },
  {
    id: "abu-muslim-killed",
    title: "Гибель Абу Муслима аль-Хурасани",
    description: "Аль-Мансур распорядился устранить Абу Муслима, сыгравшего важную роль в установлении власти Аббасидов.",
    periodId: "early-schools",
    start: { hijri: "137 г. х.", gregorian: "754–755 гг." },
    sortOrder: 30,
    participants: [
      {
        personId: "abbasMansur",
        role: "Отдал распоряжение об устранении Абу Муслима",
        sortOrder: 0,
        sources: [bookSource(247)]
      }
    ],
    sources: [bookSource(247)]
  },
  {
    id: "baghdad-founded",
    title: "Начало строительства Багдада",
    description: "Аль-Мансур начал строительство новой столицы Аббасидского халифата на берегах Тигра.",
    periodId: "early-schools",
    start: { hijri: "146 г. х.", gregorian: "763–764 гг." },
    sortOrder: 40,
    participants: [
      {
        personId: "abbasMansur",
        role: "Основатель города",
        sortOrder: 0,
        sources: [bookSource(249)]
      }
    ],
    sources: [bookSource(249)]
  },
  {
    id: "mahdi-caliphate",
    title: "Правление аль-Махди",
    description: "После смерти аль-Мансура халифом стал его сын Мухаммад аль-Махди.",
    periodId: "early-schools",
    start: { hijri: "158 г. х.", gregorian: "775 г." },
    end: { hijri: "169 г. х.", gregorian: "785 г." },
    sortOrder: 50,
    participants: [
      {
        personId: "abbasMahdi",
        role: "Халиф Аббасидов",
        sortOrder: 0,
        sources: [bookSource(251)]
      }
    ],
    sources: [bookSource(251)]
  },
  {
    id: "fakhkh-uprising",
    title: "Сражение при Фаххе",
    description: "Восстание сторонников Алидов завершилось поражением у Фахха; его участники разошлись по разным областям.",
    periodId: "early-schools",
    start: { hijri: "169 г. х.", gregorian: "786 г." },
    sortOrder: 60,
    participants: [
      {
        personId: "abbasHadi",
        role: "Халиф во время восстания",
        sortOrder: 0,
        sources: [bookSource(253)]
      }
    ],
    sources: [bookSource(253)]
  },
  {
    id: "harun-caliphate",
    title: "Правление Харуна ар-Рашида",
    description: "После смерти аль-Хади власть перешла к Харуну ар-Рашиду. В 184 г. х. он назначил аль-Ма’муна следующим наследником после аль-Амина.",
    periodId: "early-schools",
    start: { hijri: "170 г. х.", gregorian: "786 г." },
    end: { hijri: "193 г. х.", gregorian: "809 г." },
    dateNote: "Назначение сыновей наследниками выделено в самостоятельную карточку.",
    sortOrder: 70,
    participants: [
      {
        personId: "harunRashid",
        role: "Халиф Аббасидов",
        sortOrder: 0,
        sources: [bookSource(255)]
      }
    ],
    sources: [bookSource(255)]
  },
  {
    id: "succession-sons",
    title: "Назначение сыновей Харуна наследниками",
    description: "Аль-Амин был назначен первым наследником, аль-Ма’мун — следующим; для него была определена область Хорасан.",
    periodId: "early-schools",
    start: { hijri: "184 г. х.", gregorian: "800 г." },
    sortOrder: 80,
    participants: [
      {
        personId: "harunRashid",
        role: "Установил порядок наследования",
        sortOrder: 0,
        sources: [bookSource(255)]
      },
      {
        personId: "abbasAmin",
        role: "Первый наследник",
        sortOrder: 10,
        sources: [bookSource(255)]
      },
      {
        personId: "abbasMamun",
        role: "Следующий наследник; получил управление Хорасаном",
        sortOrder: 20,
        sources: [bookSource(255)]
      }
    ],
    sources: [bookSource(255)]
  },
  {
    id: "aghlabid-autonomy",
    title: "Установление власти Аглабидов в Ифрикии",
    description: "Ибрахим ибн аль-Аглаб получил управление Ифрикией; династия сохраняла формальную связь с Аббасидским халифатом.",
    periodId: "early-schools",
    start: { hijri: "184 г. х.", gregorian: "800 г." },
    sortOrder: 90,
    participants: [],
    sources: [bookSource(259)]
  },
  {
    id: "barmakids-fall",
    title: "Падение семьи Бармакидов",
    description: "В 187 г. х. Харун ар-Рашид распорядился казнить Джафара ибн Яхью; влияние Бармакидов при дворе резко прекратилось.",
    periodId: "early-schools",
    start: { hijri: "187 г. х.", gregorian: "803 г." },
    sortOrder: 100,
    participants: [
      {
        personId: "harunRashid",
        role: "Отдал распоряжение",
        sortOrder: 0,
        sources: [bookSource(257)]
      }
    ],
    sources: [bookSource(257)]
  },
  {
    id: "harun-death",
    title: "Смерть Харуна ар-Рашида",
    description: "После смерти Харуна ар-Рашида халифом в Багдаде стал его сын аль-Амин.",
    periodId: "early-schools",
    start: { hijri: "193 г. х.", gregorian: "809 г." },
    sortOrder: 110,
    participants: [
      {
        personId: "harunRashid",
        role: "Умер во время похода в Хорасан",
        sortOrder: 0,
        sources: [bookSource(271)]
      },
      {
        personId: "abbasAmin",
        role: "Стал халифом после смерти отца",
        sortOrder: 10,
        sources: [bookSource(271)]
      }
    ],
    sources: [bookSource(271)]
  },
  {
    id: "amin-mamun-civil-war",
    title: "Противостояние аль-Амина и аль-Ма’муна",
    description: "После смерти Харуна ар-Рашида борьба за власть между его сыновьями завершилась гибелью аль-Амина и переходом власти к аль-Ма’муну.",
    periodId: "early-schools",
    start: { hijri: "195 г. х.", gregorian: "811 г." },
    end: { hijri: "198 г. х.", gregorian: "813 г." },
    sortOrder: 120,
    participants: [
      {
        personId: "abbasAmin",
        role: "Халиф в Багдаде",
        sortOrder: 0,
        sources: [bookSource(271)]
      },
      {
        personId: "abbasMamun",
        role: "Противник аль-Амина и преемник после его гибели",
        sortOrder: 10,
        sources: [bookSource(271)]
      }
    ],
    sources: [bookSource(271)]
  }
];
