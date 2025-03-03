
import React from "react";
import Button from "@mui/material/Button";

type ButtonProps = {
    label: string;
};

const CustomButton: React.FC<ButtonProps> = ({ label }) => {
    return <Button variant="contained">{label}</Button>;
};

export default CustomButton;
