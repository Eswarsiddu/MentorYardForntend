import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ROLES from "../../types/RolesEnum";
import { createMenteeBio, createMentorBio } from "../../utils/BackendRequests";
export function BioInfo() {
  const { currentUser, bioDetails, role } = useAuth();
  const [staticState, setStaticState] = useState(true);
  const refs: any = {
    contact: useRef<HTMLInputElement>(null),
    line1: useRef<HTMLInputElement>(null),
    line2: useRef<HTMLInputElement>(null),
    city: useRef<HTMLInputElement>(null),
    state: useRef<HTMLInputElement>(null),
    country: useRef<HTMLInputElement>(null),
  };
  if (role == ROLES.MENTOR) {
    refs.company = useRef<HTMLInputElement>(null);
    refs.domain = useRef<HTMLInputElement>(null);
    refs.occupation = useRef<HTMLInputElement>(null);
    refs.designation = useRef<HTMLInputElement>(null);
  } else {
    console.log("role", role);
    refs.standard = useRef<HTMLInputElement>(null);
  }

  const resetDefaults = () => {
    refs.contact.current!.value = bioDetails.contact;
    refs.line1.current!.value = bioDetails.address.line1;
    refs.line2.current!.value = bioDetails.address.line2;
    refs.city.current!.value = bioDetails.address.city;
    refs.state.current!.value = bioDetails.address.state;
    refs.country.current!.value = bioDetails.address.country;

    if (role == ROLES.MENTOR) {
      refs.company.current!.value = bioDetails.company;
      refs.domain.current!.value = bioDetails.domain;
      refs.occupation.current!.value = bioDetails.occupation;
      refs.designation.current!.value = bioDetails.designation;
    } else {
      refs.standard.current!.value = bioDetails.standard;
    }
  };

  const updateBio = async (e: any) => {
    e.preventDefault();
    const data: { [key: string]: any } = {
      name: currentUser!.displayName,
      email: currentUser!.email,
      contact: refs.contact.current!.value,
    };
    const addrKeys = ["line1", "line2", "city", "state", "country"];
    const address: { [key: string]: any } = {};
    for (let key of addrKeys) {
      address[key] = refs[key].current!.value;
    }
    data.address = address;
    if (role == ROLES.MENTEE) {
      data.standard = refs.standard.current!.value;
    } else {
      data.company = refs.company.current!.value;
      data.occupation = refs.occupation.current!.value;
      data.designation = refs.designation.current!.value;
      data.domain = refs.domain.current!.value;
    }
    data.photo = bioDetails.photo;
    if (role == ROLES.MENTEE) {
      const res = await createMenteeBio(currentUser!.uid, data);
      if (res != "error") {
        setStaticState(true);
      } else {
        resetDefaults();
      }

      //TODO: update res in authcontext
    } else {
      const res = await createMentorBio(currentUser!.uid, data);
      if (res != "error") {
        setStaticState(true);
      } else {
        resetDefaults();
      }
    }
  };

  useEffect(resetDefaults, []);
  return (
    <div>
      <Link to="/dashboard">Back to Dashboard</Link>
      <form onSubmit={updateBio}>
        <div>
          <label>Phone Number</label>
          <input
            ref={refs.contact}
            type="tel"
            name="contact"
            disabled={staticState}
            required
          />
        </div>
        <p>Address</p>
        <div>
          <label>line 1</label>
          <input
            ref={refs.line1}
            type="text"
            name="line1"
            disabled={staticState}
            required
          />
        </div>
        <div>
          <label>line 2</label>
          <input
            ref={refs.line2}
            type="text"
            disabled={staticState}
            name="line2"
            required
          />
        </div>
        <div>
          <label>city</label>
          <input
            ref={refs.city}
            type="text"
            disabled={staticState}
            name="city"
            required
          />
        </div>
        <div>
          <label>state</label>
          <input
            ref={refs.state}
            type="text"
            disabled={staticState}
            name="state"
            required
          />
        </div>
        <div>
          <label>country</label>
          <input
            ref={refs.country}
            type="text"
            disabled={staticState}
            name="country"
            required
          />
        </div>
        {role == ROLES.MENTEE ? (
          <div>
            <div>
              <label>Standard</label>
              <input
                type="text"
                name="standard"
                disabled={staticState}
                required
              />
            </div>
          </div>
        ) : (
          <div>
            <div>
              <label>company</label>
              <input
                ref={refs.company}
                type="text"
                disabled={staticState}
                name="company"
                required
              />
            </div>
            <div>
              <label>domain</label>
              <input
                ref={refs.domain}
                type="text"
                disabled={staticState}
                name="domain"
                required
              />
            </div>
            <div>
              <label>occupation</label>
              <input
                ref={refs.occupation}
                disabled={staticState}
                type="text"
                name="occupation"
                required
              />
            </div>
            <div>
              <label>designation</label>
              <input
                disabled={staticState}
                ref={refs.designation}
                type="text"
                name="designation"
                required
              />
            </div>
          </div>
        )}
        <span
          onClick={(e) => {
            setStaticState((p) => {
              p = !p;
              if (p) {
                resetDefaults();
              }
              return p;
            });
          }}
        >
          {staticState ? "Edit" : "Cancel"}
        </span>
        <button>Submit</button>
      </form>
    </div>
  );
}
