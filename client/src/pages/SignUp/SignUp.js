import React, { useEffect } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import styled from "styled-components";
import Field from "../../components/field/Field";
import Input from "../../components/input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const schemaValidate = yup.object({
  username: yup.string().required("Vui lòng nhập tên tài khoản"),
  email: yup
    .string()
    .email("Vui lòng nhập email hợp lệ!")
    .required("Vui lòng nhập địa chỉ email"),
  password: yup
    .string()
    .min(8, "Vui lòng nhập mật khẩu ít nhất 8 kí tự!")
    .required("Vui lòng nhập mật khẩu!"),
});
const SignUp = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaValidate),
  });
  const handleSignUp = async (values) => {
    console.log(values);
    if (!isValid) return;
    else {
      Swal.fire({
        text: "Tạo tài khoản thành công",
        icon: "success",
      });

      navigate("/");
    }
  };
  useEffect(() => {
    const arrErroes = Object.values(errors);
    if (arrErroes.length > 0) {
      toast.error(arrErroes[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  useEffect(() => {
    document.title = "Đăng kí";
  }, []);
  return (
    <StyledSignUp className="sign-up-page">
      <BreadCrumb heading="Sign up Page" />
      <div className="wrapper-layout section">
        <div className="flex justify-center items-center">
          <div className="px-4 py-6 flex flex-col w-[450px] sign-up-form  rounded-md bg-white">
            <h3 className="text-secondary text-4xl font-semibold text-center">
              Đăng kí
            </h3>
            <form
              onSubmit={handleSubmit(handleSignUp)}
              className="flex flex-col mt-4"
            >
              <Field>
                <Input
                  type="text"
                  name="username"
                  placeholder="Tài khoản"
                  control={control}
                />
              </Field>
              <Field>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  control={control}
                />
              </Field>
              <Field>
                <Input
                  type="password"
                  name="password"
                  placeholder="Mật khẩu"
                  control={control}
                />
              </Field>
              <ButtonSubmit
                isLoading={isSubmitting}
                disabled={isSubmitting}
                height="50px"
                type="submit"
              >
                Đăng Kí
              </ButtonSubmit>
              <div className="mt-3 flex items-center gap-x-3">
                <span className="text-textPrimary font-light">
                  Bạn đã có tài khoản?
                </span>
                <NavLink
                  to={"/sign-in"}
                  className="italic text-blue-500 text-sm cursor-pointer underline font-light"
                >
                  Đăng Nhập
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </StyledSignUp>
  );
};

export default SignUp;
const StyledSignUp = styled.div`
  .sign-up-form {
    -webkit-box-shadow: 0 5px 30px rgb(0 0 0 / 10%);
    box-shadow: 0 5px 30px rgb(0 0 0 / 10%);
  }
`;
