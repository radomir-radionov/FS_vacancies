import axios from "axios";
import { Application } from "../types/application";

const API_URL =
  "https://fsvacancies-production-936d.up.railway.app/applications";

export const getApplications = async (): Promise<Application[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createApplication = async (
  application: Application
): Promise<Application> => {
  const response = await axios.post(API_URL, application);
  return response.data;
};

export const updateApplication = async (
  id: string,
  application: Application
): Promise<Application> => {
  const response = await axios.put(`${API_URL}/${id}`, application);
  return response.data;
};

export const deleteApplication = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
