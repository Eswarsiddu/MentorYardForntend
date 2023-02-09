import { useEffect, useState } from "react";
import { GetAllMentors } from "../../utils/BackEndRequests";

const testData = [
  {
    profilePic: "https://i.ytimg.com/vi/fDNc8G3RAbQ/maxresdefault.jpg",
    name: "Naruto Uzumaki",
    designation: "Seventh Hokake",
    menteeId: "",
  },
  {
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj3ACRANvIKQUFp0eaXl775vZAEw9HwYJNLw&usqp=CAU",
    name: "Minato Namikaze",
    designation: "fourth Hokake",
    menteeId: "",
  },
  {
    profilePic:
      "https://qph.cf2.quoracdn.net/main-qimg-f2d6505570af1b9abdc0ec68458670df-pjlq",
    name: "Kakashi Hatake",
    designation: "Sixth Hokake",
    menteeId: "",
  },
  {
    profilePic:
      "https://w0.peakpx.com/wallpaper/28/814/HD-wallpaper-sasuke-uchiha-naruto-sasuke-uchiha.jpg",
    name: "Sasuke Uchiha",
    designation: "Shadow Hokake",
    menteeId: "",
  },
  {
    profilePic:
      "data:image/jpeg;base64,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",
    name: "Gaara",
    designation: "Fifth Kazekage",
    menteeId: "",
  },
];

export default function AllMentors() {
  const [data, setData] = useState<any[]>(testData);
  useEffect(() => {
    GetAllMentors().then((_data) => {
      setData(_data);
    });
  }, []);
  return (
    <div>
      <div>
        <input type="text" />
        <button>Serach</button>
      </div>
      <div>Top Mentors</div>
      <div className="mentors__list">
        {data.map((e: any) => {
          console.log(e);
          return <MentorTile mentorData={e} />;
        })}
      </div>
    </div>
  );
}

function MentorTile({ mentorData }: any) {
  const height = 300;
  const width = parseInt(`${(height / 16) * 9}`);
  return (
    <div className="mentor__tile">
      <img
        // style={{ width: `${width}px`, height: `${height}px` }}
        src={mentorData.profilePic}
      />
      <div>
        <h3>{mentorData.name}</h3>
        <p>{mentorData.designation}</p>
        <p className="details">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          aliquam mollitia quae cupiditate. A animi odit distinctio expedita, ex
          fugit debitis exercitationem inventore et aspernatur
        </p>
      </div>
    </div>
  );
}
