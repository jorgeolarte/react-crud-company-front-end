import React, { useState, useEffect } from "react";

export default function Info({ added, setAdded }) {
  const [companies, setCompanies] = useState(null);

  useEffect(() => {
    const loadCompanies = () => {
      let url = `${process.env.REACT_APP_PROJECT_BACKEND_URI}/api/companies`;

      fetch(url)
        .then((result) => result.json())
        .then((data) => {
          setCompanies(data);
        });
    };

    loadCompanies();
  }, [added]);

  const deleteCompany = (id) => {
    console.log("id: ", id);
    let url = `${process.env.REACT_APP_PROJECT_BACKEND_URI}/api/companies/${id}`;

    fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((result) => {
      setAdded({});
    });
  };

  return (
    <div className='container flex flex-col gap-5'>
      <h2 className='text-4xl font-bold'>Listado de empresas</h2>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
        {companies &&
          companies.map((item) => (
            <div
              className='bg-gradient-to-br to-[#720cd4] from-[#c621e5] p-1 rounded-md'
              key={item._id}
            >
              <div className='h-full w-full bg-[#3c3c3b] p-5 rounded-md flex flex-col'>
                <div className=''>
                  <h3 className='text-lg font-semibold'>{item.name}</h3>
                  <p className='text-sm font-light'>
                    <span className='font-medium'>Dirección:</span>{" "}
                    {item.address}
                  </p>
                  <p className='text-sm font-light'>
                    <span className='font-medium'>NIT:</span> {item.nit}
                  </p>
                  <p className='text-sm font-light'>
                    <span className='font-medium'>Teléfono:</span> {item.phone}
                  </p>
                </div>
                <button
                  className='mt-2 hover:bg-gradient-to-tr hover:to-[#c621e5] hover:from-[#720cd4] hover:text-white bg-white text-[#720cd4] p-1 rounded-md'
                  onClick={() => deleteCompany(item._id)}
                >
                  Borrar
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
