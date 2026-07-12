import { OnboardingForm } from "@/components/onboarding-form";
import { PageShell } from "@/components/page-shell";
import { onboardingSections, settingsGroups } from "@/data/demo";

export default function SettingsPage() {
  return (
    <PageShell
      title="Settings"
      description="Configure your creator profile, pricing, creative preferences, and agent behavior."
    >
      <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
        <section className="soft-card rounded-[18px]">
          <p className="eyebrow">Creator Setup</p>
          <h2 className="mt-2 text-xl font-semibold text-black">Profile and business preferences</h2>
          <div className="mt-5 space-y-4">
            {onboardingSections.map((section) => (
              <div key={section.title} className="rounded-lg border border-black/10 bg-white p-4">
                <h3 className="text-sm font-semibold">{section.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <span key={item} className="pill px-3 py-1.5 text-[11px]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="soft-card rounded-[18px]">
          <OnboardingForm />
        </section>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-3">
        {settingsGroups.map((group) => (
          <section key={group.title} className="soft-card rounded-[18px]">
            <p className="eyebrow">Configure</p>
            <h2 className="mt-2 text-xl font-semibold text-black">{group.title}</h2>
            <div className="mt-6 space-y-3">
              {group.fields.map((field) => (
                <div key={field} className="rounded-lg border border-black/10 bg-white p-4">
                  <p className="text-sm font-medium">{field}</p>
                  <p className="mt-2 text-sm text-neutral-500">Editable later from creator preferences.</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
