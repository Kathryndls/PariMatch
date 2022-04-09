import React from "react";
import Loader from "./Loader";

const setUp = (props) => shallow(<Loader {...props} />);
const setUpRender = (props) => render(<Loader {...props} />);

describe('should render Loader component', () => {
   let component;
   beforeEach(() => {
      component = setUp();
   })

   it ('Loader component should have a loadingio-spinner-dual-ring-cqkmvary9bi class', () => {
      const wrapper = component.find('.loadingio-spinner-dual-ring-cqkmvary9bi');
      expect(wrapper.length).toBe(1);
   });

   it ('Loader component should have a ldio-lgz85uwngd class', () => {
      const wrapper = component.find('.ldio-lgz85uwngd');
      expect(wrapper.length).toBe(1);
   });

   it ('Loader comonent should have a div tag', () => {
      const wrapper = component.find('div');
      expect(wrapper.length).toBe(5);
   });
});

describe('Loader component', () => {
   it ('should render Loader component', () => {
      const component = setUpRender();
      expect(component).toMatchSnapshot();
   })
});