export interface Speaker {
  no: string
  title: string
  hasVideo?: boolean
  company?: string
  name: string
  imgSrc: string
  isTbd?: boolean
}

export interface TrackSpeakers {
  id: string
  label: string
  category: string
  acc: string
  speakers: Speaker[]
}

const SP = './assets/img/speakers/'
const MAN = './assets/img/man.svg'

export const speakerTracks: TrackSpeakers[] = [
  {
    id: 'sp-trz-a',
    label: 'TRACK A',
    category: '거시환경',
    acc: '#3cc6ff',
    speakers: [
      { no: 'A-1', title: '2027 사업계획의 첫 번째 전제: 성장·물가·교역의 새 질서', hasVideo: true, company: '대외경제정책연구원', name: '윤상하 실장', imgSrc: SP + 'img.png' },
      { no: 'A-2', title: '모두가 타깃이 되는 세계: 2027 지정학 리스크와 한국 기업의 선택', company: '중앙대학교', name: '이승주 교수', imgSrc: SP + 'img-1.png' },
      { no: 'A-3', title: '에너지·물류 초크포인트: 원가와 공급망을 흔드는 다음 충격', company: '삼일PwC', name: '강명수 국제통상솔루션센터장', imgSrc: SP + 'img-2.png' },
      { no: 'A-4', title: '환율·금리·자본비용: 2027 재무 전략의 리스크 지도', name: 'TBD', imgSrc: MAN, isTbd: true },
      { no: 'A-5', title: 'K자형 양극화의 한국 경제: 2027 성장 기회와 방어 전략', company: '현대경제연구원', name: '주원 실장', imgSrc: SP + 'img-4.png' },
      { no: 'A-6', title: '불확실성을 숫자로 바꾸는 시나리오 경영: 예산과 실행계획의 기술', name: 'TBD', imgSrc: SP + 'img-5.png', isTbd: true },
    ],
  },
  {
    id: 'sp-trz-b',
    label: 'TRACK B',
    category: '경영전략·혁신',
    acc: '#4aa6ff',
    speakers: [
      { no: 'B-1', title: '연간 계획의 종말: AI Adaptive Planning으로 전략을 다시 짜다', hasVideo: true, name: 'TBD', imgSrc: SP + 'img-6.png', isTbd: true },
      { no: 'B-2', title: 'AI Native 도약의 첫 조건: 성장을 막는 레거시를 버리는 법', name: 'TBD', imgSrc: SP + 'img-7.png', isTbd: true },
      { no: 'B-3', title: 'Dual AX 전략: 사업 모델과 실행 역량을 동시에 바꾸다', name: 'TBD', imgSrc: SP + 'img-8.png', isTbd: true },
      { no: 'B-4', title: '[AX사례] 제품을 넘어 생태계로: 플랫폼 기업은 어떻게 비즈니스를 재정의했나', name: 'TBD', imgSrc: SP + 'img-9.png', isTbd: true },
      { no: 'B-5', title: '[AX사례] 실행 속도의 혁명: 하이퍼 스냅스 조직은 어떻게 움직이는가', name: 'TBD', imgSrc: SP + 'img-10.png', isTbd: true },
      { no: 'B-6', title: "실리콘밸리의 극단적 AX: '1인 유니콘'이 던지는 성장의 질문", name: 'TBD', imgSrc: SP + 'img-11.png', isTbd: true },
    ],
  },
  {
    id: 'sp-trz-c',
    label: 'TRACK C',
    category: 'AX·Tech',
    acc: '#5a8dff',
    speakers: [
      { no: 'C-1', title: '스틸칼라의 등장: 피지컬 AI가 산업 현장을 바꾸는 방식', hasVideo: true, name: 'TBD', imgSrc: SP + 'img-12.png', isTbd: true },
      { no: 'C-2', title: '테크 드래곤의 비상: 중국 AI 굴기가 바꾸는 경쟁의 판', company: '한양대학교', name: '백서인 교수', imgSrc: SP + 'img-13.png' },
      { no: 'C-3', title: 'AI 투자의 성패: 거품과 워크슬롭을 넘어 ROI를 만드는 법', name: 'TBD', imgSrc: SP + 'img-14.png', isTbd: true },
      { no: 'C-4', title: '[AX사례] 전사 AI 도입의 현실: 성공 조건과 실패 패턴', company: 'KPMG', name: '이동근 AI센터장', imgSrc: SP + 'img-15.png' },
      { no: 'C-5', title: '자율 경제 에이전트(AEA): AI가 결정하는 시대의 통제와 책임', name: 'TBD', imgSrc: SP + 'img-16.png', isTbd: true },
      { no: 'C-6', title: '통제인가 자율인가: 새도우 AI를 성과로 바꾸는 조직 설계', name: 'TBD', imgSrc: SP + 'img-17.png', isTbd: true },
    ],
  },
  {
    id: 'sp-trz-d',
    label: 'TRACK D',
    category: '마케팅',
    acc: '#6f7bf0',
    speakers: [
      { no: 'D-1', title: 'AI 네이티브 소비자의 탄생: 2027 고객은 어떻게 선택하는가', hasVideo: true, company: '트렌드코리아컴퍼니', name: '전미영 박사', imgSrc: SP + 'img-18.png' },
      { no: 'D-2', title: '검색 이후의 브랜드 전략: AI가 바꾼 구매 여정의 새 규칙', company: 'Kearney', name: '윤성훈 파트너', imgSrc: SP + 'img-19.png' },
      { no: 'D-3', title: 'AI 시대의 미디어 투자 전략: 채널 믹스와 성과 극대화의 새 공식', company: '한국종합예술원', name: '이승무 교수', imgSrc: SP + 'img-20.png' },
      { no: 'D-4', title: '[AX사례] 퍼포먼스 마케팅의 재설계: AI 측정·최적화와 인간의 판단', company: '고려대학교', name: '송수진 교수', imgSrc: SP + 'img-21.png' },
      { no: 'D-5', title: 'AI 네이티브 마케팅 조직: 사람과 에이전트는 어떻게 협업하는가', name: 'TBD', imgSrc: SP + 'img-22.png', isTbd: true },
      { no: 'D-6', title: '[AX사례] 고객 경험의 AX: AI는 접점을 어떻게 바꾸는가', name: 'TBD', imgSrc: SP + 'img-23.png', isTbd: true },
    ],
  },
  {
    id: 'sp-trz-e',
    label: 'TRACK E',
    category: '조직·리더십',
    acc: '#8b5cf6',
    speakers: [
      { no: 'E-1', title: '글로벌 빅테크가 다시 짠 일의 구조: AI Native 직무 재설계', hasVideo: true, company: '동국대학교', name: '이중학 교수', imgSrc: SP + 'img-24.png' },
      { no: 'E-2', title: '프롬프트가 업무 능력이 된 시대: 임직원 AI 리스킬링 전략', name: 'TBD', imgSrc: SP + 'img-25.png', isTbd: true },
      { no: 'E-3', title: '프롬프트 리더십: 구성원의 AI 잠재력을 깨우는 리더의 역할', name: 'TBD', imgSrc: SP + 'img-26.png', isTbd: true },
      { no: 'E-4', title: '[AX사례] AI Native HR: 채용부터 평가까지 인재 의사결정을 바꾸다', company: 'SAP', name: '한광모 본부장', imgSrc: SP + 'img-27.png' },
      { no: 'E-5', title: '[AX사례] 전사 AI 내재화의 조건: 임원진은 어떻게 변화를 밀어붙였나', name: 'TBD', imgSrc: SP + 'img-28.png', isTbd: true },
      { no: 'E-6', title: '[AX사례] 연공서열과 AI 속도의 충돌: 한국형 조직의 현실적 전환법', name: 'TBD', imgSrc: SP + 'img-29.png', isTbd: true },
    ],
  },
]
