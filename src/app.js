const STORAGE_KEY = "odessa-poker-state-v1";

const ROUND_TYPES = {
  normal: { short: "", title: "Обычная", bids: true, mode: "contract", multiplier: 10 },
  noTrump: { short: "Б", title: "Бескозырка", bids: true, mode: "contract", multiplier: 10 },
  blind: { short: "Т", title: "Темная", bids: true, mode: "contract", multiplier: 10 },
  misere: { short: "М", title: "Мизер", bids: false, mode: "misere", multiplier: 10 },
  golden: { short: "З", title: "Золотые", bids: false, mode: "golden", multiplier: 20 }
};

const HOME_COPY = {
  ru: {
    langName: "Рус",
    title: "Одесский покер",
    subtitle: "Приложение для подсчета очков в Одесском покере.",
    description: "Создайте партию, добавьте игроков по кругу посадки, выберите первого сдающего и ведите ставки, взятки и счет без Excel и листочков.",
    players: "для 2-9 игроков",
    deck: "36 карт",
    offline: "работает как PWA",
    newGame: "Новая игра",
    continueGame: "Продолжить игру",
    language: "Язык"
  },
  uk: {
    langName: "Укр",
    title: "Одеський покер",
    subtitle: "Застосунок для підрахунку очок в Одеському покері.",
    description: "Створіть партію, додайте гравців у порядку посадки, виберіть першого здавача та ведіть ставки, взятки й рахунок без Excel і паперу.",
    players: "для 2-9 гравців",
    deck: "36 карт",
    offline: "працює як PWA",
    newGame: "Нова гра",
    continueGame: "Продовжити гру",
    language: "Мова"
  }
};

const UI_COPY = {
  ru: {
    playerFallback: "Игрок",
    newRound: "Новая партия",
    setupTitles: ["Как начать?", "Сколько игроков?", "Кто сидит за столом?", "Кто раздает первым?", "Откуда продолжаем?"],
    standardGame: "Стандартная игра",
    standardGameText: "Начать партию с нуля по обычному кругу раундов.",
    customGame: "Кастомная игра",
    customGameText: "Быстро перенести текущие очки, раунд и следующего дилера.",
    back: "Назад",
    less: "Меньше",
    more: "Больше",
    playersCount: "игроков",
    maxCardsNote: (count) => `Максимум карт на руку: ${maxCardsFor(count)}. Формула: 36 / игроки, округление вниз.`,
    orderNote: "Порядок важен: сдача пойдет по этому кругу.",
    dealerNote: "Выберите того, кому выпал туз. Дальше приложение само двигает сдающего по кругу.",
    next: "Дальше",
    startGame: "Начать партию",
    currentScore: "Текущие очки",
    currentRound: "Текущий раунд",
    nextDealer: "Кто раздает этот раунд?",
    toggleSign: "Поменять знак",
    customNote: "Введите счет на сейчас. Приложение продолжит партию с выбранного раунда.",
    deleteConfirm: "Удалить сохраненную партию?",
    gameTitle: "Одесский покер",
    shareGame: "Поделиться партией",
    shareText: "Продолжить партию в Одесский покер",
    shareCopied: "Ссылка на партию скопирована.",
    sharePrompt: "Скопируйте ссылку на партию:",
    dealer: "Дилер",
    roundType: "Тип раунда",
    cardsPerHand: "Карт на руку",
    round: "Раунд",
    bids: "Ставки",
    overbid: "Перебор",
    underbid: "Недобор",
    exactBid: "Ровно",
    forbidden: "нельзя",
    bidCount: (total) => `ставок: ${total}`,
    noBids: "без ставок",
    player: "Игрок",
    bidColumn: "Берет (ставка)",
    mode: "Режим",
    takenColumn: "Взял (взятки)",
    result: "Итог",
    dealerBadge: "Дилер",
    confirmBids: "Подтвердить ставки",
    editBids: "Изменить ставки",
    bidsLocked: "Ставки зафиксированы. Теперь внесите взятки.",
    bidsNeedFill: "Заполните ставки всех игроков.",
    bidsCannotEqualCards: "Сумма ставок не может быть равна числу карт.",
    takenLockedHint: "Сначала подтвердите ставки",
    takenNeedFill: "Заполните взятки всех игроков.",
    takenMustEqualCards: (total, cards) => `Сумма взяток должна быть ${cards}. Сейчас: ${total}.`,
    takenReady: "Взятки заполнены верно. Можно переходить дальше.",
    previousRound: "Предыдущий раунд",
    nextRound: "Следующий раунд",
    scoreboard: "Табло",
    total: "Сумма",
    diff: "+ / -",
    scoreNote: "Сумма = результат по сыгранным раундам.",
    footer: "Одесский покер — играйте с удовольствием!",
    winnerTitle: "Партия завершена",
    winnerLead: "Победитель",
    winnersLead: "Победители",
    winnerScore: (score) => `${score} очков`,
    ruleContract: "Попал в заказ: 10 за взятку. Пас и 0 взяток: +5. Перебор: по 1 за взятку. Недобор: -10 за каждую недобранную.",
    ruleMisere: "Мизер без ставок: 0 взяток дает +10, каждая взятая взятка штрафует на -10.",
    ruleGolden: "Золотые без ставок: каждая взятка приносит +20.",
    roundTypes: {
      normal: "Обычная",
      noTrump: "Бескозырка",
      blind: "Темная",
      misere: "Мизер",
      golden: "Золотые"
    }
  },
  uk: {
    playerFallback: "Гравець",
    newRound: "Нова партія",
    setupTitles: ["Як почати?", "Скільки гравців?", "Хто сидить за столом?", "Хто здає першим?", "Звідки продовжуємо?"],
    standardGame: "Стандартна гра",
    standardGameText: "Почати партію з нуля за звичайним колом раундів.",
    customGame: "Кастомна гра",
    customGameText: "Швидко перенести поточні очки, раунд і наступного дилера.",
    back: "Назад",
    less: "Менше",
    more: "Більше",
    playersCount: "гравців",
    maxCardsNote: (count) => `Максимум карт на руку: ${maxCardsFor(count)}. Формула: 36 / гравці, округлення вниз.`,
    orderNote: "Порядок важливий: здача піде цим колом.",
    dealerNote: "Оберіть того, кому випав туз. Далі застосунок сам рухає здавача по колу.",
    next: "Далі",
    startGame: "Почати партію",
    currentScore: "Поточні очки",
    currentRound: "Поточний раунд",
    nextDealer: "Хто здає цей раунд?",
    toggleSign: "Змінити знак",
    customNote: "Введіть рахунок на зараз. Застосунок продовжить партію з обраного раунду.",
    deleteConfirm: "Видалити збережену партію?",
    gameTitle: "Одеський покер",
    shareGame: "Поділитися партією",
    shareText: "Продовжити партію в Одеський покер",
    shareCopied: "Посилання на партію скопійовано.",
    sharePrompt: "Скопіюйте посилання на партію:",
    dealer: "Дилер",
    roundType: "Тип раунду",
    cardsPerHand: "Карт на руку",
    round: "Раунд",
    bids: "Ставки",
    overbid: "Перебір",
    underbid: "Недобір",
    exactBid: "Рівно",
    forbidden: "не можна",
    bidCount: (total) => `ставок: ${total}`,
    noBids: "без ставок",
    player: "Гравець",
    bidColumn: "Бере (ставка)",
    mode: "Режим",
    takenColumn: "Взяв (взятки)",
    result: "Підсумок",
    dealerBadge: "Дилер",
    confirmBids: "Підтвердити ставки",
    editBids: "Змінити ставки",
    bidsLocked: "Ставки зафіксовано. Тепер внесіть взятки.",
    bidsNeedFill: "Заповніть ставки всіх гравців.",
    bidsCannotEqualCards: "Сума ставок не може дорівнювати числу карт.",
    takenLockedHint: "Спочатку підтвердьте ставки",
    takenNeedFill: "Заповніть взятки всіх гравців.",
    takenMustEqualCards: (total, cards) => `Сума взяток має бути ${cards}. Зараз: ${total}.`,
    takenReady: "Взятки заповнено правильно. Можна переходити далі.",
    previousRound: "Попередній раунд",
    nextRound: "Наступний раунд",
    scoreboard: "Табло",
    total: "Сума",
    diff: "+ / -",
    scoreNote: "Сума = результат за зіграними раундами.",
    footer: "Одеський покер — грайте із задоволенням!",
    winnerTitle: "Партію завершено",
    winnerLead: "Переможець",
    winnersLead: "Переможці",
    winnerScore: (score) => `${score} очок`,
    ruleContract: "Влучив у замовлення: 10 за взятку. Пас і 0 взяток: +5. Перебір: по 1 за взятку. Недобір: -10 за кожну недобрану.",
    ruleMisere: "Мізер без ставок: 0 взяток дає +10, кожна взята взятка штрафує на -10.",
    ruleGolden: "Золоті без ставок: кожна взятка приносить +20.",
    roundTypes: {
      normal: "Звичайна",
      noTrump: "Безкозирка",
      blind: "Темна",
      misere: "Мізер",
      golden: "Золоті"
    }
  }
};

const app = document.querySelector("#app");
let state = loadState() || createInitialState();
state.lang = state.lang || "ru";
importSharedGameFromUrl();
normalizeState();
saveState();

function createInitialState(lang = "ru") {
  return {
    screen: "home",
    lang,
    setupStep: 0,
    setup: {
      mode: "standard",
      playerCount: 4,
      names: Array.from({ length: 4 }, (_, index) => defaultPlayerName(index, lang)),
      dealerIndex: 0,
      customScores: Array(4).fill(0),
      customRoundIndex: 0,
      customDealerIndex: 0
    },
    game: null
  };
}

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function persistAndRender() {
  saveState();
  render();
}

function resetSetup(lang = state.lang) {
  state.setupStep = 0;
  state.setup = {
    mode: "standard",
    playerCount: 4,
    names: Array.from({ length: 4 }, (_, index) => defaultPlayerName(index, lang)),
    dealerIndex: 0,
    customScores: Array(4).fill(0),
    customRoundIndex: 0,
    customDealerIndex: 0
  };
}

function homeText(key) {
  return HOME_COPY[state.lang]?.[key] || HOME_COPY.ru[key];
}

function t(key) {
  return UI_COPY[state.lang]?.[key] || UI_COPY.ru[key];
}

function defaultPlayerName(index, lang = state.lang) {
  const base = UI_COPY[lang]?.playerFallback || UI_COPY.ru.playerFallback;
  return `${base} ${index + 1}`;
}

function setLanguage(lang) {
  const previousLang = state.lang || "ru";
  state.lang = lang;
  if (state.setup?.names) {
    state.setup.names = state.setup.names.map((name, index) => {
      const wasDefault = name === defaultPlayerName(index, previousLang) || name === defaultPlayerName(index, "ru") || name === defaultPlayerName(index, "uk");
      return wasDefault ? defaultPlayerName(index, lang) : name;
    });
  }
}

function encodeSharePayload(payload) {
  const bytes = new TextEncoder().encode(JSON.stringify(payload));
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

function decodeSharePayload(value) {
  const padded = value.replaceAll("-", "+").replaceAll("_", "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}

function importSharedGameFromUrl() {
  const hash = window.location.hash || "";
  if (!hash.startsWith("#game=")) return;
  try {
    const payload = decodeSharePayload(hash.slice(6));
    if (!payload?.game?.players?.length || !payload.game.rounds?.length) return;
    state.lang = payload.lang || state.lang || "ru";
    state.game = payload.game;
    state.screen = "game";
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  } catch {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }
}

async function shareGame() {
  const url = sharedGameUrl();
  if (navigator.share) {
    await navigator.share({ title: t("gameTitle"), text: t("shareText"), url });
    return;
  }
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(url);
    alert(t("shareCopied"));
    return;
  }
  prompt(t("sharePrompt"), url);
}

function sharedGameUrl() {
  const payload = { v: 1, lang: state.lang, game: state.game };
  return `${window.location.origin}${window.location.pathname}#game=${encodeSharePayload(payload)}`;
}

function roundTitle(type) {
  return t("roundTypes")[type] || UI_COPY.ru.roundTypes[type] || type;
}

function normalizeState() {
  state.lang = state.lang || "ru";
  if (!state.setup) return;
  state.setup.mode = state.setup.mode || "standard";
  state.setup.playerCount = Math.min(9, Math.max(2, state.setup.playerCount || 4));
  state.setup.names = state.setup.names || [];
  while (state.setup.names.length < state.setup.playerCount) {
    state.setup.names.push(defaultPlayerName(state.setup.names.length, state.lang));
  }
  state.setup.names = state.setup.names.slice(0, state.setup.playerCount);
  state.setup.dealerIndex = Math.min(state.setup.dealerIndex || 0, state.setup.playerCount - 1);
  state.setup.customScores = (state.setup.customScores || []).slice(0, state.setup.playerCount);
  while (state.setup.customScores.length < state.setup.playerCount) state.setup.customScores.push(0);
  state.setup.customRoundIndex = state.setup.customRoundIndex || 0;
  state.setup.customDealerIndex = Math.min(state.setup.customDealerIndex || 0, state.setup.playerCount - 1);
  if (!state.game?.rounds) return;
  if (!Array.isArray(state.game.initialScores)) {
    state.game.initialScores = Array(state.game.players.length).fill(0);
  }
  while (state.game.initialScores.length < state.game.players.length) state.game.initialScores.push(0);
  state.game.initialScores = state.game.initialScores.slice(0, state.game.players.length).map((score) => Number(score) || 0);
  const specialBidCards = maxCardsFor(state.game.players.length);
  state.game.rounds.forEach((round) => {
    if ((round.type === "noTrump" || round.type === "blind") && !round.cards) {
      round.cards = specialBidCards;
    }
    if (round.bidsLocked === undefined) {
      round.bidsLocked = !ROUND_TYPES[round.type]?.bids;
    }
    if (!Array.isArray(round.scores)) {
      round.scores = Array(state.game.players.length).fill(0);
    }
    recalculateRound(round);
  });
}

function icon(name) {
  const paths = {
    plus: '<path d="M12 5v14M5 12h14"/>',
    play: '<path d="M8 5v14l11-7-11-7Z" fill="currentColor" stroke="none"/>',
    table: '<path d="M4 6h16M4 12h16M4 18h16M8 6v12M16 6v12"/>',
    arrowLeft: '<path d="M19 12H5M12 19l-7-7 7-7"/>',
    arrowRight: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7V4h6v3"/>',
    save: '<path d="M5 5h12l2 2v12H5V5ZM8 5v6h8M8 19v-5h8v5"/>',
    trophy: '<path d="M8 4h8v4a4 4 0 0 1-8 0V4ZM8 6H5a3 3 0 0 0 3 3M16 6h3a3 3 0 0 1-3 3M12 12v5M9 20h6M10 17h4"/>',
    edit: '<path d="m4 16 1 4 4-1L19 9l-5-5L4 14v2ZM13 5l5 5"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    history: '<path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5M12 7v6l4 2"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    dots: '<path d="M12 5v.01M12 12v.01M12 19v.01"/>',
    share: '<path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v14"/>',
    info: '<path d="M12 16v-4M12 8h.01"/><circle cx="12" cy="12" r="9"/>',
    dice: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 8h.01M16 8h.01M12 12h.01M8 16h.01M16 16h.01"/>',
    settings: '<path d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5ZM19.4 15a1.8 1.8 0 0 0 .36 2l.05.05a2 2 0 0 1-2.83 2.83l-.05-.05a1.8 1.8 0 0 0-2-.36 1.8 1.8 0 0 0-1 1.64V21a2 2 0 0 1-4 0v-.08a1.8 1.8 0 0 0-1-1.64 1.8 1.8 0 0 0-2 .36l-.05.05a2 2 0 1 1-2.83-2.83l.05-.05a1.8 1.8 0 0 0 .36-2 1.8 1.8 0 0 0-1.64-1H3a2 2 0 0 1 0-4h.08a1.8 1.8 0 0 0 1.64-1 1.8 1.8 0 0 0-.36-2l-.05-.05a2 2 0 1 1 2.83-2.83l.05.05a1.8 1.8 0 0 0 2 .36H9.2A1.8 1.8 0 0 0 10 2.69V2a2 2 0 0 1 4 0v.08a1.8 1.8 0 0 0 1 1.64 1.8 1.8 0 0 0 2-.36l.05-.05a2 2 0 1 1 2.83 2.83l-.05.05a1.8 1.8 0 0 0-.36 2V8.2c.28.56.85.92 1.48.92H21a2 2 0 0 1 0 4h-.08a1.8 1.8 0 0 0-1.52.88Z"/>'
  };
  return `<svg aria-hidden="true" viewBox="0 0 24 24">${paths[name] || ""}</svg>`;
}

function playerInitial(name) {
  return (name || "?").trim().slice(0, 1).toUpperCase();
}

function maxCardsFor(count) {
  return Math.floor(36 / count);
}

function buildSchedule(players, startingDealer) {
  const count = players.length;
  const max = maxCardsFor(count);
  const rounds = [];
  const push = (type, cards, sequenceLabel) => {
    const index = rounds.length;
    const dealerIndex = (startingDealer + index) % count;
    rounds.push({
      id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${index}`,
      index,
      type,
      cards,
      sequenceLabel,
      dealerIndex,
      bids: Array(count).fill(null),
      taken: Array(count).fill(null),
      scores: Array(count).fill(0),
      bidsLocked: !ROUND_TYPES[type].bids,
      done: false
    });
  };

  for (let cards = 1; cards <= max; cards += 1) push("normal", cards, String(cards));
  for (let repeat = 1; repeat < count; repeat += 1) push("normal", max, String(max));
  for (let cards = max - 1; cards >= 1; cards -= 1) push("normal", cards, String(cards));
  for (const type of ["noTrump", "blind"]) {
    for (let repeat = 0; repeat < count; repeat += 1) push(type, max, ROUND_TYPES[type].short);
  }
  for (const type of ["misere", "golden"]) {
    for (let repeat = 0; repeat < count; repeat += 1) push(type, null, ROUND_TYPES[type].short);
  }
  return rounds;
}

function startGame() {
  const names = state.setup.names
    .slice(0, state.setup.playerCount)
    .map((name, index) => name.trim() || defaultPlayerName(index));
  const players = names.map((name, index) => ({ id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${index}`, name }));
  const isCustom = state.setup.mode === "custom";
  const customRoundIndex = isCustom ? Number(state.setup.customRoundIndex) || 0 : 0;
  const startingDealer = isCustom
    ? (Number(state.setup.customDealerIndex || 0) - customRoundIndex + players.length * 1000) % players.length
    : state.setup.dealerIndex;
  const rounds = buildSchedule(players, startingDealer);
  const currentRoundIndex = Math.min(rounds.length - 1, Math.max(0, customRoundIndex));
  state.game = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    createdAt: new Date().toISOString(),
    players,
    initialScores: isCustom ? state.setup.customScores.map((score) => Number(score) || 0) : Array(players.length).fill(0),
    currentRoundIndex,
    rounds
  };
  state.screen = "game";
  state.setupStep = 0;
  persistAndRender();
}

function currentRound() {
  return state.game.rounds[state.game.currentRoundIndex];
}

function totalsUntil(roundIndex = state.game.currentRoundIndex + 1) {
  return state.game.players.map((_, playerIndex) =>
    state.game.rounds
      .slice(0, roundIndex)
      .reduce((sum, round) => sum + (round.scores[playerIndex] || 0), state.game.initialScores?.[playerIndex] || 0)
  );
}

function scoreContract(bid, taken, multiplier) {
  if (bid === null || taken === null) return 0;
  if (bid === taken) return bid === 0 ? 5 : bid * multiplier;
  if (taken > bid) return taken;
  return (taken - bid) * multiplier;
}

function scoreSpecial(round, taken) {
  if (taken === null) return 0;
  if (round.type === "misere") return taken === 0 ? 10 : -taken * 10;
  if (round.type === "golden") return taken * 20;
  return 0;
}

function recalculateRound(round) {
  const config = ROUND_TYPES[round.type];
  round.scores = state.game.players.map((_, index) => {
    const bid = normalizeNumber(round.bids[index]);
    const taken = normalizeNumber(round.taken[index]);
    return config.bids && round.bidsLocked ? scoreContract(bid, taken, config.multiplier) : scoreSpecial(round, taken);
  });
  round.done = canCompleteRound(round);
}

function normalizeNumber(value) {
  return value === "" || value === null || Number.isNaN(Number(value)) ? null : Number(value);
}

function sumValues(values) {
  return values.reduce((sum, value) => sum + (normalizeNumber(value) ?? 0), 0);
}

function bidState(round) {
  if (!ROUND_TYPES[round.type].bids) return { label: t("noBids"), detail: "", value: "—", tone: "neutral" };
  const total = sumValues(round.bids);
  const target = round.cards || 0;
  if (total === target) return { label: t("exactBid"), detail: t("forbidden"), value: "=", tone: "danger" };
  if (total > target) return { label: t("overbid"), detail: t("bidCount")(total), value: `+${total - target}`, tone: "warn" };
  return { label: t("underbid"), detail: t("bidCount")(total), value: `-${target - total}`, tone: "ok" };
}

function canCompleteRound(round) {
  const config = ROUND_TYPES[round.type];
  const takenReady = round.taken.every((value) => normalizeNumber(value) !== null);
  if (!takenReady) return false;
  if (!hasValidTakenTotal(round)) return false;
  if (!config.bids) return true;
  const bidsReady = round.bids.every((value) => normalizeNumber(value) !== null);
  return round.bidsLocked && bidsReady && sumValues(round.bids) !== round.cards;
}

function expectedTakenTotal(round) {
  return round.cards || maxCardsFor(state.game.players.length);
}

function hasValidTakenTotal(round) {
  return sumValues(round.taken) === expectedTakenTotal(round);
}

function takenStatus(round) {
  const filled = round.taken.every((value) => normalizeNumber(value) !== null);
  if (!filled) return { tone: "neutral", text: t("takenNeedFill") };
  const total = sumValues(round.taken);
  const expected = expectedTakenTotal(round);
  if (total !== expected) return { tone: "danger", text: t("takenMustEqualCards")(total, expected) };
  return { tone: "ok", text: t("takenReady") };
}

function canLockBids(round) {
  if (!ROUND_TYPES[round.type].bids) return true;
  const bidsReady = round.bids.every((value) => normalizeNumber(value) !== null);
  return bidsReady && sumValues(round.bids) !== round.cards;
}

function lockBids() {
  const round = currentRound();
  if (!canLockBids(round)) return;
  round.bidsLocked = true;
  recalculateRound(round);
  persistAndRender();
}

function unlockBids() {
  const round = currentRound();
  round.bidsLocked = false;
  round.taken = round.taken.map(() => null);
  recalculateRound(round);
  persistAndRender();
}

function setSetupCount(count) {
  const playerCount = Math.min(9, Math.max(2, count));
  const names = state.setup.names.slice(0, playerCount);
  const scores = (state.setup.customScores || []).slice(0, playerCount);
  while (names.length < playerCount) names.push(defaultPlayerName(names.length));
  while (scores.length < playerCount) scores.push(0);
  state.setup.playerCount = playerCount;
  state.setup.names = names;
  state.setup.customScores = scores;
  state.setup.dealerIndex = Math.min(state.setup.dealerIndex, playerCount - 1);
  state.setup.customDealerIndex = Math.min(state.setup.customDealerIndex || 0, playerCount - 1);
  state.setup.customRoundIndex = Math.min(state.setup.customRoundIndex || 0, previewSchedule().length - 1);
  persistAndRender();
}

function updateRoundValue(kind, playerIndex, value) {
  const round = currentRound();
  if (kind === "taken" && ROUND_TYPES[round.type].bids && !round.bidsLocked) return;
  if (kind === "bids" && round.bidsLocked) return;
  const max = round.cards || 36;
  const cleaned = value === "" ? null : Math.min(max, Math.max(0, Number(value)));
  round[kind][playerIndex] = cleaned;
  recalculateRound(round);
  persistAndRender();
}

function stepNumber(kind, playerIndex, delta) {
  const round = currentRound();
  if (kind === "taken" && ROUND_TYPES[round.type].bids && !round.bidsLocked) return;
  if (kind === "bids" && round.bidsLocked) return;
  const value = normalizeNumber(round[kind][playerIndex]) ?? 0;
  updateRoundValue(kind, playerIndex, value + delta);
}

function goRound(delta) {
  state.game.currentRoundIndex = Math.min(
    state.game.rounds.length - 1,
    Math.max(0, state.game.currentRoundIndex + delta)
  );
  persistAndRender();
}

function previewSchedule() {
  const count = state.setup.playerCount;
  const players = Array.from({ length: count }, (_, index) => ({ name: state.setup.names[index] || defaultPlayerName(index) }));
  return buildSchedule(players, state.setup.dealerIndex || 0);
}

function roundOptionLabel(round) {
  const cards = round.cards ? `${round.cards}` : "—";
  return `${round.index + 1}. ${roundTitle(round.type)} · ${cards}`;
}

function parseSignedScore(value) {
  if (value === "" || value === "-") return 0;
  const normalized = String(value).replace(/[^\d-]/g, "").replace(/(?!^)-/g, "");
  return Number(normalized) || 0;
}

function toggleCustomScoreSign(index) {
  state.setup.customScores[index] = -parseSignedScore(state.setup.customScores[index]);
  persistAndRender();
}

function newGame() {
  state.screen = "setup";
  resetSetup();
  persistAndRender();
}

function deleteGame() {
  if (!confirm(t("deleteConfirm"))) return;
  state = createInitialState(state.lang);
  localStorage.removeItem(STORAGE_KEY);
  saveState();
  render();
}

function render() {
  if (!state.game && state.screen === "game") state.screen = "home";
  app.innerHTML = `
    <main class="app-shell">
      ${state.screen === "home" ? renderHome() : ""}
      ${state.screen === "setup" ? renderSetup() : ""}
      ${state.screen === "game" ? renderGame() : ""}
    </main>
  `;
  bindEvents();
}

function renderHome() {
  const hasGame = Boolean(state.game);
  return `
    <section class="home-screen">
      <header class="home-topbar">
        <div class="mini-brand">
          <div class="mini-mark">${icon("table")}</div>
          <span>${homeText("title")}</span>
        </div>
        <div class="language-switch" aria-label="${homeText("language")}">
          <button class="${state.lang === "ru" ? "active" : ""}" data-lang="ru" type="button">Рус</button>
          <button class="${state.lang === "uk" ? "active" : ""}" data-lang="uk" type="button">Укр</button>
        </div>
      </header>

      <div class="home-hero">
        <div class="splash-visual" aria-hidden="true">
          <div class="table-felt">
            <div class="card card-a">A</div>
            <div class="card card-10">10</div>
            <div class="card card-k">K</div>
            <div class="score-slip">
              <span>+10</span>
              <span>-5</span>
              <span>+20</span>
            </div>
            <div class="chip chip-one"></div>
            <div class="chip chip-two"></div>
          </div>
        </div>

        <div class="home-copy">
          <div class="brand-lockup">
            <div class="brand-mark">${icon("table")}</div>
            <div>
              <h1>${homeText("title")}</h1>
              <p>${homeText("subtitle")}</p>
            </div>
          </div>
          <p class="home-description">${homeText("description")}</p>
          <div class="home-facts">
            <span>${homeText("players")}</span>
            <span>${homeText("deck")}</span>
            <span>${homeText("offline")}</span>
          </div>
        </div>
      </div>

      <div class="home-actions">
        ${hasGame ? `<button class="secondary" data-action="continue">${icon("play")}${homeText("continueGame")}</button>` : ""}
        <button class="primary" data-action="new-game">${icon("plus")}${homeText("newGame")}</button>
      </div>
    </section>
  `;
}

function renderSetup() {
  const step = state.setupStep;
  const maxStep = state.setup.mode === "custom" ? 4 : 3;
  return `
    <section class="setup-screen">
      <header class="topbar">
        <button class="icon-button" data-action="${step === 0 ? "home" : "setup-prev"}" aria-label="${t("back")}">${icon("arrowLeft")}</button>
        <div>
          <span class="eyeline">${t("newRound")}</span>
          <h1>${t("setupTitles")[step]}</h1>
        </div>
      </header>
      <div class="progress"><span style="width:${((step + 1) / (maxStep + 1)) * 100}%"></span></div>
      ${step === 0 ? renderModeStep() : ""}
      ${step === 1 ? renderCountStep() : ""}
      ${step === 2 ? renderNamesStep() : ""}
      ${step === 3 ? renderDealerStep() : ""}
      ${step === 4 ? renderCustomStep() : ""}
    </section>
  `;
}

function renderModeStep() {
  return `
    <div class="mode-grid">
      <button class="mode-choice ${state.setup.mode === "standard" ? "selected" : ""}" data-action="set-mode-standard">
        ${icon("play")}
        <strong>${t("standardGame")}</strong>
        <span>${t("standardGameText")}</span>
      </button>
      <button class="mode-choice ${state.setup.mode === "custom" ? "selected" : ""}" data-action="set-mode-custom">
        ${icon("edit")}
        <strong>${t("customGame")}</strong>
        <span>${t("customGameText")}</span>
      </button>
    </div>
  `;
}

function renderCountStep() {
  return `
    <div class="setup-card count-picker">
      <button class="round-control" data-action="count-down" aria-label="${t("less")}">-</button>
      <div class="count-value">
        <strong>${state.setup.playerCount}</strong>
        <span>${t("playersCount")}</span>
      </div>
      <button class="round-control" data-action="count-up" aria-label="${t("more")}">+</button>
    </div>
    <p class="setup-note">${t("maxCardsNote")(state.setup.playerCount)}</p>
    <button class="primary sticky-action" data-action="setup-next">${t("next")} ${icon("arrowRight")}</button>
  `;
}

function renderNamesStep() {
  return `
    <div class="name-list">
      ${state.setup.names
        .map(
          (name, index) => `
            <label class="name-row">
              <span>${index + 1}</span>
              <input data-name-index="${index}" value="${escapeHtml(name)}" autocomplete="off" />
            </label>
          `
        )
        .join("")}
    </div>
    <p class="setup-note">${t("orderNote")}</p>
    <button class="primary sticky-action" data-action="setup-next">${t("next")} ${icon("arrowRight")}</button>
  `;
}

function renderDealerStep() {
  const isCustom = state.setup.mode === "custom";
  return `
    <div class="dealer-grid">
      ${state.setup.names
        .map(
          (name, index) => `
            <button class="dealer-choice ${state.setup.dealerIndex === index ? "selected" : ""}" data-dealer-index="${index}">
              <span>${playerInitial(name)}</span>
              <strong>${escapeHtml(name)}</strong>
            </button>
          `
        )
        .join("")}
    </div>
    <p class="setup-note">${t("dealerNote")}</p>
    <button class="primary sticky-action" data-action="${isCustom ? "setup-next" : "start-game"}">${isCustom ? t("next") + icon("arrowRight") : icon("play") + t("startGame")}</button>
  `;
}

function renderCustomStep() {
  const schedule = previewSchedule();
  const roundIndex = Math.min(state.setup.customRoundIndex || 0, schedule.length - 1);
  const selectedRound = schedule[roundIndex];
  return `
    <div class="custom-panel">
      <label class="custom-field">
        <span>${t("currentRound")}</span>
        <select data-custom-round>
          ${schedule.map((round) => `<option value="${round.index}" ${round.index === roundIndex ? "selected" : ""}>${roundOptionLabel(round)}</option>`).join("")}
        </select>
      </label>
      <div class="custom-field">
        <span>${t("nextDealer")}</span>
        <div class="dealer-grid compact">
          ${state.setup.names
            .map(
              (name, index) => `
                <button class="dealer-choice ${state.setup.customDealerIndex === index ? "selected" : ""}" data-custom-dealer-index="${index}">
                  <span>${playerInitial(name)}</span>
                  <strong>${escapeHtml(name)}</strong>
                </button>
              `
            )
            .join("")}
        </div>
      </div>
      <div class="custom-scores">
        <span>${t("currentScore")}</span>
        ${state.setup.names
          .map(
            (name, index) => `
              <label class="score-input-row">
                <strong>${escapeHtml(name)}</strong>
                <button type="button" data-score-sign-index="${index}" aria-label="${t("toggleSign")}">−/+</button>
                <input data-custom-score-index="${index}" inputmode="decimal" pattern="-?[0-9]*" type="text" value="${state.setup.customScores[index] || 0}" />
              </label>
            `
          )
          .join("")}
      </div>
    </div>
    <p class="setup-note">${t("customNote")} ${roundOptionLabel(selectedRound)}</p>
    <button class="primary sticky-action" data-action="start-game">${icon("play")}${t("startGame")}</button>
  `;
}

function renderGame() {
  const game = state.game;
  const round = currentRound();
  const roundConfig = ROUND_TYPES[round.type];
  const dealer = game.players[round.dealerIndex];
  const totals = totalsUntil();
  const status = bidState(round);
  const nextDisabled = state.game.currentRoundIndex === state.game.rounds.length - 1 || !round.done;
  const prevDisabled = state.game.currentRoundIndex === 0;
  const previousTotals = totalsUntil(state.game.currentRoundIndex);
  const scoreRows = game.players
    .map((player, index) => ({ player, index, total: totals[index], previousTotal: previousTotals[index] }))
    .sort((left, right) => right.total - left.total || left.index - right.index);

  return `
    <section class="game-screen">
      <header class="game-appbar">
        <button class="plain-icon" data-action="home" aria-label="${t("back")}">${icon("menu")}</button>
        <strong>${t("gameTitle")}</strong>
        <div class="appbar-actions">
          <button class="plain-icon" data-action="share-game" aria-label="${t("shareGame")}">${icon("share")}</button>
          <button class="plain-icon danger-action" data-action="delete-game" aria-label="${t("deleteConfirm")}">${icon("trash")}</button>
        </div>
      </header>

      <section class="round-summary">
        <div class="summary-player">
          <span>${t("dealer")}</span>
          <strong>${renderAvatar(dealer, round.dealerIndex)}${escapeHtml(dealer.name)}</strong>
        </div>
        <div>
          <span>${t("roundType")}</span>
          <strong>${roundTitle(round.type)}</strong>
        </div>
        <div>
          <span>${t("cardsPerHand")}</span>
          <strong>${round.cards || "—"}</strong>
        </div>
        <div>
          <span>${status.label}</span>
          <strong class="status-pill ${status.tone}">${status.value}</strong>
          <small>${status.detail || status.label}</small>
        </div>
        <div>
          <span>${t("round")}</span>
          <strong>${round.index + 1} / ${game.rounds.length}</strong>
        </div>
      </section>

      <section class="round-editor">
        <div class="editor-head">
          <span>${t("player")}</span>
          <span>${roundConfig.bids ? t("bidColumn") : t("mode")}</span>
          <span>${t("takenColumn")}</span>
          <span>${t("result")} ${icon("info")}</span>
        </div>
        ${game.players
          .map((player, index) => renderPlayerRoundRow(player, index, round, roundConfig))
          .join("")}
        ${roundConfig.bids ? renderBidLockControls(round) : ""}
        ${renderTakenStatus(round)}
      </section>

      ${renderWinnerPanel()}

      <nav class="round-nav">
        <button class="secondary" data-action="round-prev" ${prevDisabled ? "disabled" : ""}>${icon("arrowLeft")}${t("previousRound")}</button>
        <button class="primary" data-action="round-next" ${nextDisabled ? "disabled" : ""}>${t("nextRound")}${icon("arrowRight")}</button>
      </nav>

      <section class="board-section">
        <div class="section-title">
          <h2>${t("scoreboard")}</h2>
        </div>
        <div class="score-table" aria-label="${t("scoreboard")}">
          <div class="score-head">
            <span>${t("player")}</span>
            <span>${t("total")}</span>
            <span>${t("diff")}</span>
          </div>
          ${scoreRows
            .map(({ player, index, total, previousTotal }) => renderScoreRow(player, index, total, previousTotal))
            .join("")}
        </div>
        <p class="score-note">${t("scoreNote")}</p>
      </section>

      <section class="rules-strip">
        <div>${icon("info")}</div>
        <p>${renderRuleText(round)}</p>
      </section>

      <footer class="felt-footer">
        <span>${t("footer")}</span>
      </footer>
    </section>
  `;
}

function renderPlayerRoundRow(player, index, round, roundConfig) {
  const takenLocked = roundConfig.bids && !round.bidsLocked;
  return `
    <div class="editor-row">
      <div class="player-cell">
        ${renderAvatar(player, index)}
        <div>
          <strong>${escapeHtml(player.name)}</strong>
          ${round.dealerIndex === index ? `<small>${t("dealerBadge")}</small>` : ""}
        </div>
      </div>
      ${
        roundConfig.bids
          ? renderStepper("bids", index, round.bids[index], round.cards, round.bidsLocked)
          : `<div class="mode-cell">${round.type === "misere" ? "0 = +10" : "+20"}</div>`
      }
      ${renderStepper("taken", index, round.taken[index], round.cards || 36, takenLocked)}
      <strong class="delta ${round.scores[index] < 0 ? "negative" : round.scores[index] > 0 ? "positive" : ""}">
        ${round.scores[index] > 0 ? "+" : ""}${round.scores[index]}
      </strong>
    </div>
  `;
}

function renderBidLockControls(round) {
  const canLock = canLockBids(round);
  const message = round.bidsLocked
    ? t("bidsLocked")
    : round.bids.some((value) => normalizeNumber(value) === null)
      ? t("bidsNeedFill")
      : sumValues(round.bids) === round.cards
        ? t("bidsCannotEqualCards")
        : t("takenLockedHint");
  return `
    <div class="bid-lock-row ${round.bidsLocked ? "locked" : ""}">
      <p>${message}</p>
      ${
        round.bidsLocked
          ? `<button class="secondary" data-action="unlock-bids">${icon("edit")}${t("editBids")}</button>`
          : `<button class="primary" data-action="lock-bids" ${canLock ? "" : "disabled"}>${icon("check")}${t("confirmBids")}</button>`
      }
    </div>
  `;
}

function renderTakenStatus(round) {
  const config = ROUND_TYPES[round.type];
  if (config.bids && !round.bidsLocked) return "";
  const status = takenStatus(round);
  return `<div class="taken-status-row ${status.tone}">${status.text}</div>`;
}

function renderWinnerPanel() {
  if (!state.game) return "";
  const lastRound = state.game.rounds[state.game.rounds.length - 1];
  if (!lastRound?.done) return "";
  const totals = totalsUntil(state.game.rounds.length);
  const bestScore = Math.max(...totals);
  const winners = state.game.players.filter((_, index) => totals[index] === bestScore);
  return `
    <section class="winner-panel">
      <span>${t("winnerTitle")}</span>
      <h2>${winners.length > 1 ? t("winnersLead") : t("winnerLead")}: ${winners.map((player) => escapeHtml(player.name)).join(", ")}</h2>
      <strong>${t("winnerScore")(bestScore)}</strong>
    </section>
  `;
}

function renderAvatar(player, index) {
  return `<span class="avatar avatar-${index % 5}">${playerInitial(player.name)}</span>`;
}

function renderScoreRow(player, index, total, previousTotal) {
  const change = total - previousTotal;
  return `
    <div class="score-row">
      <div class="score-player">${renderAvatar(player, index)}<strong>${escapeHtml(player.name)}</strong></div>
      <strong class="${scoreTone(total)}">${formatSigned(total)}</strong>
      <strong class="${scoreTone(change)}">${formatSigned(change)}</strong>
    </div>
  `;
}

function scoreTone(value) {
  if (value > 0) return "positive";
  if (value < 0) return "negative";
  return "neutral";
}

function formatSigned(value) {
  if (value > 0) return `+${value}`;
  return String(value);
}

function renderStepper(kind, playerIndex, value, max, disabled = false) {
  const numberValue = normalizeNumber(value);
  const display = numberValue ?? "";
  return `
    <div class="stepper ${disabled ? "disabled" : ""}" data-kind="${kind}" data-player="${playerIndex}">
      <button data-step="-1" aria-label="${t("less")}" ${disabled ? "disabled" : ""}>-</button>
      <input inputmode="numeric" pattern="[0-9]*" placeholder="0" value="${display}" data-round-input="${kind}" data-player-index="${playerIndex}" aria-label="${kind === "bids" ? t("bidColumn") : t("takenColumn")}" ${disabled ? "disabled" : ""} />
      <button data-step="1" aria-label="${t("more")}" ${disabled || (numberValue ?? 0) >= max ? "disabled" : ""}>+</button>
    </div>
  `;
}

function renderRuleText(round) {
  if (round.type === "misere") return t("ruleMisere");
  if (round.type === "golden") return t("ruleGolden");
  return t("ruleContract");
}

function bindEvents() {
  app.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      if (action === "continue") {
        state.screen = "game";
        persistAndRender();
      }
      if (action === "new-game") newGame();
      if (action === "set-mode-standard") {
        state.setup.mode = "standard";
        state.setupStep = 1;
        persistAndRender();
      }
      if (action === "set-mode-custom") {
        state.setup.mode = "custom";
        state.setupStep = 1;
        persistAndRender();
      }
      if (action === "home") {
        state.screen = "home";
        persistAndRender();
      }
      if (action === "setup-next") {
        if (state.setup.mode === "custom" && state.setupStep === 3) {
          state.setup.customDealerIndex = state.setup.dealerIndex;
        }
        state.setupStep = Math.min(state.setup.mode === "custom" ? 4 : 3, state.setupStep + 1);
        persistAndRender();
      }
      if (action === "setup-prev") {
        state.setupStep = Math.max(0, state.setupStep - 1);
        persistAndRender();
      }
      if (action === "count-down") setSetupCount(state.setup.playerCount - 1);
      if (action === "count-up") setSetupCount(state.setup.playerCount + 1);
      if (action === "start-game") startGame();
      if (action === "round-prev") goRound(-1);
      if (action === "round-next") goRound(1);
      if (action === "lock-bids") lockBids();
      if (action === "unlock-bids") unlockBids();
      if (action === "share-game") shareGame().catch(() => prompt(t("sharePrompt"), sharedGameUrl()));
      if (action === "delete-game") deleteGame();
    });
  });

  app.querySelectorAll("[data-name-index]").forEach((input) => {
    input.addEventListener("input", () => {
      state.setup.names[Number(input.dataset.nameIndex)] = input.value;
      saveState();
    });
  });

  app.querySelectorAll("[data-dealer-index]").forEach((button) => {
    button.addEventListener("click", () => {
      state.setup.dealerIndex = Number(button.dataset.dealerIndex);
      persistAndRender();
    });
  });

  app.querySelectorAll("[data-custom-dealer-index]").forEach((button) => {
    button.addEventListener("click", () => {
      state.setup.customDealerIndex = Number(button.dataset.customDealerIndex);
      persistAndRender();
    });
  });

  app.querySelectorAll("[data-custom-score-index]").forEach((input) => {
    input.addEventListener("input", () => {
      state.setup.customScores[Number(input.dataset.customScoreIndex)] = parseSignedScore(input.value);
      saveState();
    });
  });

  app.querySelectorAll("[data-score-sign-index]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleCustomScoreSign(Number(button.dataset.scoreSignIndex));
    });
  });

  app.querySelectorAll("[data-custom-round]").forEach((select) => {
    select.addEventListener("change", () => {
      state.setup.customRoundIndex = Number(select.value) || 0;
      persistAndRender();
    });
  });

  app.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang);
      persistAndRender();
    });
  });

  app.querySelectorAll("[data-round-input]").forEach((input) => {
    input.addEventListener("input", () => {
      updateRoundValue(input.dataset.roundInput, Number(input.dataset.playerIndex), input.value);
    });
  });

  app.querySelectorAll(".stepper button[data-step]").forEach((button) => {
    button.addEventListener("click", () => {
      const stepper = button.closest(".stepper");
      stepNumber(stepper.dataset.kind, Number(stepper.dataset.player), Number(button.dataset.step));
    });
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("/poker/sw.js", { scope: "/poker/" }));
}

render();
