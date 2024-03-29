/* eslint-disable import/no-cycle */
import { Dialog, Transition } from "@headlessui/react";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import useSWR from "swr";

import fetcher from "@/utils/fetcher";

import { EmptyCard } from "../components/emptycard";
import DescriptionCard from "./Description";

interface Props {
  feedDetails: any;
  ud: any;
  open: any;
  setOpen: any;
}

export const ModalDescription = ({ feedDetails, ud, open, setOpen }: Props) => {
  const { data: fetchStudents } = useSWR("/api/students", fetcher);
  const student = fetchStudents?.fetchStudents;
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500/30 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full sm:w-[71rem]">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-full">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 flex pt-4 sm:ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-700 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-900"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <ChevronLeftIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-7 shadow-xl">
                    <div className="px-4 sm:px-6"></div>
                    <div className="relative mt-10 flex-1 px-4 sm:px-6">
                      {student?.length ? (
                        <DescriptionCard
                          feedDetail={feedDetails}
                          student={ud}
                        />
                      ) : (
                        <EmptyCard />
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
