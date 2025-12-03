type Props = {
  title: string;
  description: string;
};

export default function FeatureCard({ title, description }: Props) {
  return (
    <div>
      {/* Placeholder: Icon */}
      <div>ICON</div>

      {/* Placeholder: Title */}
      <h3>{title}</h3>

      {/* Placeholder: Description */}
      <p>{description}</p>
    </div>
  );
}
