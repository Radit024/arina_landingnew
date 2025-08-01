"use client"

import { useState, useEffect, useRef } from "react"
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Sprout,
  TrendingUp,
  Brain,
  Calculator,
  MessageCircle,
  BarChart3,
  Users,
  Shield,
  Clock,
  Award,
  Mail,
  Phone,
  MapPin,
  Plus,
  Minus,
  Sun,
  Moon,
  Globe,
  Menu,
  X,
} from "lucide-react"

// Translation data
const translations = {
  en: {
    nav: {
      features: "Features",
      howItWorks: "How It Works",
      about: "About",
      team: "Team",
      getStarted: "Get Started",
    },
    hero: {
      title: "AI-Powered Agriculture for the Future",
      subtitle:
        "Arina combines cutting-edge artificial intelligence with agricultural expertise to help farmers optimize yields, reduce costs, and make data-driven decisions.",
      startTrial: "Start Free Trial",
      watchDemo: "Watch Demo",
      yieldIncrease: "+35% Yield Increase",
    },
    problemSolution: {
      challengeTitle: "The Challenge Farmers Face",
      challenges: [
        "Unpredictable weather patterns affecting crop yields",
        "Rising input costs with uncertain returns",
        "Limited access to real-time agricultural insights",
        "Complex decision-making without data support",
      ],
      solutionTitle: "Our AI Solution",
      solutions: [
        "Predictive analytics for weather and crop performance",
        "ROI optimization through intelligent resource allocation",
        "Real-time monitoring and actionable insights",
        "AI-powered recommendations for every decision",
      ],
    },
    features: {
      title: "Powerful AI Features",
      subtitle: "Comprehensive agricultural intelligence tools designed to transform your farming operations",
      hpp: {
        title: "HPP Calculations",
        description: "Advanced Harvest Prediction Protocol calculations for accurate yield forecasting",
      },
      forecasting: {
        title: "Smart Forecasting",
        description: "Weather and market trend predictions powered by machine learning algorithms",
      },
      roi: {
        title: "ROI Analysis",
        description: "Comprehensive return on investment analysis for every farming decision",
      },
      chatbot: {
        title: "AI Chatbot",
        description: "24/7 agricultural expert assistance through our intelligent chatbot",
      },
    },
    howItWorks: {
      title: "How Arina Works",
      subtitle: "Simple steps to transform your agricultural operations with AI",
      steps: [
        {
          title: "Connect Your Data",
          description: "Integrate your farm data, weather stations, and IoT sensors with our platform",
        },
        {
          title: "AI Analysis",
          description: "Our AI algorithms analyze your data to identify patterns and opportunities",
        },
        {
          title: "Get Insights",
          description: "Receive actionable recommendations and predictions to optimize your operations",
        },
      ],
    },
    benefits: {
      title: "Why Choose Arina?",
      subtitle: "Proven results that make a real difference to your farming business",
      risk: {
        title: "Risk Reduction",
        description: "Minimize crop losses with predictive analytics and early warning systems",
        stat: "-40% Risk",
      },
      yield: {
        title: "Increased Yields",
        description: "Optimize growing conditions and resource allocation for maximum productivity",
        stat: "+35% Yield",
      },
      time: {
        title: "Time Savings",
        description: "Automate decision-making processes and reduce manual monitoring time",
        stat: "-60% Time",
      },
    },
    about: {
      title: "About Arina",
      paragraph1:
        "Founded by agricultural scientists and AI experts, Arina was born from the vision of making advanced technology accessible to farmers worldwide. We believe that artificial intelligence can revolutionize agriculture while preserving traditional farming wisdom.",
      paragraph2:
        "Our platform combines decades of agricultural research with cutting-edge machine learning to provide farmers with the tools they need to thrive in an increasingly complex world.",
      farmersServed: "Farmers Served",
      countries: "Countries",
    },
    team: {
      title: "Meet Our Team",
      subtitle: "Agricultural experts and AI pioneers working together to transform farming",
      leadership: "Leadership",
      executive: "Executive Team",
      management: "Management Team",
      ceo: {
        name: "Dr. Sarah Chen",
        role: "CEO & Founder",
        bio: "Agricultural AI researcher with 15+ years experience",
      },
      executives: [
        {
          name: "Michael Rodriguez",
          role: "CTO",
          bio: "Former Google AI engineer specializing in agricultural tech",
        },
        {
          name: "Dr. Emily Watson",
          role: "Head of Research",
          bio: "PhD in Agricultural Sciences, AI/ML expert",
        },
      ],
      managers: [
        {
          name: "James Park",
          role: "Product Manager",
          bio: "10+ years in AgTech product development",
        },
        {
          name: "Lisa Thompson",
          role: "Data Science Lead",
          bio: "Specialist in predictive agricultural modeling",
        },
        {
          name: "Carlos Mendez",
          role: "Engineering Manager",
          bio: "Full-stack development for agricultural platforms",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about Arina",
      questions: [
        {
          question: "How accurate are Arina's predictions?",
          answer:
            "Our AI models achieve 85-95% accuracy in yield predictions and weather forecasting, continuously improving with more data.",
        },
        {
          question: "What types of farms can use Arina?",
          answer:
            "Arina works with all types of farms - from small family operations to large commercial enterprises, supporting various crops and livestock.",
        },
        {
          question: "How long does it take to see results?",
          answer:
            "Most farmers see initial insights within 24-48 hours of setup, with comprehensive analysis available after one growing cycle.",
        },
        {
          question: "Is my farm data secure?",
          answer:
            "Yes, we use enterprise-grade encryption and security measures. Your data is never shared without permission and remains fully under your control.",
        },
        {
          question: "Do I need special equipment?",
          answer:
            "Arina works with existing farm equipment and sensors. We also offer guidance on cost-effective IoT solutions if needed.",
        },
      ],
    },
    footer: {
      description: "Empowering farmers with AI-driven insights for sustainable and profitable agriculture.",
      product: "Product",
      company: "Company",
      contact: "Contact",
      productLinks: ["Features", "Pricing", "API", "Integrations"],
      companyLinks: ["About Us", "Careers", "Blog", "Press"],
      copyright: "© 2024 Arina. All rights reserved. | Privacy Policy | Terms of Service",
    },
  },
  id: {
    nav: {
      features: "Fitur",
      howItWorks: "Cara Kerja",
      about: "Tentang",
      team: "Tim",
      getStarted: "Mulai Sekarang",
    },
    hero: {
      title: "Pertanian Bertenaga AI untuk Masa Depan",
      subtitle:
        "Arina menggabungkan kecerdasan buatan terdepan dengan keahlian pertanian untuk membantu petani mengoptimalkan hasil panen, mengurangi biaya, dan membuat keputusan berdasarkan data.",
      startTrial: "Mulai Uji Coba Gratis",
      watchDemo: "Tonton Demo",
      yieldIncrease: "+35% Peningkatan Hasil",
    },
    problemSolution: {
      challengeTitle: "Tantangan yang Dihadapi Petani",
      challenges: [
        "Pola cuaca yang tidak dapat diprediksi mempengaruhi hasil panen",
        "Biaya input yang meningkat dengan hasil yang tidak pasti",
        "Akses terbatas ke wawasan pertanian real-time",
        "Pengambilan keputusan yang kompleks tanpa dukungan data",
      ],
      solutionTitle: "Solusi AI Kami",
      solutions: [
        "Analitik prediktif untuk cuaca dan kinerja tanaman",
        "Optimisasi ROI melalui alokasi sumber daya yang cerdas",
        "Pemantauan real-time dan wawasan yang dapat ditindaklanjuti",
        "Rekomendasi bertenaga AI untuk setiap keputusan",
      ],
    },
    features: {
      title: "Fitur AI yang Powerful",
      subtitle: "Alat intelijen pertanian komprehensif yang dirancang untuk mentransformasi operasi pertanian Anda",
      hpp: {
        title: "Kalkulasi HPP",
        description: "Kalkulasi Protokol Prediksi Panen lanjutan untuk peramalan hasil yang akurat",
      },
      forecasting: {
        title: "Peramalan Cerdas",
        description: "Prediksi cuaca dan tren pasar yang didukung oleh algoritma pembelajaran mesin",
      },
      roi: {
        title: "Analisis ROI",
        description: "Analisis return on investment komprehensif untuk setiap keputusan pertanian",
      },
      chatbot: {
        title: "Chatbot AI",
        description: "Bantuan ahli pertanian 24/7 melalui chatbot cerdas kami",
      },
    },
    howItWorks: {
      title: "Cara Kerja Arina",
      subtitle: "Langkah sederhana untuk mentransformasi operasi pertanian Anda dengan AI",
      steps: [
        {
          title: "Hubungkan Data Anda",
          description: "Integrasikan data pertanian, stasiun cuaca, dan sensor IoT Anda dengan platform kami",
        },
        {
          title: "Analisis AI",
          description: "Algoritma AI kami menganalisis data Anda untuk mengidentifikasi pola dan peluang",
        },
        {
          title: "Dapatkan Wawasan",
          description: "Terima rekomendasi dan prediksi yang dapat ditindaklanjuti untuk mengoptimalkan operasi Anda",
        },
      ],
    },
    benefits: {
      title: "Mengapa Memilih Arina?",
      subtitle: "Hasil terbukti yang membuat perbedaan nyata untuk bisnis pertanian Anda",
      risk: {
        title: "Pengurangan Risiko",
        description: "Minimalkan kerugian tanaman dengan analitik prediktif dan sistem peringatan dini",
        stat: "-40% Risiko",
      },
      yield: {
        title: "Peningkatan Hasil",
        description: "Optimalkan kondisi pertumbuhan dan alokasi sumber daya untuk produktivitas maksimum",
        stat: "+35% Hasil",
      },
      time: {
        title: "Penghematan Waktu",
        description: "Otomatisasi proses pengambilan keputusan dan kurangi waktu pemantauan manual",
        stat: "-60% Waktu",
      },
    },
    about: {
      title: "Tentang Arina",
      paragraph1:
        "Didirikan oleh ilmuwan pertanian dan ahli AI, Arina lahir dari visi untuk membuat teknologi canggih dapat diakses oleh petani di seluruh dunia. Kami percaya bahwa kecerdasan buatan dapat merevolusi pertanian sambil melestarikan kebijaksanaan pertanian tradisional.",
      paragraph2:
        "Platform kami menggabungkan puluhan tahun penelitian pertanian dengan pembelajaran mesin terdepan untuk memberikan petani alat yang mereka butuhkan untuk berkembang di dunia yang semakin kompleks.",
      farmersServed: "Petani Dilayani",
      countries: "Negara",
    },
    team: {
      title: "Kenali Tim Kami",
      subtitle: "Ahli pertanian dan pionir AI bekerja sama untuk mentransformasi pertanian",
      leadership: "Kepemimpinan",
      executive: "Tim Eksekutif",
      management: "Tim Manajemen",
      ceo: {
        name: "Dr. Sarah Chen",
        role: "CEO & Pendiri",
        bio: "Peneliti AI pertanian dengan pengalaman 15+ tahun",
      },
      executives: [
        {
          name: "Michael Rodriguez",
          role: "CTO",
          bio: "Mantan insinyur AI Google yang mengkhususkan diri dalam teknologi pertanian",
        },
        {
          name: "Dr. Emily Watson",
          role: "Kepala Penelitian",
          bio: "PhD dalam Ilmu Pertanian, ahli AI/ML",
        },
      ],
      managers: [
        {
          name: "James Park",
          role: "Manajer Produk",
          bio: "10+ tahun dalam pengembangan produk AgTech",
        },
        {
          name: "Lisa Thompson",
          role: "Kepala Data Science",
          bio: "Spesialis dalam pemodelan prediktif pertanian",
        },
        {
          name: "Carlos Mendez",
          role: "Manajer Engineering",
          bio: "Pengembangan full-stack untuk platform pertanian",
        },
      ],
    },
    faq: {
      title: "Pertanyaan yang Sering Diajukan",
      subtitle: "Semua yang perlu Anda ketahui tentang Arina",
      questions: [
        {
          question: "Seberapa akurat prediksi Arina?",
          answer:
            "Model AI kami mencapai akurasi 85-95% dalam prediksi hasil panen dan peramalan cuaca, terus meningkat dengan lebih banyak data.",
        },
        {
          question: "Jenis pertanian apa yang bisa menggunakan Arina?",
          answer:
            "Arina bekerja dengan semua jenis pertanian - dari operasi keluarga kecil hingga perusahaan komersial besar, mendukung berbagai tanaman dan ternak.",
        },
        {
          question: "Berapa lama waktu yang dibutuhkan untuk melihat hasil?",
          answer:
            "Sebagian besar petani melihat wawasan awal dalam 24-48 jam setelah setup, dengan analisis komprehensif tersedia setelah satu siklus pertumbuhan.",
        },
        {
          question: "Apakah data pertanian saya aman?",
          answer:
            "Ya, kami menggunakan enkripsi tingkat perusahaan dan langkah-langkah keamanan. Data Anda tidak pernah dibagikan tanpa izin dan tetap sepenuhnya dalam kendali Anda.",
        },
        {
          question: "Apakah saya memerlukan peralatan khusus?",
          answer:
            "Arina bekerja dengan peralatan pertanian dan sensor yang ada. Kami juga menawarkan panduan tentang solusi IoT yang hemat biaya jika diperlukan.",
        },
      ],
    },
    footer: {
      description:
        "Memberdayakan petani dengan wawasan bertenaga AI untuk pertanian yang berkelanjutan dan menguntungkan.",
      product: "Produk",
      company: "Perusahaan",
      contact: "Kontak",
      productLinks: ["Fitur", "Harga", "API", "Integrasi"],
      companyLinks: ["Tentang Kami", "Karir", "Blog", "Pers"],
      copyright: "© 2024 Arina. Semua hak dilindungi. | Kebijakan Privasi | Syarat Layanan",
    },
  },
}

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return [ref, isIntersecting] as const
}

export default function ArinaLanding() {
  const [expandedTeamMember, setExpandedTeamMember] = useState<string | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)
  const [executiveCarousel, setExecutiveCarousel] = useState(0)
  const [managerCarousel, setManagerCarousel] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [language, setLanguage] = useState<"en" | "id">("en")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Animation refs
  const [heroRef, heroInView] = useIntersectionObserver()
  const [problemRef, problemInView] = useIntersectionObserver()
  const [featuresRef, featuresInView] = useIntersectionObserver()
  const [howItWorksRef, howItWorksInView] = useIntersectionObserver()
  const [benefitsRef, benefitsInView] = useIntersectionObserver()
  const [aboutRef, aboutInView] = useIntersectionObserver()
  const [teamRef, teamInView] = useIntersectionObserver()
  const [faqRef, faqInView] = useIntersectionObserver()

  const t = translations[language]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 64 // Height of fixed navbar (h-16 = 64px)
      const elementPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false)
  }

  const toggleTeamMember = (memberId: string) => {
    setExpandedTeamMember(expandedTeamMember === memberId ? null : memberId)
  }

  const toggleFaq = (faqId: string) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId)
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en")
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-[#052f28]" : "bg-white"}`}>
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full ${isDarkMode ? "bg-[#052f28]/95" : "bg-white/95"} backdrop-blur-sm border-b ${isDarkMode ? "border-[#a0e019]" : "border-gray-200"} z-50 transition-all duration-500`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2 animate-fade-in">
              <Sprout
                className={`h-8 w-8 ${isDarkMode ? "text-[#dff944]" : "text-[#052f28]"} transition-colors duration-300`}
              />
              <span
                className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-[#052f28]"} transition-colors duration-300`}
              >
                Arina
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("features")}
                className={`${isDarkMode ? "text-white hover:text-[#dff944]" : "text-[#042e25] hover:text-[#a0e019]"} transition-all duration-300 hover:scale-105`}
              >
                {t.nav.features}
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className={`${isDarkMode ? "text-white hover:text-[#dff944]" : "text-[#042e25] hover:text-[#a0e019]"} transition-all duration-300 hover:scale-105`}
              >
                {t.nav.howItWorks}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`${isDarkMode ? "text-white hover:text-[#dff944]" : "text-[#042e25] hover:text-[#a0e019]"} transition-all duration-300 hover:scale-105`}
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className={`${isDarkMode ? "text-white hover:text-[#dff944]" : "text-[#042e25] hover:text-[#a0e019]"} transition-all duration-300 hover:scale-105`}
              >
                {t.nav.team}
              </button>
            </div>

            {/* Desktop Controls */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 p-2 rounded-lg ${isDarkMode ? "bg-[#0a2b24] text-white hover:bg-[#dff944] hover:text-[#052f28]" : "bg-gray-100 text-[#052f28] hover:bg-[#052f28] hover:text-white"} transition-all duration-300 hover:scale-105`}
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${isDarkMode ? "bg-[#dff944] text-[#052f28] hover:bg-[#a0e019]" : "bg-[#052f28] text-white hover:bg-[#0a2b24]"} transition-all duration-300 hover:scale-105`}
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                className={`${isDarkMode ? "bg-[#dff944] text-[#052f28] hover:bg-[#a0e019]" : "bg-[#052f28] text-white hover:bg-[#0a2b24]"} px-6 py-2 rounded-lg transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg`}
              >
                {t.nav.getStarted}
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 p-2 rounded-lg ${isDarkMode ? "bg-[#0a2b24] text-white hover:bg-[#dff944] hover:text-[#052f28]" : "bg-gray-100 text-[#052f28] hover:bg-[#052f28] hover:text-white"} transition-all duration-300`}
              >
                <Globe className="h-4 w-4" />
                <span className="text-xs font-medium">{language.toUpperCase()}</span>
              </button>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${isDarkMode ? "bg-[#dff944] text-[#052f28] hover:bg-[#a0e019]" : "bg-[#052f28] text-white hover:bg-[#0a2b24]"} transition-all duration-300`}
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-lg ${isDarkMode ? "text-white hover:bg-[#0a2b24]" : "text-[#052f28] hover:bg-gray-100"} transition-all duration-300`}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"} ${isDarkMode ? "bg-[#052f28]/98" : "bg-white/98"} backdrop-blur-sm border-t ${isDarkMode ? "border-[#a0e019]/30" : "border-gray-200"}`}
        >
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("features")}
              className={`block w-full text-left py-3 px-4 rounded-lg ${isDarkMode ? "text-white hover:bg-[#0a2b24] hover:text-[#dff944]" : "text-[#042e25] hover:bg-gray-100 hover:text-[#a0e019]"} transition-all duration-300 font-medium`}
            >
              {t.nav.features}
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className={`block w-full text-left py-3 px-4 rounded-lg ${isDarkMode ? "text-white hover:bg-[#0a2b24] hover:text-[#dff944]" : "text-[#042e25] hover:bg-gray-100 hover:text-[#a0e019]"} transition-all duration-300 font-medium`}
            >
              {t.nav.howItWorks}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`block w-full text-left py-3 px-4 rounded-lg ${isDarkMode ? "text-white hover:bg-[#0a2b24] hover:text-[#dff944]" : "text-[#042e25] hover:bg-gray-100 hover:text-[#a0e019]"} transition-all duration-300 font-medium`}
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className={`block w-full text-left py-3 px-4 rounded-lg ${isDarkMode ? "text-white hover:bg-[#0a2b24] hover:text-[#dff944]" : "text-[#042e25] hover:bg-gray-100 hover:text-[#a0e019]"} transition-all duration-300 font-medium`}
            >
              {t.nav.team}
            </button>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-center py-3 px-4 rounded-lg ${isDarkMode ? "bg-[#dff944] text-[#052f28] hover:bg-[#a0e019]" : "bg-[#052f28] text-white hover:bg-[#0a2b24]"} transition-all duration-300 font-semibold`}
              >
                {t.nav.getStarted}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`pt-24 pb-16 ${isDarkMode ? "bg-[#052f28]" : "bg-gradient-to-br from-[#f9fafb] to-white"} transition-all duration-700`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <h1
                className={`text-4xl md:text-6xl font-bold ${isDarkMode ? "text-white" : "text-[#052f28]"} mb-6 transition-colors duration-300`}
              >
                {t.hero.title}
              </h1>
              <p
                className={`text-xl ${isDarkMode ? "text-gray-200" : "text-[#042e25]"} mb-8 leading-relaxed transition-colors duration-300`}
              >
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className={`${isDarkMode ? "bg-[#dff944] text-[#052f28] hover:bg-[#a0e019]" : "bg-[#052f28] text-white hover:bg-[#0a2b24]"} px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
                >
                  {t.hero.startTrial}
                </button>
                <button
                  className={`border-2 ${isDarkMode ? "border-[#dff944] text-[#dff944] hover:bg-[#dff944] hover:text-[#052f28]" : "border-[#052f28] text-[#052f28] hover:bg-[#052f28] hover:text-white"} px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105`}
                >
                  {t.hero.watchDemo}
                </button>
              </div>
            </div>
            <div
              className={`relative transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="AI-powered farming dashboard"
                className="rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#dff944] p-4 rounded-xl shadow-lg animate-bounce">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-6 w-6 text-[#052f28]" />
                  <span className="font-semibold text-[#052f28]">{t.hero.yieldIncrease}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section
        ref={problemRef}
        className={`py-16 ${isDarkMode ? "bg-[#0a2b24]" : "bg-white"} transition-all duration-700`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div
              className={`transition-all duration-1000 ${problemInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h2
                className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-[#052f28]"} mb-6 transition-colors duration-300`}
              >
                {t.problemSolution.challengeTitle}
              </h2>
              <div className="space-y-4">
                {t.problemSolution.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 transition-all duration-500 ${problemInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 animate-pulse"></div>
                    <p className={`${isDarkMode ? "text-gray-200" : "text-[#042e25]"} transition-colors duration-300`}>
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`transition-all duration-1000 delay-300 ${problemInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h2
                className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-[#052f28]"} mb-6 transition-colors duration-300`}
              >
                {t.problemSolution.solutionTitle}
              </h2>
              <div className="space-y-4">
                {t.problemSolution.solutions.map((solution, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 transition-all duration-500 ${problemInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}`}
                    style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-[#a0e019] rounded-full mt-3 animate-pulse"></div>
                    <p className={`${isDarkMode ? "text-gray-200" : "text-[#042e25]"} transition-colors duration-300`}>
                      {solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef}
        id="features"
        className={`py-16 ${isDarkMode ? "bg-[#052f28]" : "bg-[#f9fafb]"} transition-all duration-700`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${featuresInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2
              className={`text-4xl font-bold ${isDarkMode ? "text-white" : "text-[#052f28]"} mb-4 transition-colors duration-300`}
            >
              {t.features.title}
            </h2>
            <p
              className={`text-xl ${isDarkMode ? "text-gray-200" : "text-[#042e25]"} max-w-3xl mx-auto transition-colors duration-300`}
            >
              {t.features.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Calculator, title: t.features.hpp.title, description: t.features.hpp.description },
              {
                icon: TrendingUp,
                title: t.features.forecasting.title,
                description: t.features.forecasting.description,
              },
              { icon: BarChart3, title: t.features.roi.title, description: t.features.roi.description },
              { icon: MessageCircle, title: t.features.chatbot.title, description: t.features.chatbot.description },
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${featuresInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <feature.icon className="h-12 w-12 text-[#a0e019] mb-4 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-xl font-semibold text-[#052f28] mb-3">{feature.title}</h3>
                <p className="text-[#042e25]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        ref={howItWorksRef}
        id="how-it-works"
        className={`py-16 ${isDarkMode ? "bg-[#0a2b24]" : "bg-white"} transition-all duration-700`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${howItWorksInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2
              className={`text-4xl font-bold ${isDarkMode ? "text-white" : "text-[#052f28]"} mb-4 transition-colors duration-300`}
            >
              {t.howItWorks.title}
            </h2>
            <p
              className={`text-xl ${isDarkMode ? "text-gray-200" : "text-[#042e25]"} max-w-3xl mx-auto transition-colors duration-300`}
            >
              {t.howItWorks.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.howItWorks.steps.map((step, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ${howItWorksInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`w-16 h-16 ${index === 0 ? "bg-[#dff944]" : index === 1 ? "bg-[#a0e019]" : isDarkMode ? "bg-white" : "bg-[#052f28]"} rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 hover:scale-110 hover:rotate-12`}
                >
                  <span
                    className={`text-2xl font-bold ${index === 2 && isDarkMode ? "text-[#052f28]" : index === 2 ? "text-white" : "text-[#052f28]"}`}
                  >
                    {index + 1}
                  </span>
                </div>
                <h3
                  className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-[#052f28]"} mb-4 transition-colors duration-300`}
                >
                  {step.title}
                </h3>
                <p className={`${isDarkMode ? "text-gray-200" : "text-[#042e25]"} transition-colors duration-300`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        ref={benefitsRef}
        className={`py-16 ${isDarkMode ? "bg-[#052f28]" : "bg-[#f9fafb]"} transition-all duration-700`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${benefitsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2
              className={`text-4xl font-bold ${isDarkMode ? "text-white" : "text-[#052f28]"} mb-4 transition-colors duration-300`}
            >
              {t.benefits.title}
            </h2>
            <p
              className={`text-xl ${isDarkMode ? "text-gray-200" : "text-[#042e25]"} max-w-3xl mx-auto transition-colors duration-300`}
            >
              {t.benefits.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: t.benefits.risk.title,
                description: t.benefits.risk.description,
                stat: t.benefits.risk.stat,
              },
              {
                icon: TrendingUp,
                title: t.benefits.yield.title,
                description: t.benefits.yield.description,
                stat: t.benefits.yield.stat,
              },
              {
                icon: Clock,
                title: t.benefits.time.title,
                description: t.benefits.time.description,
                stat: t.benefits.time.stat,
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-md transition-all duration-700 hover:shadow-xl hover:scale-105 ${benefitsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <benefit.icon className="h-12 w-12 text-[#a0e019] mb-4 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-xl font-semibold text-[#052f28] mb-3">{benefit.title}</h3>
                <p className="text-[#042e25] mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-[#a0e019] animate-pulse">{benefit.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        ref={aboutRef}
        id="about"
        className={`py-16 ${isDarkMode ? "bg-[#0a2b24]" : "bg-white"} transition-all duration-700`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-1000 ${aboutInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <h2
                className={`text-4xl font-bold ${isDarkMode ? "text-white" : "text-[#052f28]"} mb-6 transition-colors duration-300`}
              >
                {t.about.title}
              </h2>
              <p
                className={`text-lg ${isDarkMode ? "text-gray-200" : "text-[#042e25]"} mb-6 leading-relaxed transition-colors duration-300`}
              >
                {t.about.paragraph1}
              </p>
              <p
                className={`text-lg ${isDarkMode ? "text-gray-200" : "text-[#042e25]"} mb-8 leading-relaxed transition-colors duration-300`}
              >
                {t.about.paragraph2}
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div
                  className={`text-center transition-all duration-700 ${aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                  style={{ transitionDelay: "300ms" }}
                >
                  <div className="text-3xl font-bold text-[#a0e019] mb-2 animate-pulse">10,000+</div>
                  <div className={`${isDarkMode ? "text-gray-200" : "text-[#042e25]"} transition-colors duration-300`}>
                    {t.about.farmersServed}
                  </div>
                </div>
                <div
                  className={`text-center transition-all duration-700 ${aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                  style={{ transitionDelay: "500ms" }}
                >
                  <div className="text-3xl font-bold text-[#a0e019] mb-2 animate-pulse">50+</div>
                  <div className={`${isDarkMode ? "text-gray-200" : "text-[#042e25]"} transition-colors duration-300`}>
                    {t.about.countries}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`transition-all duration-1000 delay-300 ${aboutInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Arina team"
                className="rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Carousels */}
      <section
        ref={teamRef}
        id="team"
        className={`py-16 ${isDarkMode ? "bg-[#052f28]" : "bg-[#f9fafb]"} transition-all duration-700`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2
              className={`text-4xl font-bold ${isDarkMode ? "text-white" : "text-[#052f28]"} mb-4 transition-colors duration-300`}
            >
              {t.team.title}
            </h2>
            <p
              className={`text-xl ${isDarkMode ? "text-gray-200" : "text-[#042e25]"} max-w-3xl mx-auto transition-colors duration-300`}
            >
              {t.team.subtitle}
            </p>
          </div>

          {/* CEO Section */}
          <div className="mb-12">
            <h3
              className={`text-2xl font-semibold ${isDarkMode ? "text-white" : "text-[#052f28]"} text-center mb-8 transition-colors duration-300`}
            >
              {t.team.leadership}
            </h3>
            <div className="flex justify-center">
              <div
                className={`bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 cursor-pointer transform hover:scale-105 max-w-md ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                onClick={() => toggleTeamMember("ceo")}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-[#052f28] rounded-full flex items-center justify-center transition-transform duration-300 hover:rotate-12">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-[#052f28]">{t.team.ceo.name}</h4>
                      <p className="text-[#042e25]">{t.team.ceo.role}</p>
                    </div>
                  </div>
                  {expandedTeamMember === "ceo" ? (
                    <Minus className="h-6 w-6 text-[#a0e019] transition-transform duration-300 hover:scale-110" />
                  ) : (
                    <Plus className="h-6 w-6 text-[#a0e019] transition-transform duration-300 hover:scale-110" />
                  )}
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedTeamMember === "ceo" ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#042e25]">{t.team.ceo.bio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Executives Carousel */}
          <div className="mb-12">
            <h3
              className={`text-2xl font-semibold ${isDarkMode ? "text-white" : "text-[#052f28]"} text-center mb-8 transition-colors duration-300`}
            >
              {t.team.executive}
            </h3>
            <div className="relative max-w-4xl mx-auto">
              <div className="flex justify-center items-center space-x-6">
                <button
                  onClick={() => setExecutiveCarousel(Math.max(0, executiveCarousel - 1))}
                  className={`p-2 rounded-full ${isDarkMode ? "bg-[#dff944] text-[#052f28] hover:bg-[#a0e019]" : "bg-[#052f28] text-white hover:bg-[#0a2b24]"} transition-all duration-300 disabled:opacity-50 hover:scale-110`}
                  disabled={executiveCarousel === 0}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <div className="grid md:grid-cols-2 gap-6 flex-1 max-w-2xl">
                  {t.team.executives.slice(executiveCarousel, executiveCarousel + 2).map((exec, index) => (
                    <div
                      key={executiveCarousel + index}
                      className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 cursor-pointer transform hover:scale-105 ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                      onClick={() => toggleTeamMember(`exec-${executiveCarousel + index}`)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-[#a0e019] rounded-full flex items-center justify-center transition-transform duration-300 hover:rotate-12">
                            <Brain className="h-6 w-6 text-[#052f28]" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#052f28]">{exec.name}</h4>
                            <p className="text-sm text-[#042e25]">{exec.role}</p>
                          </div>
                        </div>
                        {expandedTeamMember === `exec-${executiveCarousel + index}` ? (
                          <Minus className="h-5 w-5 text-[#a0e019] transition-transform duration-300 hover:scale-110" />
                        ) : (
                          <Plus className="h-5 w-5 text-[#a0e019] transition-transform duration-300 hover:scale-110" />
                        )}
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedTeamMember === `exec-${executiveCarousel + index}`
                            ? "max-h-20 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-sm text-[#042e25]">{exec.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setExecutiveCarousel(Math.min(t.team.executives.length - 2, executiveCarousel + 1))}
                  className={`p-2 rounded-full ${isDarkMode ? "bg-[#dff944] text-[#052f28] hover:bg-[#a0e019]" : "bg-[#052f28] text-white hover:bg-[#0a2b24]"} transition-all duration-300 disabled:opacity-50 hover:scale-110`}
                  disabled={executiveCarousel >= t.team.executives.length - 2}
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Carousel indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: Math.ceil(t.team.executives.length / 2) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setExecutiveCarousel(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                      Math.floor(executiveCarousel / 2) === index
                        ? "bg-[#a0e019]"
                        : isDarkMode
                          ? "bg-gray-400"
                          : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Managers Carousel */}
          <div>
            <h3
              className={`text-2xl font-semibold ${isDarkMode ? "text-white" : "text-[#052f28]"} text-center mb-8 transition-colors duration-300`}
            >
              {t.team.management}
            </h3>
            <div className="relative max-w-5xl mx-auto">
              <div className="flex justify-center items-center space-x-6">
                <button
                  onClick={() => setManagerCarousel(Math.max(0, managerCarousel - 1))}
                  className={`p-2 rounded-full ${isDarkMode ? "bg-[#dff944] text-[#052f28] hover:bg-[#a0e019]" : "bg-[#052f28] text-white hover:bg-[#0a2b24]"} transition-all duration-300 disabled:opacity-50 hover:scale-110`}
                  disabled={managerCarousel === 0}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <div className="grid md:grid-cols-3 gap-4 flex-1 max-w-4xl">
                  {t.team.managers.slice(managerCarousel, managerCarousel + 3).map((manager, index) => (
                    <div
                      key={managerCarousel + index}
                      className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 cursor-pointer transform hover:scale-105 ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                      onClick={() => toggleTeamMember(`manager-${managerCarousel + index}`)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-[#dff944] rounded-full flex items-center justify-center transition-transform duration-300 hover:rotate-12">
                            <Award className="h-5 w-5 text-[#052f28]" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#052f28] text-sm">{manager.name}</h4>
                            <p className="text-xs text-[#042e25]">{manager.role}</p>
                          </div>
                        </div>
                        {expandedTeamMember === `manager-${managerCarousel + index}` ? (
                          <Minus className="h-4 w-4 text-[#a0e019] transition-transform duration-300 hover:scale-110" />
                        ) : (
                          <Plus className="h-4 w-4 text-[#a0e019] transition-transform duration-300 hover:scale-110" />
                        )}
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedTeamMember === `manager-${managerCarousel + index}`
                            ? "max-h-20 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-xs text-[#042e25]">{manager.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setManagerCarousel(Math.min(t.team.managers.length - 3, managerCarousel + 1))}
                  className={`p-2 rounded-full ${isDarkMode ? "bg-[#dff944] text-[#052f28] hover:bg-[#a0e019]" : "bg-[#052f28] text-white hover:bg-[#0a2b24]"} transition-all duration-300 disabled:opacity-50 hover:scale-110`}
                  disabled={managerCarousel >= t.team.managers.length - 3}
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Carousel indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: Math.ceil(t.team.managers.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setManagerCarousel(index * 3)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                      Math.floor(managerCarousel / 3) === index
                        ? "bg-[#a0e019]"
                        : isDarkMode
                          ? "bg-gray-400"
                          : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className={`py-16 ${isDarkMode ? "bg-[#0a2b24]" : "bg-white"} transition-all duration-700`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${faqInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2
              className={`text-4xl font-bold ${isDarkMode ? "text-white" : "text-[#052f28]"} mb-4 transition-colors duration-300`}
            >
              {t.faq.title}
            </h2>
            <p className={`text-xl ${isDarkMode ? "text-gray-200" : "text-[#042e25]"} transition-colors duration-300`}>
              {t.faq.subtitle}
            </p>
          </div>
          <div className="space-y-4">
            {t.faq.questions.map((faq, index) => (
              <div
                key={index}
                className={`border ${isDarkMode ? "border-[#a0e019]/30 bg-[#052f28]/50" : "border-gray-200"} rounded-lg transition-all duration-500 ${faqInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  className={`w-full px-6 py-4 text-left flex justify-between items-center ${isDarkMode ? "hover:bg-[#052f28]/70" : "hover:bg-[#f9fafb]"} transition-all duration-300 hover:scale-[1.02]`}
                  onClick={() => toggleFaq(`faq${index + 1}`)}
                >
                  <span
                    className={`font-semibold ${isDarkMode ? "text-white" : "text-[#052f28]"} transition-colors duration-300`}
                  >
                    {faq.question}
                  </span>
                  {expandedFaq === `faq${index + 1}` ? (
                    <ChevronDown className="h-5 w-5 text-[#a0e019] transition-transform duration-300 hover:scale-110" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-[#a0e019] transition-transform duration-300 hover:scale-110" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedFaq === `faq${index + 1}` ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-4">
                    <p className={`${isDarkMode ? "text-gray-200" : "text-[#042e25]"} transition-colors duration-300`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#052f28] text-white py-16 transition-all duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-2 mb-6">
                <Sprout className="h-8 w-8 text-[#dff944] transition-transform duration-300 hover:scale-110" />
                <span className="text-2xl font-bold">Arina</span>
              </div>
              <p className="text-gray-300 mb-6 transition-colors duration-300">{t.footer.description}</p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-[#a0e019] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 cursor-pointer">
                  <span className="text-[#052f28] font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-[#a0e019] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 cursor-pointer">
                  <span className="text-[#052f28] font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-[#a0e019] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 cursor-pointer">
                  <span className="text-[#052f28] font-bold">in</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h3 className="text-lg font-semibold mb-6">{t.footer.product}</h3>
              <ul className="space-y-3">
                {t.footer.productLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#dff944] transition-all duration-300 hover:translate-x-1"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
              <h3 className="text-lg font-semibold mb-6">{t.footer.company}</h3>
              <ul className="space-y-3">
                {t.footer.companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#dff944] transition-all duration-300 hover:translate-x-1"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "600ms" }}>
              <h3 className="text-lg font-semibold mb-6">{t.footer.contact}</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-1">
                  <Mail className="h-5 w-5 text-[#a0e019]" />
                  <span className="text-gray-300">hello@arina.ai</span>
                </div>
                <div className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-1">
                  <Phone className="h-5 w-5 text-[#a0e019]" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-1">
                  <MapPin className="h-5 w-5 text-[#a0e019]" />
                  <span className="text-gray-300">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-300 transition-colors duration-300">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
