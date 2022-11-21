import { reactive } from "vue";
export const store = reactive({
  listService: [
    {
      icon: "fa-solid fa-network-wired",
      title: "Audit & Assurance",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit ",
    },
    {
      icon: "fa-solid fa-suitcase",
      title: "Financial Advisory",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit ",
    },
    {
      icon: "fa-solid fa-chart-simple",
      title: "Analystics and M&A",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit ",
    },
    {
      icon: "fa-solid fa-plane",
      title: "Middle Marketing",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit ",
    },
    {
      icon: "fa-solid fa-earth-europe",
      title: "Legal Consulting",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit ",
    },
    {
      icon: "fa-solid fa-inbox",
      title: "Regulatory Risk ",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit ",
    },
  ],
  listTeam: [
    {
      img: "team-1.jpg",
      name: "David Cooper",
      role: "CTO & CO-FOUNDER",
    },
    {
      img: "team-2.jpg",
      name: "Emma Lopez",
      role: "CHIEF MARKETING",
    },
    {
      img: "team-3.jpg",
      name: "Oliver Jones",
      role: "CHIEF PROCURAMENT",
    },
    {
      img: "team-4.jpg",
      name: "T.Jhonson",
      role: "CEO & PRESIDENT",
    },
  ],
});
