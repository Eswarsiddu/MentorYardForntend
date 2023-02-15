import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import {
  connectMentorAndMentee,
  getFilteredMentors,
} from "../../utils/BackendRequests";
// import { GetAllMentors } from "../../utils/BackEndRequests";

export default function AllMentors() {
  const [data, setData] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);
  const { currentUser, bioDetails } = useAuth();
  useEffect(() => {
    getFilteredMentors().then((_data) => {
      console.log("mentors", _data);
      setData(_data);
    });
  }, []);
  return (
    <div>
      {selected && (
        <div className="mentor__popup">
          <img
            src={selected.photo}
            style={{ width: "150px", height: "150px" }}
          />
          <p>{selected.name}</p>
          <p>{selected.occupation}</p>
          <button
            onClick={(e) => {
              setSelected(null);
            }}
          >
            close
          </button>
          <button
            onClick={async (e) => {
              // console.log("mentorId", selected._id, "mentee", currentUser?.uid);
              toast("Connected with mentor");
              await connectMentorAndMentee(currentUser!.uid, selected._id);
              setSelected(null);
              // TODO: toast message
            }}
          >
            Connect
          </button>
        </div>
      )}
      <div>
        <input type="text" />
        <button>Serach</button>
      </div>
      <div>Top Mentors</div>
      <div className="mentors__list">
        {data.map((e: any) => {
          console.log(e);
          return <MentorTile mentorData={e} setSelected={setSelected} />;
        })}
      </div>
    </div>
  );
}

function MentorTile({ mentorData, setSelected }: any) {
  const height = 300;
  const width = parseInt(`${(height / 16) * 9}`);
  return (
    <div
      className="mentor__tile"
      onClick={(e) => {
        setSelected(mentorData);
      }}
    >
      <img
        // style={{ width: `${width}px`, height: `${height}px` }}
        src={mentorData.photo}
      />
      <div>
        <h3>{mentorData.name}</h3>
        <p>{mentorData.occupation}</p>
      </div>
    </div>
  );
}
