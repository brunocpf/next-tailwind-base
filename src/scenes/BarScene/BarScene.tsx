import { Dialog, Transition } from '@headlessui/react';
import {
  ChevronLeftIcon,
  StarIcon as OutlineStarIcon,
  LocationMarkerIcon as OutlineLocationMarkerIcon,
} from '@heroicons/react/outline';
import {
  StarIcon as SolidStarIcon,
  LocationMarkerIcon as SolidLocationMarkerIcon,
  PhoneIcon,
  GlobeIcon,
} from '@heroicons/react/solid';
import Container from 'components/Container';
import PhotoGallery from 'components/PhotoGallery';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import formatDistance from 'util/formatDistance';

export interface BarSceneProps {}

const BarScene: React.FC<BarSceneProps> = () => {
  const { back, query } = useRouter();

  const { barId } = query;

  const { name, favorite, summary, address, distance, phone, website } = {
    name: 'Correria Music Bar',
    favorite: false,
    summary:
      "Espaço boêmio oferece noites com bandas de heavy metal, rock 'n' roll e blues, além de caipirinhas e sinuca.",
    address:
      'Av. Est. José Júlio de Souza, 740 - Praia de Itaparica, Vila Velha - ES, 29119-113',
    distance: 8000,
    phone: '(27) 98116-3325',
    website: 'http://www.facebook.com/correriamusicbar',
  };

  const handleCloseDialog = () => {
    back();
  };
  const handleToggleFavorite = () => {};

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
            <div className="w-screen h-screen overflow-hidden text-left align-middle transition-all transform bg-gray-800">
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
