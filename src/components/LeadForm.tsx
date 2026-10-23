import React, { useState } from "react";
import { CheckCircle2Icon, LoaderIcon } from "lucide-react";
import { recommenderSizes } from "../data/recommender";

type LeadFormProps = {mode: "demo" | "trial";};
type Status = "idle" | "submitting" | "success";

export function LeadForm({ mode }: LeadFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get("name") ?? "").trim()) next.name = "Enter your full name.";
    const email = String(data.get("email") ?? "");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid work email.";
    if (!String(data.get("company") ?? "").trim()) next.company = "Enter your company name.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 900);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-start bg-white p-8" role="status">
        <CheckCircle2Icon size={32} strokeWidth={1.75} className="text-success" aria-hidden="true" />
        <p className="mt-4 text-h2 text-neutral-900">{mode === "demo" ? "Thanks, we will be in touch" : "Check your inbox"}</p>
        <p className="mt-2 text-body1 text-neutral-600">
          {mode === "demo" ?
          "A Sqalible specialist will email you within one business day to schedule your demo." :
          "We have sent a link to activate your free trial workspace."}
        </p>
      </div>);

  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 bg-white p-6 sm:grid-cols-2 sm:p-8">
      <Input name="name" label="Full name" error={errors.name} autoComplete="name" />
      <Input name="email" label="Work email" type="email" error={errors.email} autoComplete="email" />
      <Input name="company" label="Company" error={errors.company} autoComplete="organization" />
      <label className="block">
        <span className="text-body2 font-medium text-neutral-900">Company size</span>
        <select name="size" className="mt-2 h-11 w-full border border-neutral-300 bg-white px-3 text-body1 text-neutral-900 outline-none focus:border-primary">
          {recommenderSizes.map((s) =>
          <option key={s}>{s}</option>
          )}
        </select>
      </label>
      {mode === "demo" &&
      <label className="block sm:col-span-2">
          <span className="text-body2 font-medium text-neutral-900">What would you like to see? (optional)</span>
          <textarea
          name="message"
          rows={4}
          className="mt-2 w-full border border-neutral-300 px-3 py-2 text-body1 text-neutral-900 outline-none focus:border-primary" />
        
        </label>
      }
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-caption text-neutral-500">
          By submitting you agree to our <a href="/privacy" className="underline">Privacy Policy</a>.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-body1 font-semibold text-white transition-colors duration-150 hover:bg-primary-hover disabled:bg-primary-disabled">
          
          {status === "submitting" && <LoaderIcon size={18} strokeWidth={1.75} className="animate-spin" aria-hidden="true" />}
          {mode === "demo" ? "Book a demo" : "Start free trial"}
        </button>
      </div>
    </form>);

}

function Input({
  name,
  label,
  type = "text",
  error,
  autoComplete






}: {name: string;label: string;type?: string;error?: string;autoComplete?: string;}) {
  return (
    <label className="block">
      <span className="text-body2 font-medium text-neutral-900">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`mt-2 h-11 w-full border px-3 text-body1 text-neutral-900 outline-none focus:border-primary ${
        error ? "border-error" : "border-neutral-300"}`
        } />
      
      {error &&
      <span id={`${name}-error`} className="mt-1 block text-caption text-error">
          {error}
        </span>
      }
    </label>);

}