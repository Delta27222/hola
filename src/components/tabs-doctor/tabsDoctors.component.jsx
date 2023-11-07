import { DatatableComponent, DoctorInfo } from '../../components';
import { useState } from 'react';
import { TableComponent } from '../table/table.component';

export const TabsDoctorsComponents = ({doctor}) => {
  const [activeTab, setActiveTab] = useState("citas");
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const columns = [
    {name: "Id Cita", uid: "idCita"},
    // {name: "Doctor", uid: "doctor"},
    {name: "Fecha Cita", uid: "fechaCita"},
    {name: "Hora Cita", uid: "horaCita"},
    {name: "Id Paciente", uid: "idPaciente"},
    {name: "Estado", uid: "status"},
    {name: "ACTIONS", uid: "actions"},
  ];

  const tabData = [
    // { id: "citas", label: "Citas", component: <DatatableComponent columns={columns} id_doctor={doctor.id}/> },
    { id: "citas", label: "Citas", component: <TableComponent columns={columns} id_doctor={doctor.id} doctorName={doctor.nombre.cuerpo} doctorEspecialidad={doctor.especialidad}/> },
    { id: "información", label: "Información", component: <DoctorInfo info={doctor} /> },
  ];
  return (
    <div className='space-y-2 w-[70%]'>
      <div>
        <h1 className='text-primary text-3xl w-[400px]'>Apartado específico</h1>
        <p className=''>Seleccione la vista que desee</p>
      </div>
      <div className='space-y-5'>
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
          {tabData.map((tab) => (
            <li className="mr-2" key={tab.id} role="presentation">
              <button className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === tab.id ? "border-primary" : ""}`} id={`${tab.id}-tab`} data-tabs-target={`#${tab.id}`} type="button" role="tab" aria-controls={tab.id} aria-selected={activeTab === tab.id} onClick={() => handleTabClick(tab.id)}>
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
        <div>
          {tabData.map((tab) => (
            <div className={`${activeTab === tab.id ? "block" : "hidden"}`} id={tab.id} role="tabpanel" aria-labelledby={`${tab.id}-tab`} key={tab.id}>
              {tab.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const InputComponentPrueba = ({ label, name, value, onChange, error }) => {
  return (
    <div className='flex flex-col relative'>
      <label>{label}:</label>
      <input
        className='w-full text-center px-2 py-2 border-1 border-gray-400 bg-gray-200 rounded outline-none'
        type={label === 'Correo' ? 'email' : 'text'}
        name={name}
        value={value}
        onChange={onChange}
        />
      {error && <span className='text-red-600 text-xs'>{error}</span>}
    </div>
  );
};