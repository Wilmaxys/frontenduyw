import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
//import { DefaultLayout } from "./layouts";

// Route Views
import TestView from "./views/test-view";

export default [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/blog-overview",
    component: TestView
  },
  {
    path: "/blog-overview",
    component: TestView
  },
];
