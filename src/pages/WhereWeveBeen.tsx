import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, List, Map as MapIcon, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const WhereWeveBeen = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');

  const visits = [
    {
      id: 1,
      restaurant: "Mario's Italian Kitchen",
      emoji: "🍝",
      month: "2024-12",
      avgRating: 4.8,
      photos: 3,
      address: "123 Main St, Downtown",
      priceLevel: 2
    },
    {
      id: 2,
      restaurant: "Sakura Sushi Bar",
      emoji: "🍣",
      month: "2024-11",
      avgRating: 4.6,
      photos: 7,
      address: "456 Oak Ave, Midtown",
      priceLevel: 3
    },
    {
      id: 3,
      restaurant: "The Burger Joint",
      emoji: "🍔",
      month: "2024-11",
      avgRating: 4.2,
      photos: 2,
      address: "789 Pine Rd, Uptown",
      priceLevel: 1
    },
    {
      id: 4,
      restaurant: "Café Lumière",
      emoji: "☕",
      month: "2024-10",
      avgRating: 4.5,
      photos: 5,
      address: "321 Elm St, Arts District",
      priceLevel: 2
    },
    {
      id: 5,
      restaurant: "Taco El Mejor",
      emoji: "🌮",
      month: "2024-10",
      avgRating: 4.7,
      photos: 4,
      address: "654 Cedar Blvd, South Side",
      priceLevel: 1
    },
    {
      id: 6,
      restaurant: "The Steakhouse",
      emoji: "🥩",
      month: "2024-09",
      avgRating: 4.9,
      photos: 8,
      address: "987 Maple Dr, West End",
      priceLevel: 4
    }
  ];

  const getPriceLevelDisplay = (level: number) => {
    return '$'.repeat(level) + '·'.repeat(4 - level);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/demo-club">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Club
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold">Where We've Been</h1>
              <p className="text-muted-foreground">🌮 Taco Tuesday Crew's culinary journey</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className={viewMode === 'grid' ? 'bg-gradient-warm border-0' : ''}
            >
              <List className="w-4 h-4 mr-2" />
              Grid
            </Button>
            <Button
              variant={viewMode === 'map' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('map')}
              className={viewMode === 'map' ? 'bg-gradient-warm border-0' : ''}
            >
              <MapIcon className="w-4 h-4 mr-2" />
              Map
            </Button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          /* Grid View */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visits.map((visit) => (
              <Link key={visit.id} to={`/demo-club/visit/${visit.id}`}>
                <Card className="hover:shadow-warm transition-smooth cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{visit.emoji}</div>
                      <h3 className="font-semibold text-lg mb-1">{visit.restaurant}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{visit.address}</p>
                      
                      <div className="flex items-center justify-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-primary fill-current" />
                          <span className="font-medium">{visit.avgRating}</span>
                        </div>
                        <div className="text-muted-foreground">
                          {getPriceLevelDisplay(visit.priceLevel)}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {visit.month}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {visit.photos} photos
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          /* Map View */
          <div className="space-y-6">
            <Card className="border-2 border-dashed p-16 text-center">
              <div className="text-6xl mb-6">🗺️</div>
              <h3 className="text-2xl font-bold mb-4">Interactive Map Coming Soon!</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Visualize all your restaurant visits on an interactive map with clustering and detailed location pins.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📍 Pin clustering for nearby restaurants</p>
                <p>🎯 Filter by rating, price, or date</p>
                <p>📊 Heat map of your favorite dining areas</p>
              </div>
            </Card>

            {/* Restaurant List for Map View */}
            <div className="grid md:grid-cols-2 gap-4">
              {visits.map((visit) => (
                <Link key={visit.id} to={`/demo-club/visit/${visit.id}`}>
                  <Card className="hover:shadow-warm transition-smooth cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{visit.emoji}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{visit.restaurant}</h4>
                          <p className="text-sm text-muted-foreground">{visit.address}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-primary fill-current" />
                              <span className="text-sm">{visit.avgRating}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {getPriceLevelDisplay(visit.priceLevel)}
                            </span>
                            <Badge variant="secondary" className="text-xs ml-auto">
                              {visit.month}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhereWeveBeen;