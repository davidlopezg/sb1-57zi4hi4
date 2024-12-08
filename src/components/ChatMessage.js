import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { User, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
export default function ChatMessage({ role, content }) {
    return (_jsxs("div", { className: cn("flex gap-4 max-w-3xl mx-auto", role === 'assistant' && "bg-muted/50 py-8 -mx-4 px-4 w-full max-w-none"), children: [_jsx("div", { className: "w-8 h-8 flex items-center justify-center rounded bg-primary", children: role === 'user' ? (_jsx(User, { className: "h-5 w-5 text-primary-foreground" })) : (_jsx(Bot, { className: "h-5 w-5 text-primary-foreground" })) }), _jsxs("div", { className: "flex-1 space-y-2", children: [_jsx("div", { className: "font-semibold", children: role === 'user' ? 'You' : 'ChatGPT' }), _jsx("div", { className: "prose prose-neutral dark:prose-invert", children: content })] })] }));
}
