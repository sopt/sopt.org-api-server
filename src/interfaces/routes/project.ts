import { Router } from "express";
import { z } from "zod";

import { Services } from "@/application/service";
import { CreateProjectModel } from "@/domain/validators/project";
import authMiddleware from "@/infrastructure/webserver/middlewares/auth";
import { createProjectController } from "@/interfaces/controllers/projectController";
import { asyncRoute } from "@/util/route";
import { validate } from "@/util/validate";
import { ProjectModel } from "~/models";

interface CreateProjectRouteDeps {
  services: Services;
}

export function createProjectRoutes({ services }: CreateProjectRouteDeps) {
  const router = Router();
  const controllers = createProjectController({ services });

  router.get("/", asyncRoute(controllers.listProjects));

  router.get("/:id", asyncRoute(controllers.getProject));

  router.post(
    "/",
    authMiddleware,
    validate(
      z.object({
        body: CreateProjectModel,
      }),
    ),
    asyncRoute(controllers.createProject),
  );

  router.put(
    "/:id",
    authMiddleware,
    validate(
      z.object({
        body: ProjectModel.partial(),
      }),
    ),
    asyncRoute(controllers.updateProject),
  );

  router.delete("/:id", authMiddleware, asyncRoute(controllers.deleteProject));

  return router;
}
