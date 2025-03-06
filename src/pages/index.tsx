import CustomButton from "@/components/Button";
import TextComponent from "@/components/TextComponent";

export default function Home() {
  return (
    <div>
      <TextComponent headerText text="Header Text" />
      <TextComponent sectionHeader text="Section Header Text" />
      <TextComponent subHeaderText text="Sub Header Text" />
      <TextComponent bodyText text="Body Text" />
      <TextComponent smallBodyText text="Small Body Text" />
    </div>
  );
}
