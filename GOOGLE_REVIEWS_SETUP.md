# Google Reviews Integration Setup

This guide will help you set up Google Reviews integration for your LAP PRO TECH website.

## Prerequisites

1. **Google Cloud Project** - You need a Google Cloud account
2. **Google Places API** - Enable the Places API in your Google Cloud Console
3. **Business Place ID** - Your business location's unique Google Place ID

## Setup Steps

### 1. Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable billing for your project

### 2. Enable Google Places API

1. In your Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Places API"
3. Click on "Places API" and click "Enable"

### 3. Create API Key

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy your API key
4. (Optional) Restrict the API key to only Places API and your domain

### 4. Find Your Business Place ID

1. Go to [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Search for your business name and address
3. Copy the Place ID (it looks like: `ChIJN1t_tDeuEmsRUsoyG83frY4`)

### 5. Environment Configuration

Create a `.env.local` file in your project root with:

```env
GOOGLE_PLACES_API_KEY=your_actual_api_key_here
GOOGLE_PLACE_ID=your_actual_place_id_here
```

### 6. Test the Integration

1. Restart your development server
2. Navigate to the "What Our Customers Say" section
3. The component should now display real Google Reviews

## Features

- ✅ **Real-time Reviews**: Fetches actual Google Reviews from your business
- ✅ **Loading States**: Shows skeleton loading while fetching reviews
- ✅ **Fallback Data**: Displays static testimonials if API fails
- ✅ **Responsive Design**: Works on all device sizes
- ✅ **Error Handling**: Gracefully handles API errors

## API Endpoint

The reviews are fetched from: `/api/google-reviews`

## Troubleshooting

- **API Key Issues**: Ensure your API key is valid and has Places API enabled
- **Place ID Issues**: Verify your Place ID is correct using the Place ID Finder
- **Rate Limiting**: Google Places API has usage limits, monitor your quota
- **CORS Issues**: The API route runs server-side, so CORS shouldn't be an issue

## Security Notes

- Never commit your `.env.local` file to version control
- Restrict your API key to only necessary APIs and domains
- Monitor your API usage to avoid unexpected charges
