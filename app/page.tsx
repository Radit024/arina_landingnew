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
      title: "Arina: Smart Agriculture with AI",
      subtitle:
        "An innovative agricultural platform that combines artificial intelligence with farming expertise to help farmers optimize yields, reduce costs, and make data-driven decisions for sustainable agriculture.",
      startTrial: "Start Free Trial",
      watchDemo: "Watch Demo",
      yieldIncrease: "+35% Yield Increase",
    },
    problemSolution: {
      challengeTitle: "Agricultural Challenges Today",
      challenges: [
        "Unpredictable weather patterns affecting crop yields",
        "Rising input costs with uncertain returns on investment",
        "Limited access to real-time agricultural data and insights",
        "Complex decision-making without proper analytical support",
      ],
      solutionTitle: "Our AI-Powered Solution",
      solutions: [
        "Smart agricultural analysis with gemini",
        "Predictive analytics for weather and crop performance",
        "Real-time monitoring and actionable farming insights",
        "Data-driven recommendations for optimal decision making",
      ],
    },
    features: {
      title: "Our Features",
      subtitle: "Comprehensive agricultural intelligence tools designed to transform modern farming operations",
      hpp: {
        title: "Cost Analysis",
        description: "Comprehensive cost of production analysis for agricultural economic planning and budgeting",
      },
      forecasting: {
        title: "Smart Forecasting",
        description: "Weather predictions and crop yield forecasting",
      },
      roi: {
        title: "ROI Calculator",
        description: "Return on investment analysis tools specifically designed for agricultural investments",
      },
      chatbot: {
        title: "AI Assistant",
        description: "24/7 agricultural expert assistance through our intelligent AI-powered chatbot Powered by Gemini",
      },
    },
    howItWorks: {
      title: "How Arina Works",
      subtitle: "Simple steps to transform your agricultural operations with artificial intelligence",
      steps: [
        {
          title: "Connect Your Farm Data",
          description: "Integrate your farm data, weather information, and agricultural sensors with our platform",
        },
        {
          title: "AI Analysis & Processing",
          description: "Our AI algorithms analyze your data to identify patterns, trends, and optimization opportunities",
        },
        {
          title: "Get Smart Insights",
          description: "Receive actionable recommendations and predictions to optimize your farming operations",
        },
      ],
    },
    benefits: {
      title: "Why Choose Arina?",
      subtitle: "Proven benefits that make a real difference to your agricultural business",
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
        "Arina is an innovative agricultural technology platform that harnesses the power of artificial intelligence to revolutionize farming practices. We combine cutting-edge AI technology with deep agricultural expertise to create solutions that are both powerful and practical.",
      paragraph2:
        "Our platform is designed to help farmers make smarter decisions through data-driven insights, ultimately leading to increased productivity, reduced costs, and more sustainable farming practices for the future of agriculture.",
      farmersServed: "Farmers Served",
      countries: "Countries Supported",
    },
    team: {
      title: "Meet Our Team",
      subtitle: "Agricultural experts and AI specialists working together to transform farming",
      leadership: "Leadership",
      executive: "Development Team",
      management: "Advisory Board",
      ceo: {
        name: "Ade Surya Ananda",
        role: "CEO & Founder",
        subtitle: "Chief Executive Officer | Software Developer",
        photo: "/img/Ade.png", // Tambahkan path foto
      },
      executives: [
        {
          name: "Daffa Radityo Adjiefirmansyah",
          role: "Developer Lead",
          subtitle: "Technology Lead | Software Developer",
          photo: "/img/Daffa Radityo.jpg", // Tambahkan path foto
          team: [
            {
              name: "Athallah Dzaki Anggoro Seputro",
              role: "Back End Web Developer",
              photo: "/img/Anggor.jpeg",
            },
            {
              name: "Rafsan",
              role: "Front End Web Developer",
              photo: "/img/Rafsan.jpg",
            },
             {
              name: "Daffa Radityo Adjiefirmansyah",
              role: "Front End Web Developer",
              photo: "/img/Rafsan.jpg",
            },
          ],
        },
        {
          name: "Mutiara Shabrina",
          role: "Project Manager",
          subtitle: "Product Designer Lead | Product Designer",
          photo: "/team/mutiara.jpg",
          team: [
            {
              name: "Rifat Bramantiyadi",
              role: "UI/UX Designer",
              photo: "/team/rifat.jpg",
            },
            {
              name: "Aipha Casey Emerich Kembuan",
              role: "UI/UX Designer",
              photo: "/team/aipha.jpg",
            },
          ],
        },
        {
          name: "Najma Brighitta Arifia",
          role: "Marketing Lead",
          subtitle: "Marketing Lead | Marketing Strategist",
          photo: "/team/najma.jpg",
          team: [
            {
              name: "Nazla Khairunnisa",
              role: "Marketing Specialist",
              photo: "/team/nazla.jpg",
            },
          ],
        },
        {
          name: "Azel Khansa Ayusta",
          role: "Finance Lead",
          subtitle: "Finance Lead | Financial Analyst",
          photo: "/team/azel.jpg",
          team: [
            {
              name: "Salma Asna Musyaffi",
              role: "Finance Specialist",
              photo: "/team/salma.jpg",
            },
          ],
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about Arina's AI-powered agricultural platform",
      questions: [
        {
          question: "How accurate are Arina's predictions?",
          answer:
            "Our AI models achieve 85-95% accuracy in yield predictions and weather forecasting, continuously improving with more data and advanced algorithms.",
        },
        {
          question: "What types of farms can use Arina?",
          answer:
            "Arina works with all types of farms - from small family operations to large commercial enterprises, supporting various crops and agricultural practices.",
        },
        {
          question: "How quickly can I see results?",
          answer:
            "Most farmers see initial insights within 24-48 hours of setup, with comprehensive analysis and recommendations available after one growing cycle.",
        },
        {
          question: "Is my farm data secure?",
          answer:
            "Yes, we use enterprise-grade encryption and security measures. Your data is never shared without permission and remains fully under your control.",
        },
        {
          question: "Do I need special equipment?",
          answer:
            "Arina works with existing farm equipment and sensors. We also provide guidance on cost-effective IoT solutions if needed for enhanced functionality.",
        },
      ],
    },
    footer: {
      description: "Empowering farmers with AI-driven insights for sustainable and profitable agriculture.",
      product: "Product",
      company: "Company",
      contact: "Contact",
      productLinks: ["Features", "Pricing", "API", "Integrations"],
      companyLinks: ["About Us", "Careers", "Blog", "Support"],
      copyright: "© 2025 Arina. All rights reserved. | Privacy Policy | Terms of Service",
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
      title: "Arina: Pertanian Cerdas dengan AI",
      subtitle:
        "Platform pertanian inovatif yang menggabungkan kecerdasan buatan dengan keahlian bertani untuk membantu petani mengoptimalkan hasil panen, mengurangi biaya, dan membuat keputusan berbasis data untuk pertanian berkelanjutan.",
      startTrial: "Mulai Uji Coba Gratis",
      watchDemo: "Tonton Demo",
      yieldIncrease: "+35% Peningkatan Hasil",
    },
    problemSolution: {
      challengeTitle: "Tantangan Pertanian Saat Ini",
      challenges: [
        "Pola cuaca yang tidak dapat diprediksi mempengaruhi hasil panen",
        "Biaya input yang meningkat dengan hasil investasi yang tidak pasti",
        "Akses terbatas ke data dan wawasan pertanian real-time",
        "Pengambilan keputusan yang kompleks tanpa dukungan analisis yang tepat",
      ],
      solutionTitle: "Solusi Bertenaga AI Kami",
      solutions: [
        "Analisis pertanian cerdas dengan algoritma machine learning",
        "Analitik prediktif untuk cuaca dan kinerja tanaman",
        "Pemantauan real-time dan wawasan pertanian yang dapat ditindaklanjuti",
        "Rekomendasi berbasis data untuk pengambilan keputusan optimal",
      ],
    },
    features: {
      title: "Fitur AI yang Powerful",
      subtitle: "Alat intelijen pertanian komprehensif yang dirancang untuk mentransformasi operasi pertanian modern",
      hpp: {
        title: "Analisis Biaya",
        description: "Analisis komprehensif harga pokok produksi untuk perencanaan ekonomi dan anggaran pertanian",
      },
      forecasting: {
        title: "Peramalan Cerdas",
        description: "Prediksi cuaca dan prakiraan hasil panen menggunakan algoritma machine learning canggih",
      },
      roi: {
        title: "Kalkulator ROI",
        description: "Alat analisis return on investment yang dirancang khusus untuk investasi pertanian",
      },
      chatbot: {
        title: "Asisten AI",
        description: "Bantuan ahli pertanian 24/7 melalui chatbot cerdas bertenaga AI kami",
      },
    },
    howItWorks: {
      title: "Cara Kerja Arina",
      subtitle: "Langkah sederhana untuk mentransformasi operasi pertanian Anda dengan kecerdasan buatan",
      steps: [
        {
          title: "Hubungkan Data Pertanian",
          description: "Integrasikan data pertanian, informasi cuaca, dan sensor pertanian Anda dengan platform kami",
        },
        {
          title: "Analisis & Pemrosesan AI",
          description: "Algoritma AI kami menganalisis data Anda untuk mengidentifikasi pola, tren, dan peluang optimisasi",
        },
        {
          title: "Dapatkan Wawasan Cerdas",
          description: "Terima rekomendasi dan prediksi yang dapat ditindaklanjuti untuk mengoptimalkan operasi pertanian",
        },
      ],
    },
    benefits: {
      title: "Mengapa Memilih Arina?",
      subtitle: "Manfaat terbukti yang membuat perbedaan nyata untuk bisnis pertanian Anda",
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
        "Arina adalah platform teknologi pertanian inovatif yang memanfaatkan kekuatan kecerdasan buatan untuk merevolusi praktik bertani. Kami menggabungkan teknologi AI terdepan dengan keahlian pertanian mendalam untuk menciptakan solusi yang kuat dan praktis.",
      paragraph2:
        "Platform kami dirancang untuk membantu petani membuat keputusan yang lebih cerdas melalui wawasan berbasis data, yang pada akhirnya mengarah pada peningkatan produktivitas, pengurangan biaya, dan praktik pertanian yang lebih berkelanjutan untuk masa depan pertanian.",
      farmersServed: "Petani Dilayani",
      countries: "Negara Didukung",
    },
    team: {
      title: "Kenali Tim Kami",
      subtitle: "Para ahli pertanian dan spesialis AI bekerja sama untuk mentransformasi pertanian",
      leadership: "Kepemimpinan",
      executive: "Tim Pengembang",
      management: "Tim Keuangan dan Marketing",
      ceo: {
        name: "Ade Surya Ananda",
        role: "CEO & Founder",
        subtitle: "Chief Executive Officer | Software Developer",
        photo: "/Ade.png", 
      },
      executives: [
        {
          name: "Daffa Radityo Adjiefirmansyah",
          role: "Developer Lead",
          subtitle: "Technology Lead | Software Developer",
          photo: "/Daffa Radityo.jpg", 
          team: [
            {
              name: "Atthalah Dzaki Anggoro Seputro",
              role: "Full Stack Web Developer",
              photo: "/Anggur.jpeg",
            },
            {
              name: "Rafsan",
              role: "Front End Web Developer",
              photo: "/rafsan.jpg",
            },
          ],
        },
        {
          name: "Mutiara Shabrina",
          role: "Project Manager",
          subtitle: "Product Manager | Product Designer",
          photo: "/Yaya.png",
        },
        {
          name: "Najma Brighitta Arifia",
          role: "Marketing Lead & Exploratory Research and Development Lead ",
          subtitle: "Marketing Lead & Exploratory Research and Development Lead ",
          photo: "/Gita.png",
          team: [
            {
              name: "Shabirah Lusiana W.",
              role: "Marketing Specialist",
              photo: "",
            },
          ],
        },
        {
          name: "Azel Khansa Ayusta",
          role: "Finance Lead",
          subtitle: "Finance Lead | Financial Analyst",
          photo: "/Azel.png",
          team: [
            {
              name: "Salma Asna Musyaffi",
              role: "Finance Specialist",
              photo: "/Asna.png",
            },
            {
              name: "Nazla Khairunnisa",
              role: "Finance Specialist",
              photo: "/Nazla.png",
            },
          ],
        },
      ],
    },
    faq: {
      title: "Pertanyaan yang Sering Diajukan",
      subtitle: "Semua yang perlu Anda ketahui tentang platform pertanian bertenaga AI Arina",
      questions: [
        {
          question: "Seberapa akurat prediksi Arina?",
          answer:
            "Model AI kami mencapai akurasi 85-95% dalam prediksi hasil panen dan peramalan cuaca, terus meningkat dengan lebih banyak data dan algoritma canggih.",
        },
        {
          question: "Jenis pertanian apa yang bisa menggunakan Arina?",
          answer:
            "Arina bekerja dengan semua jenis pertanian - dari operasi keluarga kecil hingga perusahaan komersial besar, mendukung berbagai tanaman dan praktik pertanian.",
        },
        {
          question: "Seberapa cepat saya bisa melihat hasil?",
          answer:
            "Sebagian besar petani melihat wawasan awal dalam 24-48 jam setelah setup, dengan analisis komprehensif dan rekomendasi tersedia setelah satu siklus pertumbuhan.",
        },
        {
          question: "Apakah data pertanian saya aman?",
          answer:
            "Ya, kami menggunakan enkripsi tingkat perusahaan dan langkah-langkah keamanan. Data Anda tidak pernah dibagikan tanpa izin dan tetap sepenuhnya dalam kendali Anda.",
        },
        {
          question: "Apakah saya memerlukan peralatan khusus?",
          answer:
            "Arina bekerja dengan peralatan pertanian dan sensor yang ada. Kami juga memberikan panduan tentang solusi IoT yang hemat biaya jika diperlukan untuk fungsionalitas yang ditingkatkan.",
        },
      ],
    },
    footer: {
      description: "Memberdayakan petani dengan wawasan bertenaga AI untuk pertanian yang berkelanjutan dan menguntungkan.",
      product: "Produk",
      company: "Perusahaan",
      contact: "Kontak",
      productLinks: ["Fitur", "Harga", "API", "Integrasi"],
      companyLinks: ["Tentang Kami", "Karir", "Blog", "Dukungan"],
      copyright: "© 2025 Arina. Semua hak dilindungi. | Kebijakan Privasi | Syarat Layanan",
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
  const [isDarkMode, setIsDarkMode] = useState(false) // Already set to false for light mode
  const [language, setLanguage] = useState<"en" | "id">("id")
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
                className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-8 leading-relaxed transition-colors duration-300`}
              >
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className={`${isDarkMode ? "bg-[#dff944] text-[#052f28] hover:bg-[#a0e019]" : "bg-[#052f28] text-white hover:bg-[#0a2b24]"} px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
                >
                  {t.hero.startTrial}
                </button>
              </div>
            </div>
            <div
              className={`relative transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="flex items-center justify-center">
                <img
                  src="/Arina logo.png"
                  alt="Arina Logo - AI-powered farming platform"
                  className="w-full max-w-md h-auto transition-transform duration-500 hover:scale-105"
                />
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
                    <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} transition-colors duration-300`}>
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
                    <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} transition-colors duration-300`}>
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
              className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto transition-colors duration-300`}
            >
              {t.features.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Calculator,
                title: t.features.hpp.title,
                description: t.features.hpp.description,
              },
              {
                icon: TrendingUp,
                title: t.features.forecasting.title,
                description: t.features.forecasting.description,
              },
              { 
                icon: BarChart3, 
                title: t.features.roi.title, 
                description: t.features.roi.description 
              },
              { 
                icon: MessageCircle, 
                title: t.features.chatbot.title, 
                description: t.features.chatbot.description 
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`${isDarkMode ? "bg-[#0a2b24] border border-[#dff944]/20" : "bg-white border border-gray-200"} p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${featuresInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <feature.icon className={`h-12 w-12 ${isDarkMode ? "text-[#dff944]" : "text-[#a0e019]"} mb-4 transition-transform duration-300 hover:scale-110`} />
                <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-[#052f28]"} mb-3`}>{feature.title}</h3>
                <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{feature.description}</p>
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
              className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto transition-colors duration-300`}
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
                <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} transition-colors duration-300`}>
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
              className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto transition-colors duration-300`}
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
                className={`${isDarkMode ? "bg-[#0a2b24] border border-[#dff944]/20" : "bg-white border border-gray-200"} p-8 rounded-xl shadow-md transition-all duration-700 hover:shadow-xl hover:scale-105 ${benefitsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <benefit.icon className={`h-12 w-12 ${isDarkMode ? "text-[#dff944]" : "text-[#a0e019]"} mb-4 transition-transform duration-300 hover:scale-110`} />
                <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-[#052f28]"} mb-3`}>{benefit.title}</h3>
                <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>{benefit.description}</p>
                <div className={`text-2xl font-bold ${isDarkMode ? "text-[#dff944]" : "text-[#a0e019]"} animate-pulse`}>{benefit.stat}</div>
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
                className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"} mb-6 leading-relaxed transition-colors duration-300`}
              >
                {t.about.paragraph1}
              </p>
              <p
                className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"} mb-8 leading-relaxed transition-colors duration-300`}
              >
                {t.about.paragraph2}
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div
                  className={`text-center transition-all duration-700 ${aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                  style={{ transitionDelay: "300ms" }}
                >
                  <div className={`text-3xl font-bold ${isDarkMode ? "text-[#dff944]" : "text-[#a0e019]"} mb-2 animate-pulse`}>10,000+</div>
                  <div className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} transition-colors duration-300`}>
                    {t.about.farmersServed}
                  </div>
                </div>
                <div
                  className={`text-center transition-all duration-700 ${aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                  style={{ transitionDelay: "500ms" }}
                >
                  <div className={`text-3xl font-bold ${isDarkMode ? "text-[#dff944]" : "text-[#a0e019]"} mb-2 animate-pulse`}>50+</div>
                  <div className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} transition-colors duration-300`}>
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

      {/* Team Section - Hierarchical Design */}
      <section
        ref={teamRef}
        id="team"
        className={`py-20 ${isDarkMode ? "bg-gradient-to-br from-[#052f28] via-[#0a2b24] to-[#052f28]" : "bg-gradient-to-br from-[#f9fafb] via-white to-[#f9fafb]"} transition-all duration-700 relative overflow-hidden`}
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
              className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto transition-colors duration-300`}
            >
              {t.team.subtitle}
            </p>
          </div>

          {/* CEO Section */}
          <div className="mb-16">
            <div className="flex justify-center">
              <div
                className={`group relative bg-gradient-to-br ${isDarkMode ? "from-[#0a2b24] to-[#052f28]" : "from-white to-gray-50"} p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-700 max-w-md w-full border-2 ${isDarkMode ? "border-[#dff944]/20" : "border-[#a0e019]/20"} ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#a0e019]/0 via-[#dff944]/10 to-[#a0e019]/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 overflow-hidden p-1">
                        <img 
                          src={t.team.ceo.photo} 
                          alt={t.team.ceo.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                  <h4 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-[#052f28]"} mb-2`}>
                    {t.team.ceo.name}
                  </h4>
                  <p className={`text-base ${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-1`}>
                    {t.team.ceo.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Leads Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {t.team.executives.map((exec: any, index: number) => (
              <div
                key={index}
                className={`transition-all duration-500 ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Team Lead Card */}
                <div
                  className={`group relative bg-gradient-to-br ${isDarkMode ? "from-[#0a2b24] to-[#052f28]" : "from-white to-gray-50"} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border ${isDarkMode ? "border-[#dff944]/20" : "border-[#a0e019]/20"}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#a0e019]/0 via-[#dff944]/5 to-[#a0e019]/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-4">
                        <div className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg overflow-hidden p-1`}>
                          <img 
                            src={exec.photo} 
                            alt={exec.name}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                      </div>
                      <h4 className={`font-bold text-lg ${isDarkMode ? "text-white" : "text-[#052f28]"} mb-2`}>
                        {exec.name}
                      </h4>
                      <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"} mb-4`}>
                        {exec.subtitle}
                      </p>
                      
                      {/* Show/Hide Team Button */}
                      {exec.team && exec.team.length > 0 && (
                        <button
                          onClick={() => toggleTeamMember(`exec-${index}`)}
                          className={`flex items-center space-x-1 text-xs font-medium ${isDarkMode ? "text-[#dff944] hover:text-[#a0e019]" : "text-[#0b7939] hover:text-[#052f28]"} transition-colors duration-300`}
                        >
                          <span>{expandedTeamMember === `exec-${index}` ? 'Hide Team' : 'Show Team'}</span>
                          {expandedTeamMember === `exec-${index}` ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Team Members - Expandable */}
                {exec.team && exec.team.length > 0 && (
                  <div
                    className={`mt-4 space-y-3 overflow-hidden transition-all duration-500 ${
                      expandedTeamMember === `exec-${index}` ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {exec.team.map((member: any, memberIndex: number) => (
                      <div
                        key={memberIndex}
                        className={`bg-gradient-to-br ${isDarkMode ? "from-[#052f28]/50 to-[#0a2b24]/50" : "from-gray-50 to-white"} p-4 rounded-lg border ${isDarkMode ? "border-[#dff944]/10" : "border-gray-200"} transition-all duration-300 hover:shadow-md`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 bg-gradient-to-br ${memberIndex % 2 === 0 ? "from-[#dff944]/20 to-[#a0e019]/20" : "from-[#a0e019]/20 to-[#dff944]/20"} rounded-full flex items-center justify-center overflow-hidden p-0.5`}>
                            <img 
                              src={member.photo} 
                              alt={member.name}
                              className="w-full h-full object-cover rounded-full"
                            />
                          </div>
                          <div className="flex-1">
                            <h5 className={`font-semibold text-sm ${isDarkMode ? "text-white" : "text-[#052f28]"}`}>
                              {member.name}
                            </h5>
                            <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                              {member.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
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
            <p className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} transition-colors duration-300`}>
              {t.faq.subtitle}
            </p>
          </div>
          <div className="space-y-4">
            {t.faq.questions.map((faq, index) => (
              <div
                key={index}
                className={`border ${isDarkMode ? "border-[#a0e019]/30 bg-[#052f28]/50" : "border-gray-200 bg-white"} rounded-lg transition-all duration-500 ${faqInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
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
                    <ChevronDown className={`h-5 w-5 ${isDarkMode ? "text-[#dff944]" : "text-[#a0e019]"} transition-transform duration-300 hover:scale-110`} />
                  ) : (
                    <ChevronRight className={`h-5 w-5 ${isDarkMode ? "text-[#dff944]" : "text-[#a0e019]"} transition-transform duration-300 hover:scale-110`} />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedFaq === `faq${index + 1}` ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-4">
                    <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} transition-colors duration-300`}>
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
