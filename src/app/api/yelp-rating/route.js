import { NextResponse } from "next/server";
import * as cheerio from "cheerio";
import BUSINESS from "@/components/utility/Business";

export async function GET(request) {
  const yelpUrl = BUSINESS.yelpUrl;
  console.log(`Fetching Yelp rating from URL: ${yelpUrl}`);
  try {
    const response = await fetch(yelpUrl, {
      method: "GET",
      headers: {
        // Crucial: Spoof a desktop web browser user-agent so Yelp doesn't drop the connection
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
      },
      next: { revalidate: 86400 }, // Next.js built-in 24-hour cache mechanism!
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch Yelp page; Status ${response.status}` },
        { status: response.status },
      );
    }
    const html = await response.text();
    const $ = cheerio.load(html);

    // 1. Get the star rating text (Looks for the main rating div using aria-label containing "rating")
    const ratingText = $('div[aria-label*="rating"]')
      .first()
      .attr("aria-label");
    // Extracts just the number string (e.g., "4.5") out of "4.5 star rating"
    let rating = ratingText ? ratingText.split(" ")[0] : "N/A";
    // check to make sure its a number, otherwise still set to "N/A"
    rating = isNaN(rating) ? "N/A" : rating;

    // 2. Get the review count (Looks for structural meta tags inside the page)
    const reviewCount =
      $('meta[itemprop="reviewCount"]').attr("content") || "N/A";

    return NextResponse.json({
      rating: rating,
      reviewCount: reviewCount,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error fetching Yelp rating:", error);
    return NextResponse.json(
      { error: "Failed to fetch Yelp rating; Internal Server Error" },
      { status: 500 },
    );
  }
}
