import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Schema = yup.object({
  firtName: yup.string().min(2).required(),
  lastName: yup.string().required()
});

function Case() {
  const methods = useForm({
    resolver: yupResolver(Schema)
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = methods;

  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <div>
          <label>
            FirstName:
            <input {...register("firstname")} />
          </label>
        </div>
        <div>
          <label>
            LastName:
            <input {...register("lastname")} />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export { Case };
