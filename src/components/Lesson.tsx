import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  // o tipo da aula só pode ser live(ao vido) ou class(aula)
  type: 'live' | 'class';
};

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  // isPast vai verificar se a data ja passou
  // se a data de disponibilização da aula já passou(isPast) quer dizer que ela esta liberada
  const isLessonAvaliable = isPast(props.availableAt);
  // o format pega uma data e retorna uma formatação em texto da data
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  });

  // se o slug dos parâmetros da rota for igual ao slug da lesson
  const isActiveLesson = slug === props.slug;

  return (
    // o className="group" vai servir para quando eu passar o mouse em cima desse
    // grupo(group-hover) ele vai aplicar o hover
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>

      {/* rounded => border-radius: 4px */}
      <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
        // o bg-green-500 só vai ser ativo quando o isActiveLesson for true(quando a lesson estiver ativa)
        'bg-green-500': isActiveLesson,
      })}>
        <header className="flex items-center justify-between">
          {isLessonAvaliable ? (
            <span className={classNames('text-sm font-medium flex items-center gap-2', {
              'text-white': isActiveLesson,
              'text-blue-500': !isActiveLesson,
            })}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className={classNames('text-xs rounded py-[0.125rem] px-2 text-white border font-bold', {
            'border-white': isActiveLesson,
            'border-green-300': !isActiveLesson,
          })}>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className={classNames('mt-5 block', {
          'text-white': isActiveLesson,
          'text-gray-200': !isActiveLesson,
        })}>
          {props.title}
        </strong>
      </div>
    </Link>
  );
};