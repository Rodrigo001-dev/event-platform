import { useGetLessonsQuery } from "../graphql/generated";

import { Lesson } from "./Lesson";

// orderBy: availableAt_ASC => quer dizer que eu estou ordenando as lessons pela
// data que vai ser exibida em ordem crescente
// stage: PUBLISHED => é para listar somente as aulas que foram publicadas
// const GET_LESSONS_QUERY = gql`
//   query {
//     lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
//       id
//       lessonType
//       availableAt
//       title
//       slug
//     }
//   }
// `;

// interface GetLessonsQueryResponse {
//   lessons: {
//     id: string;
//     title: string;
//     slug: string;
//     availableAt: string;
//     lessonType: 'live' | 'class';
//   }[]
// };

export function Sidebar() {
  const { data } = useGetLessonsQuery();

  return (
    // no tailwind quando não tem o valor pré-criado eu posso abrir o [] e 
    // colocar o valor que eu quero dentro
    // no caso vai ser 348px(fixo) => não vai mudar
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      {/* p gap-8 vai adicionar um espaçamento entre cada uma das Lessons de 32px */}
      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}
      </div>
    </aside>
  );
};