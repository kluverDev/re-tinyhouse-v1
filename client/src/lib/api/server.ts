interface Body {
  query: string;
}

export const server = {
  fetch: async <TDATA = any>(body: Body) => {
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
