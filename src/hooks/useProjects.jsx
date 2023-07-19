import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProjects = () => {
  const fetchProjects = () =>
    axios
      .get("https://portfolio-jsonserver.vercel.app/projects")
      .then(res => res.data);

  return useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
};

export default useProjects;
