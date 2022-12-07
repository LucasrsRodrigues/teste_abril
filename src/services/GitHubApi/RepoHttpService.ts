import { AxiosPromise } from "axios";
import { api } from ".";

interface IRepoHttpRepository {
  get: (user: string) => Promise<AxiosPromise>;
}

const RepoHttpService: IRepoHttpRepository = {
  get: (user: string) => api.get(`/${user}/repos`),
};

export default RepoHttpService;