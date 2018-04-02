import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs/react";
import Button from "./Button";

const stories = storiesOf("Button", module);
stories.addDecorator(withKnobs);

stories.add("Default", () => (
  <Button disabled={boolean("Disabled", false)}>
    {text("Label", "Hello Button")}
  </Button>
));

stories.add("as dynamic variables", () => {
  const name = text("Name", "Arunoda Susiripala");
  const age = number("Age", 89);

  const content = `I am ${name} and I'm ${age} years old.`;
  return <div>{content}</div>;
});
