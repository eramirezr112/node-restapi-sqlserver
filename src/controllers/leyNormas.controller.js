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

    const treeLeyNormas = await Promise.all(
      result.recordset.map(async (record, i) => {
        const children_result = await pool
          .request()
          .input("CodNorma", record.COD_NORMA)
          .query(queries.getLeyComponentesByCodNorma);

        return {
          value: `Ley-${record.COD_NORMA}`,
          label: record.DES_TITULO,
          isParentRoot: true,
          children: children_result.recordset.map((child, c) => {
            return {
              value: `${record.COD_NORMA}-${child.COD_DETALLE}`,
              label: child.DES_TITULO,
              children: [],
            };
          }),
        };
      })
    );
    res.send(treeLeyNormas);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getChildrenByCodNormaAndCodPadre = async (req, res) => {
  try {
    const { codNorma, codDetalle } = req.params;

    const pool = await getConnection();
    const result = await pool
      .request()
      .input("CodNorma", codNorma)
      .input("CodDetalle", codDetalle)
      .query(queries.getLeyComponentesByCodNormaAndCodPadre);

    const treeChildren = await Promise.all(
      result.recordset.map(async (record, i) => {
        return {
          value: `${codNorma}-${record.COD_DETALLE}`,
          label: record.DES_TITULO,
          children: [],
        };
      })
    );
    res.send(treeChildren);
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
