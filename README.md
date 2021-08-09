# FAKE EMAIL AND PASSWORD GENERATOR

## Developments Guides
1. Untuk development website, semua file berada di folder src, folder public jangan diubah
2. Setiap komponen / elemen di website, seperti navbar, password generator page, dll ada file javascripts dan css-nya masing-masing
3. Untuk komponen html-nya ditaruh di file javascripts bagian `div` masing-masing, seperti password page di-develop di file `Password.js` dan diubah di bagian `div` dengan `className="password"`
4. Setiap komponen juga punya file css masing-masing, file `index.css` hanya untuk styling yang digunakan pada seluruh elemen di website
5. Guides untuk styling:
    * Kalau bisa sesedikit mungkin pake `!important`
    * Kalau bisa jangan pake inline-styling, jadi styling-nya semua di CSS
    * Styling-nya keknya belum perlu responsive, jadi ga perlu dicek di hp tampilannya kek gimana
6. Untuk algoritma generator-nya ditaruh di sebelum return, di file `email.js` dan `password.js` udaa ada contohnya yaa
7. SEMANGAT!!
* Note:
    * Di react, keyword `class` diganti dengan `className`
    * Di react, ga page `<a href="#">` tag, pake `<Link to="#">` tag