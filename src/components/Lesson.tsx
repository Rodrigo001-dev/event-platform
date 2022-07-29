import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  // o tipo da aula só pode ser live(ao vido) ou class(aula)
  type: 'live' | 'class';
};

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  // isPast vai verificar se a data ja passou
  // se a data de disponibilização da aula já passou(isPast) quer dizer que ela esta liberada
  const isLessonAvaliable = isPast(availableAt);
  // o format pega uma data e retorna uma formatação em texto da data
  const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  });

  return (
    <a href="#">
      <span className="text-gray-300">
        {availableAt.toString()}
      </span>

      {/* rounded => border-radius: 4px */}
      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLessonAvaliable ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">
          {title}
        </strong>
      </div>
    </a>
  );
};