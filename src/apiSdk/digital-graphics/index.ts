import axios from 'axios';
import queryString from 'query-string';
import { DigitalGraphicInterface, DigitalGraphicGetQueryInterface } from 'interfaces/digital-graphic';
import { GetQueryInterface } from '../../interfaces';

export const getDigitalGraphics = async (query?: DigitalGraphicGetQueryInterface) => {
  const response = await axios.get(`/api/digital-graphics${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createDigitalGraphic = async (digitalGraphic: DigitalGraphicInterface) => {
  const response = await axios.post('/api/digital-graphics', digitalGraphic);
  return response.data;
};

export const updateDigitalGraphicById = async (id: string, digitalGraphic: DigitalGraphicInterface) => {
  const response = await axios.put(`/api/digital-graphics/${id}`, digitalGraphic);
  return response.data;
};

export const getDigitalGraphicById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/digital-graphics/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDigitalGraphicById = async (id: string) => {
  const response = await axios.delete(`/api/digital-graphics/${id}`);
  return response.data;
};
