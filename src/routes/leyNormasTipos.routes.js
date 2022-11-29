import { Router } from "express";
import {
  getLeyNormasTipos,
  getLeyNormasTiposById,
  getTotalLeyNormasTipos,
} from "../controllers/leyNormasTipos.controller";

const router = Router();

router.get("/leyNormasTipos", getLeyNormasTipos);
router.get("/leyNormasTipos/count", getTotalLeyNormasTipos);
router.get("/leyNormasTipos/:codTipo", getLeyNormasTiposById);

export default router;
