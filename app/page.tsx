import Navbar from "@/components/Navbar/Navbar";
import Main from "@/components/Main";
import { popularUrl } from "@/utils/constants";

export default function Home() {
  return <Main url={popularUrl} />;
}
