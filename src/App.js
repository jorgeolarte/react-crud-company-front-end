import { useState } from "react";
import Form from "./pages/Form";
import Info from "./pages/Info";

export default function App() {
  const [added, setAdded] = useState({});

  return (
    <div className='flex flex-col p-10 gap-10 min-h-screen bg-[#3c3c3b]  text-white'>
      <Form setAdded={setAdded} />
      <Info added={added} setAdded={setAdded} />
    </div>
  );
}
