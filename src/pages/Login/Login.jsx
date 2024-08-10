import { apiLogin } from "@/api/endpoint/auth";
import BaseButton from "@/components/button";
import Card from "@/components/card";
import BaseInput from "@/components/input";
import { login } from "@/store/authSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const submit = async (evt) => {
    evt.preventDefault();
    const response = await apiLogin(form.username, form.password);
    if (!response.error) {
      dispatch(login({ user: response, token: response.token }));
    } else {
      console.error("Login failed:", response.error);
    }
  };

  return (
    <div className="p-6 flex items-center justify-center w-full h-screen">
      <Card className="max-w-[500px] w-full" title="Login">
        <form onSubmit={submit} className="space-y-4">
          <BaseInput
            onChange={(evt) =>
              setForm({
                ...form,
                username: evt.target.value,
              })
            }
            label="Username"
          />
          <BaseInput
            onChange={(evt) =>
              setForm({
                ...form,
                password: evt.target.value,
              })
            }
            label="Password"
            type="password"
          />
          <BaseButton type="submit" size="md">
            Submit
          </BaseButton>
        </form>
      </Card>
    </div>
  );
};

export default Login;
