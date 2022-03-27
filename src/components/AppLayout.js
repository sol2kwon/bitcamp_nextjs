import Link from "next/link";

const AppLayout = () => {
  return (
    <>
      <Link href="/">
        <a>
          <h2>to Counter</h2>
        </a>
      </Link>
      <Link href="/calc">
        <a>
          <h2>to Calc</h2>
        </a>
      </Link>
      <Link href="/bmi">
        <a>
          <h2>to BMI</h2>
        </a>
      </Link>
    </>
  );
};

export default AppLayout;