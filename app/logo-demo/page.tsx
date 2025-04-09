import { Logo } from "@/components/logo"

export default function LogoDemoPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Logo Showcase</h1>

      <div className="grid gap-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">Standard Logo</h2>
          <div className="flex items-center gap-8 flex-wrap">
            <Logo size={48} />
            <Logo size={64} />
            <Logo size={96} />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Icon Only</h2>
          <div className="flex items-center gap-8 flex-wrap">
            <Logo size={32} showText={false} />
            <Logo size={48} showText={false} />
            <Logo size={64} showText={false} />
          </div>
        </section>

        <section className="p-8 bg-primary text-primary-foreground rounded-lg">
          <h2 className="text-xl font-semibold mb-4">On Dark Background</h2>
          <div className="flex items-center gap-8 flex-wrap">
            <Logo size={48} textClassName="text-primary-foreground" />
            <Logo size={64} textClassName="text-primary-foreground" />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Usage Examples</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <Logo size={24} />
                <button className="text-sm text-muted-foreground">Menu</button>
              </div>
              <div className="h-32 bg-muted rounded-md"></div>
            </div>

            <div className="p-6 border rounded-lg">
              <div className="h-32 bg-muted rounded-md mb-4"></div>
              <div className="flex justify-center">
                <Logo size={32} />
              </div>
            </div>

            <div className="p-6 border rounded-lg">
              <div className="h-32 bg-muted rounded-md mb-4"></div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Logo size={16} showText={false} />
                <span>© 2023 AppHub</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
