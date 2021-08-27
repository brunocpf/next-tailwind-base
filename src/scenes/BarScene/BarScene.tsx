import { Dialog, Transition } from '@headlessui/react';
import {
  CheckIcon, ChevronDownIcon, ChevronLeftIcon, LocationMarkerIcon as OutlineLocationMarkerIcon, StarIcon as OutlineStarIcon
} from '@heroicons/react/outline';
import {
  GlobeIcon, LocationMarkerIcon as SolidLocationMarkerIcon,
  PhoneIcon, StarIcon as SolidStarIcon
} from '@heroicons/react/solid';
import Container from 'components/Container';
import PhotoGallery from 'components/PhotoGallery';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import formatDistance from 'util/formatDistance';

export interface BarSceneProps { }

const BarScene: React.FC<BarSceneProps> = () => {
  const { back, query } = useRouter();
  const [additionalInfoExpanded, setAdditionalInfoExpanded] = useState(false);

  const { barId } = query;

  const { name, favorite, summary, address, distance, phone, website, keywords } = {
    name: 'Correria Music Bar',
    favorite: false,
    summary:
      "Espaço boêmio oferece noites com bandas de heavy metal, rock 'n' roll e blues, além de caipirinhas e sinuca.",
    address:
      'Av. Est. José Júlio de Souza, 740 - Praia de Itaparica, Vila Velha - ES, 29119-113',
    distance: 8000,
    phone: '(27) 98116-3325',
    website: 'http://www.facebook.com/correriamusicbar',
    keywords: [
      'Mesas externas',
      'Refeição no local',
      'Espaço seguro para pessoas transgênero',
      'Jogos de bar',
      'Mesas na cobertura',
      'Música ao vivo',
      'Noite de trivia',
      'Ótimos coquetéis',
      'Ótimos petiscos',
      'Shows ao vivo',
      'Assento com acessibilidade',
      'Banheiro com acessibilidade',
      'Entrada com acessibilidade',
      'Estacionamento com acessibilidade',
      'Alimentação',
      'Bebidas alcoólicas',
      'Bebidas destiladas',
      'Bebidas para happy hour',
      'Cerveja',
      'Coquetéis',
      'Dança',
      'Vinho',
      'Opções de refeição',
      'Lugar para sentar',
      'Banheiro',
      'Banheiro de gênero neutro',
      'Wi-Fi gratuito',
      'Aconchegante',
      'Casual',
      'Público',
      'Grupos',
      'Cartões de débito',
      'Cartões de crédito',
    ]
  };

  const handleCloseDialog = () => {
    back();
  };
  const handleToggleFavorite = () => { };

  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={handleCloseDialog}
      >
        <div className="text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="w-screen h-screen overflow-y-scroll overflow-x-hidden text-left align-middle transition-all transform bg-gray-800">
              <div className="py-4">
                <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
                  <Container>
                    <button
                      className="relative rounded-full iconButton highlightCurrent text-violet-500 active:text-violet-300 transition-all"
                      onClick={handleCloseDialog}
                    >
                      <ChevronLeftIcon className="transition-all ring-current iconShadow h-8 w-8" />
                    </button>
                  </Container>
                </Dialog.Title>
                <div className="mt-2 w-full h-80 relative">
                  <PhotoGallery />
                </div>

                <div className="mt-4">
                  <Container className="divide-y divide-white divide-opacity-25">
                    <div className="flex items-center justify-between relative select-none rounded w-full ring-gray-200 text-shadow isolate">
                      <h2 className="text-xl font-medium">
                        {name}
                        <span className="flex items-center gap-0.5 text-sm">
                          <OutlineLocationMarkerIcon className="h-4 w-4 ring-gray-200 iconShadow" />
                          {formatDistance(distance)}
                        </span>
                      </h2>
                      <button
                        className="relative rounded-full iconButton text-gray-200"
                        onClick={e => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleToggleFavorite();
                        }}
                      >
                        <OutlineStarIcon className="h-8 w-8 ring-current iconShadow" />
                        <motion.div
                          animate={{ opacity: favorite ? 1 : 0 }}
                          transition={{
                            ease: favorite ? 'easeOut' : 'easeIn',
                            duration: 0.1,
                          }}
                          className="absolute inset-0"
                        >
                          <SolidStarIcon className="h-8 w-8 ring-current iconShadow" />
                        </motion.div>
                      </button>
                    </div>
                    <section className="my-2 py-2">
                      <span className="text-sm">{summary}</span>
                    </section>
                    <section className="my-2 py-2 gap-2 flex flex-col">
                      <div className="flex text-sm gap-2 items-center">
                        <SolidLocationMarkerIcon className="h-4 w-4 ring-gray-200" />
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            address,
                          )}`}
                          className="flex-1"
                        >
                          {address}
                        </a>
                      </div>
                      <div className="flex text-sm gap-2 items-center">
                        <PhoneIcon className="h-4 w-4 ring-gray-200" />
                        <a
                          href={`tel:${phone}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1"
                        >
                          {phone}
                        </a>
                      </div>
                      <div className="flex text-sm gap-2 items-center">
                        <GlobeIcon className="h-4 w-4 ring-gray-200" />
                        <a
                          href={website}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1"
                        >
                          {website}
                        </a>
                      </div>
                    </section>
                    <section>
                      {/* Horários */}
                    </section>
                    <section>
                      {/* Eventos */}
                    </section>
                    <section className="py-2">
                      <div className="border-solid border-gray-600 border-2 rounded p-1">
                        <button className="flex gap-1 py- w-full" onClick={() => setAdditionalInfoExpanded(s => !s)}>
                          <ChevronDownIcon className={`h-6 w-6 ${additionalInfoExpanded ? '' : 'rotate-180'} transform transition-transform`} />
                          <span>Informações adicionais</span>
                        </button>
                        <div className={`grid grid-cols-2 gap-4 md:grid-cols-3 text-sm ${additionalInfoExpanded ? 'block' : 'hidden'} overflow-hidden transition-all py-2`} >
                          {keywords.map(k =>
                            <span key={k} className="text-sm flex gap-1">
                              <CheckIcon className="h-4 w-4" />
                              {k}
                            </span>
                          )}
                        </div>
                      </div>
                    </section>
                    <section></section>
                  </Container>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BarScene;
