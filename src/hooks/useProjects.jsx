import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProjects = () => {
  const fetchProjects = () =>
    axios.get("http://localhost:3000/projects").then(res => res.data);

  return useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
};

export default useProjects;
