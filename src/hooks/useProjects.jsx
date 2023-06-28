import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: () =>
      axios.get("http://localhost:3000/projects").then(res => res.data),
  });
};

export default useProjects;
