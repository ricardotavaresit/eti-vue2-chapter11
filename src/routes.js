import HomeComponent from "./components/HomeComponent";
import ProductComponent from "./components/ProductComponent";
import TasksComponent from "./components/TasksComponent";

export default [
  { path: '/', component: HomeComponent },
  { path: '/products', component: HomeComponent },
  { path: '/tasks', component: TasksComponent }
]