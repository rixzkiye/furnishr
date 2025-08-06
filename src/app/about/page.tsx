import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-foreground">
            Keahlian Bertemu Kenyamanan
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Kami bukan sekadar perusahaan furnitur; kami adalah pengrajin, desainer, dan pemimpi yang bersemangat untuk menciptakan ruang yang Anda sukai.
          </p>
        </div>

        <div className="my-12 rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="https://images.pexels.com/photos/313776/pexels-photo-313776.jpeg"
            alt="Bengkel pengrajin dengan perkakas dan kayu"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            data-ai-hint="bengkel pengrajin"
          />
        </div>

        <div className="prose prose-lg max-w-none text-muted-foreground mx-auto">
          <h2 className="text-3xl font-bold font-headline text-foreground">Cerita kita</h2>
          <p>
          Didirikan di atas prinsip bahwa rumah harus menjadi tempat perlindungan Anda, Furnishr Static dimulai sebagai bengkel kecil dengan visi besar. Kami ingin menjauh dari furnitur yang diproduksi secara massal dan dapat dibuang dan kembali ke seni keahlian yang berkualitas. Setiap bagian dalam koleksi kami menceritakan sebuah kisah—kisah bahan-bahan yang dipilih dengan cermat, tangan-tangan terampil, dan perhatian yang tak tergoyahkan terhadap detail.
          </p>
          <p>
          Filosofi desain kami sederhana: ciptakan karya abadi yang indah dan dibuat untuk bertahan lama. Kami mengambil inspirasi dari desain modern abad pertengahan yang bersih dan fungsionalitas Skandinavia, menanamkannya dengan sentuhan kontemporer. Hasilnya adalah furnitur yang terasa familier dan segar, yang dapat dengan mudah berintegrasi ke dalam rumah mana pun.
          </p>

          <h2 className="text-3xl font-bold font-headline text-foreground mt-12">Komitmen Kami</h2>
          <p>
          Keberlanjutan adalah inti dari semua yang kami lakukan. Kami berkomitmen untuk menggunakan kayu yang bersumber secara bertanggung jawab, finishing ramah lingkungan, dan praktik yang meminimalkan limbah. Kami percaya pada pembuatan furnitur yang tidak hanya baik untuk rumah Anda tetapi juga baik untuk planet ini.
          </p>
        </div>
        
        <div className="text-center mt-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Temui Tim</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                    <Avatar className="w-24 h-24 text-lg">
                        <AvatarImage src="https://placehold.co/100x100.png" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <h3 className="mt-4 font-semibold text-lg text-foreground">Jane Doe</h3>
                    <p className="text-muted-foreground">Pendiri & Desainer Utama</p>
                </div>
                <div className="flex flex-col items-center">
                    <Avatar className="w-24 h-24 text-lg">
                        <AvatarImage src="https://placehold.co/100x100.png" />
                        <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <h3 className="mt-4 font-semibold text-lg text-foreground">John Smith</h3>
                    <p className="text-muted-foreground">Kepala Pengrajin</p>
                </div>
                <div className="flex flex-col items-center">
                    <Avatar className="w-24 h-24 text-lg">
                        <AvatarImage src="https://placehold.co/100x100.png" />
                        <AvatarFallback>EM</AvatarFallback>
                    </Avatar>
                    <h3 className="mt-4 font-semibold text-lg text-foreground">Emily Marx</h3>
                    <p className="text-muted-foreground">Manajer Operasi</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
