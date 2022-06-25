import { AnchorButton, AnchorCard, Avatar } from '@components';
import { DefaultUi, Player, Youtube } from '@vime/react';
import { DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react';

import { useGetLessonBySlugQuery } from '@/gql/generated';
import '@vime/core/themes/default.css';

interface IVideoProps {
  lessonSlug: string;
}

export default function Video({ lessonSlug }: IVideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: { slug: lessonSlug },
    fetchPolicy: 'no-cache',
  });

  // TODO: Implement a loading spinner
  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="flex justify-center bg-black">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 leading-relaxed text-gray-200">{data.lesson.description}</p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <Avatar
                  name={data.lesson.teacher.name}
                  bio={data.lesson.teacher.bio}
                  avatarURL={data.lesson.teacher.avatarURL}
                />
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <AnchorButton
              url="https://discord-service.rocketseat.dev/signin/ignite-lab"
              variant="primary"
              text="Comunidade do discord"
              icon={<DiscordLogo size={24} />}
            />
            <AnchorButton
              url=""
              variant="secondary"
              text="Acesse o desafio"
              icon={<Lightning size={24} />}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-20">
          <AnchorCard
            url="https://efficient-sloth-d85.notion.site/Material-complementar-86d4ef35af16471ebc3ae3eba1a378e5"
            icon={<FileArrowDown size={32} />}
            title="Material complementar"
            text="Acesse o material complementar para acelerar o seu desenvolvimento"
          />
          <AnchorCard
            url="https://drive.google.com/drive/folders/1mxWnvlqmH7MbVRv2Na9xFNgCQCygM1iR?usp=sharing"
            icon={<Image size={32} />}
            title="Wallpapers exclusivos"
            text="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
          />
        </div>
      </div>
    </div>
  );
}
