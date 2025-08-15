import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { useThemeStore } from "../../store/ThemeStore";

const logos = [
  "smkn1prob",
  "axioomengajar",
  "axioo",
  "maspionit",
  "teradataindonusa",
];

export const Brands = () => {
  const { theme } = useThemeStore();
  return (
    <section>
      <Container className="space-y-15">
        <div className="text-center max-w-3xl mx-auto">
          <Title> Kami Bekerja Sama Dengan </Title>
        </div>
        <div className="flex justify-center flex-wrap gap-5">
          {logos.map((logo, key) => {
            let logoSrc = `/assets/logos/${logo}.png`;
            if (
              theme === "dark" &&
              (logo === "axioo" || logo === "teradataindonusa")
            ) {
              logoSrc = `/assets/logos/dark/${logo}-dark.png`;
            }
            return (
              <div key={key} className="p-4 sm:p-5 rounded-xl bg-body group">
                <img
                  src={logoSrc}
                  width="200"
                  height="100"
                  alt={logo}
                  className="h-10 sm:h-15 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-110"
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
