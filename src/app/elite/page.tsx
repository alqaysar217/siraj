
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Crown, 
  Star, 
  Medal, 
  ArrowUpRight, 
  Users, 
  Target,
  ChevronLeft
} from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useEffect, useState } from "react";

const LEADERBOARD_DATA = [
  { id: 1, name: "أحمد محمد سالم", points: 2850, level: "خبير", rank: 1, avatar: "instructor-1" },
  { id: 2, name: "سارة عبدالله المفلحي", points: 2640, level: "متقدم", rank: 2, avatar: "instructor-2" },
  { id: 3, name: "خالد علي السعيد", points: 2420, level: "متقدم", rank: 3, avatar: "instructor-1" },
  { id: 4, name: "ليلى حسن محمد", points: 2150, level: "متوسط", rank: 4, avatar: "instructor-2" },
  { id: 5, name: "عمر فؤاد", points: 1980, level: "متوسط", rank: 5, avatar: "instructor-1" },
  { id: 6, name: "نور الشمس", points: 1850, level: "متوسط", rank: 6, avatar: "instructor-2" },
  { id: 7, name: "عبدالرحمن علي", points: 1720, level: "مبتدئ", rank: 7, avatar: "instructor-1" },
  { id: 8, name: "مريم خالد", points: 1540, level: "مبتدئ", rank: 8, avatar: "instructor-2" },
];

export default function ElitePage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const topThree = LEADERBOARD_DATA.slice(0, 3);
  const theRest = LEADERBOARD_DATA.slice(3);

  return (
    <main className="min-h-screen bg-background text-right" dir="rtl">
      <Navbar />

      {/* Banner Section - Adjusted aspect ratio to 3:1 (16/5.33) */}
      <section className="pt-[92px] w-full overflow-hidden bg-white">
        <div className="relative w-full aspect-[16/7] md:aspect-[16/5.33]">
           <Image 
             src="/Elite.png" 
             alt="Elite Leaderboard Banner" 
             fill 
             className="object-cover object-top"
             priority
           />
        </div>
      </section>

      {/* Podium Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-center gap-6 mb-24 max-w-5xl mx-auto">
            {/* Rank 2 */}
            <PodiumItem student={topThree[1]} height="h-64" rankIcon={<Medal className="text-slate-400 w-8 h-8" />} color="bg-slate-100" />
            
            {/* Rank 1 */}
            <PodiumItem student={topThree[0]} height="h-80" rankIcon={<Crown className="text-secondary w-12 h-12" />} color="bg-secondary/10" isMain />
            
            {/* Rank 3 */}
            <PodiumItem student={topThree[2]} height="h-56" rankIcon={<Medal className="text-amber-600 w-8 h-8" />} color="bg-amber-50" />
          </div>

          {/* Leaderboard Table */}
          <div className="max-w-4xl mx-auto bg-white rounded-[40px] border border-primary/5 luxury-shadow overflow-hidden">
            <div className="p-8 border-b border-primary/5 bg-primary/5 flex items-center justify-between">
              <h3 className="text-xl font-headline font-bold text-primary flex items-center gap-3">
                <Users className="w-6 h-6 text-secondary" />
                قائمة المتصدرين
              </h3>
              <Badge variant="outline" className="border-primary/10 text-primary/40">تحدث كل 24 ساعة</Badge>
            </div>
            
            <div className="divide-y divide-primary/5">
              {theRest.map((student) => (
                <LeaderboardRow key={student.id} student={student} mounted={mounted} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Info Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto text-secondary">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-headline font-bold">كيف أكسب النقاط؟</h4>
              <p className="text-white/60 text-sm leading-relaxed">من خلال الإجابة الصحيحة على الأسئلة التفاعلية التي تظهر لك بعد كل درس تعليمي في المنصة.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto text-secondary">
                <Trophy className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-headline font-bold">جوائز النخبة</h4>
              <p className="text-white/60 text-sm leading-relaxed">المتصدرون يحصلون على خصومات حصرية، وصول مبكر للكورسات، وشارات تميز في ملفاتهم الشخصية.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto text-secondary">
                <Star className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-headline font-bold">التميز الأكاديمي</h4>
              <p className="text-white/60 text-sm leading-relaxed">تساعدك نقاطك في لفت انتباه المدربين والشركات التي تبحث عن المواهب في المنصة.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary/5 py-12 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary/40 text-sm">© 2024 سراج - تمكين المتفوقين العرب. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </main>
  );
}

function PodiumItem({ student, height, rankIcon, color, isMain }: { student: any; height: string; rankIcon: React.ReactNode; color: string; isMain?: boolean }) {
  const avatar = PlaceHolderImages.find(img => img.id === student.avatar);
  
  return (
    <div className={`flex flex-col items-center flex-1 w-full max-w-[280px] group`}>
      <div className="mb-6 relative">
        <div className={`absolute -top-6 left-1/2 -translate-x-1/2 z-10 transition-transform group-hover:scale-110 duration-500`}>
          {rankIcon}
        </div>
        <div className={`relative w-24 h-24 md:w-32 md:h-32 rounded-full border-4 ${isMain ? 'border-secondary' : 'border-white'} overflow-hidden shadow-2xl luxury-shadow`}>
          {avatar?.imageUrl && <Image src={avatar.imageUrl} alt={student.name} fill className="object-cover" />}
        </div>
        {isMain && <div className="absolute -bottom-2 -right-2 bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">1</div>}
      </div>
      
      <div className={`w-full ${height} ${color} rounded-t-[40px] flex flex-col items-center justify-start p-6 text-center shadow-xl border-x border-t border-primary/5 transition-all group-hover:translate-y-[-10px] duration-500`}>
        <h4 className={`font-headline font-bold text-primary ${isMain ? 'text-lg md:text-xl' : 'text-base'} mb-2 line-clamp-1`}>{student.name}</h4>
        <div className="flex flex-col items-center gap-1">
          <span className="text-secondary font-bold text-2xl font-headline">{student.points.toLocaleString('en-US')}</span>
          <span className="text-[10px] text-primary/40 font-bold uppercase tracking-widest">نقطة</span>
        </div>
        <Badge variant="outline" className="mt-4 border-primary/10 text-primary/60 text-[10px]">{student.level}</Badge>
      </div>
    </div>
  );
}

function LeaderboardRow({ student, mounted }: { student: any; mounted: boolean }) {
  const avatar = PlaceHolderImages.find(img => img.id === student.avatar);
  
  return (
    <div className="flex items-center justify-between p-6 hover:bg-primary/5 transition-all group">
      <div className="flex items-center gap-6 flex-1">
        <div className="w-10 h-10 flex items-center justify-center font-headline font-bold text-primary/30 text-xl group-hover:text-secondary transition-colors">
          {student.rank.toString()}
        </div>
        <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-primary/5 luxury-shadow">
          {avatar?.imageUrl && <Image src={avatar.imageUrl} alt={student.name} fill className="object-cover" />}
        </div>
        <div className="flex flex-col text-right">
          <h4 className="font-headline font-bold text-primary group-hover:text-secondary transition-colors">{student.name}</h4>
          <span className="text-[10px] text-primary/40 font-bold">{student.level}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-end">
          <span className="text-xl font-headline font-bold text-secondary">{mounted ? student.points.toLocaleString('en-US') : ""}</span>
          <span className="text-[9px] text-primary/30 font-bold uppercase">نقطة</span>
        </div>
        <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary/20 group-hover:bg-secondary/10 group-hover:text-secondary transition-all">
          <ChevronLeft className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
