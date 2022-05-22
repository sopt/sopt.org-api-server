import { Router } from "express";

import { Services } from "@/application/service";
import { asyncRoute } from "@/util/route";

interface CreateRoutesDeps {
  services: Services;
}

export function createUserRoutes({ services }: CreateRoutesDeps) {
  const router = Router();

  router.get(
    "/:id",
    asyncRoute(async (req, res) => {
      const { id } = req.params;
      const ret = await services.user.getUser(id);

      res.json({
        user: ret,
      });
    }),
  );

  return router;
}