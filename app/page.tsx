import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
export default function Home() {
  return (
    <div>
      <Navbar loginText="Log In" signupText="Start for Free" />
      <Hero />

    </div>
  );
}
