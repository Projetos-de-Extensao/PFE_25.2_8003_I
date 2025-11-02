import React, { createContext, useState } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);

  const addUser = (user) => {
    const newUser = { ...user, id: Date.now() };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    console.log("Novo utilizador adicionado:", newUser);
    console.log("Todos os utilizadores:", [...users, newUser]);
  };

  const addProject = (project) => {
    const newProject = { ...project, id: Date.now() };
    setProjects((prevProjects) => [...prevProjects, newProject]);
    console.log("Novo projeto adicionado:", newProject);
    console.log("Todos os projetos:", [...projects, newProject]);
  };

  return (
    <DataContext.Provider value={{ users, projects, addUser, addProject }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, DataProvider };