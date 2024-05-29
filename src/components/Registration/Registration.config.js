import ShadowIcon from "./img/personWithSuitcase.svg";
import WorkerIcon from "./img/suitcase.svg";

export const RegistrationCards = [
  {
    icon: ShadowIcon,
    alt: "Shadow icon",
    name: "Ēnotājs",
    text: "Izbaudi īstu darba pieredzi, atklāj jaunas karjeras iespējas un izzini savu aicinājumu, piedaloties ēnošanas sesijās dažādās nozarēs.",
    link: "/registration/register-shadower",
    color: "var(--blue)",
    hoverColor: "var(--blue-light-1)",
  },
  {
    icon: WorkerIcon,
    alt: "Worker icon",
    name: "Ēnu devējs",
    text: "Esi Uzņēmums vai Eksperts, kas dalīsies savā pieredzē, lai mudinātu arī citus sasniegt profesionālos mērķus.",
    link: "/registration/register-shadowee",
    color: "var(--green-blue)",
    hoverColor: "var(--green-blue-light-1)",
  },
];
