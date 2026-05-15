
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Eye, BookOpen, Users, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useEffect, useState } from "react";

const BOOKS = [
  {
    id: "b1",
    title: "موسوعة تطوير الويب الحديثة",
    author: "د. خالد السعيد",
    category: "برمجة",
    price: 12000,
    oldPrice: 15000,
    rating: 4.9,
    sales: 450,
    pages: 350,
    image: "book-1"
  },
  {
    id: "b2",
    title: "خوارزميات وهياكل البيانات",
    author: "م. سارة المفلحي",
    category: "علوم حاسوب",
    price: 8500,
    oldPrice: 10000,
    rating: 4.7,
    sales: 320,
    pages: 280,
    image: "book-2"
  }
];

export default function BooksPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="min-h-screen bg-background text-right" dir="rtl">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="text-center md:text-right">
              <h1 className="text-4xl font-headline font-bold text-primary mb-2">مكتبة سراج التعليمية</h1>
              <p className="text-primary/60">اقتنِ أفضل الكتب التعليمية الورقية بنسخ فاخرة تصلك أينما كنت.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {BOOKS.map((book) => (
              <BookCard key={book.id} book={book} mounted={mounted} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function BookCard({ book, mounted }: { book: any; mounted: boolean }) {
  const bookImage = PlaceHolderImages.find(img => img.id === book.image);

  return (
    <div className="group bg-white rounded-[32px] overflow-hidden border border-primary/5 luxury-shadow hover:translate-y-[-8px] transition-all duration-500 flex flex-col h-full">
      <div className="relative aspect-[3/4] overflow-hidden bg-primary/5 p-6">
        <div className="relative w-full h-full shadow-2xl transition-transform duration-700 group-hover:scale-105 rounded-xl overflow-hidden">
          {bookImage?.imageUrl && <Image src={bookImage.imageUrl} alt={book.title} fill className="object-cover" />}
        </div>
        <div className="absolute top-8 left-8">
          <Badge className="bg-secondary text-white font-headline text-[10px] border-none shadow-lg px-3 py-1">{book.category}</Badge>
        </div>
      </div>
      
      <div className="p-6 space-y-4 flex flex-col flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-secondary font-bold">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>{book.rating.toLocaleString('en-US')}</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-primary/40 font-bold">
            <Users className="w-3 h-3" />
            <span>{mounted ? book.sales.toLocaleString('en-US') : ""} طلبوا الكتاب</span>
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="text-lg font-headline font-bold text-primary line-clamp-1">{book.title}</h3>
          <p className="text-xs text-primary/40 font-medium">تأليف: {book.author}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 py-3 border-y border-primary/5">
          <div className="flex items-center gap-2 text-[10px] text-primary/60 font-bold">
            <FileText className="w-3.5 h-3.5 text-secondary" />
            <span>{mounted ? book.pages.toLocaleString('en-US') : ""} صفحة</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-primary/60 font-bold">
            <BookOpen className="w-3.5 h-3.5 text-secondary" />
            <span>نسخة ورقية</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 mt-auto">
          <div className="flex flex-col">
            {book.oldPrice && (
              <span className="text-[10px] text-primary/30 line-through leading-none mb-1">
                {mounted ? book.oldPrice.toLocaleString('en-US') : ""} ر.ي
              </span>
            )}
            <span className="text-xl font-headline font-bold text-secondary leading-none">
              {mounted ? book.price.toLocaleString('en-US') : ""} <span className="text-xs">ر.ي</span>
            </span>
          </div>
          <Link href={`/books/${book.id}`}>
            <Button size="sm" className="rounded-xl bg-primary hover:bg-secondary text-white font-headline text-xs gap-2 px-4">
              <Eye className="w-3.5 h-3.5" />
              التفاصيل
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
