import React from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { Button } from "../components/Button";

export function NotFound() {
  return (
    <PageLayout>
      <section className="bg-neutral-900 pb-24 pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <p className="pretitle text-primary-disabled">404</p>
          <h1 className="mt-3 text-[40px] font-bold leading-[48px] text-white">This page has moved or does not exist</h1>
          <p className="mt-4 max-w-xl text-body1 text-neutral-400">Use the menu above, or head back to the homepage.</p>
          <div className="mt-8">
            <Button href="/" className="!rounded-full">Back to home</Button>
          </div>
        </div>
      </section>
    </PageLayout>);

}