
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Eye, BookOpen, Users, FileText, Search, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const CATEGORIES = ["برمجة", "علوم حاسوب", "تصميم", "إدارة"];

export default function BooksPage() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => setMounted(true), []);

  const filteredBooks = BOOKS.filter(book => {
    const matchesSearch = 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || book.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-background text-right" dir="rtl">
      <Navbar />

      <section className="pt-[64px] w-full overflow-hidden bg-white">
        <div className="relative w-full aspect-[3/1]">
           <Image 
             src="/Books.png" 
             alt="Books Library Banner" 
             fill 
             className="object-cover object-top"
             priority
           />
        </div>
      </section>

      {/* Search and Filter Bar - Centered & Single Row on Mobile */}
      <section className="sticky top-[64px] z-40 bg-background/95 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-row gap-2 items-center justify-center max-w-3xl mx-auto w-full">
            <div className="relative flex-1">
              <Input 
                placeholder="ابحث عن كتاب..." 
                className="h-11 rounded-2xl pr-10 border-primary/10 bg-white focus-visible:ring-secondary text-right text-xs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-primary/30 w-4 h-4" />
            </div>
            
            <div className="w-32 xs:w-44 md:w-56 shrink-0">
              <Select value={activeCategory} onValueChange={setActiveCategory}>
                <SelectTrigger className="h-11 rounded-2xl bg-white border-primary/10 shadow-sm focus:ring-secondary text-right font-headline text-primary/70 text-xs px-2">
                  <div className="flex items-center gap-1">
                    <Filter className="w-3.5 h-3.5 text-secondary hidden xs:block" />
                    <SelectValue placeholder="التصنيف" />
                  </div>
                </SelectTrigger>
                <SelectContent className="font-body" dir="rtl">
                  <SelectItem value="all">كل الكتب</SelectItem>
                  {CATEGORIES.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-primary/60 text-xs font-bold">
              <BookOpen className="w-4 h-4 text-secondary" />
              <span>تم العثور على {filteredBooks.length.toString()} كتاب</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} mounted={mounted} />
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="py-20 text-center">
              <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-primary/20" />
              </div>
              <h3 className="text-xl font-headline font-bold text-primary mb-2">لا توجد نتائج</h3>
              <p className="text-primary/60">لم نجد أي كتب تطابق بحثك الحالي.</p>
              <Button onClick={() => {setSearchQuery(""); setActiveCategory("all");}} variant="outline" className="mt-6 font-headline border-primary/10 rounded-xl px-8 h-12">عرض جميع الكتب</Button>
            </div>
          )}
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
      </div>
      
      <div className="p-6 space-y-4 flex flex-col flex-1">
        <div className="space-y-1">
          <h3 className="text-lg font-headline font-bold text-primary line-clamp-1">{book.title}</h3>
          <p className="text-xs text-primary/40 font-medium">تأليف: {book.author}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge className="bg-secondary/10 text-secondary border-none text-[10px] px-2 py-0.5">{book.category}</Badge>
            <div className="flex items-center gap-1 text-xs text-secondary font-bold">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{book.rating.toLocaleString('en-US')}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-primary/40 font-bold">
            <Users className="w-3 h-3" />
            <span>{mounted ? book.sales.toLocaleString('en-US') : ""} طلبوا الكتاب</span>
          </div>
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
