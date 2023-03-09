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
import { login, register } from "../../store/auth/userSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

const schemaValidate = yup.object({
  email: yup
    .string()
    .email("Vui lòng nhập email hợp lệ!")
    .required("Vui lòng nhập địa chỉ email"),
  password: yup.string().required("Vui lòng nhập mật khẩu!"),
});
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaValidate),
  });
  const handleSignIn = async (values) => {
    console.log(values);
    if (!isValid) return;
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      const data = unwrapResult(resultAction);
      console.log(" user loged", data);
      Swal.fire({
        text: "Đăng nhập thành công",
        icon: "success",
      });

      // navigate("/");
    } catch (error) {
      console.log(error);
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
    document.title = "Đăng nhập";
  }, []);
  return (
    <StyledSignIn className="sign-in-page">
      <BreadCrumb heading="Sign In Page" title="Home - Sign In Page" />
      <div className="wrapper-layout section">
        <div className="flex justify-center items-center">
          <div className="px-4 py-6 flex flex-col w-[450px] sign-up-form  rounded-md bg-white">
            <h3 className="text-secondary text-4xl font-semibold text-center">
              Đăng nhập
            </h3>
            <form
              onSubmit={handleSubmit(handleSignIn)}
              className="flex flex-col mt-4"
            >
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
                Đăng Nhập
              </ButtonSubmit>
              <div className="mt-3 flex items-center gap-x-3">
                <span className="text-textPrimary font-light">
                  Bạn chưa có tài khoản?
                </span>
                <NavLink
                  to={"/sign-up"}
                  className="italic text-blue-500 text-sm cursor-pointer underline font-light"
                >
                  Đăng kí
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </StyledSignIn>
  );
};

export default SignIn;
const StyledSignIn = styled.div`
  .sign-up-form {
    -webkit-box-shadow: 0 5px 30px rgb(0 0 0 / 10%);
    box-shadow: 0 5px 30px rgb(0 0 0 / 10%);
  }
`;
