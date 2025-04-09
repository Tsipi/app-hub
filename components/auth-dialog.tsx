"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import AuthForm from "@/auth-form"
import { Button } from "@/components/ui/button"

interface AuthDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  mode: "login" | "signup"
  onModeChange: (mode: "login" | "signup") => void
}

export function AuthDialog({ open, onOpenChange, mode, onModeChange }: AuthDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{mode === "login" ? "Login to your account" : "Create an account"}</DialogTitle>
          <DialogDescription>
            {mode === "login"
              ? "Enter your credentials to access your account"
              : "Fill in the information below to create your account"}
          </DialogDescription>
        </DialogHeader>

        <AuthForm defaultTab={mode} />

        <div className="mt-4 text-center text-sm">
          {mode === "login" ? (
            <div>
              Don't have an account?{" "}
              <Button variant="link" className="p-0 h-auto" onClick={() => onModeChange("signup")}>
                Sign up
              </Button>
            </div>
          ) : (
            <div>
              Already have an account?{" "}
              <Button variant="link" className="p-0 h-auto" onClick={() => onModeChange("login")}>
                Login
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
