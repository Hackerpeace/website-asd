import { Info } from "../cards/Info";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const AboutUs = () => {
  return (
    <section id="about-us" className="py-6">
      {" "}
      <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="w-full max-w-md md:max-w-xl min-h-[200px] md:min-h-[350px] mx-auto relative flex items-center justify-center md:aspect-[1.68]">
            <img
              src="/assets/code-img-1.png"
              className="w-full h-auto max-w-full md:max-w-xl object-cover rounded-3xl shadow-lg relative z-10"
              alt="About Our Mission"
            />
          </div>
        </div>

        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col">
          <Title> Tentang Axioo Sentra Digital </Title>
          <Paragraph className="mt-5">
            Axioo Sentra Digital berkomitmen membantu bisnis Anda berkembang
            melalui solusi website profesional dan inovatif. Kami menawarkan
            layanan pembuatan website yang responsif, aman, dan mudah dikelola.
            Dengan dukungan tim berpengalaman, kami siap menjadi mitra
            transformasi digital untuk mendorong pertumbuhan dan daya saing
            bisnis Anda.
          </Paragraph>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            <Info
              title="Misi"
              description="Memberikan solusi website profesional dan inovatif untuk mendukung pertumbuhan bisnis."
            ></Info>
            <Info
              title="Visi"
              description="Menjadi mitra digital terpercaya bagi pelaku usaha di Indonesia."
            ></Info>
          </div>
        </div>
      </Container>
    </section>
  );
};
