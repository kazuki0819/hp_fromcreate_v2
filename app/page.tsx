import Link from 'next/link';
import { staticWorks, staticBlogPosts } from '@/lib/static-data';
import WorkCard from '@/components/WorkCard';
import RetroEffects from '@/components/RetroEffects';

/* Pixel Art SVG Icons */
const PixelCamera = () => (
  <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
    <rect x="4" y="8" width="24" height="18" rx="0" fill="var(--accent)" opacity="0.15"/>
    <path d="M4 8h24v18H4V8zm2 2v14h20V10H6zm4-4h8v4H10V6z" fill="var(--accent)"/>
    <rect x="13" y="14" width="6" height="6" fill="var(--accent2)"/>
    <rect x="15" y="16" width="2" height="2" fill="var(--accent)"/>
  </svg>
);

const PixelPhone = () => (
  <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
    <rect x="8" y="2" width="16" height="28" rx="0" fill="var(--accent)" opacity="0.15"/>
    <path d="M8 2h16v28H8V2zm2 2v24h12V4H10z" fill="var(--accent)"/>
    <rect x="12" y="6" width="8" height="14" fill="var(--accent2)" opacity="0.3"/>
    <rect x="14" y="24" width="4" height="2" fill="var(--accent2)"/>
    <rect x="13" y="8" width="2" height="2" fill="var(--accent)"/>
    <rect x="17" y="8" width="2" height="2" fill="var(--accent3)"/>
  </svg>
);

const PixelCommunity = () => (
  <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
    <rect x="12" y="4" width="8" height="8" rx="0" fill="var(--accent)" opacity="0.15"/>
    <path d="M14 4h4v4h-4V4zm-2 2h2v2h-2V6zm6 0h2v2h-2V6z" fill="var(--accent)"/>
    <rect x="4" y="14" width="8" height="8" fill="var(--accent2)" opacity="0.15"/>
    <path d="M6 14h4v4H6v-4zm-2 2h2v2H4v-2zm6 0h2v2h-2v-2z" fill="var(--accent2)"/>
    <rect x="20" y="14" width="8" height="8" fill="var(--accent3)" opacity="0.15"/>
    <path d="M22 14h4v4h-4v-4zm-2 2h2v2h-2v-2zm6 0h2v2h-2v-2z" fill="var(--accent3)"/>
    <path d="M10 24h12v4H10v-4z" fill="var(--accent)" opacity="0.4"/>
    <path d="M8 26h2v2H8zm14 0h2v2h-2z" fill="var(--accent)" opacity="0.3"/>
  </svg>
);

/* Isometric Cube Decorations */
const IsoCube = ({ color = "var(--accent)", size = 40, x = 0, y = 0, delay = 0 }: { color?: string; size?: number; x?: number; y?: number; delay?: number }) => (
  <svg
    viewBox="0 0 40 46"
    width={size}
    height={size * 1.15}
    style={{
      position: 'absolute',
      left: `${x}%`,
      top: `${y}%`,
      opacity: 0.12,
      animation: `dotFloat 5s ease-in-out ${delay}s infinite`,
      pointerEvents: 'none',
    }}
  >
    <polygon points="20,0 40,12 40,34 20,46 0,34 0,12" fill={color} opacity="0.3" />
    <polygon points="20,0 40,12 20,24 0,12" fill={color} opacity="0.5" />
    <polygon points="0,12 20,24 20,46 0,34" fill={color} opacity="0.4" />
    <polygon points="40,12 20,24 20,46 40,34" fill={color} opacity="0.2" />
  </svg>
);

export default function HomePage() {
  const works = staticWorks.slice(0, 6);
  const latestPosts = staticBlogPosts.filter(p => p.published);

  return (
    <>
      {/* Hero - Museum Gallery */}
      <section className="hero">
        <RetroEffects />

        {/* Floating Isometric Cubes */}
        <IsoCube color="var(--accent)" size={50} x={8} y={20} delay={0} />
        <IsoCube color="var(--accent2)" size={35} x={85} y={15} delay={1} />
        <IsoCube color="var(--accent3)" size={28} x={15} y={70} delay={2} />
        <IsoCube color="var(--accent)" size={42} x={78} y={65} delay={0.5} />
        <IsoCube color="var(--accent2)" size={22} x={50} y={85} delay={1.5} />
        <IsoCube color="var(--accent3)" size={32} x={92} y={45} delay={2.5} />
        <IsoCube color="var(--accent)" size={26} x={3} y={50} delay={3} />

        <div className="hero-content fade-up is-visible">
          <div className="hero-exhibit-label">
            <span className="exhibit-number">EXH.001</span>
            <span className="exhibit-divider">|</span>
            <span>映像 × SNS × コミュニティで可能性を最大化</span>
          </div>
          <h1>理想を、現実に。</h1>
          <p className="hero-note">
            「やりたい」「こうなりたい」という理想を<br />
            映像と仕組みの力で、現実に変えていく。
          </p>
          <div className="hero-cta">
            <Link href="/contact" className="btn btn-primary">お問い合わせ</Link>
            <Link href="/works" className="btn btn-secondary">Gallery →</Link>
          </div>
        </div>

        {/* Grid Frame */}
        <div className="hero-frame" />
      </section>

      {/* Exhibition 01 - Service */}
      <section className="section">
        <div className="container">
          <header className="section-header fade-up is-visible">
            <p className="section-kicker">EXHIBITION 01</p>
            <h2>Service</h2>
            <p>映像・SNS・コミュニティを通して、人と企業の可能性を最大化します</p>
          </header>
          <div className="museum-grid">
            <article className="museum-card fade-up is-visible">
              <div className="museum-card-frame">
                <div className="museum-card-icon">
                  <PixelCamera />
                </div>
                <div className="museum-card-plate">
                  <span className="plate-number">001</span>
                </div>
              </div>
              <h3>映像制作</h3>
              <p>PR動画・アニメーション・YouTube・SNS縦型動画・MV・広告動画など、目的・ターゲット・活用シーンを踏まえた提案型の映像制作。</p>
              <Link href="/service/video" className="museum-link">View Details →</Link>
            </article>

            <article className="museum-card fade-up is-visible">
              <div className="museum-card-frame">
                <div className="museum-card-icon">
                  <PixelPhone />
                </div>
                <div className="museum-card-plate">
                  <span className="plate-number">002</span>
                </div>
              </div>
              <h3>SNS運用代行</h3>
              <p>企画・台本制作・撮影・編集・投稿代行・分析まで一貫して対応。成果につながるSNS運用を実現します。</p>
              <Link href="/service/sns" className="museum-link">View Details →</Link>
            </article>

            <article className="museum-card fade-up is-visible">
              <div className="museum-card-frame">
                <div className="museum-card-icon">
                  <PixelCommunity />
                </div>
                <div className="museum-card-plate">
                  <span className="plate-number">003</span>
                </div>
              </div>
              <h3>コミュニティ &amp; スクール</h3>
              <p>動画編集者向けコミュニティ運営とAfter Effectsスクール。案件獲得・スキルアップ・横のつながりを提供します。</p>
              <Link href="/service/community" className="museum-link">View Details →</Link>
            </article>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }} className="fade-up is-visible">
            <Link href="/service" className="btn btn-secondary">すべてのサービスを見る →</Link>
          </div>
        </div>
      </section>

      {/* Exhibition 02 - Works Gallery */}
      <section id="works" className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <header className="section-header fade-up is-visible">
            <p className="section-kicker">EXHIBITION 02</p>
            <h2>Gallery</h2>
            <p>これまで手がけた映像制作の一部をご紹介します</p>
          </header>
          <div className="works-grid">
            {works.map((work) => (
              <WorkCard key={work.id} {...work} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }} className="fade-up is-visible">
            <Link href="/works" className="btn btn-secondary">すべての実績を見る →</Link>
          </div>
        </div>
      </section>

      {/* Exhibition 03 - Strength */}
      <section className="section">
        <div className="container">
          <header className="section-header fade-up is-visible">
            <p className="section-kicker">EXHIBITION 03</p>
            <h2>Strength</h2>
            <p>FR0M CREATEの3つの強み</p>
          </header>
          <div className="strength-list">
            <div className="strength-item fade-up is-visible">
              <h3>実務に強い映像制作チーム</h3>
              <p>単なる「綺麗な動画」ではなく、目的・ターゲット・活用シーンを踏まえた提案型の制作。YouTube、Instagram、TikTok、広告動画、企業PR、MV、アニメーションなど実績多数。</p>
            </div>
            <div className="strength-item fade-up is-visible">
              <h3>大規模フリーランスネットワーク</h3>
              <p>100名以上の動画編集者、カメラマン・アニメーターと連携。案件規模やジャンルに応じて最適なチームを柔軟に編成できる体制があります。</p>
            </div>
            <div className="strength-item fade-up is-visible">
              <h3>クリエイターコミュニティ運営</h3>
              <p>案件獲得・スキルアップ・横のつながりを目的としたコミュニティを運営。教育・仕事・交流を一体化させ、長期的に価値が循環する仕組みを作っています。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      {latestPosts.length > 0 && (
        <section className="section" style={{ background: 'var(--bg-elevated)' }}>
          <div className="container">
            <header className="section-header fade-up is-visible">
              <p className="section-kicker">EXHIBITION 04</p>
              <h2>Blog</h2>
              <p>最新のお知らせ・ブログ記事</p>
            </header>
            <div className="cards-grid">
              {latestPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="card fade-up is-visible" style={{ textDecoration: 'none' }}>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <p style={{ fontSize: 'var(--small)', color: 'var(--text-dim)', marginTop: '0.5rem' }}>
                    {new Date(post.createdAt).toLocaleDateString('ja-JP')}
                  </p>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '3rem' }} className="fade-up is-visible">
              <Link href="/blog" className="btn btn-secondary">すべての記事を見る →</Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta-section">
        <div className="container fade-up is-visible">
          <p className="section-kicker">CONTACT</p>
          <h2>まずはお気軽にご相談ください</h2>
          <p>映像で解決したい課題や、制作のイメージをお聞かせください。<br />ヒアリングを通じて最適なプランをご提案します。</p>
          <Link href="/contact" className="btn btn-primary">制作相談をする</Link>
        </div>
      </section>
    </>
  );
}
