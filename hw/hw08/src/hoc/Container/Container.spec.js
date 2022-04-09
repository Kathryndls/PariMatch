import React from "react";
import Container from "./Container";

const setUp = (props) => shallow(<Container {...props} />);
const setUpRender = (props) => render(<Container {...props} />);

describe('should render Container HOC', () => {
   let component;
   beforeEach(() => {
      component = setUp();
   })

   it ('should have a Container class', () => {
      const wrapper = component.find('.Container');
      expect(wrapper.length).toBe(1);
   });

   it ('should have a div tag', () => {
      const wrapper = component.find('div');
      expect(wrapper.length).toBe(1);
   })
});

describe('Container HOC', () => {
   it ('should render Container HOC', () => {
      const component = setUpRender();
      expect(component).toMatchSnapshot();
   })
});