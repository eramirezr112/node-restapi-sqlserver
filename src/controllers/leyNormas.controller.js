import { getConnection, sql, queries } from "../database";

export const getLeyNormas = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllLeyNormas);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getLeyNormasById = async (req, res) => {
  try {
    const { codNorma } = req.params;

    const pool = await getConnection();
    const result = await pool
      .request()
      .input("CodNorma", codNorma)
      .query(queries.getLeyNormasById);

    res.send(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getLeyNormasByCodTipo = async (req, res) => {
  try {
    const { codTipo } = req.params;

    const pool = await getConnection();
    const result = await pool
      .request()
      .input("CodTipo", codTipo)
      .query(queries.getLeyNormasByCodTipo);

    res.send(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalLeyNormas = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queries.getTotalLeyNormas);
  res.json(result.recordset[0].total);
};
