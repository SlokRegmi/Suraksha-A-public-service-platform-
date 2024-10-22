import { FocusCards } from "@/components/ui/focus-cards";

export function Categories() {
  const cards = [
    {
      title: "Ambulance",
      src: "https://images.unsplash.com/photo-1604573798699-b16359862773?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Police",
      src: "https://images.unsplash.com/photo-1666171174155-2a4ba52cce36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Potholes",
      src: "https://images.unsplash.com/photo-1560782202-154b39d57ef2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Firebrigade",
      src: "https://images.unsplash.com/photo-1608706525415-fe64cc27e85f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    { 
      title: "Sewer",
      src: "https://images.unsplash.com/photo-1710682299391-549eec441114?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Garbage",
      src: "https://images.unsplash.com/photo-1618580298796-8c681e026369?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "No Parking",
        src: "https://images.unsplash.com/photo-1533713120585-eccc68f4442b?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Flood amd Landslide",
        src: "https://images.unsplash.com/photo-1600336153113-d66c79de3e91?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
  ];

  return <FocusCards cards={cards} />;
}
