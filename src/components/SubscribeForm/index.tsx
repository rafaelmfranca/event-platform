import { useCreateSubscriberMutation } from '@/gql/generated';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SubscribeForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();

    await createSubscriber({ variables: { name, email } });

    navigate('/event');
  };

  return (
    <form action="" className="flex flex-col w-full gap-2" onSubmit={handleSubscribe}>
      <input
        placeholder="Seu nome completo"
        className="px-5 bg-gray-900 border-2 border-gray-900 rounded h-14 focus:outline-none focus:border-teal-500"
        type="text"
        name={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Seu melhor e-mail"
        className="px-5 bg-gray-900 border-2 border-gray-900 rounded h-14 focus:outline-none focus:border-teal-500"
        type="email"
        name={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center w-full px-6 py-4 mt-4 text-sm font-bold uppercase transition-colors bg-teal-500 rounded hover:bg-teal-600 disabled:opacity-50"
      >
        Garantir minha vaga
      </button>
    </form>
  );
}
