import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getProducts, Product } from '@/lib/products';
import ProductCard from '@/components/product-card';
import Image from 'next/image';

const products = getProducts();

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-background text-center flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg')",
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-foreground">
            Desain Abadi untuk Rumah Anda
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Temukan furnitur buatan tangan yang memadukan keindahan, kenyamanan, dan daya tahan.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/products">Jelajahi Koleksi Kami</Link>
          </Button>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Tentang Furnishr Static</h2>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Di Furnishr Static, kami percaya bahwa furnitur harus lebih dari sekadar fungsional. Itu harus menjadi cerminan gaya Anda, sumber kenyamanan, dan bagian dari cerita rumah Anda. Kami berdedikasi untuk membuat karya abadi yang akan Anda hargai selama bertahun-tahun yang akan datang.
                  </p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                  Tim pengrajin ahli kami menggunakan bahan-bahan terbaik dan teknik yang telah teruji waktu untuk membuat setiap perabot. Dari keanggunan kayu solid hingga kemewahan kain kami, setiap detail dipertimbangkan dengan cermat untuk memastikan kualitas dan keindahan.
                  </p>
                  <Button asChild variant="outline" className="mt-6">
                      <Link href="/about">Pelajari Lebih Lanjut</Link>
                  </Button>
              </div>
              <div className="order-1 md:order-2">
                  <Image
                  src="https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg"
                  alt="Interior ruang tamu yang ditata dengan baik"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                  data-ai-hint="ruang tamu interior"
                  />
              </div>
            </div>
          </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Produk Unggulan</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Lihat beberapa barang favorit pilihan kami dari koleksi kami.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
