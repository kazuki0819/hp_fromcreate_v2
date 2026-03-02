import Link from 'next/link';
import Image from 'next/image';
import { staticWorks, staticBlogPosts } from '@/lib/static-data';
import WorkCard from '@/components/WorkCard';
import RetroEffects from '@/components/RetroEffects';

/* Pixel Art SVG Icons - Large */
const PixelCamera = () => (
  <svg viewBox="0 0 64 64" width="64" height="64" fill="none">
    <rect x="8" y="16" width="48" height="36" fill="var(--accent)" opacity="0.08"/>
    <path d="M8 16h48v36H8V16zm4 4v28h40V20H12z" fill="var(--accent)" opacity="0.8"/>
    <rect x="20" y="8" width="16" height="8" fill="var(--accent)" opacity="0.6"/>
    <rect x="24" y="28" width="16" height="16" rx="0" fill="var(--accent)" opacity="0.3"/>
    <rect x="28" y="32" width="8" height="8" fill="var(--accent2)"/>
    <rect x="31" y="35" width="2" height="2" fill="#fff"/>
    <rect x="44" y="22" width="6" height="4" fill="var(--accent2)" opacity="0.5"/>
    <rect x="12" y="22" width="4" height="4" fill="var(--accent3)" opacity="0.4"/>
  </svg>
);

const PixelPhone = () => (
  <svg viewBox="0 0 64 64" width="64" height="64" fill="none">
    <rect x="16" y="4" width="32" height="56" fill="var(--accent4)" opacity="0.08"/>
    <path d="M16 4h32v56H16V4zm4 4v48h24V8H20z" fill="var(--accent4)" opacity="0.8"/>
    <rect x="22" y="12" width="20" height="32" fill="var(--accent4)" opacity="0.15"/>
    <rect x="26" y="16" width="4" height="4" fill="var(--accent)" opacity="0.6"/>
    <rect x="32" y="16" width="4" height="4" fill="var(--accent2)" opacity="0.6"/>
    <rect x="38" y="16" width="4" height="4" fill="var(--accent3)" opacity="0.6"/>
    <rect x="26" y="24" width="12" height="8" fill="var(--accent4)" opacity="0.3"/>
    <rect x="26" y="34" width="12" height="4" fill="var(--accent4)" opacity="0.2"/>
    <rect x="28" y="50" width="8" height="4" rx="0" fill="var(--accent4)" opacity="0.5"/>
  </svg>
);

const PixelCommunity = () => (
  <svg viewBox="0 0 64 64" width="64" height="64" fill="none">
    {/* Center person */}
    <rect x="28" y="8" width="8" height="8" fill="var(--accent2)" opacity="0.8"/>
    <rect x="26" y="16" width="12" height="4" fill="var(--accent2)" opacity="0.6"/>
    <rect x="28" y="20" width="8" height="8" fill="var(--accent2)" opacity="0.4"/>
    {/* Left person */}
    <rect x="8" y="20" width="8" height="8" fill="var(--accent)" opacity="0.8"/>
    <rect x="6" y="28" width="12" height="4" fill="var(--accent)" opacity="0.6"/>
    <rect x="8" y="32" width="8" height="8" fill="var(--accent)" opacity="0.4"/>
    {/* Right person */}
    <rect x="48" y="20" width="8" height="8" fill="var(--accent3)" opacity="0.8"/>
    <rect x="46" y="28" width="12" height="4" fill="var(--accent3)" opacity="0.6"/>
    <rect x="48" y="32" width="8" height="8" fill="var(--accent3)" opacity="0.4"/>
    {/* Connection lines */}
    <path d="M20 32h8M36 32h8" stroke="var(--accent4)" strokeWidth="2" opacity="0.4"/>
    {/* Platform */}
    <rect x="4" y="44" width="56" height="4" fill="var(--accent)" opacity="0.1"/>
    <rect x="8" y="48" width="48" height="4" fill="var(--accent)" opacity="0.06"/>
    <rect x="16" y="52" width="32" height="4" fill="var(--accent)" opacity="0.03"/>
  </svg>
);

export default function HomePage() {
  const works = staticWorks.slice(0, 6);
  const latestPosts = staticBlogPosts.filter(p => p.published);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <RetroEffects />
        <div className="hero-layout">
          <div className="hero-text">
            <div className="hero-exhibit-label">
              <span className="exhibit-number">EXH.001</span>
              <span className="exhibit-divider">|</span>
              <span>映像 × SNS × コミュニティ</span>
            </div>
            <h1>PIXEL ART MUSEUM:<br/>Crafting Digital Wonders</h1>
            <p className="hero-note">
              「やりたい」「こうなりたい」という理想を<br />
              映像と仕組みの力で、現実に変えていく。
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary">お問い合わせ</Link>
              <Link href="/works" className="btn btn-secondary">Tour Our Work →</Link>
            </div>
          </div>
          <div className="hero-illustration">
            <Image
              src="/images/hero-isometric.png"
              alt="FROM CREATE Creative Workspace"
              width={520}
              height={520}
              priority
            />
          </div>
        </div>
      </section>

      {/* ===== OUR SERVICES ===== */}
      <section className="section">
        <div className="container">
          <header className="section-header fade-up is-visible">
            <p className="section-kicker">EXHIBITION 01</p>
            <h2>Our Services</h2>
            <p>映像・SNS・コミュニティを通して、人と企業の可能性を最大化します</p>
          </header>
          <div className="museum-grid">
            <article className="museum-card fade-up is-visible">
              <div className="museum-card-frame">
                <div className="museum-card-icon"><PixelCamera /></div>
                <div className="museum-card-plate"><span className="plate-number">001</span></div>
              </div>
              <h3>映像制作</h3>
              <p>PR動画・アニメーション・YouTube・SNS縦型動画・MV・広告動画など、目的・ターゲット・活用シーンを踏まえた提案型の映像制作。</p>
              <Link href="/service/video" className="museum-link">View Details →</Link>
            </article>
            <article className="museum-card fade-up is-visible">
              <div className="museum-card-frame">
                <div className="museum-card-icon"><PixelPhone /></div>
                <div className="museum-card-plate"><span className="plate-number">002</span></div>
              </div>
              <h3>SNS運用代行</h3>
              <p>企画・台本制作・撮影・編集・投稿代行・分析まで一貫して対応。成果につながるSNS運用を実現します。</p>
              <Link href="/service/sns" className="museum-link">View Details →</Link>
            </article>
            <article className="museum-card fade-up is-visible">
              <div className="museum-card-frame">
                <div className="museum-card-icon"><PixelCommunity /></div>
                <div className="museum-card-plate"><span className="plate-number">003</span></div>
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

      {/* ===== PORTFOLIO HIGHLIGHTS ===== */}
      <section id="works" className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <header className="section-header fade-up is-visible">
            <p className="section-kicker">EXHIBITION 02</p>
            <h2>Portfolio Highlights</h2>
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

      {/* ===== CREATIVE PROCESS ===== */}
      <section className="section">
        <div className="container">
          <header className="section-header fade-up is-visible">
            <p className="section-kicker">EXHIBITION 03</p>
            <h2>Creative Process</h2>
            <p>プロジェクトの進め方</p>
          </header>
          <div className="process-flow fade-up is-visible">
            <div className="process-step">
              <div className="process-icon">🎯</div>
              <h4>ACCESS</h4>
              <p>ヒアリング・要件定義</p>
            </div>
            <span className="process-arrow">→</span>
            <div className="process-step">
              <div className="process-icon">📋</div>
              <h4>PLANNING</h4>
              <p>企画・構成・提案</p>
            </div>
            <span className="process-arrow">→</span>
            <div className="process-step">
              <div className="process-icon">🎬</div>
              <h4>PRODUCTION</h4>
              <p>撮影・制作・編集</p>
            </div>
            <span className="process-arrow">→</span>
            <div className="process-step">
              <div className="process-icon">🚀</div>
              <h4>PROCESS</h4>
              <p>納品・運用・改善</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STRENGTH ===== */}
      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <header className="section-header fade-up is-visible">
            <p className="section-kicker">EXHIBITION 04</p>
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

      {/* ===== BLOG ===== */}
      {latestPosts.length > 0 && (
        <section className="section">
          <div className="container">
            <header className="section-header fade-up is-visible">
              <p className="section-kicker">EXHIBITION 05</p>
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
          </div>
        </section>
      )}

      {/* ===== CTA ===== */}
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
