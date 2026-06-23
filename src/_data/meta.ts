export interface MetaItem {
  key: string
  value: string
  sub?: string
}

export interface KeynoteData {
  company: string
  name: string
  title: string
  photo: string
}

export interface Meta {
  pageTitle: string
  heroTitle: string
  heroSub: string
  liveHintPrefix: string
  liveHintSession: string
  liveHintSuffix: string
  ctaText: string
  metaItems: MetaItem[]
  authTitle: string
  authSub: string
  authNote: string
  keynote: KeynoteData
}

export const meta: Meta = {
  pageTitle: '웨비나 — FORESIGHT KOREA 2027',
  heroTitle: '2027년을 미리본다',
  heroSub: 'AX  ·  Transforming into an AI-Native Company',
  liveHintPrefix: 'LIVE NOW · ',
  liveHintSession: 'Session 2 · Track B',
  liveHintSuffix: ' 진행 중',
  ctaText: '라이브 보기',
  metaItems: [
    { key: 'Date',  value: '2026.10.01', sub: '(목)' },
    { key: 'Venue', value: '그랜드 인터컨티넨탈 서울 파르나스' },
    { key: 'Theme', value: 'AX: Transforming into an AI-Native Company' },
    { key: 'Host',  value: '휴넷CEO 포럼' },
  ],
  authTitle: '이곳은 사전등록자를 위한 실시간 LIVE 공간입니다.',
  authSub: "사전 등록 시 기재하신 참석자 분의 '성함'과 '휴대폰번호'를 입력해 주세요.",
  authNote: '* 시청 가능 시간: 2026년 10월 1일(목) 오전 9시 ~ 오후 6시\n* 접속이 안되시는 분들은 고객센터 1588-6559로 연락주세요.',
  keynote: {
    company: 'LG AI연구원',
    name: '이홍락 CSAI',
    title: 'AX: Transforming into an AI-Native Company',
    photo: './assets/img/ceo-photo.png',
  },
}
