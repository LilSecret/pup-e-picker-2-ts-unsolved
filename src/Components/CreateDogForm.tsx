import { dogPictures } from "../dog-pictures";
import { useFormContext } from "../providers/provider-hooks";

export const CreateDogForm = () => {
  const { form, setForm, submitForm, resetForm } = useFormContext();

  return (
    <form
      id="create-dog-form"
      onSubmit={(e) => {
        e.preventDefault();
        submitForm();
        resetForm();
      }}
    >
      <h4>Create a New Dog</h4>
      <label htmlFor="name">Dog Name</label>
      <input
        type="text"
        value={form.name}
        onChange={(e) => {
          setForm({ ...form, name: e.target.value });
        }}
      />
      <label htmlFor="description">Dog Description</label>
      <textarea
        name=""
        id=""
        cols={80}
        rows={10}
        value={form.description}
        onChange={(e) => {
          setForm({ ...form, description: e.target.value });
        }}
      ></textarea>
      <label htmlFor="picture">Select an Image</label>
      <select
        id=""
        value={form.image}
        onChange={(e) => {
          setForm({ ...form, image: e.target.value });
        }}
      >
        {Object.entries(dogPictures).map(([label, pictureValue]) => {
          return (
            <option value={pictureValue} key={pictureValue}>
              {label}
            </option>
          );
        })}
      </select>
      <input type="submit" value="submit" />
    </form>
  );
};
