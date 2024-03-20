import FadeUp from "../Animation/FadeUp";

export default function TechPill({
  name,
  icon,
  index,
}: {
  name: string;
  icon: JSX.Element;
  index: number;
}) {
  return (
    <FadeUp index={index}>
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full w-fit text-copy-light bg-border">
        {icon}
        <p>{name}</p>
      </div>
    </FadeUp>
  );
}
