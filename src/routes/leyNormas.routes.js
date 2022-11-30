import { Router } from "express";
import {
  getLeyNormas,
  getLeyNormasById,
  getTotalLeyNormas,
  getLeyNormasByCodTipo,
} from "../controllers/leyNormas.controller";

const router = Router();

router.get("/leyNormas", getLeyNormas);
router.get("/leyNormas/count", getTotalLeyNormas);
router.get("/leyNormas/:codNorma", getLeyNormasById);
router.get("/leyNormas/type/:codTipo", getLeyNormasByCodTipo);

export default router;
