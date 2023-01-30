import { RingLoader } from "react-spinners";
import "./WaitingPage.css";
export function WaitingPage() {
  return (
    <div className="waiting-page">
      <RingLoader size={100} color="#c21ee7" />
    </div>
  );
}
