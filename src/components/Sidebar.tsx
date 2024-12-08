import { MessageSquare, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <div className={`
      fixed inset-y-0 left-0 z-50 w-72 bg-card border-r transform transition-transform duration-200 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      md:relative md:translate-x-0
    `}>
      <div className="flex h-full flex-col">
        <div className="p-4">
          <Button className="w-full justify-start gap-2" variant="outline">
            <Plus className="h-4 w-4" />
            New chat
          </Button>
        </div>
        
        <ScrollArea className="flex-1 px-2">
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <MessageSquare className="h-4 w-4" />
              Previous chat 1
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <MessageSquare className="h-4 w-4" />
              Previous chat 2
            </Button>
          </div>
        </ScrollArea>

        <Separator />
        <div className="p-4">
          <Button variant="ghost" className="w-full justify-start gap-2">
            Upgrade to Plus
          </Button>
        </div>
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2 md:hidden"
        onClick={onClose}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}