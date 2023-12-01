interface ButtonProps {
  text: string;
  backgroundColor: string;
  textColor: string;
}

const Button = ({ text, backgroundColor, textColor }: ButtonProps) => {
  // Define a base style for the button
  const baseStyle = "button-primary";

  // Define a function to get the color class
  const getTextColorClass = (textColor: string): string => {
    // Define a mapping of color props to Tailwind color classes
    const colorClasses: any = {
      red: "text-red-500",
      blue: "text-blue-500",
      green: "text-green-500",
      purple: "text-purple-500",
      white: "text-white",
      // Add more as needed
    };

    // Return the class from the mapping or a default one if not found
    return colorClasses[textColor] || "text-black";
  };

  // Define a function to get the background color class
  const getBackgroundColorClass = (backgroundColor: string): string => {
    // Define a mapping of color props to Tailwind color classes
    const colorClasses: any = {
      red: "bg-red-500",
      blue: "bg-blue-500",
      green: "bg-green-500",
      purple: "bg-purple-500",
      white: "bg-white",
      gray: "bg-gray-500",
      // Add more as needed
    };

    // Return the class from the mapping or a default one if not found
    return colorClasses[backgroundColor] || "bg-gray";
  };

  // Get the color class based on the color prop
  const textColorClass = getTextColorClass(textColor);
  const backgroundColorClass = getBackgroundColorClass(backgroundColor);

  // Combine the classes
  const buttonClass = `${baseStyle} ${textColorClass} ${backgroundColorClass}`;
  console.log(textColorClass);
  console.log(buttonClass);
  return <button className={buttonClass}>{text}</button>;
};

export { Button };
