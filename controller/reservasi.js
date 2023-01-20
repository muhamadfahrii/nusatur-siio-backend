const { query } = require("../connection");
const { datetime } = require("../utils/tools");

async function createReservasi(req, res) {
  const { nama, email, phoneNumber, date, qty } = req.body;

  if (
    nama === undefined ||
    email === undefined ||
    +phoneNumber === undefined ||
    isNaN(+phoneNumber) ||
    date === undefined ||
    +qty === undefined ||
    isNaN(+qty)
  ) {
    return res.status(400).json({ message: "Invalid data!" });
  }

  try {
    await query(`
      INSERT INTO form (
        fullname, email, nohp, tanggal_reservasi, jumlah_orang, created_by, updated_by, created_at, updated_at 
      ) VALUES (
        '${nama}', '${email}', ${phoneNumber}, '${date}', ${qty}, 0,  0 ,  '${datetime()}','${datetime()}'
      )
    `);

    const [{ id }] = await query(`SELECT MAX(id) as id FROM form;`);

    await query(
      `UPDATE form SET 
      created_by = ${id}, 
      updated_by = ${id} 
      WHERE id = ${id};`
    );

    return res.status(200).json({
      message:
        "Thank you for reserving with us\nWait Until us contact you back",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Something went wrong!" });
  }
}

module.exports = { createReservasi };
