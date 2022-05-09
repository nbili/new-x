import { useForm } from "react-hook-form";

function Case() {
  const methods = useForm();
  const { register, handleSubmit } = methods;

  return (
    <div>
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <div>
          <label>
            FirstName:
            <input {...register("firstname")} type="text" />
          </label>
        </div>
        <div>
          <label>
            LastName:
            <input {...register("lastname")} type="text" />
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
