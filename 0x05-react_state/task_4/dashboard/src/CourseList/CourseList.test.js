import React from "react";
import { shallow, mount } from "enzyme";
import CourseList from "./CourseList";
import { StyleSheetTestUtils } from 'aphrodite';

describe("Testing <CourseList />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it("Renders CourseList component without crashing", () => {
    let wrapper = shallow(<CourseList />);
    expect(wrapper.exists());
  });

  it("CourseList renders the 3 different rows", () => {
    let wrapper = shallow(<CourseList />);
    expect(wrapper.find("CourseListRow")).toHaveLength(3);
  });

