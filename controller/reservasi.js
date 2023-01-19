const { query } = require("../connection");

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
        fullname, email, nohp, tanggal_reservasi, jumlah_orang 
      ) VALUES (
        '${nama}', '${email}', ${phoneNumber}, '${date}', ${qty}
      )
    `);

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
