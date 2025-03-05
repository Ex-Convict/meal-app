import React from "react";
import styles from "../styles/TextComponent.module.scss";

interface TextComponentProps {
  text: string;
  smallBodyText?: boolean;
  bodyText?: boolean;
  headerText?: boolean;
  sectionHeader?: boolean;
  subHeaderText?: boolean;
  color?: string;
  style?: React.CSSProperties;
}

const TextComponent: React.FC<TextComponentProps> = ({
  text,
  smallBodyText = false,
  bodyText = false,
  headerText = false,
  sectionHeader = false,
  subHeaderText = false,
  color,
  style,
}) => {
  const getClassName = () => {
    let className = styles.text;
    if (headerText) className += ` ${styles.header}`;
    if (sectionHeader) className += ` ${styles.sectionHeader}`;
    if (subHeaderText) className += ` ${styles.subHeader}`;
    if (bodyText) className += ` ${styles.body}`;
    if (smallBodyText) className += ` ${styles.smallBody}`;
    return className;
  };

  const commonProps = {
    className: getClassName(),
    style: { color: color || "inherit", ...style },
  };

  if (headerText) return <h1 {...commonProps}>{text}</h1>;
  if (sectionHeader) return <h2 {...commonProps}>{text}</h2>;
  if (subHeaderText) return <h3 {...commonProps}>{text}</h3>;

  return <p {...commonProps}>{text}</p>;
};

export default TextComponent;
// the order is header for main headings, sectionHeader for each section, subHeader for headings within a section and bodyText for regular body text. smallbodyText is for body texts smaller than the regular P text
