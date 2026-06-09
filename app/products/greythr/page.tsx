import Link from "next/link"
import Image from "next/image"
import { ChevronRight, CheckCircle, ShieldCheck, Users, Clock4, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "greytHR Full-Suite HRMS | Verma ICT & Software Solutions",
  description: "Learn about our greytHR partnership and how our Full-Suite HRMS services help businesses automate payroll, attendance, leave, recruitment, and compliance.",
}

export default function GreythrPage() {
  return (
    <div className="space-y-12">
      <section className="w-full py-12 md:py-24 bg-muted/60">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Partner Product
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">greytHR Full-Suite HRMS</h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                We partner with greytHR to deliver a complete HRMS platform that streamlines payroll, leave, attendance,
                recruitment, employee engagement, and compliance for growing businesses.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="/contact">
                    Talk to an HRMS Expert
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#features">View Features</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl bg-white/90 p-6 shadow-xl ring-1 ring-slate-200/70">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-6 text-white">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_35%)]"></div>
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-blue-100/90">HRMS Partner</p>
                      <h2 className="mt-3 text-3xl font-semibold">greytHR</h2>
                    </div>
                    <div className="rounded-2xl bg-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                      Full-Suite
                    </div>
                  </div>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/15 p-4">
                      <p className="text-sm text-blue-100/90">Payroll</p>
                      <p className="mt-2 text-xl font-semibold">Automated</p>
                    </div>
                    <div className="rounded-2xl bg-white/15 p-4">
                      <p className="text-sm text-blue-100/90">Attendance</p>
                      <p className="mt-2 text-xl font-semibold">Biometric & Mobile</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Image
                  src="/greythr.svg"
                  alt="greytHR product snapshot"
                  width={550}
                  height={350}
                  className="w-full rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">Key greytHR Capabilities</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A Complete HRMS Suite for Your Team</h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              greytHR gives your business a unified HR platform for payroll, attendance, compliance, recruiting, and
              employee self-service — backed by our implementation and support.
            </p>
          </div>

          <div className="grid gap-6 pt-10 md:grid-cols-3">
            <Card className="border border-slate-200/80">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <CardTitle>Payroll & Compliance</CardTitle>
                <CardDescription>Accurate payroll, statutory compliance, and automated tax calculations.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Payslip automation and e-filing</li>
                  <li>• PF, ESI, TDS, and professional tax compliance</li>
                  <li>• Multi-location payroll support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-slate-200/80">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600">
                  <Clock4 className="h-6 w-6" />
                </div>
                <CardTitle>Attendance & Leave</CardTitle>
                <CardDescription>Flexible attendance tracking, leave policies, and shift management.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Biometric, mobile, and web punch-in</li>
                  <li>• Leave approval workflows</li>
                  <li>• Shift scheduling & overtime tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-slate-200/80">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle>Employee Self-Service</CardTitle>
                <CardDescription>Easy access to payslips, leave requests, onboarding, and personal data updates.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Mobile app for employees</li>
                  <li>• Self-serve HR documents</li>
                  <li>• Expense and travel requests</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">Why greytHR with Us</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Implementation, integration, and ongoing support</h2>
              <p className="max-w-2xl text-muted-foreground">
                We help you deploy greytHR smoothly, integrate it with your payroll and attendance systems, and provide
                training so your HR team can start driving value from day one.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70">
                  <h3 className="text-lg font-semibold">Fast Deployment</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Get HR operations running quickly with a clear implementation roadmap.</p>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70">
                  <h3 className="text-lg font-semibold">Training & Support</h3>
                  <p className="mt-2 text-sm text-muted-foreground">We train HR admins and employees, and support your team after launch.</p>
                </div>
              </div>
              <Button asChild>
                <Link href="/contact">
                  Request a greytHR Consultation
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200/80">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Analytics & Reporting</p>
                    <p className="text-sm text-muted-foreground">Real-time HR reporting for smarter decisions.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Compliance Assurance</p>
                    <p className="text-sm text-muted-foreground">Stay aligned with local labor laws and reporting requirements.</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-200 p-5">
                  <h3 className="text-lg font-semibold">Ready to transform HR?</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Connect with our team for a greytHR implementation plan that matches your business goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
