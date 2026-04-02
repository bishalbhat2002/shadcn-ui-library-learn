
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";




export default function CardX() {
  return (
      <Card className="max-w-sm card">
        <CardHeader>
          <CardTitle>This is card Title</CardTitle>
          <CardDescription>
            This is card description. You can use this section to provide
            additional details about the card content.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Your design system is ready. Start building your next component. This
          is card content..
        </CardContent>
      </Card>
  );
}
