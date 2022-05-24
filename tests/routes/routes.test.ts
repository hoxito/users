import server from "../../src/server";
import request from "supertest";

// close the server after each test
afterEach((done) => {
  server.close();
  done();
});

describe("routes/healthcheck", () => {
  it("should ask me to send a file to parse", async () => {
    const response = await request(server).post("/user");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.data).toEqual(
        {
        message:"please send a file"
    });
  });
});