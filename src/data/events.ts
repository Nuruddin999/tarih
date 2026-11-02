import type { HistoricalEvent } from "../types/chronology";

// Заполняем после сверки с источниками. periodId ссылается на periods,
// participants[].personId — на ключ существующей записи people.
// Сохраняем всех подтверждённых участников; лимит карточки задаётся в интерфейсе.
export const events: HistoricalEvent[] = [];
