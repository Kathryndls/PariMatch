import React from "react";
import Error from "./Error";

const setUp = (props) => shallow(<Error {...props} />);
const setUpRender = (props) => render(<Error {...props} />);

describe('should render Loader component', () => {
   let component;
   beforeEach(() => {
      component = setUp();
   })

   it ('Error component should have a ErrorMessage class', () => {
      const wrapper = component.find('.ErrorMessage');
      expect(wrapper.length).toBe(1);
   });

   it ('Error component should have a span tag', () => {
      const wrapper = component.find('span');
      expect(wrapper.length).toBe(1);
   });
});

describe('Error component', () => {
   it ('should render Error component', () => {
      const component = setUpRender();
      expect(component).toMatchSnapshot();
   })
});