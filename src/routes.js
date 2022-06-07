import HomeComponent from "./components/HomeComponent";
import ProductComponent from "./components/ProductComponent";
import TasksComponent from "./components/TasksComponent";
import NotFountComponent from "./components/NotFountComponent";

export default [
  { path: '/', component: HomeComponent },
  { path: '/products', component: ProductComponent, name: 'route_products' },
  { path: '/task/:id', component: TasksComponent, name: "task", props: true },
  { path: '/redirect', redirect: '/products' },
  { path: '*', component: NotFountComponent}
]