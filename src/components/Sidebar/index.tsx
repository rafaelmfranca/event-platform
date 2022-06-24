import { useQuery } from '@apollo/client';
import { Lesson } from '@components';
import { GET_LESSONS_QUERY } from '@gql/queries';

interface IGetLessonsQueryResponse {
  lessons: {
    id: string;
    slug: string;
    stage: string;
    title: string;
    availableAt: string;
    lessonType: 'live' | 'class';
  }[];
}

export default function Sidebar() {
  const { data } = useQuery<IGetLessonsQueryResponse>(GET_LESSONS_QUERY);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="block pb-6 mb-6 text-2xl font-bold border-b border-gray-600">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
