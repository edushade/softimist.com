import { ArrowRight, Star, Zap, Shield, BarChart3, Mail, Phone, Users, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/contact-form";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/softimist-logo-black.svg" alt="Softimist" width={100} height={100} className="w-auto h-6" />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#about-us" className="text-gray-600 hover:text-gray-900 transition-colors">
              About Us
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
              Testimonials
            </a>
            <Button asChild size="sm">
              <a href="#contact-us">Contact Us</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            🚀 Edushade LMS - The AI Powered LMS Coming Soon
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Turning Ideas Into
            <span className="block text-orange-500">Intelligent Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">Streamline your business processes with our AI-powered SaaS platform. Increase productivity, reduce costs, and scale effortlessly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#contact-us">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            {/* <Button variant="outline" size="lg">
              Watch Demo
            </Button> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Everything you need to succeed</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Powerful features designed to help your business grow faster and more efficiently.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Lightning Fast</CardTitle>
                <CardDescription className="text-gray-600">Process data and generate insights in milliseconds with our optimized infrastructure.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Enterprise Security</CardTitle>
                <CardDescription className="text-gray-600">Bank-level security with end-to-end encryption and compliance certifications.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Advanced Analytics</CardTitle>
                <CardDescription className="text-gray-600">Get actionable insights with real-time analytics and customizable dashboards.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Softimist</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We're passionate about transforming education through innovative AI-powered solutions that make learning more engaging, personalized, and effective.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Founded with a vision to revolutionize education technology, Softimist emerged from the belief that every learner deserves personalized, intelligent educational experiences. Our team of education experts, AI researchers, and software engineers came together to create Edushade LMS - a next-generation learning management system that adapts to each student's unique learning style and pace.</p>
              <p className="text-gray-600 leading-relaxed">We understand the challenges educators face in today's digital world, from managing diverse learning needs to tracking student progress effectively. That's why we've built an AI-powered platform that not only simplifies administrative tasks but also enhances the learning experience for students and teachers alike.</p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovation First</h4>
                  <p className="text-gray-700">Pioneering the future of education technology</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-sm text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">To democratize access to quality education by providing intelligent, scalable learning solutions that adapt to every student's needs and empower educators to deliver exceptional learning experiences.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">To become the global leader in AI-powered educational technology, creating a world where learning is personalized, accessible, and transformative for every individual.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Innovation, accessibility, integrity, and student success drive everything we do. We believe in continuous learning, ethical AI, and creating technology that serves humanity.</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Softimist?</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">We combine cutting-edge AI technology with deep educational expertise to deliver solutions that truly make a difference.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">5+</div>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                <p className="text-gray-600">Educational Institutions</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">10K+</div>
                <p className="text-gray-600">Students Served</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">99%</div>
                <p className="text-gray-600">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Trusted by industry leaders</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">&quot;Softimist has transformed how we handle our daily operations. The efficiency gains are remarkable.&quot;</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">CEO, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">&quot;The analytics dashboard gives us insights we never had before. Game-changing for our business.&quot;</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-900">Michael Chen</p>
                    <p className="text-sm text-gray-600">CTO, DataFlow</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">&quot;Implementation was seamless and the support team is incredibly responsive. Highly recommend.&quot;</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-900">Emily Rodriguez</p>
                    <p className="text-sm text-gray-600">Operations Director, GrowthLab</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-us" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Contact us</h2>
              <p className="text-lg text-gray-600 mb-6">Interested in Edushade? Tell us a bit about your needs and we'll reach out with a tailored demo.</p>

              {/* Contact Information */}
              <div className="mb-8 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <a href="mailto:info@softimist.com" className="text-gray-900 hover:text-orange-600 transition-colors">
                        info@softimist.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <a href="tel:+8801635465676" className="text-gray-900 hover:text-orange-600 transition-colors">
                        +8801635465676
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-orange-100">
                    <ArrowRight className="h-4 w-4 text-orange-700" />
                  </span>
                  <span>Dedicated onboarding and migration support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-orange-100">
                    <ArrowRight className="h-4 w-4 text-orange-700" />
                  </span>
                  <span>Flexible pricing for schools and enterprises</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-orange-100">
                    <ArrowRight className="h-4 w-4 text-orange-700" />
                  </span>
                  <span>Security review and procurement-ready docs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-orange-100">
                    <ArrowRight className="h-4 w-4 text-orange-700" />
                  </span>
                  <span>Customized AI-powered learning paths</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-orange-100">
                    <ArrowRight className="h-4 w-4 text-orange-700" />
                  </span>
                  <span>Seamless integration with your existing systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-orange-100">
                    <ArrowRight className="h-4 w-4 text-orange-700" />
                  </span>
                  <span>Scalable infrastructure for future growth</span>
                </li>
              </ul>
            </div>

            <Card className="border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle>Send a message</CardTitle>
                <CardDescription>We respond within one business day.</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/softimist-logo-black.svg" alt="Softimist" width={100} height={100} className="w-auto h-6" />
              </div>
              <p className="text-gray-600">Turning Ideas Into Intelligent Solutions.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about-us" className="text-gray-600 hover:text-gray-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-8 pt-8 text-center">
            <p className="text-gray-600">© 2025 Softimist. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
