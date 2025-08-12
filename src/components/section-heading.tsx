import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  icon: LucideIcon;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeading({ icon: Icon, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("text-center space-y-4", className)}>
      <div className="inline-flex items-center justify-center bg-primary/10 text-primary p-3 rounded-full">
        <Icon className="h-8 w-8" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {description && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>}
    </div>
  );
}
