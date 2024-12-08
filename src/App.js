import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { MessageSquare, Send, Menu, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import ChatMessage from '@/components/ChatMessage';
import Sidebar from '@/components/Sidebar';
function App() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading)
            return;
        const newMessage = { role: 'user', content: input };
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
        }
        catch (error) {
            console.error('Error:', error);
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsxs("div", { className: "flex h-screen bg-background", children: [_jsx(Sidebar, { isOpen: isSidebarOpen, onClose: () => setIsSidebarOpen(false) }), _jsxs("main", { className: "flex-1 flex flex-col", children: [_jsxs("header", { className: "h-14 border-b flex items-center justify-between px-4", children: [_jsx(Button, { variant: "ghost", size: "icon", onClick: () => setIsSidebarOpen(true), children: _jsx(Menu, { className: "h-5 w-5" }) }), _jsxs(Button, { variant: "outline", className: "gap-2", children: [_jsx(Plus, { className: "h-4 w-4" }), "New chat"] })] }), _jsx("div", { className: "flex-1 overflow-auto p-4 space-y-6", children: messages.length === 0 ? (_jsxs("div", { className: "flex-1 flex items-center justify-center flex-col gap-2", children: [_jsx(MessageSquare, { className: "h-12 w-12 text-muted-foreground" }), _jsx("h1", { className: "text-2xl font-semibold", children: "How can I help you today?" })] })) : (messages.map((message, index) => (_jsx(ChatMessage, { ...message }, index)))) }), _jsxs("footer", { className: "border-t p-4", children: [_jsxs("form", { onSubmit: handleSubmit, className: "max-w-3xl mx-auto relative", children: [_jsx(Textarea, { value: input, onChange: (e) => setInput(e.target.value), placeholder: "Message ChatGPT...", className: "min-h-[60px] resize-none pr-12", disabled: isLoading }), _jsx(Button, { type: "submit", size: "icon", className: cn("absolute right-2 bottom-2", isLoading && "opacity-50 cursor-not-allowed"), disabled: isLoading, children: _jsx(Send, { className: "h-4 w-4" }) })] }), _jsx("div", { className: "mt-2 text-xs text-center text-muted-foreground", children: "ChatGPT can make mistakes. Consider checking important information." })] })] })] }));
}
export default App;
