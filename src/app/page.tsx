import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import PaymentCard from '@/components/PaymentCard';
import CategoryTabs from '@/components/CategoryTabs';
import TimeFilter from '@/components/TimeFilter';
import ProjectList from '@/components/ProjectList';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <PaymentCard title="Payment" />
          <PaymentCard title="Payment" />
          <PaymentCard title="Payment" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <CategoryTabs />
          <TimeFilter />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProjectList title="Most Popular" />
          <ProjectList title="Review to Earn" />
        </div>
      </main>
      <Footer />
    </div>
  );
}