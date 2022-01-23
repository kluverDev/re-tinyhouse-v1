interface Body<TVariables> {
  query: string;
  variables?: TVariables;
}

export const server = {
  fetch: async <TDATA = any, TVariables = any>(body: Body<TVariables>) => {
    const res = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(res, "res");

    return res.json() as Promise<{ data: TDATA }>;
  },
};
