import dur from "./images/dur.png";
import yolver from "./images/yolver.png";
import yayagecidi from "./images/yayagecidi.png";
import kasis from "./images/kasis.png";
import viraj from "./images/viraj.png";
import parkyasak from "./images/parkyasak.png";
import bisiklet from "./images/bisiklet.png";
import hiz from "./images/hiz.png";
import daryol from "./images/daryol.png";
import serit from "./images/serit.png";

const questions = [
    {
        category: "Trafik İşaret ve Levhaları",
        questions: [
            {
                image: dur,
                text: "Bu levha ne anlama gelir?",
                answers: [
                    { text: "Devam edin", isCorrect: false },
                    { text: "Dikkatli geçin", isCorrect: false },
                    { text: "Durun ve yol verin", isCorrect: true },
                    { text: "Hızlanın", isCorrect: false },
                ],
            },
            {
                image: yolver,
                text: "Bu levha ne hangi durumda geçerlidir?",
                answers: [
                    {
                        text: "Sadece trafik polisi olduğunda",
                        isCorrect: false,
                    },
                    {
                        text: "Diğer araçlara yol verileceğinde",
                        isCorrect: true,
                    },
                    { text: "Yolun sonu geldiğinde", isCorrect: false },
                    {
                        text: "Hızlı araçlar geçiş yaptığında",
                        isCorrect: false,
                    },
                ],
            },
            {
                image: yayagecidi,
                text: "Bu levha ne anlama gelir?",
                answers: [
                    {
                        text: "Öğrenci yolu",
                        isCorrect: false,
                    },
                    {
                        text: "Yayaların karşıdan karşıya geçiş yolu",
                        isCorrect: true,
                    },
                    { text: "Araçların durma alanı", isCorrect: false },
                    {
                        text: "Otopark girişi",
                        isCorrect: false,
                    },
                ],
            },
            {
                image: hiz,
                text: "Bu levha ne anlama gelir?",
                answers: [
                    {
                        text: "Yolda izin verilen maksimum hız",
                        isCorrect: true,
                    },
                    {
                        text: "Yolda izin verilen minimum hız",
                        isCorrect: false,
                    },
                    { text: "Araçların durma süresi", isCorrect: false },
                    {
                        text: "Yolda kaç araç bulunduğu",
                        isCorrect: false,
                    },
                ],
            },
            {
                image: viraj,
                text: "Bu levha ne anlama gelir?",
                answers: [
                    {
                        text: "Yolun düz devam ettiğini",
                        isCorrect: false,
                    },
                    {
                        text: "Yolda bir kesişme olduğunu",
                        isCorrect: false,
                    },
                    {
                        text: "Yolun keskin bir viraj içerdiğini",
                        isCorrect: true,
                    },
                    {
                        text: "Yolun çift yönlü olduğunu",
                        isCorrect: false,
                    },
                ],
            },
            {
                image: parkyasak,
                text: "Bu levha ne anlama gelir?",
                answers: [
                    {
                        text: "Park yapılabileceğini",
                        isCorrect: false,
                    },
                    {
                        text: "Kısa süreli park yapılabileceğini",
                        isCorrect: false,
                    },
                    {
                        text: "Hiçbir şekilde park yapılamayacağını",
                        isCorrect: true,
                    },
                    {
                        text: "Sadece gece park yapılabileceğini",
                        isCorrect: false,
                    },
                ],
            },
            {
                image: daryol,
                text: "Bu levha ne anlama gelir?",
                answers: [
                    {
                        text: "Yolun genişlediğini",
                        isCorrect: false,
                    },
                    {
                        text: "Yolda çalışma olduğunu",
                        isCorrect: false,
                    },
                    { text: "Yolun daraldığını", isCorrect: true },
                    {
                        text: "Yolun kapalı olduğunu",
                        isCorrect: false,
                    },
                ],
            },
            {
                image: serit,
                text: "Bu levha ne anlama gelir?",
                answers: [
                    { text: "Şerit değiştirilebileceğini", isCorrect: false },
                    {
                        text: "Şerit değiştirmenin yasak olduğunu",
                        isCorrect: true,
                    },
                    { text: "Araç park edilebileceğini", isCorrect: false },
                    { text: "Hız sınırının değiştiğini", isCorrect: false },
                ],
            },
            {
                image: bisiklet,
                text: "Bu levha ne anlama gelir?",
                answers: [
                    {
                        text: "Bisikletlerin araç yolunda sürebileceğini",
                        isCorrect: false,
                    },
                    {
                        text: "Bisikletlerin park edebileceğini",
                        isCorrect: false,
                    },
                    {
                        text: "Sadece bisikletlerin kullanabileceği yolu belirtir",
                        isCorrect: true,
                    },
                    {
                        text: "Araçların bisiklet yolunu kullanabileceğini",
                        isCorrect: false,
                    },
                ],
            },
            {
                image: kasis,
                text: "Bu levha ne anlama gelir?",
                answers: [
                    { text: "Yolun düz olduğunu", isCorrect: false },
                    { text: "Yolun daraldığını", isCorrect: false },
                    {
                        text: "Yolda hız kesici kasis olduğunu",
                        isCorrect: true,
                    },
                    { text: "Yolun bittiğini", isCorrect: false },
                ],
            },
        ],
    },
    {
        category: "Trafik Kuralları",
        questions: [
            {
                text: "Kontrollü demir yolu geçidine yaklaşan sürücüler nasıl hareket etmelidir?",
                answers: [
                    {
                        text: "Hızını azaltıp, bariyerin izin vermesi hâlinde uygun hızla geçmeli",
                        isCorrect: true,
                    },
                    {
                        text: "İnmiş bariyer varsa geçide girmeli",
                        isCorrect: false,
                    },
                    {
                        text: "Yol açıksa hızlı geçerek uzaklaşmalı",
                        isCorrect: false,
                    },
                    {
                        text: "Bariyer inmekte ise dikkatli ve hızlı geçmeli",
                        isCorrect: false,
                    },
                ],
            },
            {
                text: "Sürücüler dönüşlerde aşağıdakilerden hangisini yapmak zorundadır?",
                answers: [
                    {
                        text: "Arkadan gelen araçlara yol vermek",
                        isCorrect: false,
                    },
                    {
                        text: "Dönmeye başladıktan sonra işaret vermek",
                        isCorrect: false,
                    },
                    {
                        text: "İşaret verdiği anda aniden şerit değiştirmek",
                        isCorrect: false,
                    },
                    {
                        text: "Niyetini dönüş lambasıyla önceden bildirmek",
                        isCorrect: true,
                    },
                ],
            },
            {
                text: "Park hâlindeki araca çarpan sürücünün aşağıdakilerden hangisini yapması yanlıştır?",
                answers: [
                    {
                        text: "Aracın sahibini bulamaz ise yazılı bilgi bırakması",
                        isCorrect: false,
                    },
                    {
                        text: "Zarar verdiği aracın sahibini bulması",
                        isCorrect: false,
                    },
                    {
                        text: "Trafik görevlisine haber vermesi",
                        isCorrect: false,
                    },
                    {
                        text: "Zarar fazla değilse olay yerinden uzaklaşması",
                        isCorrect: true,
                    },
                ],
            },
            {
                text: "Direksiyon başında iken seyir emniyetinin tehlikeye düşmemesi için, aşağıdakilerden hangisinin yapılması doğru bir uygulama değildir?",
                answers: [
                    {
                        text: "Temiz hava için araç camlarının kısa süreliğine açılması",
                        isCorrect: false,
                    },
                    {
                        text: "Elde cep telefonu ile konuşulması",
                        isCorrect: true,
                    },
                    {
                        text: "Yol şartlarına göre kontrol edilebilecek hızda araç kullanılması",
                        isCorrect: false,
                    },
                    {
                        text: "Trafik yoğunluğu düşük olan alternatif güzergâhların seçilmesi",
                        isCorrect: false,
                    },
                ],
            },
            {
                text: "Yerleşim birimleri dışındaki kara yollarında kavşak, tünel ve köprülere 100 metre mesafede, sürücünün aşağıdakilerden hangisini yapması uygundur?",
                answers: [
                    { text: "Hızını artırması", isCorrect: false },
                    { text: "Hızını azaltması", isCorrect: true },
                    { text: "Şerit değiştirmesi", isCorrect: false },
                    {
                        text: "Taşıt yolu üzerinde duraklaması",
                        isCorrect: false,
                    },
                ],
            },
            {
                text: "Trafik polisi işaret vermişse ne yapılmalıdır?",
                answers: [
                    {
                        text: "Polis işaretleri dikkate alınır",
                        isCorrect: true,
                    },
                    { text: "Işıklar dikkate alınır", isCorrect: false },
                    {
                        text: "Kendi yol tercihiniz dikkate alınır",
                        isCorrect: false,
                    },
                    {
                        text: "Diğer sürücüler dikkate alınır",
                        isCorrect: false,
                    },
                ],
            },

            {
                text: "Hız sınırlarını yüzde otuzdan fazla aşmak suretiyle ihlal edenlerin, sürücü belgelerinin bir yıl süre ile geri alınabilmesi için, aynı suçun bir yıl içinde kaç kez işlenmesi gerekir?",
                answers: [
                    { text: "4", isCorrect: false },
                    { text: "3", isCorrect: false },
                    {
                        text: "2",
                        isCorrect: false,
                    },
                    { text: "5", isCorrect: true },
                ],
            },

            {
                text: " Kamu hizmeti yapan yolcu taşıtlarının yolcu veya hizmetlileri bindirmeleri, indirmeleri veya duraklamaları için yatay ve düşey işaretlerle belirlenmiş yere ne ad verilir? ",
                answers: [
                    { text: "Garaj", isCorrect: false },
                    { text: "Otopark", isCorrect: false },
                    {
                        text: "Durak",
                        isCorrect: true,
                    },
                    { text: "Park yeri", isCorrect: false },
                ],
            },
            {
                text: "Trafik ışıkları olmayan kavşaklarda öncelik kimin olmalıdır?",
                answers: [
                    { text: "Soldan gelen aracın", isCorrect: false },
                    { text: "Sağdan gelen aracın", isCorrect: true },
                    { text: "Büyük aracın", isCorrect: false },
                    { text: "Küçük aracın", isCorrect: false },
                ],
            },

            {
                text: "Geçiş üstünlüğü olan araçlar nelerdir?",
                answers: [
                    { text: "Ambulans, itfaiye, polis", isCorrect: true },
                    {
                        text: "Taksiler, otobüsler, özel araçlar",
                        isCorrect: false,
                    },
                    {
                        text: "Kamyonlar, traktörler, minibüsler",
                        isCorrect: false,
                    },
                    {
                        text: "Motosikletler, bisikletler, yayalar",
                        isCorrect: false,
                    },
                ],
            },
        ],
    },
    {
        category: "Araç Tekniği ve Bakımı",
        questions: [
            {
                text: "Aracın farlarından biri sönük yanıyorsa sebebi aşağıdakilerden hangisi olabilir? ",
                answers: [
                    {
                        text: "Far kablo bağlantılarının oksitlenmesi",
                        isCorrect: true,
                    },
                    { text: "Akünün boşalması ", isCorrect: false },
                    {
                        text: "Akü kablo bağlantılarının gevşemesi ",
                        isCorrect: false,
                    },
                    {
                        text: "Marş kablo bağlantılarının gevşemesi ",
                        isCorrect: false,
                    },
                ],
            },
            {
                text: "Araç hareket hâlindeyken kontak anahtarı kontaktan çıkartıldığında aşağıdakilerden hangisi olur?",
                answers: [
                    { text: "Direksiyon kilitlenir", isCorrect: true },
                    { text: "Sürüş kolaylaşır", isCorrect: false },
                    { text: "Akü tam şarj olur", isCorrect: false },
                    { text: "Direksiyon daha rahat döner", isCorrect: false },
                ],
            },
            {
                text: "Aşağıdakilerden hangisi vites kutusunun görevlerindendir?",
                answers: [
                    {
                        text: "Yol ve trafik durumuna göre araca en uygun hızı vermek",
                        isCorrect: true,
                    },
                    {
                        text: "Motordan aldığı hareketi kavramaya iletmek",
                        isCorrect: false,
                    },
                    {
                        text: "Şafttan aldığı hareketi tekerleklere iletmek",
                        isCorrect: false,
                    },
                    { text: "Krank miline yataklık etmek", isCorrect: false },
                ],
            },
            {
                text: "Motor çalışmazken akünün görevi aşağıdakilerden hangisidir?",
                answers: [
                    { text: "Diferansiyeli çalıştırmak", isCorrect: false },
                    { text: "Yağlamayı sağlamak", isCorrect: false },
                    {
                        text: "Aydınlatma sistemi ve özel alıcıları çalıştırmak",
                        isCorrect: true,
                    },
                    { text: "Vites kutusunu çalıştırmak", isCorrect: false },
                ],
            },
            {
                text: "Akünün kutup başları araca ters bağlanırsa aşağıdakilerden hangisi arızalanır?",
                answers: [
                    { text: "Su pompası", isCorrect: false },
                    { text: "Şanzuman dişlileri", isCorrect: false },
                    { text: "Diferansiyel dişlileri", isCorrect: false },
                    { text: "Alternatör diyotları", isCorrect: true },
                ],
            },
            {
                text: "Radyatör aşağıdakilerden hangisine depoluk eder?",
                answers: [
                    { text: "Motorine", isCorrect: false },
                    { text: "Hidrolik yağına", isCorrect: false },
                    { text: "Yağlama yağına", isCorrect: false },
                    { text: "Soğutma suyuna", isCorrect: true },
                ],
            },
            {
                text: "Motor çok sıcak iken radyatöre soğuk su konulması aşağıdakilerden hangisine sebep olur?",
                answers: [
                    { text: "Motor bloğunun çatlamasına", isCorrect: true },
                    { text: "Motorun stop etmesine", isCorrect: false },
                    { text: "Motor gücünün artmasına", isCorrect: false },
                    { text: "Motor sıcaklığının artmasına", isCorrect: false },
                ],
            },
            {
                text: "Motorlu araçlarda motorun yağ seviyesini kontrol etmeye yarayan ve özel göstergesi bulunan parçaya ne ad verilir?",
                answers: [
                    { text: "Yağdanlık ", isCorrect: false },
                    { text: "Yağ çubuğu", isCorrect: true },
                    { text: "Yağ filtresi", isCorrect: false },
                    { text: "Yağ pompası", isCorrect: false },
                ],
            },
            {
                text: "Motora alınan hava içerisindeki toz ve kum zerrelerini aşağıdakilerden hangisi temizler?",
                answers: [
                    { text: "Karbüratör", isCorrect: false },
                    { text: "Emme supabı", isCorrect: false },
                    { text: "Hava filtresi", isCorrect: true },
                    { text: "Emme manifoldu", isCorrect: false },
                ],
            },
            {
                text: "Aşağıdakilerden hangisinin aşınması araçta direksiyon boşluğunun fazlalaşmasına neden olur?",
                answers: [
                    { text: "Rot başlarının", isCorrect: true },
                    { text: "Pistonların", isCorrect: false },
                    { text: "Krank milinin", isCorrect: false },
                    { text: "Vites kutusunun", isCorrect: false },
                ],
            },
        ],
    },
    {
        category: "İlk Yardım ve Güvenlik",
        questions: [
            {
                text: "Kaza anında ilk yapılması gereken nedir?",
                answers: [
                    { text: "Kaza yerini terk etmek", isCorrect: false },
                    { text: "Yaralılara müdahale etmek", isCorrect: false },
                    {
                        text: "Trafik polisinin gelmesini beklemek",
                        isCorrect: false,
                    },
                    { text: "Diğer araçları uyarmak", isCorrect: true },
                ],
            },
            {
                text: "Yaralı bir kişiyi hareket ettirmeden önce ne yapmalısınız?",
                answers: [
                    { text: "Yaralıyı hemen taşımalısınız", isCorrect: false },
                    {
                        text: "Yaralının bilincini kontrol etmelisiniz",
                        isCorrect: true,
                    },
                    { text: "Yaralıyı su içirmelisiniz", isCorrect: false },
                    {
                        text: "Yaralının giysilerini çıkarmalısınız",
                        isCorrect: false,
                    },
                ],
            },
            {
                text: "Aşağıdakilerden hangisi ilk yardımda haberleşme ilkelerindendir?",
                answers: [
                    {
                        text: "İlk yardım uygulaması yapıldı ise nasıl bir yardım yapıldığının anlatılması",
                        isCorrect: true,
                    },
                    {
                        text: "Uzun ve detaylı bilgi verilmesi",
                        isCorrect: false,
                    },
                    {
                        text: "Yaralıların tüm kimlik bilgilerinin tam olarak verilmesi",
                        isCorrect: false,
                    },
                    {
                        text: "Olayın ciddiyetinin anlaşılabilmesi için aceleci ve telaşlı olunması",
                        isCorrect: false,
                    },
                ],
            },
            {
                text: "Yanık durumunda yapılmaması gereken nedir?",
                answers: [
                    { text: "Yanık bölgesini soğutmak", isCorrect: false },
                    { text: "Yanık bölgesine buz koymak", isCorrect: true },
                    {
                        text: "Yanık bölgesini temiz suyla yıkamak",
                        isCorrect: false,
                    },
                    {
                        text: "Yanık bölgesini steril bir örtü ile kaplamak",
                        isCorrect: false,
                    },
                ],
            },
            {
                text: "Bayılan bir kişiye nasıl müdahale edilmelidir?",
                answers: [
                    { text: "Kendi haline bırakılmalı", isCorrect: false },
                    { text: "Sırt üstü yatırılmalı", isCorrect: false },
                    { text: "Ayakları yukarı kaldırılmalı", isCorrect: true },
                    { text: "Yüzüne su serpilmelidir", isCorrect: false },
                ],
            },
            {
                text: "Trafik kazası sonrası şok belirtileri nelerdir?",
                answers: [
                    { text: "Yüksek ateş", isCorrect: false },
                    { text: "Soğuk ve terli cilt", isCorrect: true },
                    {
                        text: "Hızlı ve derin nefes alıp verme",
                        isCorrect: false,
                    },
                    { text: "İştah artışı", isCorrect: false },
                ],
            },
            {
                text: "Kaza yerinde ilkyardım yaparken nelere dikkat edilmelidir?",
                answers: [
                    {
                        text: "Sadece yaralılara odaklanılmalı",
                        isCorrect: false,
                    },
                    {
                        text: "Öncelikle kendi güvenliğiniz sağlanmalı",
                        isCorrect: true,
                    },
                    {
                        text: "Trafik akışını engellememeye çalışılmalı",
                        isCorrect: false,
                    },
                    { text: "Yaralıları hızlıca taşımalı", isCorrect: false },
                ],
            },
            {
                text: "Kalp masajı yaparken ne kadar derinlikte bastırılmalıdır?",
                answers: [
                    { text: "1-2 cm", isCorrect: false },
                    { text: "2-3 cm", isCorrect: false },
                    { text: "4-5 cm", isCorrect: true },
                    { text: "5-6 cm", isCorrect: false },
                ],
            },
            {
                text: "Acil sağlık numarası nedir?",
                answers: [
                    { text: "155", isCorrect: false },
                    { text: "112", isCorrect: true },
                    { text: "110", isCorrect: false },
                    { text: "156", isCorrect: false },
                ],
            },
            {
                text: "Kırık ve çıkık durumlarında ne yapılmalıdır?",
                answers: [
                    { text: "Hemen hareket ettirilmelidir", isCorrect: false },
                    {
                        text: "Kırık bölgeye kuvvet uygulanmalıdır",
                        isCorrect: false,
                    },
                    { text: "Yaralıya su içirilmelidir", isCorrect: false },
                    {
                        text: "Sabitlenmeli ve sağlık ekiplerine haber verilmelidir",
                        isCorrect: true,
                    },
                ],
            },
        ],
    },
    {
        category: "Trafik ve Sürücü Psikolojisi",
        questions: [
            {
                text: "Sürücülerin sürüş sırasında çevrelerinden habersiz hale geldiği zihinsel duruma ne denir?",
                answers: [
                    {
                        text: "Savunmacı sürüş",
                        isCorrect: false,
                    },
                    { text: "Yol hipnozu", isCorrect: true },
                    {
                        text: "Agresif sürüş",
                        isCorrect: false,
                    },
                    {
                        text: "Yol öfkesi",
                        isCorrect: false,
                    },
                ],
            },
            {
                text: "Ticari araç sürücüleri için yasal alkol miktarı kaç Promildir?",
                answers: [
                    { text: "0.12", isCorrect: false },
                    {
                        text: "0.2",
                        isCorrect: true,
                    },
                    { text: "0.19", isCorrect: false },
                    { text: "0.5", isCorrect: false },
                ],
            },
            {
                text: "Uyuşturucu madde almış olarak sürüş yapmanların ehliyeti ne kadar süreyle geri alınır?",
                answers: [
                    { text: "2", isCorrect: false },
                    { text: "5", isCorrect: true },
                    {
                        text: "3",
                        isCorrect: false,
                    },
                    { text: "4", isCorrect: false },
                ],
            },
            {
                text: "Trafik kazalarına en çok hangi yaş grubu karışmaktadır?",
                answers: [
                    { text: "46-55", isCorrect: false },
                    { text: "16-25", isCorrect: true },
                    { text: "36-45", isCorrect: false },
                    { text: "26-35", isCorrect: false },
                ],
            },
            {
                text: "Aşağıdakilerden hangisi sürücülerin dikkatini dağıtan etkenlerden biri değildir?",
                answers: [
                    { text: "Cep telefonu", isCorrect: false },
                    { text: "Yan koltuktaki yolcu", isCorrect: false },
                    { text: "Yemek yeme", isCorrect: false },
                    { text: "Hepsi dağıtır", isCorrect: true },
                ],
            },
            {
                text: "Kişilerin huzurunu, ruh ve beden sağlığını bozacak seviyede ki istenmeyen seslere ne ad verilir?",
                answers: [
                    { text: "Gürültü", isCorrect: true },
                    { text: "Duyuru", isCorrect: false },
                    {
                        text: "Sesli ilan ",
                        isCorrect: false,
                    },
                    { text: "konuşma", isCorrect: false },
                ],
            },
            {
                text: "Öfke duygusunun kontrol edilebilmesi için aşağıdakilerden hangisi etkili bir yöntem değildir?",
                answers: [
                    {
                        text: "Kişinin kendısını en çok öfkelendıren durumlardan kaçınması ",
                        isCorrect: false,
                    },
                    {
                        text: "Öfkeye yol açan olumsuz düsünceyi anlamaya çalısması ",
                        isCorrect: false,
                    },
                    {
                        text: "Öfke anın da haklılığını kanıtlamaya çalışması",
                        isCorrect: true,
                    },
                    {
                        text: "Olumlu duygulara odaklanması ve olayı akışına bırakması ",
                        isCorrect: false,
                    },
                ],
            },
            {
                text: "Aşağıdakilerden hangisi kişinin strese girmesine yol açan faktörlerden biri olabilir ? ",
                answers: [
                    {
                        text: "Yapmayı planladığı işleri tamamlamak",
                        isCorrect: false,
                    },
                    {
                        text: "Yoğun trafikte dönüş yapacağı yol ayrımını kaçırmak",
                        isCorrect: true,
                    },
                    { text: "Dinlenmiş olarak yola çıkmak", isCorrect: false },
                    { text: "Dikkati dağıtır", isCorrect: false },
                ],
            },
            {
                text: "Yol öfkesinin önlenmesinde hangi yöntem etkilidir?",
                answers: [
                    {
                        text: "Sakinleşme teknikleri kullanmak",
                        isCorrect: true,
                    },
                    { text: "Hız yapmak", isCorrect: false },
                    { text: "Korna çalmak", isCorrect: false },
                    { text: "Diğer sürücülerle tartışmak", isCorrect: false },
                ],
            },
            {
                text: "Aşağıdaki kişilik özelliklerinden hangisine sahip olan sürücüler kaza yapmada daha yüksek risk taşır?",
                answers: [
                    { text: "Sabırsız ve hırslı ", isCorrect: true },
                    {
                        text: "Başkalarının haklarına saygılı",
                        isCorrect: false,
                    },
                    { text: "Kolay sakinleşebilen", isCorrect: false },
                    { text: "Cabuk öfkelenmeyen ", isCorrect: false },
                ],
            },
        ],
    },
];

export default questions;
