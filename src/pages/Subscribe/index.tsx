import { Logo, SubscribeForm } from '@components';

export default function Subscribe() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-no-repeat bg-cover bg-blur">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-4xl leading-tight">
            Construa uma <strong className="text-teal-500">aplicação completa</strong>, do zero, com
            <strong className="text-cyan-400"> React</strong>
          </h1>
          <p className="mt-4 leading-relaxed text-gray-100">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e
            com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="block mb-6 text-2xl">Inscreva-se gratuitamente</strong>
          <SubscribeForm />
        </div>
      </div>

      <img src="/src/assets/code_mockup.png" className="mt-10" alt="" />
    </div>
  );
}
