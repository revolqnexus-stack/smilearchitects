import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Link,
  Font,
} from "@react-pdf/renderer";
import path from "path";
import { CLINIC, DOCTORS, TREATMENTS, FACILITIES } from "../src/lib/site-config";
import { BRANCH_LIST } from "../src/lib/branches";
import { colors, fonts, layout } from "./theme";
import type { BrochureAssets } from "./prepare-assets";

const fontsDir = path.join(process.cwd(), "brochure", "fonts");

Font.register({
  family: fonts.display,
  fonts: [
    { src: path.join(fontsDir, "PlayfairDisplay-Regular.woff"), fontWeight: 400 },
    { src: path.join(fontsDir, "PlayfairDisplay-Italic.woff"), fontStyle: "italic", fontWeight: 400 },
  ],
});
Font.register({ family: fonts.body, src: path.join(fontsDir, "Inter.ttf") });
Font.register({
  family: fonts.utility,
  src: path.join(fontsDir, "IBMPlexMono-Medium.ttf"),
  fontWeight: 500,
});

/** Avoid hyphenation bundle that breaks under some Node ESM resolutions */
Font.registerHyphenationCallback((word) => [word]);

const featuredTreatments = TREATMENTS.filter((t) => t.featured);
const coreTeam = DOCTORS.filter((d) => !d.visiting);
const visiting = DOCTORS.filter((d) => d.visiting);
const principal = DOCTORS.find((d) => d.id === "dr-jeo-tom-charls");

const s = StyleSheet.create({
  page: {
    fontFamily: fonts.body,
    fontSize: 10,
    color: colors.cafeNoir,
    backgroundColor: colors.white,
  },
  pageHoney: { backgroundColor: colors.honeydew },
  pageVanilla: { backgroundColor: colors.vanilla },
  pageMoss: { backgroundColor: colors.darkMoss, color: colors.honeydew },
  margin: {
    paddingTop: layout.pageMarginInner,
    paddingBottom: layout.pageMarginInner + 16,
    paddingHorizontal: layout.pageMarginInner,
    flex: 1,
  },
  footer: {
    position: "absolute",
    bottom: 28,
    left: layout.pageMarginInner,
    right: layout.pageMarginInner,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  footerLabel: {
    fontFamily: fonts.utility,
    fontSize: 7,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    color: colors.moss,
  },
  footerLabelLight: { color: colors.teaGreen },
  pageNum: {
    fontFamily: fonts.utility,
    fontSize: 8,
    color: colors.olive,
  },
  pageNumLight: { color: colors.teaGreen },
  eyebrow: {
    fontFamily: fonts.utility,
    fontSize: 7.5,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: colors.olive,
    marginBottom: 10,
  },
  eyebrowLight: { color: colors.jonquil },
  displayLg: {
    fontFamily: fonts.display,
    fontSize: 36,
    lineHeight: 1.08,
    color: colors.darkMoss,
    fontWeight: 400,
  },
  displayMd: {
    fontFamily: fonts.display,
    fontSize: 26,
    lineHeight: 1.12,
    color: colors.darkMoss,
  },
  displayLight: { color: colors.honeydew },
  body: { fontSize: 10.5, lineHeight: 1.55, color: colors.cafeNoir },
  bodyLight: { color: colors.honeydew, opacity: 0.92 },
  rule: { height: 1, backgroundColor: colors.teaGreen, marginVertical: 16 },
  ruleLight: { backgroundColor: "rgba(236,245,226,0.35)" },
  twoCol: { flexDirection: "row", gap: layout.gutter, marginTop: 8 },
  col: { flex: 1 },
  serviceRow: {
    borderTopWidth: 1,
    borderTopColor: colors.teaGreen,
    paddingTop: 10,
    paddingBottom: 10,
  },
  serviceTitle: {
    fontFamily: fonts.display,
    fontSize: 13,
    color: colors.darkMoss,
    marginBottom: 4,
  },
  caption: { fontSize: 8.5, color: colors.olive, lineHeight: 1.45 },
  imageFull: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: "cover",
  },
  coverOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "42%",
    backgroundColor: "rgba(37, 78, 6, 0.88)",
  },
  doctorName: {
    fontFamily: fonts.display,
    fontSize: 16,
    color: colors.darkMoss,
    marginBottom: 2,
  },
  doctorMeta: {
    fontFamily: fonts.utility,
    fontSize: 7,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: colors.olive,
    marginBottom: 6,
  },
});

function Footer({ light = false }: { light?: boolean }) {
  return (
    <View style={s.footer} fixed>
      <Text style={[s.footerLabel, light && s.footerLabelLight]}>Smile Architects</Text>
      <Text
        style={[s.pageNum, light && s.pageNumLight]}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
      />
    </View>
  );
}

const eyebrowLight = StyleSheet.create({ light: { color: colors.jonquil } });

function Eyebrow({ children, light }: { children: string; light?: boolean }) {
  return <Text style={[s.eyebrow, light && eyebrowLight.light]}>{children}</Text>;
}

export function BrochureDocument({ assets }: { assets: BrochureAssets }) {
  const coverImg = assets.cover;
  const logo = assets.logo;

  return (
    <Document
      title={`${CLINIC.name} — Clinic Brochure`}
      author={CLINIC.name}
      subject={CLINIC.tagline}
      creator="Smile Architects Website"
      language="en"
    >
      {/* 1 — Cover */}
      <Page size="A4" style={s.page}>
        {coverImg ? <Image src={coverImg} style={s.imageFull} /> : null}
        <View style={s.coverOverlay} />
        <View style={{ position: "absolute", top: 48, left: 56 }}>
          {logo ? (
            <Image src={logo} style={{ width: 72, height: 72, objectFit: "contain" }} />
          ) : null}
        </View>
        <View style={{ position: "absolute", left: 56, right: 56, bottom: 72 }}>
          <Eyebrow light>Multispeciality Dental Clinic</Eyebrow>
          <Text style={[s.displayLg, { color: colors.honeydew, fontSize: 40 }]}>
            {CLINIC.name}
          </Text>
          <Text style={{ fontFamily: fonts.display, fontSize: 14, color: colors.jonquil, marginTop: 8 }}>
            {CLINIC.tagline}
          </Text>
          <Text style={{ fontSize: 9, color: colors.teaGreen, marginTop: 14, letterSpacing: 0.5 }}>
            Pala, Kottayam · Thrissur, Kerala
          </Text>
        </View>
      </Page>

      {/* 2 — Introduction */}
      <Page size="A4" style={[s.page, s.pageHoney]}>
        <View style={s.margin}>
          <Eyebrow>Introduction</Eyebrow>
          <Text style={s.displayMd}>Patient-first dentistry in Pala</Text>
          <View style={s.rule} />
          <View style={s.twoCol}>
            <View style={[s.col, { paddingRight: 8 }]}>
              <Text style={s.body}>
                Smile Architects is a multispeciality dental clinic and advanced orthodontic centre on
                Kattakkayam Road, Pala, Kottayam, Kerala — near Federal Bank in Pala Town.
              </Text>
              <Text style={[s.body, { marginTop: 10 }]}>
                The clinic provides comprehensive dental care for patients in Pala and the surrounding
                Meenachil region, serves Kottayam District, and operates a Thrissur branch in Punkunnam.
                General dentistry is combined with orthodontics and cosmetic care under one roof.
              </Text>
              <Text style={[s.body, { marginTop: 10 }]}>
                Led by Dr. Jeo Tom Charls, MDS Orthodontics — registered with the Kerala State Dental
                Council — the clinical team places patient comfort and accurate diagnosis at the centre of
                every consultation.
              </Text>
            </View>
            <View style={s.col}>
              {assets.introCare ? (
                <Image
                  src={assets.introCare}
                  style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 2 }}
                />
              ) : null}
              <Text style={[s.caption, { marginTop: 8 }]}>
                Preventive care, check-ups and routine dental treatment — Smile Architects, Pala.
              </Text>
            </View>
          </View>
        </View>
        <Footer />
      </Page>

      {/* 3 — Locations */}
      <Page size="A4" style={s.page}>
        <View style={s.margin}>
          <Eyebrow>Locations</Eyebrow>
          <Text style={s.displayMd}>Two clinics. One team.</Text>
          <View style={s.rule} />
          {BRANCH_LIST.map((branch, i) => (
            <View key={branch.id} style={{ marginBottom: i === 0 ? 22 : 0 }}>
              <Text style={s.doctorMeta}>{branch.isPrimary ? "Main centre" : "Branch"}</Text>
              <Text style={[s.displayMd, { fontSize: 20 }]}>
                {branch.label} — {branch.locationLine}
              </Text>
              <Text style={[s.body, { marginTop: 8, maxWidth: 420 }]}>
                {branch.address.full}
              </Text>
              <Text style={[s.caption, { marginTop: 4 }]}>{branch.address.landmark}</Text>
              {branch.id === "pala" ? (
                <Text style={[s.caption, { marginTop: 6 }]}>
                  Ample car parking · Mon–Sat 9:30 AM – 8:00 PM · Sunday closed
                </Text>
              ) : null}
            </View>
          ))}
          <View style={{ marginTop: 24, padding: 16, backgroundColor: colors.honeydew }}>
            <Text style={s.doctorMeta}>Contact</Text>
            <Text style={s.body}>
              Phone: {CLINIC.contact.phoneDisplay} · Email: {CLINIC.contact.email}
            </Text>
            <Link src={CLINIC.contact.website} style={{ fontSize: 10, color: colors.darkMoss, marginTop: 6 }}>
              {CLINIC.contact.website}
            </Link>
          </View>
        </View>
        <Footer />
      </Page>

      {/* 4 — Principal orthodontist */}
      <Page size="A4" style={[s.page, s.pageVanilla]}>
        <View style={s.margin}>
          <Eyebrow>Clinical leadership</Eyebrow>
          <Text style={s.displayMd}>Your orthodontic specialist</Text>
          <View style={s.rule} />
          <View style={s.twoCol}>
            <View style={{ width: 160 }}>
              {assets.drJeo ? (
                <Image src={assets.drJeo} style={{ width: 160, height: 200, objectFit: "cover" }} />
              ) : null}
              <Text style={[s.caption, { marginTop: 8 }]}>{principal?.name}</Text>
              <Text style={s.caption}>{principal?.qualifications} — {principal?.specialty}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.body}>{principal?.bio}</Text>
              <Text style={[s.doctorMeta, { marginTop: 14 }]}>Certifications & training</Text>
              {(principal?.training ?? []).slice(0, 6).map((t) => (
                <Text key={t} style={[s.caption, { marginBottom: 3 }]}>
                  · {t}
                </Text>
              ))}
            </View>
          </View>
        </View>
        <Footer />
      </Page>

      {/* 5 — Core & visiting team */}
      <Page size="A4" style={s.page}>
        <View style={s.margin}>
          <Eyebrow>Our doctors</Eyebrow>
          <Text style={s.displayMd}>Multispeciality team</Text>
          <View style={s.rule} />
          {coreTeam.map((d) => (
            <View key={d.id} style={{ marginBottom: 14 }}>
              <Text style={s.doctorName}>{d.name}</Text>
              <Text style={s.doctorMeta}>
                {d.qualifications} · {d.specialty}
              </Text>
              <Text style={s.body}>{d.bio}</Text>
            </View>
          ))}
          <Text style={[s.doctorMeta, { marginTop: 8, marginBottom: 10 }]}>Visiting consultants</Text>
          {visiting.map((d) => (
            <View key={d.id} style={{ marginBottom: 10 }}>
              <Text style={[s.doctorName, { fontSize: 13 }]}>{d.name}</Text>
              <Text style={s.caption}>
                {d.qualifications} — {d.specialty}
              </Text>
            </View>
          ))}
          <Text style={[s.caption, { marginTop: 8 }]}>
            Smile Architects is led by Dr. Jeo Tom Charls (MDS – Orthodontics and Dentofacial Orthopaedics),
            supported by Dr. Jintu Joan Jose and Dr. Ann Tresa T. Srambickal (both BDS – Aesthetic & General
            Dentistry).
          </Text>
        </View>
        <Footer />
      </Page>

      {/* 6 — Services I */}
      <Page size="A4" style={s.page}>
        <View style={s.margin}>
          <Eyebrow>Treatments</Eyebrow>
          <Text style={s.displayMd}>Comprehensive care</Text>
          <Text style={[s.body, { marginTop: 8, maxWidth: 400 }]}>
            Multispeciality services at Smile Architects, Pala — descriptions from our clinical offerings.
          </Text>
          <View style={{ marginTop: 12 }}>
            {featuredTreatments.slice(0, 5).map((t) => (
              <View key={t.id} style={s.serviceRow}>
                <Text style={s.serviceTitle}>{t.title}</Text>
                <Text style={s.caption}>{t.shortDescription}</Text>
              </View>
            ))}
          </View>
        </View>
        <Footer />
      </Page>

      {/* 7 — Services II / Orthodontics */}
      <Page size="A4" style={[s.page, s.pageHoney]}>
        <View style={s.margin}>
          <Eyebrow>Orthodontics & smile design</Eyebrow>
          <Text style={s.displayMd}>Advanced orthodontic centre</Text>
          <View style={s.rule} />
          {featuredTreatments.slice(5).map((t) => (
            <View key={t.id} style={s.serviceRow}>
              <Text style={s.serviceTitle}>{t.title}</Text>
              <Text style={s.caption}>{t.shortDescription}</Text>
            </View>
          ))}
          <Text style={[s.doctorMeta, { marginTop: 16 }]}>Areas of expertise — Dr. Jeo Tom Charls</Text>
          {(principal?.areasOfExpertise ?? []).slice(0, 8).map((a) => (
            <Text key={a} style={[s.caption, { marginBottom: 2 }]}>
              · {a}
            </Text>
          ))}
        </View>
        <Footer />
      </Page>

      {/* 8 — Facilities */}
      <Page size="A4" style={s.page}>
        <View style={s.margin}>
          <Eyebrow>The clinic</Eyebrow>
          <Text style={s.displayMd}>What to expect</Text>
          <View style={s.rule} />
          <View style={s.twoCol}>
            <View style={s.col}>
              {FACILITIES.map((f) => (
                <View key={f.name} style={{ marginBottom: 14 }}>
                  <Text style={[s.serviceTitle, { fontSize: 12 }]}>{f.name}</Text>
                  <Text style={s.caption}>{f.description}</Text>
                </View>
              ))}
            </View>
            <View style={s.col}>
              {assets.clinic1 ? (
                <Image
                  src={assets.clinic1}
                  style={{ width: "100%", height: 180, objectFit: "cover", marginBottom: 10 }}
                />
              ) : null}
              {assets.clinic2 ? (
                <Image src={assets.clinic2} style={{ width: "100%", height: 180, objectFit: "cover" }} />
              ) : null}
            </View>
          </View>
          <Text style={[s.caption, { marginTop: 12 }]}>{CLINIC.hours.note}</Text>
        </View>
        <Footer />
      </Page>

      {/* 9 — Gallery spread */}
      <Page size="A4" style={s.page}>
        {assets.clinic3 ? (
          <Image src={assets.clinic3} style={{ position: "absolute", top: 0, left: 0, width: "58%", height: "100%", objectFit: "cover" }} />
        ) : null}
        <View style={{ position: "absolute", top: 0, right: 0, width: "42%", height: "100%", backgroundColor: colors.darkMoss, padding: 40, justifyContent: "center" }}>
          <Eyebrow light>Thrissur branch</Eyebrow>
          <Text style={[s.displayMd, s.displayLight, { fontSize: 22 }]}>
            Modern spaces for considered care
          </Text>
          <Text style={[s.bodyLight, { marginTop: 12, fontSize: 9 }]}>
            Smile Architects, 2nd Floor, Ephphatha Medical Complex, Opp. St. Joseph&apos;s Church, Punkunnam,
            Thrissur — same team and phone as our Pala centre.
          </Text>
        </View>
        <Footer light />
      </Page>

      {/* 10 — Gallery grid */}
      <Page size="A4" style={[s.page, s.pageHoney]}>
        <View style={[s.margin, { paddingBottom: 40 }]}>
          <Eyebrow>Inside the clinic</Eyebrow>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
            {(["clinic4", "clinic5", "clinic6", "thrissurWa"] as const).map((key) =>
              assets[key] ? (
                <Image
                  key={key}
                  src={assets[key]}
                  style={{ width: "48%", height: 140, objectFit: "cover" }}
                />
              ) : null
            )}
          </View>
        </View>
        <Footer />
      </Page>

      {/* 11 — Visit / booking */}
      <Page size="A4" style={[s.page, s.pageMoss]}>
        <View style={[s.margin, { justifyContent: "center" }]}>
          <Eyebrow light>Visit us</Eyebrow>
          <Text style={[s.displayMd, s.displayLight, { fontSize: 32 }]}>Book your appointment</Text>
          <View style={[s.rule, s.ruleLight, { marginVertical: 20 }]} />
          <Text style={[s.bodyLight, { fontSize: 11 }]}>
            {CLINIC.hours.weekdays.label}: {CLINIC.hours.weekdays.open} – {CLINIC.hours.weekdays.close}
          </Text>
          <Text style={[s.bodyLight, { fontSize: 11, marginTop: 4 }]}>
            {CLINIC.hours.sunday.label}: {CLINIC.hours.sunday.status}
          </Text>
          <Text style={[s.bodyLight, { marginTop: 16, fontSize: 12 }]}>
            Call {CLINIC.contact.phoneDisplay} · WhatsApp · Online form at {CLINIC.contact.website}
          </Text>
          <Link src={CLINIC.social.whatsapp} style={{ color: colors.jonquil, fontSize: 10, marginTop: 12 }}>
            WhatsApp: wa.me/919446999333
          </Link>
          <Link src={`${CLINIC.contact.website}/book-appointment`} style={{ color: colors.jonquil, fontSize: 10, marginTop: 6 }}>
            Book online →
          </Link>
        </View>
        <Footer light />
      </Page>

      {/* 12 — Back cover */}
      <Page size="A4" style={s.page}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 56 }}>
          {logo ? (
            <Image src={logo} style={{ width: 100, height: 100, objectFit: "contain", marginBottom: 24 }} />
          ) : null}
          <Text style={[s.displayMd, { textAlign: "center" }]}>{CLINIC.name}</Text>
          <Text style={[s.caption, { textAlign: "center", marginTop: 8, maxWidth: 320 }]}>
            {CLINIC.address.full}
          </Text>
          <Text style={[s.caption, { textAlign: "center", marginTop: 16 }]}>
            {CLINIC.contact.phoneDisplay} · {CLINIC.contact.email}
          </Text>
          <Link src={CLINIC.contact.website} style={{ fontSize: 10, color: colors.darkMoss, marginTop: 12 }}>
            {CLINIC.contact.website}
          </Link>
        </View>
      </Page>
    </Document>
  );
}
