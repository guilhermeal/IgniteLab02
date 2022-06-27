import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event:FormEvent) {
    event.preventDefault();

    createSubscriber({
      variables: {
        name,
        email,
      }
    });

    navigate('/event');
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">

      <div className="w-full max-w-[1100px] z-10 flex flex-col items-center justify-between mt-10 p-5 mx-auto md:flex-row md:mt-20 xl:p-0">
        <div className="md:max-w-[640px] p-1 xl:p-0 w-full items-center justify-items-center">
          <div className="flex flex-col items-center w-full md:items-start">
            <Logo />
          </div>
          <h1 className="mt-8 text-[2rem] md:text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero com <strong className="text-blue-500">React JS</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded mt-4 md:mt-0 w-full lg:max-w-[400px]">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratutitamente
          </strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input 
              className="bg-gray-900 rounded px-5 h-14" 
              type="text" 
              placeholder="Seu nome completo" 
              onChange={event => setName(event.target.value)}
            />
            <input 
              className="bg-gray-900 rounded px-5 h-14" 
              type="text" 
              placeholder="Digite seu e-mail" 
              onChange={event => setEmail(event.target.value)}
            />

            <button 
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-800 transition-colors disabled:opacity-50"
              type="submit"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>

      </div>

      <img src="/images/code-mockup.png" className="mt-[-5vh] z-0 md:mt-10" alt="" />
    </div>
  )
}