"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GoogleMapsProps {
  address?: string;
  className?: string;
}

export function GoogleMapsEmbed({
  address = "Jackal Creek Corner, Roodepoort, South Africa",
  className = "",
}: Readonly<GoogleMapsProps>) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  // Google Maps Embed URL
  const mapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(
    address
  )}&zoom=15`;

  return (
    <div className={className}>
      <Card className="medical-card overflow-hidden">
        <CardContent className="p-0">
          {/* Google Maps Embed */}
          {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? (
            <iframe
              src={mapsEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jackal Creek Medical Centre Location"
              className="w-full h-96"
            />
          ) : (
            /* Fallback for missing API key */
            <div className="relative h-96 bg-gray-800 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Jackal Creek Medical Centre
                </h3>
                <p className="text-gray-400 mb-4">
                  Jackal Creek Corner, Roodepoort
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Google Maps API key not configured
                </p>
                <Button
                  onClick={() => window.open(mapsUrl, "_blank")}
                  className="btn-primary"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in Google Maps
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick directions */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="medical-card">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2">Public Transport</h4>
            <p className="text-sm text-gray-400">
              Accessible via taxi routes and bus stops near Jackal Creek Corner
              shopping center.
            </p>
          </CardContent>
        </Card>
        <Card className="medical-card">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2">Parking</h4>
            <p className="text-sm text-gray-400">
              Ample free parking available at the medical center and surrounding
              area.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
