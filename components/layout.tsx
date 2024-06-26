import Footer from "./footer";
import Meta from "./meta";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-stone-50 dark:bg-stone-800 flex flex-col gap-8">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
