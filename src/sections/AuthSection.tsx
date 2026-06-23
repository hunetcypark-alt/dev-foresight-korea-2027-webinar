import { useState } from 'react'
import type { Meta } from '../_data/meta'

interface Props {
  meta: Meta
  onAuth: () => void
}

export default function AuthSection({ meta, onAuth }: Props) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = () => {
    if (name.trim() && phone.trim()) onAuth()
  }

  return (
    <div id="wb-auth" className="wb-state">
      <div className="wb-auth">
        <div className="wb-auth-bg">
          <div className="wb-glow-spot"></div>
          <div className="wb-auth-bg-dim"></div>
        </div>
        <div className="wb-auth-body">
          <p className="wb-auth-title">{meta.authTitle}</p>
          <p className="wb-auth-sub">{meta.authSub}</p>
          <div className="wb-auth-card">
            <input
              className="wb-input"
              type="text"
              placeholder="성함을 입력해 주세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="wb-input"
              type="tel"
              placeholder="휴대폰 번호를 입력해 주세요 ('-' 제외)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button className="wb-submit" type="button" onClick={handleSubmit}>
              시청하기
            </button>
            <p className="wb-auth-note">
              {meta.authNote.split('\n').map((line, i) => (
                <span key={i}>{line}{i < meta.authNote.split('\n').length - 1 && <br />}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
