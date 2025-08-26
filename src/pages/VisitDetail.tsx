import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Star, Camera, DollarSign, Users, MapPin, Calendar, Heart } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const VisitDetail = () => {
  const { visitId } = useParams();
  const [userRating, setUserRating] = useState(0);
  const [userReview, setUserReview] = useState("");
  const [hasAttended, setHasAttended] = useState(false);

  // Mock data - in real app this would come from backend
  const visit = {
    id: visitId,
    restaurant: "Mario's Italian Kitchen",
    emoji: "🍝",
    month: "2024-12",
    totalBill: 18500,
    chosenBy: "Alex",
    address: "123 Main St, Downtown",
    notes: "Amazing pasta night! The carbonara was absolutely perfect. Service was fantastic and the atmosphere was cozy and romantic.",
    photos: [
      { id: 1, caption: "The famous carbonara!", uploader: "Sam" },
      { id: 2, caption: "Beautiful interior", uploader: "Jordan" },
      { id: 3, caption: "Group photo!", uploader: "Casey" }
    ],
    attendance: [
      { name: "Alex", handle: "@alexeats", attended: true, role: "owner" },
      { name: "Sam", handle: "@samurai_sam", attended: true, role: "member" },
      { name: "Jordan", handle: "@foodie_j", attended: true, role: "member" },
      { name: "Casey", handle: "@casey_bites", attended: true, role: "member" },
      { name: "Riley", handle: "@riley_reviews", attended: false, role: "member" }
    ],
    reviews: [
      { name: "Alex", rating: 5, review: "Best carbonara I've ever had! The chef really knows what they're doing." },
      { name: "Sam", rating: 5, review: "Incredible atmosphere and the wine selection was perfect." },
      { name: "Jordan", rating: 4, review: "Great food, service was a bit slow but worth the wait." },
      { name: "Casey", rating: 5, review: "Will definitely be coming back here!" }
    ]
  };

  const averageRating = visit.reviews.reduce((sum, review) => sum + review.rating, 0) / visit.reviews.length;

  const renderStars = (rating: number, interactive = false, onRate?: (rating: number) => void) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-primary fill-current' : 'text-muted-foreground'
        } ${interactive ? 'cursor-pointer hover:text-primary' : ''}`}
        onClick={() => interactive && onRate && onRate(i + 1)}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="sm" asChild>
            <Link to="/demo-club">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Club
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <span className="text-4xl">{visit.emoji}</span>
              {visit.restaurant}
            </h1>
            <p className="text-muted-foreground">Visit from {visit.month}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Visit Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Visit Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{averageRating.toFixed(1)}★</div>
                    <div className="text-sm text-muted-foreground">Avg Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">${(visit.totalBill / 100).toFixed(0)}</div>
                    <div className="text-sm text-muted-foreground">Total Bill</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{visit.attendance.filter(a => a.attended).length}</div>
                    <div className="text-sm text-muted-foreground">Attended</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{visit.photos.length}</div>
                    <div className="text-sm text-muted-foreground">Photos</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{visit.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>Chosen by {visit.chosenBy}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>{visit.month}</span>
                  </div>
                </div>

                {visit.notes && (
                  <div className="p-4 bg-accent rounded-lg">
                    <h4 className="font-semibold mb-2">Visit Notes</h4>
                    <p className="text-sm">{visit.notes}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Photos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  Photos ({visit.photos.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {visit.photos.map((photo) => (
                    <div key={photo.id} className="space-y-2">
                      <div className="aspect-square bg-accent rounded-lg flex items-center justify-center">
                        <div className="text-4xl">📸</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">{photo.caption}</div>
                        <div className="text-xs text-muted-foreground">by {photo.uploader}</div>
                      </div>
                    </div>
                  ))}
                  <div className="aspect-square border-2 border-dashed border-muted rounded-lg flex flex-col items-center justify-center text-muted-foreground">
                    <Camera className="w-8 h-8 mb-2" />
                    <span className="text-sm">Add Photo</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Eater Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {visit.reviews.map((review, index) => (
                  <div key={index} className="flex gap-3 p-4 bg-accent rounded-lg">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="text-xs">
                        {review.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{review.name}</span>
                        <div className="flex">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <p className="text-sm">{review.review}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Your Participation */}
            <Card>
              <CardHeader>
                <CardTitle>Your Participation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasAttended}
                      onChange={(e) => setHasAttended(e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-sm">I attended this visit</span>
                  </label>
                </div>

                {hasAttended && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Rating</label>
                      <div className="flex gap-1">
                        {renderStars(userRating, true, setUserRating)}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Your Review</label>
                      <Textarea
                        placeholder="Share your thoughts about this dining experience..."
                        value={userReview}
                        onChange={(e) => setUserReview(e.target.value)}
                        className="min-h-[100px]"
                      />
                    </div>

                    <Button className="w-full bg-gradient-warm border-0">
                      Save Review
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Attendance */}
            <Card>
              <CardHeader>
                <CardTitle>Who Was There</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {visit.attendance.map((member, index) => (
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
                    <div className="flex items-center gap-1">
                      {member.attended ? (
                        <Badge className="bg-green-100 text-green-800 text-xs">Attended</Badge>
                      ) : (
                        <Badge variant="secondary" className="text-xs">Missed</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  <Heart className="w-4 h-4 mr-2" />
                  Add to Favorites
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Plan Return Visit
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  <MapPin className="w-4 h-4 mr-2" />
                  View on Map
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitDetail;