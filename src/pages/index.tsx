import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TextComponent from "@/components/TextComponent";
import DashboardLayout from "@/layout/DashboardLayout";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Header />
      <Box
        sx={{
          marginTop: "5.5rem",
          marginBottom: { xs: "40rem", lg: "45%" },
          position: "relative",
          paddingX: { xs: "1rem", lg: "3rem" },
        }}
      >
        <TextComponent headerText text="Header Text" />
        <TextComponent sectionHeader text="Section Header Text" />
        <TextComponent subHeaderText text="Sub Header Text" />
        <TextComponent bodyText text="Body Text" />
        <TextComponent smallBodyText text="Small Body Text" />
      </Box>
      <Footer />
      {/* Dashboard  */}
      {/* <DashboardLayout /> */}
    </div>
  );
}
