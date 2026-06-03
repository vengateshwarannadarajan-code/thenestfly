import { useState } from 'react';
import {
  Menu,
  X,
  Plane,
  BookOpen,
  Globe,
  FileText,
  GraduationCap,
  DollarSign,
  PlaneTakeoff,
  CreditCard,
  Home,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Star,
  Instagram,
  Linkedin,
  ChevronRight
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
const LogoFull = '/logo.jpeg';
const LogoIcon = '/logo-icon.jpeg';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa]" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#home" className="flex items-center">
              {/* Desktop Logo - Full version */}
              <ImageWithFallback
                src={LogoFull}
                alt="NestFly Logo"
                className="hidden sm:block h-12 w-auto"
              />
              {/* Mobile Logo - Icon only */}
              <ImageWithFallback
                src={LogoIcon}
                alt="NestFly"
                className="block sm:hidden h-10 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-[#1f2937] hover:text-[#0891b2] transition-colors">Home</a>
              <a href="#services" className="text-[#1f2937] hover:text-[#0891b2] transition-colors">Services</a>
              <a href="#destinations" className="text-[#1f2937] hover:text-[#0891b2] transition-colors">Destinations</a>
              <a href="#contact" className="text-[#1f2937] hover:text-[#0891b2] transition-colors">Contact</a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a 
                href="https://wa.me/919442158348" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#f97316] text-white px-6 py-2.5 rounded-lg hover:bg-[#ea580c] transition-colors"
              >
                Book Free Consultation
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#1f2937]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <a href="#home" className="text-[#1f2937] hover:text-[#0891b2]" onClick={() => setMobileMenuOpen(false)}>Home</a>
                <a href="#services" className="text-[#1f2937] hover:text-[#0891b2]" onClick={() => setMobileMenuOpen(false)}>Services</a>
                <a href="#destinations" className="text-[#1f2937] hover:text-[#0891b2]" onClick={() => setMobileMenuOpen(false)}>Destinations</a>
                <a href="#contact" className="text-[#1f2937] hover:text-[#0891b2]" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                <a 
                  href="https://wa.me/919442158348" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#f97316] text-white px-6 py-2.5 rounded-lg text-center hover:bg-[#ea580c] transition-colors"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-[#1e40af] to-[#0891b2] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Top Badge */}
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
                796+ Universities · 32 Countries · Free for Students
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-[42px] mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, lineHeight: '1.2' }}>
                Your dream university starts with one honest conversation.
              </h1>

              {/* Subtext */}
              <p className="text-lg mb-8 text-white/90 max-w-[700px]">
                NestFly guides students from Tamil Nadu and across India through every step of studying abroad: university selection, applications, test prep, loans, visas, and accommodation. Free for students. Always.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href="https://wa.me/919442158348" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#f97316] text-white px-8 py-3.5 rounded-lg hover:bg-[#ea580c] transition-all hover:scale-105 text-center"
                >
                  Book Free Consultation
                </a>
                <a 
                  href="#destinations" 
                  className="border-2 border-white text-white px-8 py-3.5 rounded-lg hover:bg-white/10 transition-all text-center"
                >
                  Explore Destinations
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1648301033733-44554c74ec50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwdW5pdmVyc2l0eSUyMGNhbXB1cyUyMHN0dWRlbnRzfGVufDF8fHx8MTc4MDE0NzE5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="International university campus with students"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="text-center">
              <BookOpen className="w-8 h-8 text-[#1e40af] mx-auto mb-2" />
              <div className="text-2xl text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>796+</div>
              <div className="text-sm text-[#6b7280]">Partner Universities</div>
            </div>
            <div className="text-center">
              <Globe className="w-8 h-8 text-[#1e40af] mx-auto mb-2" />
              <div className="text-2xl text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>32</div>
              <div className="text-sm text-[#6b7280]">Countries Covered</div>
            </div>
            <div className="text-center">
              <CheckCircle2 className="w-8 h-8 text-[#10b981] mx-auto mb-2" />
              <div className="text-2xl text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>100%</div>
              <div className="text-sm text-[#6b7280]">Free for Students</div>
            </div>
            <div className="text-center">
              <GraduationCap className="w-8 h-8 text-[#1e40af] mx-auto mb-2" />
              <div className="text-2xl text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>Expert</div>
              <div className="text-sm text-[#6b7280]">Guidance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-[#1e40af] text-sm uppercase tracking-wide mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
              What we do
            </div>
            <h2 className="text-3xl sm:text-4xl text-[#1f2937] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
              Everything you need. One place. No fees.
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Service 1 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105 bg-white">
              <div className="w-12 h-12 bg-[#eff6ff] rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-[#1e40af]" />
              </div>
              <h3 className="text-lg mb-3 text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                Free Counselling & University Shortlisting
              </h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">
                Tell us your academic background, budget, and target country. We map a personalised shortlist from both private and public universities across 32 countries. No generic list. No pressure. The right fit for your profile and budget.
              </p>
            </div>

            {/* Service 2 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105 bg-white">
              <div className="w-12 h-12 bg-[#eff6ff] rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-[#1e40af]" />
              </div>
              <h3 className="text-lg mb-3 text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                Application Support
              </h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">
                We guide you through every document including SOP, LORs, transcripts, and deadlines. We manage your complete application submission. You focus on preparation, we handle the paperwork.
              </p>
            </div>

            {/* Service 3 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105 bg-white">
              <div className="w-12 h-12 bg-[#eff6ff] rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-[#1e40af]" />
              </div>
              <h3 className="text-lg mb-3 text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                Test Preparation
              </h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">
                IELTS · TOEFL · PTE · GRE · GMAT · SAT · Duolingo · German · French · Japanese. Expert faculty. Flexible batch timings. 25 classes, full study material, class recordings, and 2 mock tests per course.
              </p>
            </div>

            {/* Service 4 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105 bg-white">
              <div className="w-12 h-12 bg-[#eff6ff] rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-[#1e40af]" />
              </div>
              <h3 className="text-lg mb-3 text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                Education Loans
              </h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">
                End to end overseas education loan assistance covering documentation support, lender matching, and real-time loan status updates. We help you understand exactly what you are signing.
              </p>
            </div>

            {/* Service 5 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105 bg-white">
              <div className="w-12 h-12 bg-[#eff6ff] rounded-lg flex items-center justify-center mb-4">
                <PlaneTakeoff className="w-6 h-6 text-[#1e40af]" />
              </div>
              <h3 className="text-lg mb-3 text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                Visa Guidance
              </h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">
                Offer letter secured. Now what? We walk you through every visa document, timeline, and submission requirement. France, UK, Canada, Australia, Germany. We know the difference.
              </p>
            </div>

            {/* Service 6 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105 bg-white">
              <div className="w-12 h-12 bg-[#eff6ff] rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-[#1e40af]" />
              </div>
              <h3 className="text-lg mb-3 text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                Tuition Fee Payments
              </h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">
                Safe, tracked, internationally compliant university fee transfers. No currency conversion surprises. No lost transfers.
              </p>
            </div>

            {/* Service 7 - Centered in last row */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105 bg-white md:col-span-2 lg:col-span-1 lg:col-start-2">
              <div className="w-12 h-12 bg-[#eff6ff] rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-[#1e40af]" />
              </div>
              <h3 className="text-lg mb-3 text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                Accommodation Support
              </h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">
                Finding housing abroad is often harder than the visa. We help you explore verified accommodation options before you land so you arrive with a place to stay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-[#1e40af] text-sm uppercase tracking-wide mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
              Study destinations
            </div>
            <h2 className="text-3xl sm:text-4xl text-[#1f2937] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
              32 countries. Your future, your choice.
            </h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              Both private universities and public institutions covered across every destination.
            </p>
          </div>

          {/* Destinations Table - Desktop */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full">
              <thead className="bg-[#eff6ff]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Country</th>
                  <th className="px-6 py-4 text-left text-sm text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Universities</th>
                  <th className="px-6 py-4 text-left text-sm text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Highlight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 text-[#1f2937]">🇫🇷 France</td>
                  <td className="px-6 py-4 text-[#1f2937]">31+</td>
                  <td className="px-6 py-4 text-[#6b7280]">Private & public universities</td>
                </tr>
                <tr className="bg-[#fafafa] hover:bg-gray-50">
                  <td className="px-6 py-4 text-[#1f2937]">🇺🇸 USA</td>
                  <td className="px-6 py-4 text-[#1f2937]">239+</td>
                  <td className="px-6 py-4 text-[#6b7280]">Largest network</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 text-[#1f2937]">🇨🇦 Canada</td>
                  <td className="px-6 py-4 text-[#1f2937]">119+</td>
                  <td className="px-6 py-4 text-[#6b7280]">PR pathway</td>
                </tr>
                <tr className="bg-[#fafafa] hover:bg-gray-50">
                  <td className="px-6 py-4 text-[#1f2937]">🇬🇧 UK</td>
                  <td className="px-6 py-4 text-[#1f2937]">113+</td>
                  <td className="px-6 py-4 text-[#6b7280]">Post-study work visa</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 text-[#1f2937]">🇦🇺 Australia</td>
                  <td className="px-6 py-4 text-[#1f2937]">63+</td>
                  <td className="px-6 py-4 text-[#6b7280]">Strong job market</td>
                </tr>
                <tr className="bg-[#fafafa] hover:bg-gray-50">
                  <td className="px-6 py-4 text-[#1f2937]">🇩🇪 Germany</td>
                  <td className="px-6 py-4 text-[#1f2937]">28+</td>
                  <td className="px-6 py-4 text-[#6b7280]">Mostly tuition-free public universities</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 text-[#1f2937]">🇮🇪 Ireland</td>
                  <td className="px-6 py-4 text-[#1f2937]">19+</td>
                  <td className="px-6 py-4 text-[#6b7280]">EU access</td>
                </tr>
                <tr className="bg-[#fafafa] hover:bg-gray-50">
                  <td className="px-6 py-4 text-[#1f2937]">🇸🇬 Singapore</td>
                  <td className="px-6 py-4 text-[#1f2937]">14+</td>
                  <td className="px-6 py-4 text-[#6b7280]">Asia hub</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 text-[#1f2937]">🇦🇪 Dubai</td>
                  <td className="px-6 py-4 text-[#1f2937]">23+</td>
                  <td className="px-6 py-4 text-[#6b7280]">No IELTS options available</td>
                </tr>
                <tr className="bg-[#fafafa] hover:bg-gray-50">
                  <td className="px-6 py-4 text-[#1f2937]">🇨🇭 Switzerland</td>
                  <td className="px-6 py-4 text-[#1f2937]">18+</td>
                  <td className="px-6 py-4 text-[#6b7280]">Finance & hospitality</td>
                </tr>
                <tr className="bg-[#eff6ff]">
                  <td colSpan={3} className="px-6 py-4 text-center text-[#1e40af]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                    + 22 more countries | 796+ total universities | 
                    <a href="#contact" className="ml-2 inline-flex items-center hover:underline">
                      Ask us <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Destinations Cards - Mobile */}
          <div className="md:hidden space-y-4">
            {[
              { flag: '🇫🇷', country: 'France', unis: '31+', highlight: 'Private & public universities' },
              { flag: '🇺🇸', country: 'USA', unis: '239+', highlight: 'Largest network' },
              { flag: '🇨🇦', country: 'Canada', unis: '119+', highlight: 'PR pathway' },
              { flag: '🇬🇧', country: 'UK', unis: '113+', highlight: 'Post-study work visa' },
              { flag: '🇦🇺', country: 'Australia', unis: '63+', highlight: 'Strong job market' },
              { flag: '🇩🇪', country: 'Germany', unis: '28+', highlight: 'Mostly tuition-free public universities' },
              { flag: '🇮🇪', country: 'Ireland', unis: '19+', highlight: 'EU access' },
              { flag: '🇸🇬', country: 'Singapore', unis: '14+', highlight: 'Asia hub' },
              { flag: '🇦🇪', country: 'Dubai', unis: '23+', highlight: 'No IELTS options available' },
              { flag: '🇨🇭', country: 'Switzerland', unis: '18+', highlight: 'Finance & hospitality' },
            ].map((dest, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-4 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{dest.flag}</span>
                    <span className="text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>{dest.country}</span>
                  </div>
                  <span className="text-[#1e40af]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>{dest.unis}</span>
                </div>
                <p className="text-sm text-[#6b7280]">{dest.highlight}</p>
              </div>
            ))}
            <div className="border-2 border-[#1e40af] rounded-xl p-4 bg-[#eff6ff] text-center">
              <p className="text-[#1e40af]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                + 22 more countries | 796+ total universities
              </p>
              <a href="#contact" className="inline-flex items-center text-[#1e40af] hover:underline mt-2">
                Ask us <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-[#1e40af] text-sm uppercase tracking-wide mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
              Simple process
            </div>
            <h2 className="text-3xl sm:text-4xl text-[#1f2937] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
              From confused to campus in 4 steps.
            </h2>
          </div>

          {/* Timeline */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#1e40af] rounded-full flex items-center justify-center mb-4 relative z-10">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl text-[#1e40af] mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>1</div>
                <h3 className="text-lg mb-3 text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Free Consultation
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">
                  Book a 30-minute call. Tell us your background, budget, and dream. We listen first, advise second. Private or public, funded or self-financed. We build the path around you.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#1e40af] rounded-full flex items-center justify-center mb-4 relative z-10">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl text-[#1e40af] mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>2</div>
                <h3 className="text-lg mb-3 text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Shortlist & Apply
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">
                  We shortlist best-fit universities, both private and public, and handle your complete application. SOP, documents, submission, follow-up.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#1e40af] rounded-full flex items-center justify-center mb-4 relative z-10">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl text-[#1e40af] mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>3</div>
                <h3 className="text-lg mb-3 text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Test Prep, Loan & Visa
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">
                  Parallel tracks: IELTS or other required tests, education loan support, and full visa documentation guidance.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#1e40af] rounded-full flex items-center justify-center mb-4 relative z-10">
                  <PlaneTakeoff className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl text-[#1e40af] mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>4</div>
                <h3 className="text-lg mb-3 text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Depart with Confidence
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">
                  Offer letter. Visa stamped. Accommodation confirmed. Pre-departure briefing done. You board the flight knowing exactly what to expect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-[#1e40af] text-sm uppercase tracking-wide mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
              Student stories
            </div>
            <h2 className="text-3xl sm:text-4xl text-[#1f2937] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
              Students who took the leap.
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[#f97316] text-[#f97316]" />
                ))}
              </div>
              <p className="text-[#6b7280] italic mb-6 leading-relaxed">
                "NestFly helped me get into a top business school in France. The documents were perfect, the process was clear, and I got my visa on the first attempt."
              </p>
              <div className="flex items-center gap-3">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1667655861998-46fe4c29a4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50JTIwc21pbGluZyUyMHBvcnRyYWl0JTIweW91bmd8ZW58MXx8fHwxNzgwMTQ3MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="M. Santhosh Kumar"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-[#1e40af]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>M. Santhosh Kumar</div>
                  <div className="text-sm text-[#6b7280]">MSc Finance, France 2025</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[#f97316] text-[#f97316]" />
                ))}
              </div>
              <p className="text-[#6b7280] italic mb-6 leading-relaxed">
                "As a parent from Tuticorin, I was anxious about sending my daughter abroad. The team explained everything clearly and gave our family real confidence. She is now in Christ Church."
              </p>
              <div className="flex items-center gap-3">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1623461487986-9400110de28e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzdHVkZW50JTIwZ3JhZHVhdGlvbiUyMHN1Y2Nlc3MlMjBwcm91ZHxlbnwxfHx8fDE3ODAxNDcxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="S. Murugan"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-[#1e40af]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>S. Murugan</div>
                  <div className="text-sm text-[#6b7280]">Parent, daughter in New Zealand</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[#f97316] text-[#f97316]" />
                ))}
              </div>
              <p className="text-[#6b7280] italic mb-6 leading-relaxed">
                "I had a complex profile. BE Mechanical switching to management. They found the right public university programme in Germany with very low tuition fees."
              </p>
              <div className="flex items-center gap-3">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1760552069234-54b9c04bbb05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc3R1ZGVudCUyMHNtaWxpbmclMjBib29rc3xlbnwxfHx8fDE3ODAxNDcxOTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Karthik Santhanam"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-[#1e40af]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Karthik Santhanam</div>
                  <div className="text-sm text-[#6b7280]">MSc Management, Germany 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why NestFly Section */}
      <section className="py-20 bg-[#eff6ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-[#1e40af] text-sm uppercase tracking-wide mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
              The difference
            </div>
            <h2 className="text-3xl sm:text-4xl text-[#1f2937] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
              Honest guidance. Zero cost to you.
            </h2>
          </div>

          {/* Points Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Point 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-8 h-8 text-[#10b981]" />
              </div>
              <div>
                <h3 className="text-lg mb-2 text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Private and public universities
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">
                  Top ranked institutions and affordable public options across 32 countries
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-8 h-8 text-[#10b981]" />
              </div>
              <div>
                <h3 className="text-lg mb-2 text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Expert counsellors
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">
                  Real expertise across all major study destinations
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-8 h-8 text-[#10b981]" />
              </div>
              <div>
                <h3 className="text-lg mb-2 text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Tamil Nadu roots
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">
                  We understand your family's concerns, we speak your language
                </p>
              </div>
            </div>

            {/* Point 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-8 h-8 text-[#10b981]" />
              </div>
              <div>
                <h3 className="text-lg mb-2 text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Full service, one place
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">
                  Counselling, applications, test prep, loans, visa, accommodation
                </p>
              </div>
            </div>

            {/* Point 5 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-8 h-8 text-[#10b981]" />
              </div>
              <div>
                <h3 className="text-lg mb-2 text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Zero cost to students
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">
                  We are paid by universities when you enrol, never by you
                </p>
              </div>
            </div>

            {/* Point 6 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-8 h-8 text-[#10b981]" />
              </div>
              <div>
                <h3 className="text-lg mb-2 text-[#1f2937]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  No targets, no pressure
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">
                  We recommend what is right for your profile, not what earns us more
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#1e40af] to-[#0891b2] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
              Ready to Dream. Fly. Achieve?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Book your free 30-minute consultation. No pressure. No commitment. Just clarity on your path forward.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* WhatsApp Card */}
            <div className="bg-white rounded-xl p-6 text-center">
              <MessageCircle className="w-10 h-10 text-[#10b981] mx-auto mb-3" />
              <h3 className="text-lg text-[#1f2937] mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                WhatsApp
              </h3>
              <p className="text-[#6b7280] mb-4">+91 94421 58348</p>
              <a 
                href="https://wa.me/919442158348" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-[#10b981] text-white px-6 py-2.5 rounded-lg hover:bg-[#059669] transition-colors"
              >
                WhatsApp us now <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl p-6 text-center">
              <Mail className="w-10 h-10 text-[#1e40af] mx-auto mb-3" />
              <h3 className="text-lg text-[#1f2937] mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                Email
              </h3>
              <p className="text-[#6b7280] mb-4 text-sm">vengateshwaran17@gmail.com</p>
              <a 
                href="mailto:vengateshwaran17@gmail.com"
                className="inline-flex items-center justify-center w-full bg-[#1e40af] text-white px-6 py-2.5 rounded-lg hover:bg-[#1e3a8a] transition-colors"
              >
                Send email
              </a>
            </div>

            {/* Office Card */}
            <div className="bg-white rounded-xl p-6 text-center">
              <MapPin className="w-10 h-10 text-[#f97316] mx-auto mb-3" />
              <h3 className="text-lg text-[#1f2937] mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                Office
              </h3>
              <p className="text-[#6b7280] mb-4 text-sm">Innov8 Millenia, 2nd Floor, East Wing, RMZ Millenia Business Park, No.143, Dr.M.G.R. Road, Perungudi, Chennai 600096</p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Innov8+Millenia+RMZ+Millenia+Business+Park+Perungudi+Chennai+600096" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-[#f97316] text-white px-6 py-2.5 rounded-lg hover:bg-[#ea580c] transition-colors"
              >
                Get directions
              </a>
            </div>
          </div>

          {/* Large CTA Button */}
          <div className="text-center">
            <a 
              href="https://wa.me/919442158348" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#f97316] text-white px-12 py-4 rounded-xl hover:bg-[#ea580c] transition-all hover:scale-105 text-lg"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              WhatsApp us now <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e293b] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Column 1 - Brand */}
            <div>
              <ImageWithFallback
                src={LogoFull}
                alt="NestFly Logo"
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-white/50 text-sm">Chennai, Tamil Nadu, India</p>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h4 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-white/70 hover:text-white transition-colors text-sm">Home</a>
                <a href="#services" className="block text-white/70 hover:text-white transition-colors text-sm">Services</a>
                <a href="#destinations" className="block text-white/70 hover:text-white transition-colors text-sm">Destinations</a>
                <a href="#contact" className="block text-white/70 hover:text-white transition-colors text-sm">Contact</a>
              </div>
            </div>

            {/* Column 3 - Contact */}
            <div>
              <h4 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Contact</h4>
              <div className="space-y-2 text-sm">
                <p className="text-white/70">WhatsApp: +91 94421 58348</p>
                <p className="text-white/70">Email: vengateshwaran17@gmail.com</p>
                <p className="text-white/70">Innov8 Millenia, 2nd Floor, East Wing, RMZ Millenia Business Park, No.143, Dr.M.G.R. Road, Perungudi, Chennai 600096</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-8 pt-8 border-t border-white/10">
            <a href="https://www.instagram.com/thenestfly" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/company/nestfly/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-white/50 text-sm">
            © 2026 NestFly. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
