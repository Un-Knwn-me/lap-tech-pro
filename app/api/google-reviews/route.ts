import { NextResponse } from 'next/server';

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID; // Your business Place ID

export async function GET() {
  try {
    if (!GOOGLE_PLACES_API_KEY || !PLACE_ID) {
      return NextResponse.json(
        { error: 'Google Places API key or Place ID not configured' },
        { status: 500 }
      );
    }

    // Fetch place details including reviews
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Google Reviews');
    }

    const data = await response.json();

    if (data.status !== 'OK') {
      throw new Error(`Google Places API error: ${data.status}`);
    }

    const reviews = data.result.reviews || [];
    const overallRating = data.result.rating || 0;
    const totalReviews = data.result.user_ratings_total || 0;

    // Transform reviews to match our component structure
    const transformedReviews = reviews.slice(0, 8).map((review: any) => ({
      name: review.author_name,
      message: review.text,
      avatar: review.profile_photo_url || '/default-avatar.png',
      rating: review.rating,
      date: formatRelativeTime(review.time * 1000),
      verified: true,
      googleReviewId: review.time
    }));

    return NextResponse.json({
      reviews: transformedReviews,
      overallRating,
      totalReviews
    });

  } catch (error) {
    console.error('Error fetching Google Reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}

function formatRelativeTime(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);

  if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
  if (weeks > 0) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
  return 'Today';
}
