import api from "@/lib/api";

export async function analyzeLeafImage(file) {
  const formData = new FormData();
  formData.append("image", file);

  const { data } = await api.post("/diagnosis/analyze", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data;
}

export async function getDiagnosisHistory(page = 1, limit = 10) {
  const { data } = await api.get("/diagnosis/history", {
    params: { page, limit },
  });
  return data; 
}

export async function deleteDiagnosis(id) {
  const { data } = await api.delete(`/diagnosis/${id}`);
  return data;
}