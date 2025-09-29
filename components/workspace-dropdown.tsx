"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Building, Users, Briefcase, Zap } from "lucide-react"

const workspaces = [
  {
    id: "private-office",
    name: "Private Office",
    icon: Building,
    description: "Dedicated private spaces for teams",
  },
  {
    id: "shared-workspace",
    name: "Shared Workspace",
    icon: Users,
    description: "Collaborative open spaces",
  },
  {
    id: "meeting-rooms",
    name: "Meeting Rooms",
    icon: Briefcase,
    description: "Professional meeting facilities",
  },
  {
    id: "innovation-labs",
    name: "Innovation Labs",
    icon: Zap,
    description: "High-tech development spaces",
  },
]

interface WorkspaceDropdownProps {
  onWorkspaceSelect: (workspace: string) => void
  selectedWorkspace: string | null
}

export function WorkspaceDropdown({ onWorkspaceSelect, selectedWorkspace }: WorkspaceDropdownProps) {
  const selectedItem = workspaces.find((w) => w.id === selectedWorkspace)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="lg" className="text-lg px-8 py-4 min-w-[200px] justify-between">
          {selectedItem ? selectedItem.name : "Choose Workspace"}
          <ChevronDown className="ml-2 h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 p-2">
        {workspaces.map((workspace) => (
          <DropdownMenuItem
            key={workspace.id}
            onClick={() => onWorkspaceSelect(workspace.id)}
            className="flex items-start gap-3 p-4 cursor-pointer hover:bg-accent rounded-lg"
          >
            <workspace.icon className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <div className="font-medium">{workspace.name}</div>
              <div className="text-sm text-muted-foreground">{workspace.description}</div>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
