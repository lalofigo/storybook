/** @type { import('@storybook/react').Preview } */
import "minireset.css";
import "../styles/globals.css";
import "../styles/tokens.css";

const getStyles = ({__sb}) => ({
  display: "flex",
  flexDirection: __sb?.fd || "column",
  maxHeight: __sb?.mh || "auto",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  flexWrap: __sb?.fw || "wrap",
  height: "100%",
  gap: "10px 30px",
});

// for the global decorator:
export const decorators = [
  (Story, {parameters}) => (
    <div style={getStyles(parameters)}>
      <Story />
    </div>
  ),
];

const preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
