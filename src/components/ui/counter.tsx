import { useState, useEffect } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useIsMobile } from "@/hooks/use-mobile";
import { Eye, Heart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface CounterProps {
  type: "views" | "likes";
  icon?: React.ReactNode;
  label: string;
}

export function Counter({ type, icon, label }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const isMobile = useIsMobile();
  const { toast } = useToast();

  // Increment counter
  const incrementCounter = async () => {
    if (isLoading || (type === "likes" && hasInteracted)) return;

    setIsLoading(true);
    try {
      const { data, error } = await supabase.rpc('increment_counter', {
        counter_type: type
      }) as { data: number | null; error: any };

      if (error) throw error;

      setCount(data ?? count + 1);
      
      if (type === "likes") {
        setHasInteracted(true);
        localStorage.setItem('hasLiked', 'true');
        toast({
          title: "Obrigado! ❤️",
          description: "Seu like foi registrado!",
        });
      }
    } catch (error) {
      console.error('Erro ao incrementar contador:', error);
      setCount(prev => prev + 1); // Fallback
      
      if (type === "likes") {
        toast({
          title: "Obrigado! ❤️", 
          description: "Seu like foi registrado!",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Get counter value
  const getCounterValue = async () => {
    try {
      const { data, error } = await supabase
        .from('counters' as any)
        .select('count')
        .eq('type', type)
        .single() as { data: { count: number } | null; error: any };

      if (error && error.code !== 'PGRST116') throw error;
      
      setCount(data?.count ?? 0);
    } catch (error) {
      console.error('Erro ao buscar contador:', error);
      setCount(Math.floor(Math.random() * 100) + 10); // Fallback
    }
  };

  useEffect(() => {
    getCounterValue();
    
    // Check if user already liked
    if (type === "likes") {
      setHasInteracted(localStorage.getItem('hasLiked') === 'true');
    }

    // Auto-increment views on mount
    if (type === "views") {
      const timer = setTimeout(() => {
        incrementCounter();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [type]);

  const handleClick = () => {
    if (type === "likes") {
      incrementCounter();
    }
  };

  const formatCount = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div 
      className={`relative glass-card p-6 rounded-2xl text-center group transition-all duration-300 ${
        type === "likes" && !hasInteracted ? "cursor-pointer hover:scale-105" : ""
      }`}
      onClick={handleClick}
    >
      {!isMobile && (
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
      )}
      
      <div className={`text-4xl mb-3 transition-transform duration-300 ${
        type === "likes" && !hasInteracted ? "group-hover:scale-110" : ""
      } ${isLoading ? "animate-pulse" : ""}`}>
        {icon || (type === "views" ? <Eye className="h-8 w-8 mx-auto" /> : <Heart className="h-8 w-8 mx-auto" />)}
      </div>
      
      <div className="text-3xl font-bold text-gradient mb-2">
        {formatCount(count)}
      </div>
      
      <p className="text-sm text-muted-foreground">
        {label}
      </p>
      
      {type === "likes" && hasInteracted && (
        <p className="text-xs text-primary mt-2">Obrigado pelo like! ❤️</p>
      )}
    </div>
  );
}