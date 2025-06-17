import FandomK from "@/projects/FandomK";
import GlobalNomad from "@/projects/GlobalNomad";
import MomodalLibrary from "@/projects/MomodalLibrary";
import SaveLinks from "@/projects/SaveLinks";
import Taskify from "@/projects/Taskify";

export default function ProjectDetailExtra({ id }) {
  const renderExtraComponent = () => {
    switch (id) {
      case "1":
        return <SaveLinks />;
      case "2":
        return <MomodalLibrary />;
      case "3":
        return <GlobalNomad />;
      case "4":
        return <Taskify />;
      case "5":
        return <FandomK />;
      default:
        return null;
    }
  };

  return <div className="mt-16">{renderExtraComponent()}</div>;
}
