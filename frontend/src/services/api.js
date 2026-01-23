import axios from 'axios';

const API_URL = 'http://localhost:5000/api/submissions';

export const createSubmission = (data) => axios.post(API_URL, data);
export const getPendingSubmissions = () => axios.get(`${API_URL}/pending`);
export const updateSubmissionStatus = (id, status) =>
  axios.patch(`${API_URL}/${id}`, { status });
