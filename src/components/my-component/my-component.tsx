import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: true
})
export class MyComponent {
  render() {
    return (
      <my-other-component>
        {() => {
          return "foo";
        }}
      </my-other-component>
    );
  }
}
