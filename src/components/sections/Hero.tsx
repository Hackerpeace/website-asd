import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Numbers } from "./Numbers";

export const Hero = () => {
  return (
    <section className="relative pt-32 lg:pt-36">
      {" "}
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
          <span
            className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 
                        skew-x-12 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600
                        blur-xl opacity-60 lg:opacity-95 lg:block hidden"
          ></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
        </div>

        <div
          className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start
                        lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
        >
          <h1 className="text-heading-1 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold">
            Bangun
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 ml-2 mr-2">
              Website
            </span>
            untuk Mengembangkan Bisnis Anda di Era Digital
          </h1>
          <Paragraph className="mt-5">
            Axioo Sentra Digital adalah sebuah perusahaan yang bergerak dibidang
            jasa pembuatan website dan digital marketing. Kami berkomitmen untuk
            memberikan solusi digital yang inovatif dan berkualitas tinggi untuk
            membantu bisnis Anda tumbuh dan berkembang di era digital.
          </Paragraph>
          <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
            <div className="flex sm:flex-row flex-col gap-5 w-full"></div>
          </div>
        </div>
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="w-full max-w-md md:max-w-xl min-h-[200px] md:min-h-[350px] mx-auto relative flex items-center justify-center md:aspect-[1.68]">
            <img
              src="/assets/code-img-2.png"
              className="w-full h-auto max-w-full md:max-w-xl object-cover rounded-3xl shadow-lg relative z-10"
              alt="About Our Mission"
            />
          </div>
        </div>
      </Container>
      <Numbers />
    </section>
  );
};
