import FandomK from "@/projects/FandomK";
import GlobalNomad from "@/projects/GlobalNomad";
import LightestStore from "@/projects/LightestStore";
import MoMuk from "@/projects/MoMuk";
import MomodalLibrary from "@/projects/MomodalLibrary";
import SaveLinks from "@/projects/SaveLinks";
import Taskify from "@/projects/Taskify";
import Welive from "@/projects/Welive";

export default function ProjectDetailExtra({ id }) {
  const renderExtraComponent = () => {
    switch (id) {
      case "8":
        return <MoMuk />;
      case "7":
        return <LightestStore />;
      case "6":
        return <Welive />;
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
