"use client";

import {
  Description,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";

export default function Survey() {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-10">
      <div className="w-full max-w-lg px-4 ">
        <Fieldset className="space-y-6 rounded-xl bg-white/5 p-6 sm:p-10">
          <Legend className="text-base/7 font-semibold text-white">
            Survey Page
          </Legend>
          <Field>
            <Label className="text-sm/6 font-medium text-white">Name</Label>
            <Description className="text-sm/6 text-white/50">
              Use your real name so people will recognize you.
            </Description>
            <Input
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
            />
          </Field>
          <Field>
            <Label className="text-sm/6 font-medium text-white">Age</Label>
            <Description className="text-sm/6 text-white/50">
              What is your age group?
            </Description>
            <div className="relative">
              <Select
                className={clsx(
                  "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
              >
                <option>18-24</option>
                <option>25-34</option>
                <option>35-44</option>
                <option>45-54</option>
                <option> 55-64</option>
                <option>65+</option>
              </Select>
              <ChevronDownIcon
                className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                aria-hidden="true"
              />
            </div>
          </Field>
          <Field>
            <Label className="text-sm/6 font-medium text-white">Gender</Label>
            <Description className="text-sm/6 text-white/50">
              What is your gender?
            </Description>
            <div className="relative">
              <Select
                className={clsx(
                  "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </Select>
              <ChevronDownIcon
                className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                aria-hidden="true"
              />
            </div>
          </Field>
          <Field>
            <Label className="text-sm/6 font-medium text-white">Location</Label>
            <Description className="text-sm/6 text-white/50">
              Where do you live?
            </Description>
            <div className="relative">
              <Select
                className={clsx(
                  "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
              >
                <option>Select an option</option>
                <option>Mumbai</option>
                <option>Chennai</option>
                <option>Delhi</option>
                <option>Bangalore</option>
              </Select>
              <ChevronDownIcon
                className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                aria-hidden="true"
              />
            </div>
          </Field>
          <Field>
            <Label className="text-sm/6 font-medium text-white">
              Frequency of Healthcare Visits:
            </Label>
            <Description className="text-sm/6 text-white/50">
              How often do you visit healthcare facilities?
            </Description>
            <div className="relative">
              <Select
                className={clsx(
                  "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
              >
                <option>Rarely</option>
                <option>Occasionally</option>
                <option>Regularly</option>
                <option>Frequently</option>
              </Select>
              <ChevronDownIcon
                className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                aria-hidden="true"
              />
            </div>
          </Field>
          <Field>
            <Label className="text-sm/6 font-medium text-white">
              Familiarity with AI:
            </Label>
            <Description className="text-sm/6 text-white/50">
              How familiar are you with AI technologies in healthcare?
            </Description>
            <div className="relative">
              <Select
                className={clsx(
                  "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
              >
                <option>Not familiar</option>
                <option>Somewhat familiar</option>
                <option>Very familiar</option>
              </Select>
              <ChevronDownIcon
                className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                aria-hidden="true"
              />
            </div>
          </Field>
          <Field>
            <Label className="text-sm/6 font-medium text-white">
              Current Usage:
            </Label>
            <Description className="text-sm/6 text-white/50">
              Do you currently use any AI-based healthcare applications or
              tools?
            </Description>
            <div className="relative">
              <Select
                className={clsx(
                  "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
              >
                <option>Select an option</option>
                <option>Yes</option>
                <option>No</option>
              </Select>
              <ChevronDownIcon
                className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                aria-hidden="true"
              />
            </div>
          </Field>
          <Field>
            <Label className="text-sm/6 font-medium text-white">
              Suggestions for Improvement
            </Label>
            <Description className="text-sm/6 text-white/50">
              What suggestions do you have for improving AI-based healthcare
              services?
            </Description>
            <Textarea
              className={clsx(
                "mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
              rows={3}
            />
          </Field>
          <div className="flex gap-2 justify-end">
            <Button
              onClick={open}
              className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
            >
              Next
            </Button>

            <Transition appear show={isOpen}>
              <Dialog
                as="div"
                className="relative z-10 focus:outline-none"
                onClose={close}
              >
                <div className="fixed inset-0 z-10 w-screen bg-black/75 backdrop-blur-sm ">
                  <div className="flex min-h-full items-center justify-center p-4">
                    <TransitionChild
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 transform-[scale(95%)]"
                      enterTo="opacity-100 transform-[scale(100%)]"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 transform-[scale(100%)]"
                      leaveTo="opacity-0 transform-[scale(95%)]"
                    >
                      <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                        <DialogTitle
                          as="h3"
                          className="text-base/7 font-medium text-white"
                        >
                          Data Privacy Notice
                        </DialogTitle>
                        <p className="mt-2 text-sm/6 text-white/50">
                          At Healthcare AI, we value your privacy and the
                          security of your data. We collect and process your
                          information to enhance healthcare solutions. Your data
                          is stored securely and used in compliance with privacy
                          regulations. By using our services, you consent to our
                          data practices outlined in our privacy policy.
                        </p>
                        <div className=" flex justify-end mt-4 gap-1">
                          <Button
                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                            onClick={close}
                          >
                            Cancel
                          </Button>
                          <Link href="/pages/chatbot" passHref>
                            <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                              Continue
                            </Button>
                          </Link>
                        </div>
                      </DialogPanel>
                    </TransitionChild>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        </Fieldset>
      </div>
    </div>
  );
}
