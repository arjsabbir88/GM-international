import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function OfferSidebar() {
  return (
    <Card className="sticky top-8 bg-muted/50">
      <CardContent className="p-6 space-y-4">
        <h3 className="text-lg font-semibold">Basic Information</h3>

        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Starting Date:</span>
            <span className="font-medium">Jan 01,2025</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Duration:</span>
            <span className="font-medium">4 Years</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Teaching Language:</span>
            <span className="font-medium">English</span>
          </div>
          <div className="flex justify-between text-sm border-t border-border pt-3">
            <span className="text-muted-foreground">Application Deadline:</span>
            <span className="font-medium">Nov 05, 2024</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tuition:</span>
            <span className="font-medium">EDT 10245/Year</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Application Fee:</span>
            <span className="font-medium">EDT 1234</span>
          </div>
          <div className="flex justify-between text-sm border-b border-border pb-3">
            <span className="text-muted-foreground">Service Fee:</span>
            <span className="font-medium">EDT 1234</span>
          </div>
        </div>

        <Button className="w-full bg-destructive hover:bg-destructive/90 text-primary-foreground font-semibold h-11">
          Apply Now
        </Button>
      </CardContent>
    </Card>
  )
}
