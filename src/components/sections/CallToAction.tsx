import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const CTA = () => {
  return (
    <section id="cta" className="pb-20 relative">
      {" "}
      <Container>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
              {" "}
              Mulai{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                Pembuatan Website
              </span>{" "}
              Untuk Bisnis Anda Sekarang!
            </h1>
            <Paragraph className="pt-10">
              Jika Anda memiliki beberapa pertanyaan atau ingin berkonsultasi
              tentang layanan pembuatan website kami, jangan ragu untuk
              menghubungi kami.
            </Paragraph>
            <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
              <Button
                href="https://api.whatsapp.com/send?phone=6285187257740&text=Halo%20Axioo%20Sentra%20Digital,%20saya%20ingin%20bertanya%20tentang%20layanan."
                target="_blank"
                rel="noopener noreferrer"
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
