import Footer from "@/components/layouts/(landing-page)/footer";
import Header from "@/components/layouts/(landing-page)/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* HEADER */}
      <Header />

      <main>{children}</main>

      {/* FOOTER */}

      <Footer />
    </div>
  );
}
