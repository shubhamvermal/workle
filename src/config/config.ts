export const ENV = {
    development: {
      SERVER_URL: "http://localhost:8080/api",
      IMG_URL: "http://localhost:8080"
    },
    production: {
      SERVER_URL: "https://wahfy-be.herokuapp.com/api",
      IMG_URL: "https://wahfy-be.herokuapp.com"
    },
    test: {
      SERVER_URL: "https://example.com/api",
      IMG_URL: "https://example.com"
    },
  }

export const image_server = ENV[process.env.NODE_ENV].IMG_URL