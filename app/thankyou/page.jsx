'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaSignInAlt } from 'react-icons/fa';

export default function ThankYou() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full">
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <div className="mb-6">
                        <Image
                            src="/img/tt.png"
                            alt="Thank You"
                            width={100}
                            height={100}
                            className="mx-auto"
                        />
                    </div>
                    
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h1>
                        <p className="text-gray-600 leading-relaxed">
                            Thank you for signing up with <strong className="text-primary">LetsDiskuss</strong>!<br />
                            Check your email for activation. Please check the spam folder if it's not in your inbox.
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
                        >
                            <FaHome className="mr-2" />
                            Go to Home
                        </Link>
                        <Link
                            href="/signin"
                            className="flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            <FaSignInAlt className="mr-2" />
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}