import Card from "@/components/card";
import { Modal, ModalButton } from "@/components/modal";
import BaseTable from "@/components/table";
import ModalForm from "./EditData";
import BaseButton from "@/components/button";
import { useState } from "react";

const Dashboard = () => {
  const dataColumns = [
    { title: "#", key: "#", type: "increment", align: "center" },
    { title: "Action", key: "action", type: "slot", align: "center" },
    { title: "Status", key: "status", type: "slot", align: "center" },
    {
      title: "Username",
      key: "username",
      type: "default",
      align: "center",
    },
  ];

  let initialData = [
    {
      id: "1",
      username: "adrian",
      status: true,
    },
    {
      id: "2",
      username: "yoga",
      status: false,
    },
  ];

  const [data, setData] = useState(initialData)

  const deleteData = (id) => {
    const updateData = data.filter((n) => n.id != id);
    setData(updateData)
  };

  const slot = {
    action: (data) => (
      <>
        <div className="flex justify-center gap-2 items-center">
          <ModalButton id={data.id}>Edit</ModalButton>
          <BaseButton color="red" onClick={() => deleteData(data.id)}>Delete</BaseButton>
        </div>
        <ModalForm data={data} />
      </>
    ),
    status: (data) => (
      <span
        className={`text-xs font-medium capitalize inline-block py-0.5 px-1.5 rounded ${
          data.status
            ? "bg-green-200 text-green-500"
            : "bg-red-200 text-red-500"
        }`}
      >
        {data.status ? "active" : "deactive"}
      </span>
    ),
  };

  return (
    <div className="space-y-6">
      <Card title="Dashboard" subtitle="List of dashboard" action>
        <Modal id="addData" title="Add Data" />
        <BaseTable
          action
          columns={dataColumns}
          perPage={10}
          page={1}
          source={data}
          slot={slot}
        />
      </Card>
    </div>
  );
};

export default Dashboard;
