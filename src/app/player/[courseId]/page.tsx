
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  ChevronRight, 
  ChevronLeft, 
  Menu, 
  MessageSquare, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Send,
  Loader2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { aiAcademicAssistant } from "@/ai/flows/ai-academic-assistant";
import { useToast } from "@/hooks/use-toast";

export default function CoursePlayer() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [question, setQuestion] = useState("");
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const { toast } = useToast();

  const handleAskAi = async () => {
    if (!question.trim()) return;
    
    setIsAiLoading(true);
    try {
      const res = await aiAcademicAssistant({
        courseContent: "هذا الدرس يتحدث عن أساسيات لغة البرمجة JavaScript، المتغيرات، الدوال، والتحكم في سير البرنامج.",
        studentQuestion: question
      });
      setAiResponse(res.explanation);
    } catch (error) {
      toast({
        title: "خطأ",
        description: "حدث خطأ أثناء محاولة الاتصال بالمساعد الذكي.",
        variant: "destructive"
      });
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-primary overflow-hidden">
      
      {/* Sidebar - Course Content */}
      <div className={`${isSidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 bg-white border-l h-full flex flex-col`}>
        <div className="p-6 border-b flex items-center justify-between shrink-0">
          <h2 className="font-headline font-bold text-primary">محتوى الكورس</h2>
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(false)}>
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
        <ScrollArea className="flex-1">
          <div className="p-4 space-y-6">
            <PlayerModule title="أساسيات JavaScript" active={true} />
            <PlayerModule title="الدوال والكائنات" active={false} />
            <PlayerModule title="التلاعب بالـ DOM" active={false} />
          </div>
        </ScrollArea>
      </div>

      {/* Main Player Area */}
      <div className="flex-1 flex flex-col h-full bg-background overflow-hidden relative">
        {/* Header */}
        <header className="bg-white border-b px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            {!isSidebarOpen && (
              <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)}>
                <Menu className="w-5 h-5" />
              </Button>
            )}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-lg">
                <span className="text-secondary font-headline font-bold text-sm">S</span>
              </div>
              <span className="text-lg font-headline font-bold text-primary">سراج</span>
            </Link>
            <div className="h-4 w-px bg-primary/10 mx-2" />
            <h1 className="text-sm font-medium text-primary/70">الدرس الثاني: المتغيرات وأنواع البيانات</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="font-headline rounded-xl">الدرس السابق</Button>
            <Button size="sm" className="bg-secondary text-white font-headline rounded-xl">الدرس التالي</Button>
          </div>
        </header>

        {/* Video Player */}
        <div className="flex-1 bg-black relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <Play className="w-20 h-20 text-white/20" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
             <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-secondary" />
             </div>
             <div className="flex items-center justify-between mt-4 text-white text-xs">
                <span>04:20 / 12:45</span>
                <div className="flex gap-4">
                  <span>جودة HD</span>
                  <span>1x</span>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Tabs (AI, Notes, Resources) */}
        <div className="h-1/3 bg-white border-t flex flex-col shrink-0">
          <Tabs defaultValue="ai" className="h-full flex flex-col" dir="rtl">
            <div className="px-6 border-b">
              <TabsList className="bg-transparent h-14 justify-start gap-8">
                <TabsTrigger value="ai" className="data-[state=active]:border-b-2 border-secondary rounded-none h-full bg-transparent font-headline flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-secondary" />
                  المساعد الأكاديمي الذكي
                </TabsTrigger>
                <TabsTrigger value="resources" className="data-[state=active]:border-b-2 border-secondary rounded-none h-full bg-transparent font-headline flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  المصادر والملفات
                </TabsTrigger>
                <TabsTrigger value="qanda" className="data-[state=active]:border-b-2 border-secondary rounded-none h-full bg-transparent font-headline flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  الأسئلة الشائعة
                </TabsTrigger>
              </TabsList>
            </div>
            
            <div className="flex-1 overflow-hidden">
              <TabsContent value="ai" className="h-full p-6 flex flex-col gap-4 m-0">
                <div className="flex-1 flex gap-6">
                  <div className="flex-1 space-y-3">
                    <p className="text-sm font-bold text-primary flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-secondary" />
                      اسأل المساعد الذكي حول هذا الدرس
                    </p>
                    <div className="relative">
                      <Textarea 
                        placeholder="مثال: كيف أستخدم الـ let بدلاً من var؟"
                        className="resize-none h-24 rounded-2xl bg-primary/5 border-none focus-visible:ring-secondary"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                      />
                      <Button 
                        size="icon" 
                        className="absolute bottom-3 left-3 bg-secondary hover:bg-secondary/90 text-white rounded-xl"
                        onClick={handleAskAi}
                        disabled={isAiLoading || !question.trim()}
                      >
                        {isAiLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4 -rotate-90" />}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-secondary/5 rounded-2xl p-4 overflow-y-auto border border-secondary/10">
                    {aiResponse ? (
                      <div className="space-y-2 animate-in fade-in duration-500">
                         <Badge className="bg-secondary/20 text-secondary border-none">إجابة سراج الذكية</Badge>
                         <div className="text-sm text-primary/80 leading-relaxed">
                           {aiResponse}
                         </div>
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center text-center px-8">
                        <p className="text-sm text-primary/40">سأقوم بشرح أي نقطة لم تفهمها في الدرس بمجرد طرح سؤالك.</p>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="resources" className="p-6 m-0">
                 <div className="grid grid-cols-2 gap-4">
                    <ResourceCard title="ملخص الدرس (PDF)" type="pdf" />
                    <ResourceCard title="أكواد الدرس (Zip)" type="zip" />
                 </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

function PlayerModule({ title, active }: { title: string; active: boolean }) {
  return (
    <div className="space-y-2">
      <h3 className={`text-sm font-bold ${active ? 'text-secondary' : 'text-primary/70'}`}>{title}</h3>
      <div className="space-y-1">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${i === 2 && active ? 'bg-secondary/10 border border-secondary/20' : 'hover:bg-primary/5'}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${i < 2 ? 'bg-success-green/10 text-success-green' : 'bg-primary/5 text-primary/30'}`}>
              {i < 2 ? <CheckCircle2 className="w-4 h-4" /> : <Play className="w-3 h-3" />}
            </div>
            <span className={`text-xs ${i === 2 && active ? 'font-bold text-primary' : 'text-primary/60'}`}>الدرس {i}: عنوان الفيديو التعليمي</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResourceCard({ title, type }: { title: string; type: string }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl border border-primary/5 luxury-shadow bg-white hover:border-secondary/20 transition-all cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
          <FileText className="w-5 h-5" />
        </div>
        <span className="text-sm font-bold text-primary">{title}</span>
      </div>
      <Button variant="ghost" size="sm" className="text-xs text-secondary">تحميل</Button>
    </div>
  );
}
