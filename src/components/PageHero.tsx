interface PageHeroProps {
  image: string;
  alt: string;
  title: string;
  sub: string;
  minHeight?: string;
}

export default function PageHero({ image, alt, title, sub, minHeight }: PageHeroProps) {
  return (
    <section className="page-hero" style={minHeight ? { minHeight } : undefined}>
      <div className="page-hero-media">
        <img src={image} alt={alt} width={1600} height={900} />
      </div>
      <div className="page-hero-content">
        <h1 className="page-hero-title font-display">{title}</h1>
        <p className="page-hero-sub">{sub}</p>
      </div>
    </section>
  );
}
