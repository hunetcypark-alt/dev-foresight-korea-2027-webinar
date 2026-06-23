import type { ArchiveItem } from '../_data/archive'

interface Props { items: ArchiveItem[] }

export default function ArchiveSection({ items }: Props) {
  return (
    <section className="s" id="archive" style={{ padding: '60px 0' }}>
      <div className="wrap" style={{ textAlign: 'left' }}>
        <div className="eyebrow"><span>Forum Archive</span><span className="idx"></span></div>
        <h2 className="s-h" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          지난 포럼 다시보기
        </h2>
        <p className="s-sub" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          FORESIGHT KOREA의 누적된 인사이트를 살펴보세요.
        </p>

        <div className="arc-grid">
          {items.map((item) => (
            <a href={item.url} className="arc" key={item.year} target="_blank" rel="noreferrer">
              <div className="arc-yr" style={{ fontFamily: 'Pretendard' }}>{item.year}</div>
              <div className="arc-info">
                <div className="arc-t">{item.title}</div>
                <div className="arc-d" style={{ fontSize: 14 }}>{item.date}</div>
              </div>
              <div className="arc-link">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
