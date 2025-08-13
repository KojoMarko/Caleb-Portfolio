type SectionHeadingProps = {
  number: string;
  title: string;
};

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-200 whitespace-nowrap">
        <span className="text-primary font-mono mr-2">{number}</span>
        {title}
      </h2>
      <div className="w-full h-px bg-border"></div>
    </div>
  );
}