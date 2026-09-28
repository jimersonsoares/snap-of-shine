# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Adult women and men looking for facial and body aesthetic care who want natural-looking results and a safe, attentive experience. They arrive on the site to decide whether they trust the clinic enough to book an initial assessment (avaliação).

The site copy is currently written only in the feminine ("Bem-vinda", "Está pronta"). Because the audience is confirmed as mixed, copy must use gender-neutral or inclusive phrasing.

## Product Purpose

A one-page institutional and conversion site for **LeVive – Beleza Natural**, an aesthetic clinic in Brazil. It presents the clinic, its treatments, and its way of caring for clients. Success means a visitor books an assessment through WhatsApp.

## Positioning

- **Personalized care:** every client gets an individual assessment, a protocol designed for them, and follow-up over time. The site describes this as a four-step journey: Avaliação → Planejamento → Tratamento → Acompanhamento.
- **The responsible professional:** the training and reputation of the founder / technical lead is a main reason to choose LeVive. Their name, credentials and story are still pending (see Evidence on Hand).

Technology and dermocosmetics support the care but are not the differentiator.

## Operating Context

- Booking is done entirely through WhatsApp (`WHATSAPP_URL` in `src/components/levive/data.ts`). There is no online scheduling, payment, or client login.
- Instagram is a secondary channel for proof and follow-up.
- Visitors mostly arrive on mobile, from Instagram or search. The mobile layout has a fixed "Agendar avaliação" bar.
- The project was built and is synced through Lovable. Pushes to `main` sync back to Lovable, so published history must not be rewritten.

## Capabilities and Constraints

- Stack: TanStack Start (React 19, Vite 8, Tailwind 4, shadcn/Radix). There is a single route, `src/routes/index.tsx`, built from section components in `src/components/levive/`.
- Treatments section (`src/components/levive/Treatments.tsx`): one filter button per group, with no "Todos" option and Facial selected by default. The selected group shows one card per treatment, in the original card format (photo, eyebrow with the group name, serif title, short description, "Saiba mais" linking to WhatsApp with the treatment name). The data is `treatmentGroups` in `data.ts`, holding the real list from `lista de tratamentos.jpeg` (31 treatments in 6 groups). The per-treatment photos are provisional reuses of the stand-in images. The short descriptions are general, non-promissory explanations written at the owner's request, and the clinic must review them before publishing.
- Language: Brazilian Portuguese (`<html lang="pt-BR">`).
- Health-advertising care: results vary per person, and the site must keep its disclaimer that it does not replace a professional assessment. Before/after images may only be published with client consent and within professional-council rules.
- Undecided: the clinic's city and address; the responsible professional's name, council registration, and credentials.

## Brand Commitments

- Name: **LeVive – Beleza Natural**. Tagline: "Beleza & Estética com alma".
- Signature line: "Seu cuidado. Sua beleza. Sua essência."
- Voice: warm, welcoming, and reassuring; technically credible without jargon; never promises miraculous or guaranteed results.
- Logo: original in `Logo.png` (1665×945, transparent gold). Resized copies ship locally: `src/assets/levive-logo-sm.png` (400 px, header/footer) and `src/assets/levive-logo.png` (720 px, watermarks).

## Evidence on Hand

- **Received:** the real treatment list (`lista de tratamentos.jpeg`) and the logo (`Logo.png`).
- **Confirmed, still to be supplied:** real client testimonials (with authorization), and real contact data (WhatsApp, address, opening hours, Instagram handle).
- **Not available yet:** real photos of the clinic, the team or the founder, and real before/after images. The current images in `src/assets/` are stand-ins. The results section must stay an explicit placeholder until real, consented photos exist.
- **Must not be fabricated:** testimonials, client names, results, credentials, awards, and numbers (clients served, years of experience).

## Product Principles

1. **Trust before conversion.** Every section should lower the barrier to booking an assessment by showing care, safety and competence rather than pressure.
2. **The person is the protocol.** Communicate individual assessment and follow-up over a catalog of procedures.
3. **The professional is the proof.** Give the responsible professional a prominent, truthful presence once their details exist.
4. **Natural, honest results.** Never exaggerate outcomes. Keep the disclaimers visible.
5. **Welcoming to everyone.** Use inclusive language for a mixed audience.
