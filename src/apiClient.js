const apiClient = {
  getAirbyte() {
    return fetch('http://localhost:7777/api/airbyte');
  },
};

export default apiClient; 