import { apiUserPost } from "@/api/endpoint/users";
import BaseButton from "@/components/button";
import BaseInput from "@/components/input";
import { Modal, ModalFooter } from "@/components/modal";
import { setModal } from "@/store/uiSlice";
import { useSwal } from "@/utils/useSwal";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddData = ({ id }) => {
  const [form, setForm] = useState(null);
  const Swal = useSwal();

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModal({ id, isOpen: false }));
  };

  const submit = async () => {
    const response = await apiUserPost({ ...form });
    if (!response.error) {
      Swal.fire({
        title: "Success!",
        text: "Your data is saved",
        icon: "success",
      });
      handleClose();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: response.error.message,
      });
    }
  };
  return (
    <Modal id={id}>
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
      </div>
      <ModalFooter>
        <BaseButton color="light" size="md" onClick={handleClose}>
          Close
        </BaseButton>
        <BaseButton size="md" onClick={submit}>
          Submit
        </BaseButton>
      </ModalFooter>
    </Modal>
  );
};

export default AddData;
