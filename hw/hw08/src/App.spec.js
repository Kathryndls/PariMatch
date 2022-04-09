import React from "react";
import App from "./App";

const setUp = (props) => shallow(<App {...props} />);

describe('should render App component', () => {
   let component;
   beforeEach(() => {
      component = setUp();
   })

   it ('should have a Title class', () => {
      const wrapper = component.find('.Title');
      expect(wrapper.length).toBe(1);
   });

   it ('should have a RowHeader class', () => {
      const wrapper = component.find('.RowHeader');
      expect(wrapper.length).toBe(1);
   })

   it ('should have a Container component', () => {
      const wrapper = component.find('Container');
      expect(wrapper.length).toBe(1);
   });

   it ('should have a Scoreboard component', () => {
      const wrapper = component.find('Scoreboard');
      expect(wrapper.length).toBe(1);
   });

   it ('should have a SearchInput component', () => {
      const wrapper = component.find('SearchInput');
      expect(wrapper.length).toBe(1);
   });

   it ('should have a WeeklyForecast component', () => {
      const wrapper = component.find('WeeklyForecast');
      expect(wrapper.length).toBe(1);
   });


   it ('should have a h1 tag', () => {
      const wrapper = component.find('h1');
      expect(wrapper.length).toBe(1);
   })

   it ('should have a div tag', () => {
      const wrapper = component.find('div');
      expect(wrapper.length).toBe(1);
   })
});

describe('App component', () => {
   it ('should render App component', () => {
      const component = setUp();
      expect(component).toMatchSnapshot();
   })
})