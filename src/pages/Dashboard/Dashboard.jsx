import Card from "@/components/card";
import { ModalButton } from "@/components/modal";
import BaseTable from "@/components/table";
import EditData from "./EditData";
import BaseButton from "@/components/button";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteData, setData } from "@/store/dataSlice";
import { apiUsers } from "@/api/endpoint/users";
import { useStore } from "@/utils/useStore";
import AddData from "./AddData";

const Dashboard = () => {
  const dataColumns = [
    { title: "#", key: "#", type: "increment", align: "center" },
    { title: "Role", key: "role", type: "default", align: "center" },
    {
      title: "Username",
      key: "username",
      type: "default",
      align: "center",
    },
    { title: "Email", key: "email", type: "default", align: "center" },
    { title: "Action", key: "action", type: "slot", align: "center" },
  ];

  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState({
    limit: 10,
    skip: 0,
    total: null,
  });

  const dispatch = useDispatch();
  const { data } = useStore();

  // without api delete
  const handleDelete = (id) => {
    dispatch(deleteData({ id }));
  };

  const loadData = async () => {
    setLoading(true);
    const response = await apiUsers({ ...params });
    if (!response.error) {
      setLoading(false);
      setParams((prev) => ({
        ...prev,
        total: response.total,
      }));
      dispatch(setData(response.users));
    }
  };

  const onPageChange = (page) => {
    params.skip = page;
    loadData();
  };

  useEffect(() => {
    loadData();
  }, [params.limit, params.skip]);

  const slot = {
    action: (data) => (
      <>
        <div className="flex justify-center gap-2 items-center">
          <ModalButton id={data.id}>Edit</ModalButton>
          <BaseButton color="red" onClick={() => handleDelete(data.id)}>
            Delete
          </BaseButton>
        </div>
        <EditData data={data} />
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
        <AddData id="addData" loadData={loadData} />
        <BaseTable
          action
          columns={dataColumns}
          page={1}
          source={data}
          slot={slot}
          loading={loading}
          onPageChange={onPageChange}
          limit={params.limit}
          total={params.total}
        />
      </Card>
    </div>
  );
};

export default Dashboard;
