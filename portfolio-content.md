# Portfolio Content Draft
> avecenabasuni.my.id | Content v2

---

## Page Structure

```
Hero (hook + micro-CTA)
   ↓
Stats Bar (4 stats dengan micro-context)
   ↓
Case Studies x4 (progressive disclosure, case study 1 default open)
   ↓
About Me
   ↓
Writing (Medium articles)
   ↓
Currently Working On
   ↓
Experience (ringkas, impact-focused)
   ↓
Certifications (primary prominent, sisanya collapsed)
   ↓
Technical Skills (grouped by domain)
   ↓
Vault (minimum 3 entries, deep-dive audience)
   ↓
Education
   ↓
CTA (Email primary, CV secondary, LinkedIn tertiary)
```

**Sticky element:** Floating contact button visible di semua scroll position.

**Catatan implementasi:**
Structure ini belum proven untuk dua audience sekaligus (hiring manager vs komunitas teknikal). Launch dulu, pasang analytics heatmap atau scroll depth, lalu iterate berdasarkan data nyata. Dua hal yang paling mungkin perlu diubah setelah data masuk: posisi stats bar (mungkin perlu turun) dan posisi Experience (mungkin perlu naik).

---

## Hero Section

**I started building affordable medical devices so more people could access care. Now I build reliable systems so more people can stay online.**

Electrical engineer turned SRE. I've gone from debugging microcontrollers in C to instrumenting distributed systems for enterprise clients across AWS, GCP, and on-prem. Somewhere along the way, I became the person teams call when alerts are noisy, dashboards are useless, and nobody knows what's actually broken.

Not just observability. Reliability that's actually lived in.

**Micro-CTA:**
- Primary: `Get in touch`
- Secondary: `See my work`

---

## About Me

I'm Avecena, an Electrical Engineer from Universitas Indonesia who somehow ended up obsessed with making cloud systems reliable and observable. The transition from debugging microcontrollers to instrumenting distributed systems felt natural. The same instinct that makes you add a serial monitor to an Arduino makes you instrument an API endpoint.

Outside of work I'm lifting at the gym, on the minisoccer or football pitch on weekends, and occasionally getting humbled by Dota 2. I think being a team sport person shapes how I work too. Observability is fundamentally a team problem. It only works if everyone on the team can see what's happening, not just the person who built the dashboard.

Right now I'm looking for an SRE role where I can go deep on reliability engineering, incident response, and building observability that engineers actually use. Jakarta based. Open to remote and relocation.

---

## Case Studies

**Section intro:**
> Here's what the work actually looks like.

---

### 1. Full Stack Observability Implementation
> Default open sebagai featured case study

**The Problem**

Most teams I work with aren't flying blind by choice. They're running three different monitoring tools that don't talk to each other, relying on open-source stacks nobody has time to maintain, and finding out about errors from their users before their dashboards do. Root cause analysis turns into a war room guessing game.

This is the pattern I see repeatedly across fintech, manufacturing, healthcare, and ecommerce clients.

**What I Did**

I consolidated their observability stack end-to-end with New Relic, replacing fragmented tools with a single unified platform. I instrumented applications and infrastructure, designed dashboards tailored to each team's actual workflow, and tuned alerts to cut noise without missing what matters. Then I ran training sessions so engineers could use what we built, not just look at it.

The goal was simple: when something breaks at 2am, the right person gets paged with enough context to act immediately.

**The Result**

MTTD and MTTR improved noticeably across engagements. Teams that used to jump between more than three disconnected monitoring tools can now trace root cause from a single platform. Recurring incidents started getting caught before users noticed, reducing reactive support load in the process.

---

### 2. Full Network Observability in Docker
> Collapsed by default

**The Problem**

Most tutorials for New Relic Network Performance Monitoring assume you have physical network devices sitting around. Routers, switches, something that speaks SNMP. Most engineers don't. So they skip NPM entirely, or never get hands-on experience before they need it in production.

**What I Built**

A fully containerized NPM demo environment using Docker. Two custom simulator images that generate real SNMP traps and syslog traffic without any physical hardware. Everything needed to explore New Relic NPM end-to-end, on a laptop, without touching a single physical device.

**Why It Matters**

Network observability is one of the hardest gaps to fill in a monitoring stack because the learning curve starts before you even touch the tool. This project removes that barrier. Clone the repo, spin up the containers, and within a few minutes you have realistic SNMP and syslog traffic flowing into New Relic, ready to explore.

---

### 3. New Relic Observability Toolkit
> Collapsed by default · Open Source

**The Problem**

Setting up observability from scratch is repetitive work. Every new environment needs the same alerts, the same dashboards, the same notification channels, built manually, configured inconsistently, and documented poorly. Teams end up with alert policies that nobody trusts and war room dashboards that mean something different to every engineer who built them.

**What I Built**

A production-ready Terraform toolkit that deploys a complete New Relic monitoring stack in a single `terraform apply`. Four modules, wired together out of the box: Golden Signals alerts with SRE-grounded thresholds, multi-channel notifications in SBAR format, external availability monitoring via Synthetics, and pre-built dashboards for NOC war rooms and engineer deep-dives.

The defaults are opinionated because they have to be. Error rate filters HTTP 5xx only because a 404 is not an incident. Notifications follow SBAR format because actionable alerts are a core principle from the Google SRE Workbook. Every decision is documented so the next engineer who touches it understands not just what was built, but why.

**Why It Matters**

Observability should be version-controlled, reviewable, and repeatable. This toolkit gives any SRE team a defensible, production-grade New Relic stack on day one, without spending weeks rediscovering the same configuration pitfalls everyone else already solved.

---

### 4. New Relic Squid Proxy
> Collapsed by default · Open Source · 1 star

**The Problem**

Enterprise environments don't always have direct internet access. Servers sit behind corporate firewalls, traffic goes through proxy chains, and getting a New Relic agent connected becomes a manual, distro-specific process that derails POC timelines before the client sees a single metric.

Every new client with network restrictions meant starting from scratch.

**What I Built**

An automated Squid Proxy installer that handles the entire lifecycle in a single command. One-liner install, multi-distro Linux support across nine distributions, optional SSL bump for TLS interception, Basic Auth, corporate proxy chaining, and a built-in verification engine that tests connectivity to all New Relic endpoints before handoff.

It also ships with a New Relic dashboard out of the box, so the proxy itself is observable from day one.

**Why It Matters**

A stalled POC is a lost deal. Every hour a client spends waiting for connectivity issues to be resolved is an hour they are not seeing value from the product. This tool turns a recurring manual bottleneck into a single command that any engineer can run, on any Linux distro, in any network environment.

---

## Writing Section

**Section intro:**
> I write about what I build. If something took me a while to figure out, I document it.

Articles (from Medium):
1. Send New Relic Alerts to Telegram (Pure Webhook, Zero Middleware)
2. A Practical Guide to Modern Application Observability
3. Perlinuxan Duniawi

---

## Currently Working On

> Always building something. Here's what's in progress right now.

- **New Relic NPM Showcase**: Docker-based network observability demo, article in progress for Medium
- **chatbot-nutanix**: RAG chatbot on Nutanix Kubernetes Platform using PostgreSQL/pgvector and Qwen
- **observability-as-code**: Terraform toolkit for production-grade New Relic stack, actively maintained and open source

---

## Vault

---

### Why ktranslate Keeps Dying on Docker

You spin up ktranslate for SNMP discovery, the container starts, then immediately dies. Logs say permission denied on the config directory. You're bind-mounting a local folder and the container's internal user (UID 1000) doesn't match your host UID.

Adding `--user $(id -u):$(id -g)` to your Docker run command makes the process run as your host user. Container stays up.

Bind mounts don't inherit host permissions automatically. Always check what user the process runs as inside the container before mounting anything.

---

### Where Did My SNMP Traps Go?

You configure ktranslate to receive SNMP traps and expect them to show up as Log events in New Relic. They don't. You query `FROM Log WHERE logtype = 'ktranslate-snmp'` and get nothing.

ktranslate sends different telemetry types to different event tables. Flows, traps, and syslog each have their own home in NRDB.

SNMP traps use a completely different event type. Query `FROM KSnmpTrap` instead. The data was always there, just not where you were looking.

---

### Two Out of Three Nodes Showing in New Relic on OpenShift

You install the New Relic Kubernetes integration on Red Hat OpenShift, everything deploys cleanly, but only 2 out of 3 nodes show up in the cluster explorer. No obvious errors. The DaemonSet looks healthy.

OpenShift adds a security layer on top of standard Kubernetes RBAC called Security Context Constraints. The New Relic agent needs privileged access to scrape deep system metrics from each node's `/proc` and `/sys`. Without it, the agent runs but can't collect what it needs from the host.

One command sorts it out: `oc adm policy add-scc-to-user privileged system:serviceaccount:<YOUR_NAMESPACE>:newrelic`. After that, the missing node appears.

OpenShift is not just Kubernetes with a different name. If you're migrating from GKE or EKS, assume SCC will bite you at least once.

---

## Education

**Bachelor of Engineering in Electrical Engineering**
Universitas Indonesia · Aug 2019 – Jan 2023
GPA 3.87 / 4.00, Cum Laude

Specialization in Electronics Engineering. Relevant coursework: Artificial Intelligence, Control Systems, Microcontroller Programming, Network Communication, Embedded Systems.

---

## CTA Section

**Ready to talk?**

I'm currently open to SRE and cloud infrastructure roles. If your team is dealing with alert noise, slow root cause analysis, or monitoring that nobody trusts, I'd like to hear about it.

No commitment. Just a conversation.

`Email me` · `Download CV` · `LinkedIn`

---

## Implementation Notes

- Stats bar (20+ certs, 3+ years, dll) diposisikan setelah certifications section, bukan langsung setelah hero
- Vault section hidden dari public sampai minimal 3 entries siap
- Case study 1 default open, sisanya collapsed
- Micro-CTA di hero wajib ada sebelum launch
- Em-dash hanya boleh digunakan untuk date ranges (contoh: Aug 2021 – Jan 2023), tidak di tempat lain

---

## Stats Bar

| Stat | Copy |
|------|------|
| Scale | 76+ production systems instrumented across enterprise clients |
| Quality | 97% technical evaluation score on a Rp 10B infrastructure tender |
| Speed | 72-hour email infrastructure rebuild after ransomware attack |
| Learning | 20+ certifications across AWS, GCP, New Relic, and Nutanix |

---

## Experience

> The roles changed. The instinct to understand how systems behave did not.

---

**Technical Product Specialist**
PT Berca Hardayaperkasa · Mar 2024 – Present

End-to-end observability for 76+ enterprise clients across fintech, telecoms, government, and ecommerce, from requirements and architecture through instrumentation, alert tuning, and production validation.

- Achieved 97% technical evaluation score on a Rp 10B Nutanix Kubernetes Platform tender, outperforming all competing vendors by 7 to 10 percent through end-to-end architecture design and presentation.
- Deployed New Relic APM, Infrastructure Monitoring, and distributed tracing across production Kubernetes environments, instrumenting microservices with OpenTelemetry for trace-log-metric correlation.
- Defined SLIs and golden signal alert thresholds that reduced on-call alert noise and improved signal accuracy across multiple client environments.

---

**Junior Systems Engineer**
PT Kairos Utama Indonesia · Apr 2023 – Mar 2024

Before specializing in observability, I was the person called when everything broke. I managed 50+ VMs across Microsoft enterprise environments under 24/7 SLA.

- Led incident response during a ransomware attack on a financial sector client, rebuilding the entire email infrastructure from scratch within 72 hours through cold backup restoration.
- Executed Disaster Recovery drills and validated RTO and RPO compliance across production environments for enterprise clients.

---

**Embedded Systems Engineer**
Covent Indonesia · Apr 2022 – Apr 2023

The same instincts that make good firmware engineers make good SRE engineers: if it can fail silently, it will. At Covent, that meant Watchdog Timers and Fail-Safe mechanisms in safety-critical medical firmware. In SRE, it means instrumentation and alerting before incidents happen.

- Engineered patented production-grade firmware for a safety-critical medical device in C/C++, implementing Watchdog Timers and Fail-Safe mechanisms.
- Conducted hardware-level debugging using oscilloscopes and logic analyzers to ensure strict medical device safety compliance.

---

**Electronics Laboratory Assistant**
Laboratorium Elektronika FTUI · Aug 2021 – Jan 2023

Made complex embedded systems concepts understandable to the next generation of engineers.

- Designed practicum modules covering 10 key topics in embedded systems and microcontroller programming.
- Mentored 50+ undergraduate students per semester in hands-on hardware troubleshooting and lab work.

---

## Certifications

> Certifications that reflect where I've spent real time.

**Primary:**
- New Relic Certified Performance Engineer Professional (Aug 2025)
- New Relic Certified APM Practitioner Associate (May 2025)
- AWS Certified Solutions Architect Associate (Apr 2024)
- Nutanix Certified Professional Multicloud Infrastructure (Oct 2024)
- Google Cloud Certified Digital Leader (Jun 2023)

+15 more across cloud, infrastructure, and observability platforms.

---

## Technical Skills

**Observability:** daily driver across 76+ production engagements
New Relic, Prometheus, Grafana, OpenTelemetry, ELK Stack, Distributed Tracing

**Cloud & Infrastructure:** deployed in production
AWS, GCP, Azure, Terraform, Kubernetes, Docker, Nutanix HCI

**DevOps & Automation:** used in real workflows
GitHub Actions, Jenkins, Ansible, Python, Bash

**Site Reliability:** the actual job
SLI/SLO design, Golden Signals, Incident Response, Observability as Code

