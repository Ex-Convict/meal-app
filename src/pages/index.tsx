import CustomButton from "@/components/Button";
import Header from "@/components/Header";
import TextComponent from "@/components/TextComponent";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Header />
      <Box sx={{ marginTop: "5rem", marginX: "1rem" }}>
        <TextComponent headerText text="Header Text" />
        <TextComponent sectionHeader text="Section Header Text" />
        <TextComponent subHeaderText text="Sub Header Text" />
        <TextComponent bodyText text="Body Text" />
        <TextComponent smallBodyText text="Small Body Text" />
        <CustomButton label="Click Me" />
      </Box>
    </div>
  );
}
