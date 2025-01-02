// src/utils/routerGroup.ts
import { Router } from 'express';
export function group(router: Router,  path: string, handlerFunction: (router: Router) => void): Router {
  const groupRouter = Router();
  handlerFunction(groupRouter);
  router.use(path, groupRouter);
  return router;
}
export function groupWithMiddleware(router: Router, path: string, middleware: any, handlerFunction: (router: Router) => void): Router {
  const groupRouter = Router();
  groupRouter.use(middleware);
  handlerFunction(groupRouter);
  router.use(path, groupRouter);
  return router;
};