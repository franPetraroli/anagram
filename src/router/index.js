import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import Result from "@/components/Result";
import Login from "@/components/Login";
import Register from "@/components/Register";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "main",
      component: Main
    },
    {
      path: "/result",
      name: "result",
      component: Result
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    }
  ]
});
