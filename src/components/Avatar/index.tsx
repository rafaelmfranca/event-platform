interface IAvatarProps {
  name: string;
  bio: string;
  avatarURL: string;
}

export default function Avatar({ name, bio, avatarURL }: Partial<IAvatarProps>) {
  return (
    <>
      <img src={avatarURL} className="border-2 rounded-full w-14 h-14 border-cyan-500" alt="" />
      <div>
        <strong className="block text-lg">{name}</strong>
        <span className="block text-sm text-gray-200">{bio}</span>
      </div>
    </>
  );
}
