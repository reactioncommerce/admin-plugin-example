import CubeIcon from "mdi-material-ui/Cube";
import ExampleComponent from "./components/ExampleComponent";
import ExampleBlock from "./components/ExampleBlock";

/**
 * Register plugin
 * @param {Object} params Utils for registering features of the plugin
 * @returns {undefined}
 */
export default function plugin({ registerRoute, registerBlock }) {
  // Register a route
  registerRoute({
    group: "navigation",
    priority: 20,
    path: "/example",
    MainComponent: ExampleComponent,
    IconComponent: CubeIcon,
    navigationItemLabel: "Example Plugin"
  });


  // Register blocks
  // This will show on the products admin if "@reactioncommerce/reaction-plugin-products" is installed,
  // or otherwise if a Block region named "ProductDetailMain" exists elsewhere in the app.
  registerBlock({
    region: "ProductDetailMain",
    name: "ExampleBlock",
    Component: ExampleBlock,
    priority: 777
  });
}
