import apiFetch from "./api";

export const getTopArtisans = () => apiFetch("/artisans/top");
export const getArtisan = (id) => apiFetch(`/artisans/${id}`);