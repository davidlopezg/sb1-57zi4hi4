import { useState } from 'react';
import { MessageSquare, Send, Menu, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import ChatMessage from '@/components/ChatMessage';
import Sidebar from '@/components/Sidebar';

function App() {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const newMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://hook.eu1.make.com/vozg3bxm35mmv6qnz223recina7r873r', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <main className="flex-1 flex flex-col">
        <header className="h-14 border-b flex items-center justify-between px-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="gap-2">
            <Plus className="h-4 w-4" />
            New chat
          </Button>
        </header>

        <div className="flex-1 overflow-auto p-4 space-y-6">
          {messages.length === 0 ? (
            <div className="flex-1 flex items-center justify-center flex-col gap-2">
              <MessageSquare className="h-12 w-12 text-muted-foreground" />
              <h1 className="text-2xl font-semibold">How can I help you today?</h1>
            </div>
          ) : (
            messages.map((message, index) => (
              <ChatMessage key={index} {...message} />
            ))
          )}
        </div>

        <footer className="border-t p-4">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto relative">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message ChatGPT..."
              className="min-h-[60px] resize-none pr-12"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              className={cn(
                "absolute right-2 bottom-2",
                isLoading && "opacity-50 cursor-not-allowed"
              )}
              disabled={isLoading}
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
          <div className="mt-2 text-xs text-center text-muted-foreground">
            ChatGPT can make mistakes. Consider checking important information.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;