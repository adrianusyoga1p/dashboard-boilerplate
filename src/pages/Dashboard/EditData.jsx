import BaseInput from "@/components/input";
import { Modal, ModalFooter } from "@/components/modal";
import { useState } from "react";
// import * as Switch from "@radix-ui/react-switch";
import BaseButton from "@/components/button";
import { useDispatch } from "react-redux";
import { setModal } from "@/store/uiSlice";
import { updateData } from "@/store/dataSlice";
import { apiUsersUpdate } from "@/api/endpoint/users";
import { useSwal } from "@/utils/useSwal";

const ModalForm = ({ data }) => {
  const [form, setForm] = useState(data);
  const Swal = useSwal();

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModal({ id: data.id, isOpen: false }));
  };

  const handleEdit = async () => {
    const response = await apiUsersUpdate(
      data.id,
      dispatch(updateData({ ...form }))
    );
    if (!response.error) {
      handleClose();
      Swal.fire({
        title: "Success!",
        text: "Your data is saved",
        icon: "success",
      });
    }
  };

  return (
    <Modal id={data.id} title="Edit Data">
      <div className="space-y-4 p-6">
        <BaseInput
          label="Username"
          value={form?.username}
          onChange={(evt) =>
            setForm({
              ...form,
              username: evt.target.value,
            })
          }
        />
        <BaseInput
          label="Email"
          value={form?.email}
          onChange={(evt) =>
            setForm({
              ...form,
              email: evt.target.value,
            })
          }
        />
        <BaseInput
          label="Role"
          value={form?.role}
          onChange={(evt) =>
            setForm({
              ...form,
              role: evt.target.value,
            })
          }
        />
        <BaseInput
          label="First Name"
          value={form?.firstName}
          onChange={(evt) =>
            setForm({
              ...form,
              firstName: evt.target.value,
            })
          }
        />
        <BaseInput
          label="Last Name"
          value={form?.lastName}
          onChange={(evt) =>
            setForm({
              ...form,
              lastName: evt.target.value,
            })
          }
        />
        {/* <div>
          <p className="mb-2 font-semibold text-sm">Status</p>
          <Switch.Root
            checked={form?.status}
            onCheckedChange={() => setForm({ ...form, status: !form.status })}
            className="w-[42px] h-[25px] bg-gray-500 rounded-full relative focus:shadow-sky-300 data-[state=checked]:bg-sky-600 outline-none cursor-default"
          >
            <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
          </Switch.Root>
        </div> */}
      </div>
      <ModalFooter>
        <BaseButton color="light" size="md" onClick={() => handleClose()}>
          Close
        </BaseButton>
        <BaseButton size="md" onClick={() => handleEdit()}>
          Submit
        </BaseButton>
      </ModalFooter>
    </Modal>
  );
};

export default ModalForm;
