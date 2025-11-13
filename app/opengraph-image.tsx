import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Ege Kaya - Computer Engineering Student & Software Developer'
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
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0F172A',
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
            textAlign: 'center',
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: '#F8FAFC',
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}
          >
            Ege Kaya
          </div>

          {/* Tagline */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontSize: 28,
              color: '#CBD5E1',
              marginBottom: 40,
            }}
          >
            <span>Software Engineer</span>
            <span style={{ color: '#64748B' }}>•</span>
            <span>Researcher</span>
            <span style={{ color: '#64748B' }}>•</span>
            <span>Builder</span>
          </div>

          {/* Description */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              fontSize: 24,
              color: '#94A3B8',
              maxWidth: 900,
              lineHeight: 1.5,
              marginBottom: 50,
            }}
          >
              <span>Computer Engineering Student at Politecnico di Torino</span>
              <span>Front End Developer Intern at Parma Calcio 1913</span>
          </div>

          {/* Tech Stack Badges */}
          <div
            style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {['React', 'Next.js', 'TypeScript', 'AWS', 'PostgreSQL', 'C++'].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: '8px 20px',
                  backgroundColor: 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  borderRadius: 8,
                  fontSize: 18,
                  color: '#A5B4FC',
                  fontWeight: 500,
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              left: 80,
              right: 80,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 18,
              color: '#64748B',
            }}
          >
            <span>📍 Torino, Italy</span>
            <span>egekaya.dev</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
