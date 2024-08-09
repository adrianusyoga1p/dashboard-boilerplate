import Card from "@/components/card";
import { Modal, ModalButton } from "@/components/modal";
import BaseTable from "@/components/table";
import ModalForm from "./EditData";
import BaseButton from "@/components/button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, setData } from "@/store/dataSlice";
import api from "@/api/client";

const Dashboard = () => {
  const dataColumns = [
    { title: "#", key: "#", type: "increment", align: "center" },
    { title: "Action", key: "action", type: "slot", align: "center" },
    { title: "Name", key: "name", type: "default", align: "center" },
    {
      title: "Username",
      key: "username",
      type: "default",
      align: "center",
    },
    { title: "Email", key: "email", type: "default", align: "center" },
  ];

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  useEffect(() => {
    dispatch(setData(data));
  });

  const handleDelete = (id) => {
    dispatch(deleteData({ id }));
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await api({
        method: "GET",
        url: "/users",
      });
      if (!res.error) {
        setLoading(false)
        dispatch(setData(res));
      }
    };
    fetchData();
  }, []);

  const slot = {
    action: (data) => (
      <>
        <div className="flex justify-center gap-2 items-center">
          <ModalButton id={data.id}>Edit</ModalButton>
          <BaseButton color="red" onClick={() => handleDelete(data.id)}>
            Delete
          </BaseButton>
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
          loading={loading}
        />
      </Card>
    </div>
  );
};

export default Dashboard;
