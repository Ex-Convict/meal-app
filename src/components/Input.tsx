import React from "react";
import { useField } from "formik";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

interface InputProps {
    label: string;
    name: string;
    type?: string;
    sx?: object;
}

const StyledTextField = styled(TextField)(({ theme, error }) => ({
    marginBottom: theme.spacing(6),
    border: error ? 'none' : '1px solid #E5E7EB',
    borderRadius: '4px',
    maxWidth: '400px',
}));

const Input: React.FC<InputProps> = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <StyledTextField
            {...field}
            {...props}
            label={label}
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
            fullWidth
        />
    );
};

export default Input;