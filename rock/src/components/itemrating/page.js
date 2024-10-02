import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const ProductReviews = () => {
  // Hardcoded reviews and ratings
  const reviews = [
    {
      _id: 1,
      user: 'User1',
      rating: 1,
      review: 'One of the worst sellers found on Daraz. I ordered extreme pro 32GB DSLR memory card with 140mb/s speed but what I got was up to 100mb/s.',
      date: '2023-05-16',
      imageUrls: ['/images/review-1-1.jpg', '/images/review-1-2.jpg'],
    },
    {
      _id: 2,
      user: 'User2',
      rating: 5,
      review: 'Best quality and good packaging, works very fast.',
      date: '2023-05-24',
      imageUrls: ['/images/review-2-1.jpg'],
    },    {
      _id: 3,
      user: 'User3',
      rating: 4,
      review: 'The product is good overall, but delivery took longer than expected. Satisfied with the performance though.',
      date: '2023-06-05',
      imageUrls: ['/images/review-3-1.jpg'],
    },
    {
      _id: 4,
      user: 'User4',
      rating: 3,
      review: 'Average quality product. Not bad for the price, but could have been better.',
      date: '2023-06-10',
      imageUrls: ['/images/review-4-1.jpg'],
    }
  ];

  // Calculate the average rating
  const avgRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="w-full p-5 bg-white">
      {/* Average Rating */}
      <div className="flex items-center mb-4">
        <h3 className="text-2xl font-bold">{avgRating.toFixed(1)}/5</h3>
        <div className="flex ml-2">
          {[...Array(5)].map((_, i) => (
            <span key={i}>
              {i < avgRating ? (
                <FaStar className="text-yellow-500" />
              ) : (
                <FaRegStar className="text-gray-300" />
              )}
            </span>
          ))}
        </div>
        <span className="ml-2 text-sm">({reviews.length} Ratings)</span>
      </div>

      {/* Star breakdown */}
      <div className="w-64">
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star} className="flex items-center">
            <span>{star} star</span>
            <div className="w-32 bg-gray-300 ml-2">
              <div
                className="bg-yellow-500 h-2"
                style={{
                  width: `${
                    (reviews.filter((r) => r.rating === star).length / reviews.length) * 100
                  }%`,
                }}
              />
            </div>
            <span className="ml-2">
              {reviews.filter((r) => r.rating === star).length}
            </span>
          </div>
        ))}
      </div>

      {/* Reviews */}
      <div className="mt-5">
        <h4 className="text-lg font-bold">Product Reviews</h4>
        {reviews.map((review) => (
          <div key={review._id} className="border p-3 mt-3">
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {i < review.rating ? (
                      <FaStar className="text-yellow-500" />
                    ) : (
                      <FaRegStar className="text-gray-300" />
                    )}
                  </span>
                ))}
              </div>
              <span className="ml-2 text-sm">{new Date(review.date).toDateString()}</span>
            </div>
            <p className="mt-2">{review.review}</p>
            {review.imageUrls && (
              <div className="flex mt-2 gap-2">
                {review.imageUrls.map((url, index) => (
                  <img key={index} src={url} alt={`review-img-${index}`} className="w-20 h-20" />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;
