import { Lesson } from "./Lesson";

export function Sidebar() {
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
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
      </div>
    </aside>
  );
};