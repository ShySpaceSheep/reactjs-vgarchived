interface FeatureCardProps {
  img: string;
  header: string;
  description: string;
}

export default function FeatureCard({
  img,
  header,
  description,
}: FeatureCardProps) {
  return (
    <div className="feature-card">
      <div className="feat-img">
        <img src={img} height={75} width={75} alt="Feature Icon" />
      </div>
      <div className="feat-description">
        <h2 className="hero-sub-header">{header}</h2>
        <p className="smaller">{description}</p>
      </div>
    </div>
  );
}
