export const queries = {
  getAllLeyNormas: "SELECT * FROM LEY_NORMAS",
  getLeyNormasById: "SELECT * FROM LEY_NORMAS WHERE COD_NORMA = @CodNorma",
  getLeyNormasByCodTipo:
    "SELECT COD_NORMA, DES_TITULO FROM LEY_NORMAS WHERE COD_TIPO = @CodTipo ORDER BY NUM_NORMA ASC, DES_TITULO ASC",
  getTotalLeyNormas: "SELECT COUNT(*) as total FROM LEY_NORMAS",
  getAllLeyNormasTipos: "SELECT * FROM LEY_NORMAS_TIPOS",
  getLeyNormasTiposById:
    "SELECT * FROM LEY_NORMAS_TIPOS WHERE COD_TIPO = @CodTipo",
  getTotalLeyNormasTipos: "SELECT COUNT(*) as total FROM LEY_NORMAS_TIPOS",
  getLeyComponentesByCodNorma: `SELECT LNC.DES_TITULO, LNC.COD_DETALLE 
                                FROM LEY_NORMAS_COMPONENTES as LNC, LEY_COMPONENTES as LC 
                                WHERE ( LC.COD_COMPONENTE = LNC.COD_COMPONENTE ) 
                                  AND ( ( LNC.COD_NORMA = @CodNorma) 
                                  AND ( LNC.COD_PADRE is null ) ) 
                                ORDER BY LC.NUM_NIVEL ASC, LC.NUM_ORDEN ASC`,
};
