export type StatIconType = 'mic' | 'list' | 'bars' | 'audience'

export interface Stat {
  acc: string
  num: string
  plus?: boolean
  label: string
  desc: string[]
  iconType: StatIconType
}

export const stats: Stat[] = [
  {
    acc: '#3cc6ff',
    num: '31',
    label: 'Speakers',
    desc: ['업계 및 학계', '최고 전문가들의', '현장 인사이트'],
    iconType: 'mic',
  },
  {
    acc: '#4aa6ff',
    num: '30',
    label: 'Sessions',
    desc: ['기조연설부터', '트랙 심화까지', '총 30개 프로그램'],
    iconType: 'list',
  },
  {
    acc: '#5a8dff',
    num: '5',
    label: 'Tracks',
    desc: ['경제·경영전략·AX', '마케팅·조직 전략', '5개 전문 트랙'],
    iconType: 'bars',
  },
  {
    acc: '#8b5cf6',
    num: '1,200',
    plus: true,
    label: 'Attendees',
    desc: ['2026년 현장에서', '함께한 경영자들이', '선택한 포럼'],
    iconType: 'audience',
  },
]
