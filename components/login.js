import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import withReactContent from "sweetalert2-react-content";
export function LoginForm() {
  const router = useRouter();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const alertWithSwal = withReactContent(Swal);

  async function LoginHandle(data) {
    await axios("/api/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async () => {
        reset();
        await alertWithSwal.fire({
          toast: true,
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
          width: "40%",
          imageUrl: "/icons/success.png",
          imageWidth: "20%",
          title: (
            <p className="font-head font-semibold text-green-600 text-lg text-center tracking-wide">
              Login Berhasil
            </p>
          ),
          html: (
            <p className="font-body text-center text-green-400 font-medium tracking-wide">
              Login Dengan{" "}
              <p className="font-semibold font-body">
                {data.email.toUpperCase()}
              </p>{" "}
              Berhasil
            </p>
          ),
        });
        router.push("/");
      })
      .catch(async () => {
        await alertWithSwal.fire({
          toast: true,
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
          width: "40%",
          imageUrl: "/icons/error.png",
          imageWidth: "20%",
          title: (
            <p className="font-head font-semibold text-red-600 text-lg text-center tracking-wide">
              Login Gagal
            </p>
          ),
          html: (
            <p className="font-body text-center text-red-400 font-medium tracking-wide">
              Periksa Kembali Email & Kata Sandi
            </p>
          ),
        });
      });
  }
  return (
    <form noValidate className="space-y-4" onSubmit={handleSubmit(LoginHandle)}>
      {/* Alamat Email */}
      <div className="flex flex-col">
        <label className="font-head text-secondary-400">Alamat Email</label>
        <input
          label="Email"
          name="email"
          className="h-8 font-body text-primary-400 outline-none bg-transparent transition ease-in-out border-b-2 border-gray-200 hover:border-primary-400 focus:border-b-2 focus:border-primary-400"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
          })}
        />
        {errors.email && errors.email.type === "required" && (
          <p className="text-red-400 text-sm font-head">
            Masukkan Alamat Email
          </p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p className="text-red-400 text-sm font-head">Email Tidak Valid</p>
        )}
      </div>
      {/* Kata Sandi */}
      <div className="flex flex-col">
        <label className="font-head text-secondary-400">Kata Sandi</label>
        <input
          label="Password"
          name="password"
          className="h-8 font-body text-primary-400 outline-none bg-transparent transition ease-in-out border-b-2 border-gray-200 hover:border-primary-400 focus:border-b-2 focus:border-primary-400"
          type="password"
          placeholder="Kata Sandi"
          {...register("password", {
            required: true,
            minLength: 8,
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/,
            },
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <p className="text-red-400 text-sm font-head">Masukkan Kata Sandi</p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p className="text-red-400 text-sm font-head">
            Kata Sandi Minimal Harus Terdiri Dari 6 karakter
          </p>
        )}
      </div>
      <div className="pt-2">
        <button
          type="submit"
          className="transition ease-in-out bg-primary-400 hover:bg-primary-200 hover:shadow-lg text-white font-head py-2 px-6 rounded-md w-full duration-300"
        >
          Masuk
        </button>
      </div>
    </form>
  );
}
