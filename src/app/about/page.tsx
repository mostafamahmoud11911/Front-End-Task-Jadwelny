import React from "react";
import style from "./about.module.css";

export const metadata = {
  title: "About page",
  description: "This is about page",
};

// Make this page server-side rendered

// export const dynamic = "force-dynamic";
// export const revalidate = 0;

interface DataProps {
  name: string;
  age: number;
  Nationality: string;
  description: string;
}

export default async function About() {
  const res = await fetch("http://localhost:3000/api/Info", {
    cache: "no-store",
  });

  const data: DataProps = await res.json();

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>About Me</h1>
        <div className={style.info}>
          <p className={style.name}>Name: {data.name}</p>
          <p className={style.age}>Age: {data.age}</p>
          <p className={style.nationality}>Nationality: {data.Nationality}</p>
          <p className={style.description}>Description: {data.description}</p>
        </div>
      </div>
    </div>
  );
}
