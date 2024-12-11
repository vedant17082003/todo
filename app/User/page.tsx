"use client";
import React, { useEffect, useState } from 'react';
import { CardDemo } from '@/app/component/UserCard';
import { useRouter } from 'next/navigation';
import { LampDemo } from '../component/Lamp';
import Loading from '@/app/component/loading'; // Import your Loading component

type UserType = {
    username: string;
    name: string;
}

const User = () => {
    const router = useRouter();
    const [users, setUsers] = useState<UserType[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        const res = await fetch(`http://localhost:8000/users?_page=${page}&_limit=10`); // Limit users fetched per page
        const data = await res.json();
        setUsers((prev) => [...prev, ...data]);
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, [page]);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            setLoading(true);
            setPage((prev) => prev + 1); // Increase page number for the next fetch
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (username: string) => {
        router.push(`/User/${username}/todos`);
    };

    return (
        <div>
            <div>
                <LampDemo />
            </div>
            <div className="flex flex-wrap justify-center items-center">
                {users.map((user) => (
                    <div key={user.username} className="m-4 flex flex-col items-center">
                        <CardDemo
                            username={user.username}
                            name={user.name}
                        />
                        <div className="mt-2">
                            <button
                                onClick={() => handleClick(user.username)}
                                className="inline-block px-6 py-3 text-white bg-orange-600 hover:bg-orange-500 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                Todos
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {loading && <Loading />} {/* Display loading indicator */}
        </div>
    );
};

export default User;
