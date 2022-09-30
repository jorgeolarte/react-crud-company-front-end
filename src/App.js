import { useState } from "react";
import Form from "./pages/Form";
import Info from "./pages/Info";

export default function App() {
  const [added, setAdded] = useState({});

  return (
    <div className='flex flex-col p-10 gap-10 min-h-screen bg-gradient-to-t to-[#c621e5] from-[#720cd4] text-white'>
      <Form setAdded={setAdded} />
      <Info added={added} setAdded={setAdded} />
    </div>
  );
}
