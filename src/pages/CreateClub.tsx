import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Users, MapPin, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CreateClub = () => {
  const [clubName, setClubName] = useState("");
  const [homeZip, setHomeZip] = useState("");
  const [radius, setRadius] = useState("25");
  const [description, setDescription] = useState("");

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold">Start Your Restaurant Club</h1>
              <p className="text-muted-foreground">Create a private dining group for you and your fellow eaters</p>
            </div>
          </div>

          <Card className="border-2 shadow-warm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="text-2xl">🍽️</div>
                Club Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="club-name">Club Name *</Label>
                <Input
                  id="club-name"
                  placeholder="e.g., Taco Tuesday Crew, The Foodie Squad..."
                  value={clubName}
                  onChange={(e) => setClubName(e.target.value)}
                  className="text-lg"
                />
                <p className="text-sm text-muted-foreground">
                  Choose something fun that represents your group's dining style!
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  placeholder="Tell your fellow eaters what this club is all about..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[80px]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="home-zip" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Home Zip Code *
                  </Label>
                  <Input
                    id="home-zip"
                    placeholder="90210"
                    value={homeZip}
                    onChange={(e) => setHomeZip(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Central location for your dining adventures
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="radius">Search Radius</Label>
                  <Select value={radius} onValueChange={setRadius}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10 miles</SelectItem>
                      <SelectItem value="25">25 miles</SelectItem>
                      <SelectItem value="50">50 miles</SelectItem>
                      <SelectItem value="100">100 miles</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    How far are you willing to travel for great food?
                  </p>
                </div>
              </div>

              <div className="bg-accent p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="w-4 h-4 text-primary" />
                  <span className="font-medium">Privacy Settings</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your club will be private by default. Only invited eaters can see your visits, reviews, and photos.
                </p>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  What You'll Get
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="text-lg">📝</div>
                    <div>
                      <div className="font-medium">Track Your Visits</div>
                      <div className="text-muted-foreground">Log restaurants, dates, bills, and who attended</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-lg">⭐</div>
                    <div>
                      <div className="font-medium">Rate & Review</div>
                      <div className="text-muted-foreground">Share ratings and thoughts with your club members</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-lg">📸</div>
                    <div>
                      <div className="font-medium">Share Photos</div>
                      <div className="text-muted-foreground">Capture and share your best food moments</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-lg">🗺️</div>
                    <div>
                      <div className="font-medium">Visualize Your Journey</div>
                      <div className="text-muted-foreground">See all your visits on an interactive map</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button 
                  className="flex-1 bg-gradient-warm border-0 text-lg py-6"
                  disabled={!clubName || !homeZip}
                >
                  Create Club & Get Started
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>Already have an invite? <Link to="/join-club" className="text-primary hover:underline">Join a club instead</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateClub;