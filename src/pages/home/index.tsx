
// src/home/Home.tsx
import * as React from "react";
import Layout from "@/components/layout";
import Odds from "@/components/odds"; 

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = () => {
  return (
    <Layout>
      <div className="bg-white text-black min-h-screen">
        <nav className="p-4 shadow-lg bg-black text-white">
          <h1 className="text-3xl font-bold">Legs That Pay</h1>
        </nav>
        <main className="p-4">
          <h2 className="text-2xl mb-4">Welcome to Legs That Pay</h2>
          <Odds />
        </main>
      </div>
    </Layout>
  );
};

export default Home;