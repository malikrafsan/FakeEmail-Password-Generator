// Gambar & isi teks untuk artikel 1 (tentang privasi)

import './Post1.css';
import surveil from './a_surveil.jpg'
import ene from "./a_ene.png";

const Post1 = () => {
    return (
        <div className="post1">
            <div className="post1Container">
                <span className='title'>
                    Mengapa password dan e-mail harus acak
                </span>
                <p className="subtitle">
                    Privasi dan keamanan siber: masalah eksistensial abad 21
                </p>
                <img
                    src={surveil}
                    alt="Surveillance in China"
                    className="post1ImgTitle"
                />
                <p className="post1P1">
                    <b>Bagaimana cara hacker menembus sistem?</b>
                    <br/>
                    <br/>Sebagian besar dari kita mungkin membayangkan hacker sebagai sekelompok kutu buku ber-hoodie hitam di basement gelap penuh kabel dan bungkus pop mie, meneliti satu per satu kelemahan apapun di desain sistem pemerintah sementara jarinya mengetik dengan sangat cepat. Barangkali ini memang ada, tetapi kenyataan di lapangan jauh lebih sederhana. Menurut Global Fraud and Risk Report 2019/2020 oleh Kroll, 66% - hampir dua per tiga - kebocoran keamanan disebabkan oleh faktor internal. Kalau begitu, apakah risiko terbesar adalah orang dalam yang licik? Tidak juga: dari masalah internal itu, oleh Ponemon diperkirakan bahwa 63% nya disebabkan oleh keteledoran karyawan.
                    <br/>
                    <br/>Sesempurna dan secanggih apapun sistem keamanan siber suatu institusi, tidak ada gunanya jika hacker berhasil menipu penggunanya ketika sedang berada di luar pengawasan sistem itu. Ancaman keamanan siber semacam ini disebut phising, dan tidak ada yang benar-benar aman dari serangan ini. Yang jelas, tidak John Podesta, bos tim kampanye Hillary Clinton yang terjebak phising dan menyebabkan bocornya tak terhitung e-mail pribadi Clinton, sehingga berpengaruh dalam kekalahan sang capres pada 2016.
                    <br/>
                    <br/>Kalau begitu, apa yang menyebabkan ancaman phising begitu menakutkan? Google dan Harris melakukan studi pada 2019 dan menemukan data yang masif, meski mungkin tak terlalu mengejutkan: dua per tiga pengguna internet global masih menggunakan password yang sama pada sebagian atau seluruh kegunaan mereka. Artinya, jika sekali saja mereka terjebak dalam skema phising yang menyebabkan bobolnya salah satu akun mereka, orang tak bertanggung jawab akan secara instan dapat kemudian membobol sebagian besar atau semua akun yang berhubungan dengan mereka. Apalagi jika korban telah secara spesifik ditarget oleh para hacker itu.
                    <br/>
                    <br/><b>Big Brothers are watching you?</b>
                </p>
                <img
                    src={ene}
                    alt="raburabu >///<"
                    className="post1Img1"
                />
                <p className="imgDescTxt">
                    Kemunduran privasi dapat mengakibatkan berbagai peristiwa. Kecerdasan buatan yang dapat mengakses data dan isi pikiran kita, misalnya, dapat menyebabkan munculnya produk "AI Waifu" yang lebih pengertian dari manusia sungguhan.
                </p>
                <p className="post1P2">
                    Sementara itu, dunia yang makin terkoneksi makin menggerus keberadaan privasi dari dunia. Kemanapun kita pergi, ada cookie yang selalu mengikuti dan mengirimkan sekecil mungkin tindak-tanduk kita ke pihak-pihak ketiga. Ada alasan mengapa hampir semua website yang kita kunjungi sepertinya ingin sekali agar kita sign up, registrasi, dan lain-lain. Secara umum, memang beginilah cara internet bekerja: menjual data kita - tanpa sistem semacam ini, tidak akan ada yang namanya Google, Facebook, dan seporsi besar Silicon Valley yang kini beroperasi. Tak dapat dipungkiri, model semacam ini telah memberikan kemajuan besar, dari munculnya sektor e-commerce yang sama sekali baru hingga kemungkinan-kemungkinan inovasi baru di masa depan.
                    <br/>
                    <br/>Akan tetapi, seakan-akan, sudah tidak ada lagi tempat untuk bersembunyi. Pakai VPN juga sia-sia jika website melarang kita untuk mengakses kontennya tanpa melakukan registrasi. Apalagi, banyak situs di internet yang dari modelnya akan jauh lebih baik jika kita tak meninggalkan jejak sama sekali, sekecil apapun, di situ. Situs semacam itu juga sangat mungkin memiliki desain keamanan yang payah, atau dibuat dengan niat yang kurang baik, sehingga sangat berisiko jika data pribadi kita sampai berakhir di tempat semacam itu.
                    <br/>
                    <br/>Semakin perkembangan zaman, semakin besar masalah privasi ini. Data yang kita berikan secara cuma-cuma bukan hanya data yang bermanfaat untuk marketing saja. Semakin interkonektivitas berlangsung, data tersebut malah menjadi kita sendiri: impuls psikologis, kebiasaan, jadwal harian, hobi dan passion, semuanya dapat digunakan untuk memengaruhi perilaku kita. Mulai dari konsumerisme, menjebak kita dalam media-media sosial yang hiperadiktif, hingga mengarahkan kepercayaan ideologis kita untuk kepentingan politik. 
                    <br/>
                    <br/><b>Dua masalah</b>
                    <br/>
                    <br/>Dengan demikian, kita mendapat dua masalah di abad 21 yang saling terkait. Data yang kita hasilkan semakin lama akan semakin dapat disalahgunakan dengan efek mengerikan, sementara ancaman keamanan siber memungkinkan pihak-pihak yang sudah jelas jahat untuk mengakses dan mengekspolitasi data  tersebut. Dengan demikian, adalah kewajiban eksistensial bagi kita untuk melindungi keduanya.
                    <br/>
                    <br/>Melihat data yang sempat disinggung di atas, salah satu masalah terbesar spesifik yang ada, yaitu:
                    <br/> 1. Penggunaan password yang sama di semua tempat, dan
                    <br/> 2. Data mining yang dilakukan website-website dengan berbasis akun email kita.
                    <br/>
                    <br/>Untuk berusaha menyelesaikan masalah itulah kami membuat website ini. Karena pada akhirnya, satu-satunya orang yang paling dapat dipercaya untuk mengelola password, e-mail, dan informasi kita dan bagaimana mereka disimpan adalah kita sendiri.
                </p>
            </div>
        </div>
        );
}

export default Post1;