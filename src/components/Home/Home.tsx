import Link from "next/link";
import style from "./Home.module.css";

export default function HomePage() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>Welcome to Our Website!</h1>
        <p className={style.description}>
          This simple Application to display some information using . NextJS
        </p>
        <div>
          <Link href="/about" className={style.button}>Explore</Link>
        </div>
      </div>
    </div>
  );
}
