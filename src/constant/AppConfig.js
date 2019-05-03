const mode = "development"; //development,stage
export const isProd = mode === "live";
let data;

switch (mode) {
  case "development":
    data = {
      API_ENDPOINT: "http://localhost:3001"
    };
    break;
  case "stage":
    data = {
      API_ENDPOINT: "http://localhost:3001",
    };
    break;
  default:
    data = {};
    break;
}

export const AppConfig = data;
