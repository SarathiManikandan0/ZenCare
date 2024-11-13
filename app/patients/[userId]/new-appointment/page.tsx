import Image from "next/image";

import { AppointmentForm } from "@/components/forms/AppointmentForm.tsx";
import { getPatient } from "@/lib/actions/patient.actions";


const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
        <div className="flex items-center mb-12">
            <Image
              src="/assets/icons/1.png"
              height={1000}
              width={1000}
              alt="patient"
              className="h-10 w-fit"
            />
            <span className="ml-4 text-3xl font-extrabold text-white">
              ZenCare
            </span>
          </div>

          <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />

          <p className="copyright mt-10 py-12">© 2024 ZenCare</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default Appointment;