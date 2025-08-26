import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Calendar, DollarSign, Users, Map, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const DemoClub = () => {
  const recentVisits = [
    {
      id: 1,
      restaurant: "Mario's Italian Kitchen",
      emoji: "🍝",
      month: "2024-12",
      totalBill: 18500,
      attendees: 4,
      avgRating: 4.8,
      photos: 3
    },
    {
      id: 2,
      restaurant: "Sakura Sushi Bar",
      emoji: "🍣",
      month: "2024-11",
      totalBill: 25600,
      attendees: 5,
      avgRating: 4.6,
      photos: 7
    },
    {
      id: 3,
      restaurant: "The Burger Joint",
      emoji: "🍔",
      month: "2024-11",
      totalBill: 14200,
      attendees: 3,
      avgRating: 4.2,
      photos: 2
    }
  ];

  const clubMembers = [
    { name: "Alex", handle: "@alexeats", role: "owner" },
    { name: "Sam", handle: "@samurai_sam", role: "member" },
    { name: "Jordan", handle: "@foodie_j", role: "member" },
    { name: "Casey", handle: "@casey_bites", role: "member" },
    { name: "Riley", handle: "@riley_reviews", role: "member" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">🌮 Taco Tuesday Crew</h1>
            <p className="text-muted-foreground">5 hungry eaters exploring the best spots in town</p>
          </div>
          <Button className="bg-gradient-warm border-0" asChild>
            <Link to="/demo-club/add-visit">
              <Plus className="w-4 h-4 mr-2" />
              Add Visit
            </Link>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">Restaurants</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">$1,247</div>
              <div className="text-sm text-muted-foreground">Total Spent</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">4.5★</div>
              <div className="text-sm text-muted-foreground">Avg Rating</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">34</div>
              <div className="text-sm text-muted-foreground">Photos</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Visits */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Recent Visits</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/demo-club/where-weve-been">
                    <Map className="w-4 h-4 mr-2" />
                    View Map
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {recentVisits.map((visit) => (
                <Link key={visit.id} to={`/demo-club/visit/${visit.id}`}>
                  <Card className="hover:shadow-warm transition-smooth cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{visit.emoji}</div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-lg">{visit.restaurant}</h3>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {visit.month}
                                </div>
                                <div className="flex items-center gap-1">
                                  <DollarSign className="w-4 h-4" />
                                  ${(visit.totalBill / 100).toFixed(0)}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users className="w-4 h-4" />
                                  {visit.attendees} eaters
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-semibold text-primary">
                                {visit.avgRating}★
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {visit.photos} photos
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Empty State Placeholder */}
            <Card className="border-dashed border-2 p-8 text-center mt-4">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="font-semibold mb-2">Ready for more food adventures?</h3>
              <p className="text-muted-foreground mb-4">
                Add your next restaurant visit to keep the delicious memories going!
              </p>
              <Button className="bg-gradient-warm border-0" asChild>
                <Link to="/demo-club/add-visit">Plan Next Visit</Link>
              </Button>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Club Members */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Eaters ({clubMembers.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {clubMembers.map((member, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="text-xs">
                        {member.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{member.name}</div>
                      <div className="text-xs text-muted-foreground">{member.handle}</div>
                    </div>
                    {member.role === 'owner' && (
                      <Badge variant="secondary" className="text-xs">Owner</Badge>
                    )}
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full mt-4">
                  <Plus className="w-4 h-4 mr-2" />
                  Invite Eaters
                </Button>
              </CardContent>
            </Card>

            {/* Club Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Club Area
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Home Base:</span>
                    <span>Downtown (90210)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Radius:</span>
                    <span>25 miles</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Privacy:</span>
                    <span>Private Club</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoClub;