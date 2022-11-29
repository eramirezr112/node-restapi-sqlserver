export const queries = {
  getAllLeyNormasTipos: "SELECT * FROM LEY_NORMAS_TIPOS",
  getLeyNormasTiposById:
    "SELECT * FROM LEY_NORMAS_TIPOS WHERE COD_TIPO = @CodTipo",
  getTotalLeyNormasTipos: "SELECT COUNT(*) as total FROM LEY_NORMAS_TIPOS",
};
