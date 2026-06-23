export interface Session {
  time: string
  title: string
  org?: string
  name: string
  img: string
  live?: boolean
  ended?: boolean
  tbd?: boolean
}

export interface TrackInfo {
  key: string
  acc: string
  label: string
  listTrack: string
  listTitle: string
  thumb: string
  sessions: Session[]
}

const SP = './assets/img/speakers/'

export const trackInfos: TrackInfo[] = [
  {
    key: 'keynote',
    acc: '#3a6bff',
    label: 'KEYNOTE',
    listTrack: 'KEYNOTE - 기조연설',
    listTitle: '기조연설',
    thumb: './assets/img/keynote.jpg',
    sessions: [
      { time: '09:00~09:50', title: 'AX: Transforming into an AI-Native Company', org: 'LG AI연구원', name: '이홍락 CSAI', img: './assets/img/ceo-photo.png', ended: true },
    ],
  },
  {
    key: 'a',
    acc: '#3cc6ff',
    label: 'TRACK A',
    listTrack: 'TRACK A - 거시환경',
    listTitle: '거시환경 — 2027 전략 수립의 외부 좌표',
    thumb: './assets/img/tracka.JPG',
    sessions: [
      { time: '10:10~11:00', title: '2027 사업계획의 첫 번째 전제: 성장·물가·교역의 새 질서',   org: '대외경제정책연구원',  name: '윤상하 실장',                img: SP+'img.png',    live: true  },
      { time: '11:20~12:10', title: '모두가 타깃이 되는 세계: 2027 지정학 리스크와 한국 기업의 선택', org: '중앙대학교',        name: '이승주 교수',                img: SP+'img-5.png'  },
      { time: '13:30~14:20', title: '에너지·물류 초크포인트: 원가와 공급망을 흔드는 다음 충격',    org: '삼일PwC',          name: '강명수 국제통상솔루션센터장', img: SP+'img-1.png'  },
      { time: '14:40~15:30', title: '환율·금리·자본비용: 2027 재무 전략의 리스크 지도',           org: 'EY한영',           name: '김동환 파트너',               img: SP+'img-2.png'  },
      { time: '15:50~16:40', title: 'K자형 양극화의 한국 경제: 2027 성장 기회와 방어 전략',       org: '현대경제연구원',    name: '주원 실장',                  img: SP+'img-4.png'  },
      { time: '17:00~17:50', title: '불확실성을 숫자로 바꾸는 시나리오 경영: 예산과 실행계획의 기술',  org: '서울대학교',      name: '박상욱 교수',                 img: SP+'img-3.png'  },
    ],
  },
  {
    key: 'b',
    acc: '#4aa6ff',
    label: 'TRACK B',
    listTrack: 'TRACK B - 경영전략·혁신',
    listTitle: '경영전략·혁신 — AI Native Company의 전략 공식',
    thumb: './assets/img/trackb.JPG',
    sessions: [
      { time: '10:10~11:00', title: '연간 계획의 종말: AI Adaptive Planning으로 전략을 다시 짜다',            org: '맥킨지앤컴퍼니', name: '최현우 파트너',  img: SP+'img-6.png',  live: true },
      { time: '11:20~12:10', title: 'AI Native 도약의 첫 조건: 성장을 막는 레거시를 버리는 법',              org: 'BCG코리아',      name: '정재훈 MD',      img: SP+'img-7.png'  },
      { time: '13:30~14:20', title: 'Dual AX 전략: 사업 모델과 실행 역량을 동시에 바꾸다',                   org: '연세대학교',     name: '이준희 교수',    img: SP+'img-9.png'  },
      { time: '14:40~15:30', title: '[AX사례] 제품을 넘어 생태계로: 플랫폼 기업은 어떻게 비즈니스를 재정의했나', org: '카카오',       name: '강태진 부사장',  img: SP+'img-10.png' },
      { time: '15:50~16:40', title: '[AX사례] 실행 속도의 혁명: 하이퍼 스냅스 조직은 어떻게 움직이는가',      org: '현대자동차',     name: '박민규 CDO',     img: SP+'img-11.png' },
      { time: '17:00~17:50', title: "실리콘밸리의 극단적 AX: '1인 유니콘'이 던지는 성장의 질문",           org: '제트브릿지파트너스', name: '김지훈 대표', img: SP+'img-14.png' },
    ],
  },
  {
    key: 'c',
    acc: '#5a8dff',
    label: 'TRACK C',
    listTrack: 'TRACK C - AX·Tech',
    listTitle: 'AX·Tech — AI Agent, 데이터, 플랫폼',
    thumb: './assets/img/trackc.JPG',
    sessions: [
      { time: '10:10~11:00', title: '스틸칼라의 등장: 피지컬 AI가 산업 현장을 바꾸는 방식',              org: 'KAIST',      name: '서동진 교수',    img: SP+'img-15.png', live: true },
      { time: '11:20~12:10', title: '테크 드래곤의 비상: 중국 AI 굴기가 바꾸는 경쟁의 판',               org: '한양대학교', name: '백서인 교수',    img: SP+'img-26.png'           },
      { time: '13:30~14:20', title: 'AI 투자의 성패: 거품을 넘어 ROI를 만드는 법',                      org: '딜로이트안진', name: '임수정 파트너', img: SP+'img-16.png'           },
      { time: '14:40~15:30', title: '[AX사례] 전사 AI 도입의 현실: 성공 조건과 실패 패턴',              org: 'KPMG',       name: '이동근 AI센터장', img: SP+'img-28.png'          },
      { time: '15:50~16:40', title: '자율 경제 에이전트(AEA): AI가 결정하는 시대의 통제와 책임',          org: 'POSTECH',    name: '이상훈 교수',    img: SP+'img-18.png'           },
      { time: '17:00~17:50', title: '통제인가 자율인가: 새도우 AI를 성과로 바꾸는 조직 설계',             org: 'EY한영',     name: '오현석 이사',    img: SP+'img-19.png'           },
    ],
  },
  {
    key: 'd',
    acc: '#6f7bf0',
    label: 'TRACK D',
    listTrack: 'TRACK D - 마케팅',
    listTitle: '마케팅 — AI가 고객 접점을 재정의한다',
    thumb: './assets/img/trackd.JPG',
    sessions: [
      { time: '10:10~11:00', title: 'AI 네이티브 소비자의 탄생: 2027 고객은 어떻게 선택하는가',            org: '트렌드코리아컴퍼니', name: '전미영 박사',   img: SP+'img-8.png',  live: true },
      { time: '11:20~12:10', title: '검색 이후의 브랜드 전략: AI가 바꾼 구매 여정의 새 규칙',             org: 'Kearney',        name: '윤성훈 파트너', img: SP+'img-12.png'           },
      { time: '13:30~14:20', title: 'AI 시대의 미디어 투자 전략: 채널 믹스와 성과 극대화의 새 공식',       org: '한국종합예술원',   name: '이승무 교수',   img: SP+'img-13.png'           },
      { time: '14:40~15:30', title: '[AX사례] 퍼포먼스 마케팅의 재설계: AI 측정·최적화와 인간의 판단',    org: '고려대학교',      name: '송수진 교수',   img: SP+'img-17.png'           },
      { time: '15:50~16:40', title: 'AI 네이티브 마케팅 조직: 사람과 에이전트는 어떻게 협업하는가',        org: '오리온',          name: '허지혜 CMO',    img: SP+'img-20.png'           },
      { time: '17:00~17:50', title: '[AX사례] 고객 경험의 AX: AI는 접점을 어떻게 바꾸는가',             org: '그로스해킹코리아', name: '김태영 대표',   img: SP+'img-23.png'           },
    ],
  },
  {
    key: 'e',
    acc: '#8b5cf6',
    label: 'TRACK E',
    listTrack: 'TRACK E - 조직인사·리더십',
    listTitle: '조직인사·리더십 — AI Native 조직을 만드는 법',
    thumb: './assets/img/tracke.jpg',
    sessions: [
      { time: '10:10~11:00', title: '글로벌 빅테크가 다시 짠 일의 구조: AI Native 직무 재설계',          org: '동국대학교', name: '이중학 교수',   img: SP+'img-22.png', live: true },
      { time: '11:20~12:10', title: '프롬프트가 업무 능력이 된 시대: 임직원 AI 리스킬링 전략',             org: '인공지능교육원',  name: '황성진 원장',   img: SP+'img-24.png'           },
      { time: '13:30~14:20', title: '프롬프트 리더십: 구성원의 AI 잠재력을 깨우는 리더의 역할',            org: '서강대학교',     name: '조현아 교수',   img: SP+'img-25.png'           },
      { time: '14:40~15:30', title: '[AX사례] AI Native HR: 채용부터 평가까지 인재 의사결정을 바꾸다',   org: 'SAP',           name: '한광모 본부장',  img: SP+'img-21.png'           },
      { time: '15:50~16:40', title: '[AX사례] 전사 AI 내재화의 조건: 임원진은 어떻게 변화를 밀어붙였나',  org: 'LG전자',        name: '박지수 CHRO',   img: SP+'img-27.png'           },
      { time: '17:00~17:50', title: '[AX사례] 연공서열과 AI 속도의 충돌: 한국형 조직의 현실적 전환법',    org: '한국HRD원',     name: '신재훈 원장',   img: SP+'img-29.png'           },
    ],
  },
]
