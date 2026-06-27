"use client"
import DashboardHeading from '@/components/DashboardHeading';
import ReadingBookCard from '@/components/ReadingBookCard';
import { serverFetch } from '@/lib/api/server';
import { authClient } from '@/lib/auth-client';

import React, { useEffect, useState } from 'react';

const MyReadingList = () => {
      
    const { data: session } = authClient.useSession();
    const [readingList, setReadingList] = useState([]);
    console.log(readingList)

    useEffect(() => {
        if (!session?.user?.email) return;

        const loadReadingList = async () => {
            const data = await serverFetch(`/api/user/reading-list/${session.user.email}`
            );

            setReadingList(data);
        };

        loadReadingList();
    }, [session]);

    
    return (
        <div>
            <DashboardHeading title={"MyReadingList"} description={"Dashboard User MyReadingList"}></DashboardHeading>
           
          {readingList.length === 0 ? (
    <p className="text-xl text-center col-span-full">
      No Reading Book Available
    </p>
  ) : (
    readingList.map((book) => (
      <ReadingBookCard
        key={book._id}
        book={book}
      />
    ))
  )}
        </div>
    );
};

export default MyReadingList;