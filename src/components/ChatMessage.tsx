import { User, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  return (
    <div className={cn(
      "flex gap-4 max-w-3xl mx-auto",
      role === 'assistant' && "bg-muted/50 py-8 -mx-4 px-4 w-full max-w-none"
    )}>
      <div className="w-8 h-8 flex items-center justify-center rounded bg-primary">
        {role === 'user' ? (
          <User className="h-5 w-5 text-primary-foreground" />
        ) : (
          <Bot className="h-5 w-5 text-primary-foreground" />
        )}
      </div>
      <div className="flex-1 space-y-2">
        <div className="font-semibold">
          {role === 'user' ? 'You' : 'ChatGPT'}
        </div>
        <div className="prose prose-neutral dark:prose-invert">
          {content}
        </div>
      </div>
    </div>
  );
}