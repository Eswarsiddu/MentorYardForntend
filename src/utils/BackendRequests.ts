import { BACKEND_HTTP_URL } from "./Constants";

export async function addMentor(uid: string, name: string, email: string) {
  const res = await fetch(`${BACKEND_HTTP_URL}/mentor/${uid}`, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, name }),
  });
  console.log("addemntor", await res.json());
  if (res.status == 200) {
    return "";
  } else {
    return "error";
  }
}

export async function createMentorBio(uid: string, data: any) {
  const res = await fetch(`${BACKEND_HTTP_URL}/mentor/${uid}`, {
    method: "put",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.status == 200) {
    return (await res.json()).mentor;
  } else {
    return "error";
  }
}

export async function UpdateMentorDetails(uid: string, data: any) {
  const res = await fetch(`${BACKEND_HTTP_URL}/mentor/${uid}`, {
    method: "put",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.status == 200) {
    return (await res.json()).mentor;
  } else {
    return "error";
  }
}

export async function connectMentorAndMentee(
  menteeId: string,
  mentorId: string
) {
  console.log("connect mentor mentee", { menteeId, mentorId });
  const res = await fetch(`${BACKEND_HTTP_URL}/mentor/connect`, {
    method: "put",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ menteeId, mentorId }),
  });
  if (res.status == 200) {
    return (await res.json()).mentor;
  } else {
    return "error";
  }
}

//TODO: pending backend
export async function getMentees(uid: string) {
  const res = await fetch(`${BACKEND_HTTP_URL}/mentor/`);
}

export async function getMentorById(id: string) {
  const res = await fetch(`${BACKEND_HTTP_URL}/mentor/id/${id}`);
  if (res.status == 200) {
    return (await res.json()).mentor;
  } else {
    return undefined;
  }
}

export async function getMentorByFuid(uid: string) {
  const res = await fetch(`${BACKEND_HTTP_URL}/mentor/uid/${uid}`);
  if (res.status == 200) {
    return (await res.json()).mentor;
  } else {
    return undefined;
  }
}

export async function getFilteredMentors(
  name: string | undefined = undefined,
  occupation: string | undefined = undefined,
  designation: string | undefined = undefined,
  company: string | undefined = undefined,
  domain: string | undefined = undefined
) {
  const urlsearchparamas = new URLSearchParams();
  if (name) urlsearchparamas.append("name", name);
  if (domain) urlsearchparamas.append("domain", domain);
  if (occupation) urlsearchparamas.append("occupation", occupation);
  if (designation) urlsearchparamas.append("designation", designation);
  if (company) urlsearchparamas.append("company", company);
  if (name || domain || occupation || designation || company) {
    const res = await fetch(
      `${BACKEND_HTTP_URL}/mentor/filter?${urlsearchparamas}`
    );
    if (res.status == 200) {
      return (await res.json()).mentors;
    } else return undefined;
  } else {
    const res = await fetch(`${BACKEND_HTTP_URL}/mentor/filter`);
    if (res.status == 200) {
      return (await res.json()).mentors;
    } else return undefined;
  }
}

export async function addMentee(uid: string, name: string, email: string) {
  const res = await fetch(`${BACKEND_HTTP_URL}/mentee/${uid}`, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, name }),
  });
  console.log("addmentee req", res);
  console.log("addementee", await res.json());
  if (res.status == 200) {
    return "";
  } else {
    return "error";
  }
}

export async function createMenteeBio(uid: string, data: any) {
  const res = await fetch(`${BACKEND_HTTP_URL}/mentee/${uid}`, {
    method: "put",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.status == 200) {
    return (await res.json()).mentee;
  } else {
    return "error";
  }
}

export async function getMenteeById(id: string) {
  const res = await fetch(`${BACKEND_HTTP_URL}/mentee/id/${id}`);
  if (res.status == 200) {
    return (await res.json()).mentee;
  } else {
    return undefined;
  }
}

export async function getMenteeByFuid(uid: string) {
  const res = await fetch(`${BACKEND_HTTP_URL}/mentee/uid/${uid}`);
  if (res.status == 200) {
    return (await res.json()).mentee;
  } else {
    return undefined;
  }
}

export async function UpdateMenteeDetails(uid: string, data: any) {
  const res = await fetch(`${BACKEND_HTTP_URL}/mentee/${uid}`, {
    method: "put",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.status == 200) {
    return (await res.json()).mentee;
  } else {
    return "error";
  }
}

export async function getMenteeMentors(uid: string) {
  const res = await fetch(`${BACKEND_HTTP_URL}/mentee/mymentors/${uid}`);
  if (res.status == 200) {
    return await res.json();
  } else {
    return "error";
  }
}

export async function getMentorMentees(uid: string) {
  const res = await fetch(`${BACKEND_HTTP_URL}/mentor/mymentees/${uid}`);
  if (res.status == 200) {
    return await res.json();
  } else {
    return "error";
  }
}

export async function getRole(uid: string) {
  const res = await fetch(`${BACKEND_HTTP_URL}/getrole/${uid}`);
  if (res.status == 200) {
    return (await res.json()).role;
  }
  return undefined;
}
