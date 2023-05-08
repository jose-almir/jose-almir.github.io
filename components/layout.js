import { Navbar } from "./navbar";

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-md">{children}</main>
    </>
  );
}
