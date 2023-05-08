const mysql = requere('mysql');
// buat konfigurasi koneksi
cons = mysql.createConnection({
    host: 'host_adm',
    user: 'username_ari',
    password: pasword_1234,
    database: 'nama_akademik'
    
});
// koneksi database
koneksi.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});
modul.exports = koneksi;    