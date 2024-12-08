import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MessageSquare, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
export default function Sidebar({ isOpen, onClose }) {
    return (_jsxs("div", { className: `
      fixed inset-y-0 left-0 z-50 w-72 bg-card border-r transform transition-transform duration-200 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      md:relative md:translate-x-0
    `, children: [_jsxs("div", { className: "flex h-full flex-col", children: [_jsx("div", { className: "p-4", children: _jsxs(Button, { className: "w-full justify-start gap-2", variant: "outline", children: [_jsx(Plus, { className: "h-4 w-4" }), "New chat"] }) }), _jsx(ScrollArea, { className: "flex-1 px-2", children: _jsxs("div", { className: "space-y-2", children: [_jsxs(Button, { variant: "ghost", className: "w-full justify-start gap-2", children: [_jsx(MessageSquare, { className: "h-4 w-4" }), "Previous chat 1"] }), _jsxs(Button, { variant: "ghost", className: "w-full justify-start gap-2", children: [_jsx(MessageSquare, { className: "h-4 w-4" }), "Previous chat 2"] })] }) }), _jsx(Separator, {}), _jsx("div", { className: "p-4", children: _jsx(Button, { variant: "ghost", className: "w-full justify-start gap-2", children: "Upgrade to Plus" }) })] }), _jsx(Button, { variant: "ghost", size: "icon", className: "absolute right-2 top-2 md:hidden", onClick: onClose, children: _jsx(X, { className: "h-4 w-4" }) })] }));
}
