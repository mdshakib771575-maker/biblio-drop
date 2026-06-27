"use client"
import DashboardHeading from '@/components/DashboardHeading';
import ReviewCard from '@/components/ReviewCard';
import { serverFetch } from '@/lib/api/server';
import { authClient } from '@/lib/auth-client';
import { Chip, Table } from '@heroui/react';
import React, { useEffect, useState } from 'react';

const MyReviews = () => {
    const { data: session } = authClient.useSession();

const [reviews, setReviews] = useState([]);

useEffect(() => {
  if (!session?.user?.email) return;

  const loadReviews = async () => {
    const data = await serverFetch(
      `/api/user/reviews/${session.user.email}`
    );

    setReviews(data);
  };

  loadReviews();
}, [session]);

console.log(reviews)
     
    return (
        <div>
                <DashboardHeading title={"MyReviews"} description={"Dashboard User MyReviews"}></DashboardHeading>
             
             {reviews.length === 0 ? (
  <p className="text-center text-xl">
    No Reviews Found
  </p>
) : (
  reviews.map((review) => (
    <ReviewCard
      key={review._id}
      review={review}
    />
  ))
)}
        </div>
    );
};

export default MyReviews;