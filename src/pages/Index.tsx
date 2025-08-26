import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MapPin, Camera, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-6xl mb-6">🍽️</div>
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            Welcome to Your Restaurant Club
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Track where you've dined, share amazing meals with fellow eaters, and discover your next favorite spot together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-warm border-0 hover:shadow-glow transition-smooth text-lg px-8 py-6"
              asChild
            >
              <Link to="/create-club">Start a New Club</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-2 hover:bg-accent transition-smooth"
              asChild
            >
              <Link to="/join-club">Join with Invite</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="border-2 hover:shadow-warm transition-smooth">
            <CardHeader className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle>Private Groups</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Create exclusive dining circles with your closest eater friends
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-warm transition-smooth">
            <CardHeader className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle>Track Visits</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Map out your culinary journey and see where you've been
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-warm transition-smooth">
            <CardHeader className="text-center">
              <Camera className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle>Share Photos</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Capture and share those perfect food moments with your club
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-warm transition-smooth">
            <CardHeader className="text-center">
              <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle>Rate & Review</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Leave ratings and notes to remember your favorite dishes
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Sample Club Preview */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">See It In Action</h2>
          <Card className="max-w-2xl mx-auto border-2 shadow-warm">
            <CardHeader>
              <CardTitle className="text-2xl">🌮 Taco Tuesday Crew</CardTitle>
              <CardDescription>5 hungry eaters • 12 restaurants explored</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-left space-y-4">
                <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                  <div className="text-2xl">🍝</div>
                  <div>
                    <div className="font-semibold">Mario's Italian Kitchen</div>
                    <div className="text-sm text-muted-foreground">Last visit: December 2024 • 4.8★</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                  <div className="text-2xl">🍣</div>
                  <div>
                    <div className="font-semibold">Sakura Sushi Bar</div>
                    <div className="text-sm text-muted-foreground">Last visit: November 2024 • 4.6★</div>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-6 bg-gradient-warm border-0" asChild>
                <Link to="/demo-club">Explore Demo Club</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;