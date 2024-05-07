import { createSignal } from "solid-js";
import "./app.css";
import { createForm } from "@tanstack/solid-form";

export default function App() {
  const form = createForm(() => ({
    defaultValues: {
      name: "",
    },
  }));

  return (
    <main>
      <form>
        <form.Field name="name">{(field) => <input />}</form.Field>
      </form>
    </main>
  );
}
