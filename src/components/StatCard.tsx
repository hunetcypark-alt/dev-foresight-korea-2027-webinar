import type { Stat, StatIconType } from '../_data/stats'

function StatIcon({ type }: { type: StatIconType }) {
  if (type === 'mic') return (
    <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="8" width="40" height="64" rx="20" fill="white" />
      <path d="M22 58C22 92 44 110 70 110C96 110 118 92 118 58" stroke="white" strokeWidth="5" strokeLinecap="round" />
      <line x1="70" y1="110" x2="70" y2="130" stroke="white" strokeWidth="5" strokeLinecap="round" />
      <line x1="42" y1="130" x2="98" y2="130" stroke="white" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
  if (type === 'list') return (
    <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="16" width="48" height="13" rx="6.5" fill="white" />
      <rect x="64" y="16" width="66" height="13" rx="6.5" fill="white" />
      <rect x="10" y="37" width="72" height="13" rx="6.5" fill="white" />
      <rect x="88" y="37" width="42" height="13" rx="6.5" fill="white" />
      <rect x="10" y="58" width="36" height="13" rx="6.5" fill="white" />
      <rect x="52" y="58" width="52" height="13" rx="6.5" fill="white" />
      <rect x="10" y="79" width="58" height="13" rx="6.5" fill="white" />
      <rect x="74" y="79" width="56" height="13" rx="6.5" fill="white" />
      <rect x="10" y="100" width="44" height="13" rx="6.5" fill="white" />
      <rect x="60" y="100" width="70" height="13" rx="6.5" fill="white" />
    </svg>
  )
  if (type === 'bars') return (
    <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6"   y="42"  width="20" height="98"  rx="10" fill="white" />
      <rect x="32"  y="22"  width="20" height="118" rx="10" fill="white" />
      <rect x="60"  y="6"   width="20" height="134" rx="10" fill="white" />
      <rect x="88"  y="22"  width="20" height="118" rx="10" fill="white" />
      <rect x="114" y="42"  width="20" height="98"  rx="10" fill="white" />
    </svg>
  )
  return (
    <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28"  cy="18"  r="5.5" fill="white" fillOpacity=".28" />
      <circle cx="56"  cy="18"  r="5.5" fill="white" fillOpacity=".28" />
      <circle cx="84"  cy="18"  r="5.5" fill="white" fillOpacity=".28" />
      <circle cx="112" cy="18"  r="5.5" fill="white" fillOpacity=".28" />
      <circle cx="21"  cy="52"  r="7"   fill="white" fillOpacity=".46" />
      <circle cx="51"  cy="52"  r="7"   fill="white" fillOpacity=".46" />
      <circle cx="81"  cy="52"  r="7"   fill="white" fillOpacity=".46" />
      <circle cx="111" cy="52"  r="7"   fill="white" fillOpacity=".46" />
      <circle cx="21"  cy="90"  r="9"   fill="white" fillOpacity=".68" />
      <circle cx="51"  cy="90"  r="9"   fill="white" fillOpacity=".68" />
      <circle cx="81"  cy="90"  r="9"   fill="white" fillOpacity=".68" />
      <circle cx="111" cy="90"  r="9"   fill="white" fillOpacity=".68" />
      <circle cx="21"  cy="124" r="11"  fill="white" />
      <circle cx="51"  cy="124" r="11"  fill="white" />
      <circle cx="81"  cy="124" r="11"  fill="white" />
      <circle cx="111" cy="124" r="11"  fill="white" />
    </svg>
  )
}

interface Props { stat: Stat }

export default function StatCard({ stat }: Props) {
  return (
    <li className="stat-card" style={{ '--acc': stat.acc } as React.CSSProperties}>
      <div className="stat-inner">
        <div className="stat-deco" aria-hidden="true">
          <StatIcon type={stat.iconType} />
        </div>
        <div className="stat-bot"></div>
        <span className="stat-edge"></span>
        <strong className="stat-num">
          {stat.num}{stat.plus && <span className="stat-plus">+</span>}
        </strong>
        <em className="stat-label">{stat.label}</em>
        <p className="stat-desc">{stat.desc.map((line, i) => (
          <span key={i}>{line}{i < stat.desc.length - 1 && <br />}</span>
        ))}</p>
      </div>
    </li>
  )
}
