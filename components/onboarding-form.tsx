"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { z } from "zod";

const onboardingSchema = z.object({
  name: z.string().min(2),
  location: z.string().min(2),
  platforms: z.string().min(3),
  niches: z.string().min(3),
  formats: z.string().min(3),
  portfolio: z.string().url(),
  socials: z.string().min(3),
  experience: z.string().min(2),
  minimumPrice: z.string().min(2),
  preferredPrice: z.string().min(2),
  rawFootagePricing: z.string().min(2),
  paidUsagePricing: z.string().min(2),
  revisionPricing: z.string().min(2),
  videoStyle: z.string().min(2),
  tone: z.string().min(2),
  videoLength: z.string().min(2),
  editingStyle: z.string().min(2),
  onCamera: z.string().min(2),
  languages: z.string().min(2)
});

type OnboardingValues = z.infer<typeof onboardingSchema>;

export function OnboardingForm() {
  const [saved, setSaved] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<OnboardingValues>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      name: "Jamie Tan",
      location: "Singapore",
      platforms: "TikTok, Instagram, YouTube Shorts",
      niches: "Skincare, Beauty, Lifestyle",
      formats: "UGC Ads, Product Demo, Voiceover",
      portfolio: "https://jamietan.co/ugc",
      socials: "@jamietan, @jamietanbeauty",
      experience: "3 years",
      minimumPrice: "150",
      preferredPrice: "320",
      rawFootagePricing: "120",
      paidUsagePricing: "180 / 30 days",
      revisionPricing: "50 / revision",
      videoStyle: "Clean, close-up, trustworthy, soft luxury",
      tone: "Warm, articulate, commercially polished",
      videoLength: "20–35 seconds",
      editingStyle: "Fast hook, premium captions, natural pacing",
      onCamera: "Confident on-camera presence",
      languages: "English, Mandarin"
    }
  });

  const inputClass =
    "w-full rounded-[22px] border border-black/8 bg-white px-4 py-3 text-sm outline-none transition focus:border-black";

  return (
    <form onSubmit={handleSubmit(() => setSaved(true))} className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2">
        {[
          ["Name", "name"],
          ["Location", "location"],
          ["Preferred platforms", "platforms"],
          ["Content niches", "niches"],
          ["Content formats", "formats"],
          ["Portfolio URL", "portfolio"],
          ["Social media accounts", "socials"],
          ["Experience level", "experience"],
          ["Minimum project price", "minimumPrice"],
          ["Preferred project price", "preferredPrice"],
          ["Raw footage pricing", "rawFootagePricing"],
          ["Paid usage pricing", "paidUsagePricing"],
          ["Revision pricing", "revisionPricing"],
          ["Video style", "videoStyle"],
          ["Tone of voice", "tone"],
          ["Typical video length", "videoLength"],
          ["Preferred editing style", "editingStyle"],
          ["On-camera preference", "onCamera"],
          ["Preferred languages", "languages"]
        ].map(([label, key]) => (
          <div key={key} className={key === "videoStyle" || key === "tone" || key === "languages" ? "md:col-span-2" : ""}>
            <label className="mb-2 block text-sm font-medium">{label}</label>
            <input {...register(key as keyof OnboardingValues)} className={inputClass} />
            {errors[key as keyof OnboardingValues] ? (
              <p className="mt-2 text-sm text-[#e84133]">Please complete this field properly.</p>
            ) : null}
          </div>
        ))}
      </div>

      <button type="submit" className="button-accent gap-2">
        <Check className="h-4 w-4" />
        {saved ? "Preferences saved" : "Save onboarding profile"}
      </button>
    </form>
  );
}
