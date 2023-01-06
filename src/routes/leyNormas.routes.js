import { Router } from "express";
import {
  getLeyNormas,
  getLeyNormasById,
  getTotalLeyNormas,
  getLeyNormasByCodTipo,
  getChildrenByCodNormaAndCodPadre,
} from "../controllers/leyNormas.controller";

const router = Router();

router.get("/leyNormas", getLeyNormas);
router.get("/leyNormas/count", getTotalLeyNormas);
router.get("/leyNormas/:codNorma", getLeyNormasById);
router.get("/leyNormas/type/:codTipo", getLeyNormasByCodTipo);
router.get(
  "/leyNormas/children/:codNorma/:codDetalle",
  getChildrenByCodNormaAndCodPadre
);

export default router;
