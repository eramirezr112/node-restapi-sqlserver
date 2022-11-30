export const queries = {
  getAllLeyNormas: "SELECT * FROM LEY_NORMAS",
  getLeyNormasById: "SELECT * FROM LEY_NORMAS WHERE COD_NORMA = @CodNorma",
  getLeyNormasByCodTipo: "SELECT * FROM LEY_NORMAS WHERE COD_TIPO = @CodTipo",
  getTotalLeyNormas: "SELECT COUNT(*) as total FROM LEY_NORMAS",
  getAllLeyNormasTipos: "SELECT * FROM LEY_NORMAS_TIPOS",
  getLeyNormasTiposById:
    "SELECT * FROM LEY_NORMAS_TIPOS WHERE COD_TIPO = @CodTipo",
  getTotalLeyNormasTipos: "SELECT COUNT(*) as total FROM LEY_NORMAS_TIPOS",
};
