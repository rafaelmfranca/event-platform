import { format, isPast } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { CheckCircle, Lock } from 'phosphor-react';
import { Link } from 'react-router-dom';

interface ILessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export default function Lesson({ title, slug, availableAt, type }: ILessonProps) {
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBr,
  });

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div className="p-4 mt-2 border border-gray-500 rounded group-hover:border-teal-500">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="flex items-center gap-2 text-sm font-medium text-cyan-500">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm font-medium text-amber-500">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className="text-xs font-bold rounded px-2 py-[0.125rem] text-white border border-teal-500">
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className="block mt-5 text-gray-200">{title}</strong>
      </div>
    </Link>
  );
}
