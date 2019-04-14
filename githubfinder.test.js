const { githubfinder } = require("./githubfinder");

test("Githubfinder to be defined", () => {
  expect(githubfinder).toBeDefined();
});

test("Expect User fetched login to be handsum-MUSE", () => {
  return githubfinder("handsum-MUSE").then(data => {
    expect(data[0].owner["login"]).toEqual("handsum-MUSE");
  });
});

test("User fetched repo ids to contain 180382311", () => {
  let result = [];
  return githubfinder("handsum-MUSE").then(data => {
    for (let i in data) {
      result.push(data[i].id);
    }
    expect(result).toContain(180382311);
  });
});

test("User fetched repo name to be Egbo_Uchenna_Portfolio-", () => {
  return githubfinder("handsum-MUSE").then(data => {
    expect(data[0].name).toEqual("Egbo_Uchenna_Portfolio-");
  });
});

test("Repo Egbo_Uchenna_Portfolio- owner_id to be 42383018", () => {
  return githubfinder("handsum-MUSE").then(data => {
    expect(data[0].owner["id"]).toEqual(42383018);
  });
});

test("Repo handsum-MUSE/jest_testing-exercises description and fork to be false", () => {
  return githubfinder("handsum-MUSE").then(data => {
    expect(data[1].description && data[1].fork).toBeFalsy();
  });
});

test("Repo Owner ids to be lessThan or equal to 5", () => {
  let res = [];
  return githubfinder("handsum-MUSE").then(data => {
    for (let i in data) {
      res.push(data[i].owner["id"]);
    }
    expect(res.length).toBeLessThanOrEqual(5);
  });
});

test("All fetched repos to be greater than 3", () => {
  let resul = [];
  return githubfinder("handsum-MUSE").then(data => {
    for (let i in data) {
      resul.push(data[i].id);
    }
    expect(resul.length).toBeGreaterThan(3);
  });
});
