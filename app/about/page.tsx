"use client"

import { useLanguage } from "@/lib/language-context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "https://api.dicebear.com/7.x/pixel-art/svg?seed=John&backgroundColor=b6e3f4&mood=happy",
    linkedin: "https://linkedin.com/in/john-smith"
  },
  {
    name: "Linda Evangelista",
    role: "Chief Product Officer",
    image: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Linda&backgroundColor=ffdfbf&mood=happy&hair=long01,long02,long03",
    linkedin: "https://linkedin.com/in/linda-evangelista"
  },
  {
    name: "John Travolta",
    role: "Chief Technology Officer",
    image: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Travolta&backgroundColor=c0aede&mood=happy",
    linkedin: "https://linkedin.com/in/john-travolta"
  }
]

export default function AboutPage() {
  const { t, isRTL } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className={cn(
        "text-4xl font-bold mb-8",
        isRTL ? "text-right" : "text-left"
      )}>
        {t.aboutUs}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <Card key={member.name} className="overflow-hidden bg-gradient-to-b from-background to-muted/20">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-20 group-hover:opacity-100 transition duration-500"></div>
                  <Avatar className="w-32 h-32 relative ring-2 ring-background">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors hover:scale-105 transform duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
