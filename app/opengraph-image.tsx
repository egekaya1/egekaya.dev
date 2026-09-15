import { ImageResponse } from 'next/og'

export const alt = 'Ege Kaya - Systems & Machine Learning'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#F7F5F0', // warm cream
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 84,
            fontFamily: 'serif',
            fontWeight: 'normal',
            color: '#38332E',
            marginBottom: 24,
            letterSpacing: '-0.02em',
          }}
        >
          Hi, I'm Ege.
        </div>

        <div
          style={{
            fontSize: 32,
            color: '#78716C',
            marginBottom: 40,
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          I write code focusing on low-level systems and machine learning. Based in Vancouver, BC.
        </div>

        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          <span style={{ fontSize: 24, color: '#A8A29E', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SWE</span>
          <span style={{ fontSize: 24, color: '#A8A29E' }}>/</span>
          <span style={{ fontSize: 24, color: '#A8A29E', textTransform: 'uppercase', letterSpacing: '0.1em' }}>UBC</span>
          <span style={{ fontSize: 24, color: '#A8A29E' }}>/</span>
          <span style={{ fontSize: 24, color: '#A8A29E', textTransform: 'uppercase', letterSpacing: '0.1em' }}>COFFEE</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
