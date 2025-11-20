interface CardProps {
  emoji: string;
  title: string;
  description: string;
  className?: string;
}

export function Card({ emoji, title, description, className = '' }: CardProps) {
  return (
    <div className={`bg-emerald-500 rounded-lg p-6 md:p-8 flex flex-col justify-between min-h-[280px] md:min-h-[306px] ${className}`}>
      <div>
        <h3 className="font-['Julius_Sans_One:Regular',sans-serif] text-[32px] md:text-[40px] text-slate-200 mb-4 drop-shadow-md">
          {emoji} {title}
        </h3>
      </div>
      <p className="font-['Julius_Sans_One:Regular',sans-serif] text-[20px] md:text-[28px] text-center text-slate-200 mt-auto">
        {description}
      </p>
    </div>
  );
}
