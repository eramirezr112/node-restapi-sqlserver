import { getConnection, sql, queries } from "../database";

export const getLeyNormasTipos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllLeyNormasTipos);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getLeyNormasTiposById = async (req, res) => {
  try {
    const { codTipo } = req.params;

    const pool = await getConnection();
    const result = await pool
      .request()
      .input("CodTipo", codTipo)
      .query(queries.getLeyNormasTiposById);

    res.send(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalLeyNormasTipos = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queries.getTotalLeyNormasTipos);
  res.json(result.recordset[0].total);
};
