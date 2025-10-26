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
  Check,
} from "lucide-react"

// Translation data
const translations = {
  id: {
    nav: {
      features: "Fitur",
      howItWorks: "Cara Kerja",
      about: "Tentang",
      team: "Tim",
      pricing: "Harga",
      getStarted: "Mulai Sekarang",
    },
    hero: {
      title: "Arina: Pertanian Cerdas dengan AI",
      subtitle:
        "Platform pertanian inovatif yang menggabungkan kecerdasan buatan dengan keahlian bertani untuk membantu petani mengoptimalkan hasil panen, mengoptimalkan biaya, dan membuat keputusan berbasis data untuk pertanian berkelanjutan.",
      startTrial: "Mulai Uji Coba Gratis",
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
      title: "Fitur  yang Powerful",
      subtitle: "Platform pertanian komprehensif yang dirancang untuk mentransformasi operasi pertanian modern",
      hpp: {
        title: "Analisis Biaya",
        description: "Analisis komprehensif harga pokok produksi untuk perencanaan ekonomi dan anggaran pertanian",
      },
      forecasting: {
        title: "Peramalan Cerdas",
        description: "Prediksi cuaca dan prakiraan hasil panen menggunakan kecerdasaan buatan ",
      },
      chatbot: {
        title: "Asisten AI",
        description: "Bantuan ahli pertanian 24/7 melalui chatbot cerdas yang dikekuatani oleh gemini",
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
      },
      yield: {
        title: "Peningkatan Hasil",
        description: "Optimalkan kondisi pertumbuhan dan alokasi sumber daya untuk produktivitas maksimum",
      },
      time: {
        title: "Penghematan Waktu",
        description: "Otomatisasi proses pengambilan keputusan dan kurangi waktu pemantauan manual",
      },
    },
    about: {
      title: "Tentang Arina",
      paragraph1:
        "Arina adalah platform teknologi pertanian inovatif yang memanfaatkan kekuatan kecerdasan buatan untuk merevolusi praktik bertani. Kami menggabungkan teknologi AI terdepan dengan keahlian pertanian mendalam untuk menciptakan solusi yang kuat dan praktis.",
      paragraph2:
        "Platform kami dirancang untuk membantu petani membuat keputusan yang lebih cerdas melalui wawasan berbasis data, yang pada akhirnya mengarah pada peningkatan produktivitas, pengoptimalan biaya, dan praktik pertanian yang lebih berkelanjutan untuk masa depan pertanian.",
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
    pricing: {
      title: "Pilih Paket yang Tepat",
      subtitle: "Solusi fleksibel yang disesuaikan dengan kebutuhan pertanian Anda",
      monthly: "Bulanan",
      yearly: "Tahunan",
      save: "Hemat 20%",
      plans: {
        starter: {
          name: "Starter",
          price: "TBA",
          yearlyPrice: "TBA",
          description: "Ideal untuk petani pemula atau lahan kecil",
          features: [
            "Analisis cuaca dasar",
            "Kalkulator ROI sederhana",
            "Prediksi AI dasar",
            "Asisten AI 24/7",
          ],
          cta: "TBA",
          popular: false,
        },
        professional: {
          name: "Professional",
          price: "TBA",
          yearlyPrice: "TBA",
          description: "Sempurna untuk operasi pertanian menengah",
          features: [
            "Semua fitur Starter",
            "Prediksi AI tingkat lanjut",
            "Analisis biaya komprehensif",
            "Integrasi sensor IoT",
            "Laporan mingguan",
          ],
          cta: "TBA",
          popular: true,
        },
        enterprise: {
          name: "Enterprise",
          price: "TBA",
          yearlyPrice: "TBA",
          description: "Untuk operasi pertanian skala besar",
          features: [
            "Semua fitur Professional",
            "Model AI kustom",
            "Analitik prediktif lanjutan",
            "Integrasi API penuh",
            "Dedicated account manager",
            "Dukungan 24/7",
          ],
          cta: "TBA",
          popular: false,
        },
      },
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
  en: {
    nav: {
      features: "Features",
      howItWorks: "How It Works",
      about: "About",
      team: "Team",
      pricing: "Pricing",
      getStarted: "Get Started",
    },
    hero: {
      title: "Arina: Smart Farming with AI",
      subtitle:
        "An innovative farming platform that combines artificial intelligence with farming expertise to help farmers optimize yields, reduce costs, and make data-driven decisions for sustainable agriculture.",
      startTrial: "Start Free Trial",
      watchDemo: "Watch Demo",
      yieldIncrease: "+35% Yield Increase",
    },
    problemSolution: {
      challengeTitle: "Current Farming Challenges",
      challenges: [
        "Unpredictable weather patterns affecting harvest yields",
        "Rising input costs with uncertain return on investment",
        "Limited access to real-time farming data and insights",
        "Complex decision-making without proper analytical support",
      ],
      solutionTitle: "Our AI-Powered Solution",
      solutions: [
        "Smart farming analysis with machine learning algorithms",
        "Predictive analytics for weather and crop performance",
        "Real-time monitoring and actionable farming insights",
        "Data-driven recommendations for optimal decision-making",
      ],
    },
    features: {
      title: "Powerful AI Features",
      subtitle: "Comprehensive agricultural intelligence tools designed to transform modern farming operations",
      hpp: {
        title: "Cost Analysis",
        description: "Comprehensive cost of goods analysis for economic planning and farming budgets",
      },
      forecasting: {
        title: "Smart Forecasting",
        description: "Weather predictions and yield forecasts using advanced machine learning algorithms",
      },
      roi: {
        title: "ROI Calculator",
        description: "Return on investment analysis tool specifically designed for farming investments",
      },
      chatbot: {
        title: "AI Assistant",
        description: "24/7 farming expert assistance through our AI-powered intelligent chatbot",
      },
    },
    howItWorks: {
      title: "How Arina Works",
      subtitle: "Simple steps to transform your farming operations with artificial intelligence",
      steps: [
        {
          title: "Connect Farm Data",
          description: "Integrate your farming data, weather information, and farm sensors with our platform",
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
      subtitle: "Proven benefits that make a real difference for your farming business",
      risk: {
        title: "Risk Reduction",
        description: "Minimize crop losses with predictive analytics and early warning systems",
        stat: "-40% Risk",
      },
      yield: {
        title: "Yield Increase",
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
        "Arina is an innovative agricultural technology platform that leverages the power of artificial intelligence to revolutionize farming practices. We combine cutting-edge AI technology with deep agricultural expertise to create powerful and practical solutions.",
      paragraph2:
        "Our platform is designed to help farmers make smarter decisions through data-driven insights, ultimately leading to increased productivity, reduced costs, and more sustainable farming practices for the future of agriculture.",
    },
    team: {
      title: "Meet Our Team",
      subtitle: "Agricultural experts and AI specialists working together to transform farming",
      leadership: "Leadership",
      executive: "Development Team",
      management: "Finance and Marketing Team",
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
          role: "Marketing Lead & Exploratory Research and Development Lead",
          subtitle: "Marketing Lead & Exploratory Research and Development Lead",
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
    pricing: {
      title: "Choose the Right Plan",
      subtitle: "Flexible solutions tailored to your farming needs",
      monthly: "Monthly",
      yearly: "Yearly",
      save: "Save 20%",
      plans: {
        starter: {
          name: "Starter",
          price: "TBA",
          yearlyPrice: "TBA",
          description: "Ideal for beginner farmers or small plots",
          features: [
            "Basic weather analysis",
            "Simple ROI calculator",
            "Monthly reports",
            "Email support",
            "Up to 5 hectares",
          ],
          cta: "Start Free",
          popular: false,
        },
        professional: {
          name: "Professional",
          price: "TBA",
          yearlyPrice: "TBA",
          description: "Perfect for medium-scale farming operations",
          features: [
            "All Starter features",
            "Advanced AI predictions",
            "Comprehensive cost analysis",
            "24/7 AI assistant",
            "IoT sensor integration",
            "Weekly reports",
            "Priority support",
            "Up to 50 hectares",
          ],
          cta: "Choose Professional",
          popular: true,
        },
        enterprise: {
          name: "Enterprise",
          price: "TBA",
          yearlyPrice: "TBA",
          description: "For large-scale farming operations",
          features: [
            "All Professional features",
            "Custom AI models",
            "Advanced predictive analytics",
            "Full API integration",
            "Dedicated account manager",
            "On-site training",
            "24/7 support",
            "Unlimited land coverage",
          ],
          cta: "Contact Sales",
          popular: false,
        },
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about Arina's AI-powered farming platform",
      questions: [
        {
          question: "How accurate are Arina's predictions?",
          answer:
            "Our AI models achieve 85-95% accuracy in yield predictions and weather forecasting, continuously improving with more data and advanced algorithms.",
        },
        {
          question: "What types of farming can use Arina?",
          answer:
            "Arina works with all types of farming - from small family operations to large commercial enterprises, supporting various crops and farming practices.",
        },
        {
          question: "How quickly can I see results?",
          answer:
            "Most farmers see initial insights within 24-48 hours after setup, with comprehensive analysis and recommendations available after one growth cycle.",
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
      description: "Empowering farmers with AI-powered insights for sustainable and profitable agriculture.",
      product: "Product",
      company: "Company",
      contact: "Contact",
      productLinks: ["Features", "Pricing", "API", "Integrations"],
      companyLinks: ["About Us", "Careers", "Blog", "Support"],
      copyright: "© 2025 Arina. All rights reserved. | Privacy Policy | Terms of Service",
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
  const [language, setLanguage] = useState<"en" | "id">("id")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isYearly, setIsYearly] = useState(false)

  // Animation refs
  const [heroRef, heroInView] = useIntersectionObserver()
  const [problemRef, problemInView] = useIntersectionObserver()
  const [featuresRef, featuresInView] = useIntersectionObserver()
  const [howItWorksRef, howItWorksInView] = useIntersectionObserver()
  const [benefitsRef, benefitsInView] = useIntersectionObserver()
  const [pricingRef, pricingInView] = useIntersectionObserver()
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

  // Comment out the language toggle function
  // const toggleLanguage = () => {
  //   setLanguage(language === "en" ? "id" : "en")
  // }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-[#1a4d3a]" : "bg-white"}`}>
      {/* Navigation - Enhanced Version */}
      <nav
        className={`fixed top-0 w-full ${isDarkMode ? "bg-[#1a4d3a]/90" : "bg-white/90"} backdrop-blur-md border-b ${isDarkMode ? "border-[#4ade80]/20" : "border-gray-200"} z-50 transition-all duration-500 shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> </div>
          <div className="flex justify-between items-center h-20">
            {/* Logo - Enhanced */}
            <div className="flex items-center space-x-3 group cursor-pointer animate-fade-in">
              <div className={`relative p-2 rounded-xl ${isDarkMode ? "bg-[#4ade80]/10" : "bg-[#052f28]/5"} transition-all duration-300 group-hover:scale-110`}>
                <div className={`absolute inset-0 rounded-xl ${isDarkMode ? "bg-[#4ade80]" : "bg-[#052f28]"} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </div>
              <div>
                <span
                  className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-[#052f28]"} transition-colors duration-300 tracking-tight`}
                >
                  Arina
                </span>
                <div className={`h-0.5 w-0 ${isDarkMode ? "bg-[#4ade80]" : "bg-[#052f28]"} transition-all duration-300 group-hover:w-full`}></div>
              </div>
            </div>

            {/* Desktop Navigation - Enhanced */}
            <div className="hidden md:flex items-center space-x-1 bg-opacity-50 backdrop-blur-sm rounded-full px-2 py-2">
              {[
                {
                  label: t.nav.features,
                  id: "features",
                },
                {
                  label: t.nav.howItWorks,
                  id: "how-it-works",
                },
                {
                  label: t.nav.about,
                  id: "about",
                },
                {
                  label: t.nav.pricing,
                  id: "pricing",
                },
                {
                  label: t.nav.team,
                  id: "team",
                },
              ].map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? "text-white hover:text-[#4ade80] hover:bg-[#22543d]"
                    : "text-[#052e25] hover:text-[#052f28] hover:bg-gray-100"
                } group`}
              >
                <span className="relative z-10">{item.label}</span>
                <div className={`absolute inset-0 rounded-full ${isDarkMode ? "bg-[#052f28]" : "bg-[#0f0f0e]"} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </button>
            ))}
          </div>

          {/* Desktop Controls - Enhanced */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle - Enhanced */}
            <button
              onClick={toggleTheme}
              className={`relative p-3 rounded-xl ${
                isDarkMode
                  ? "bg-[#22543d] text-[#4ade80] hover:bg-[#1a4d3a] hover:text-white"
                  : "bg-[#052f28] text-white hover:bg-[#0a2b24]"
              } transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl group overflow-hidden`}
            >
              <div className="relative z-10 flex items-center justify-center">
                {isDarkMode ? (
                  <Sun className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />
                ) : (
                  <Moon className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" />
                )}
              </div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>

            {/* CTA Button - Enhanced */}
            <a
              href="https://app.arinaagri.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden group ${
                isDarkMode
                  ? "bg-gradient-to-r from-[#4ade80] to-[#22d3ee] text-[#1a4d3a]"
                  : "bg-gradient-to-r from-[#052f28] to-[#0a2b24] text-white"
              } inline-flex items-center`}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>{t.nav.getStarted}</span>
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile Controls - Enhanced */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-lg ${
                isDarkMode
                  ? "bg-[#22543d] text-[#4ade80] hover:bg-[#1a4d3a] hover:text-white"
                  : "bg-[#052f28] text-white hover:bg-[#0a2b24]"
              } transition-all duration-300 shadow-md`}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={toggleMobileMenu}
              className={`p-2.5 rounded-lg ${
                isDarkMode
                  ? "text-white hover:bg-[#22543d]"
                  : "text-[#052e25] hover:bg-gray-100"
              } transition-all duration-300 shadow-md`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Enhanced */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        } ${isDarkMode ? "bg-[#1a4d3a]/95" : "bg-white/95"} backdrop-blur-md`}
      >
        <div className="px-4 py-6 space-y-2 border-t border-opacity-20">
          {[
            {
              label: t.nav.features,
              id: "features",
            },
            {
              label: t.nav.howItWorks,
              id: "how-it-works",
            },
            {
              label: t.nav.about,
              id: "about",
            },
            {
              label: t.nav.pricing,
              id: "pricing",
            },
            {
              label: t.nav.team,
              id: "team",
            },
          ].map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(item.id)}
            className={`block w-full text-left py-3.5 px-5 rounded-xl ${
              isDarkMode
                ? "text-white hover:bg-[#22543d] hover:text-[#4ade80]"
                : "text-[#052e25] hover:bg-[#052f28]/10 hover:text-[#052f28]"
            } transition-all duration-300 font-medium transform hover:translate-x-2 hover:scale-105`}
          >
            <div className="flex items-center justify-between">
              <span>{item.label}</span>
              <ChevronRight className="h-4 w-4 opacity-50" />
            </div>
          </button>
        ))}
          <div className="pt-4 border-t border-opacity-20">
            <a
              href="https://app.arinaagri.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-center py-3.5 px-5 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 ${
                isDarkMode
                  ? "bg-gradient-to-r from-[#4ade80] to-[#22d3ee] text-[#1a4d3a] hover:shadow-[#4ade80]/50"
                  : "bg-gradient-to-r from-[#052f28] to-[#0a2b24] text-white hover:shadow-[#052f28]/50"
              }`}
            >
              {t.nav.getStarted}
            </a>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`pt-24 pb-16 ${isDarkMode ? "bg-[#1a4d3a]" : "bg-gradient-to-br from-[#f9fafb] to-white"} transition-all duration-700`}
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
                <a
                  href="https://app.arinaagri.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkMode ? "bg-[#4ade80] text-[#1a4d3a] hover:bg-[#22d3ee]" : "bg-[#052f28] text-white hover:bg-[#0a2b24]"} px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block text-center`}
                >
                  {t.hero.startTrial}
                </a>
              </div>
            </div>
            <div
              className={`relative transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="flex items-center justify-center">
                <img
                  src="/Arina Logo.png"
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
        className={`py-16 ${isDarkMode ? "bg-[#22543d]" : "bg-white"} transition-all duration-700`}
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
        className={`py-16 ${isDarkMode ? "bg-[#1a4d3a]" : "bg-[#f9fafb]"} transition-all duration-700`}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {[{
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
              icon: MessageCircle, 
              title: t.features.chatbot.title, 
              description: t.features.chatbot.description 
            },
          ].map((feature, index) => (
              <div
                key={index}
                className={`${isDarkMode ? "bg-[#22543d] border border-[#4ade80]/20" : "bg-white border border-gray-200"} p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${featuresInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} max-w-sm mx-auto`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <feature.icon className={`h-12 w-12 ${isDarkMode ? "text-[#4ade80]" : "text-[#a0e019]"} mb-4 transition-transform duration-300 hover:scale-110`} />
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
        className={`py-16 ${isDarkMode ? "bg-[#1a4d3a]" : "bg-white"} transition-all duration-700`}
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
                  className={`w-16 h-16 ${index === 0 ? "bg-[#4ade80]" : index === 1 ? "bg-[#22d3ee]" : isDarkMode ? "bg-white" : "bg-[#052f28]"} rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 hover:scale-110 hover:rotate-12`}
                >
                  <span
                    className={`text-2xl font-bold ${index === 2 && isDarkMode ? "text-[#1a4d3a]" : index === 2 ? "text-white" : index === 0 ? "text-[#1a4d3a]" : index === 1 ? "text-[#1a4d3a]" : "text-[#052f28]"}`}
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
        className={`py-16 ${isDarkMode ? "bg-[#22543d]" : "bg-white"} transition-all duration-700`}
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
              },
              {
                icon: TrendingUp,
                title: t.benefits.yield.title,
                description: t.benefits.yield.description,
              },
              {
                icon: Clock,
                title: t.benefits.time.title,
                description: t.benefits.time.description,
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className={`${isDarkMode ? "bg-[#22543d] border border-[#4ade80]/20" : "bg-white border border-gray-200"} p-8 rounded-xl shadow-md transition-all duration-700 hover:shadow-xl hover:scale-105 ${benefitsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <benefit.icon className={`h-12 w-12 ${isDarkMode ? "text-[#4ade80]" : "text-[#a0e019]"} mb-4 transition-transform duration-300 hover:scale-110`} />
                <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-[#052f28]"} mb-3`}>{benefit.title}</h3>
                <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        ref={pricingRef}
        id="pricing"
        className={`py-16 ${isDarkMode ? "bg-[#1a4d3a]" : "bg-[#f9fafb]"} transition-all duration-700`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${pricingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2
              className={`text-4xl font-bold ${isDarkMode ? "text-white" : "text-[#052f28]"} mb-4 transition-colors duration-300`}
            >
              {t.pricing.title}
            </h2>
            <p
              className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto mb-8 transition-colors duration-300`}
            >
              {t.pricing.subtitle}
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"} ${!isYearly ? "text-[#4ade80]" : ""}`}>
                {t.pricing.monthly}
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                  isYearly ? "bg-[#4ade80]" : isDarkMode ? "bg-gray-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                    isYearly ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"} ${isYearly ? "text-[#4ade80]" : ""}`}>
                  {t.pricing.yearly}
                </span>
                <span className="bg-[#4ade80] text-[#1a4d3a] px-2 py-1 rounded-full text-xs font-semibold">
                  {t.pricing.save}
                </span>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(t.pricing.plans).map(([key, plan], index) => (
              <div
                key={key}
                className={`relative transition-all duration-500 ${pricingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${
                  plan.popular ? "transform scale-105" : ""
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#4ade80] to-[#22d3ee] text-[#1a4d3a] px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div
                  className={`h-full p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl border-2 ${
                    plan.popular
                      ? isDarkMode
                        ? "bg-gradient-to-br from-[#22543d] to-[#1a4d3a] border-[#4ade80]/40"
                        : "bg-gradient-to-br from-white to-gray-50 border-[#4ade80]/40"
                      : isDarkMode
                      ? "bg-gradient-to-br from-[#22543d] to-[#1a4d3a] border-[#4ade80]/20"
                      : "bg-gradient-to-br from-white to-gray-50 border-gray-200"
                  } hover:border-[#4ade80]/60`}
                >
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-[#052f28]"} mb-2`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-6`}>
                      {plan.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className={`text-5xl font-bold ${isDarkMode ? "text-white" : "text-[#052f28]"}`}>
                          {isYearly ? plan.yearlyPrice : plan.price}
                        </span>
                        {plan.price !== "TBA" && (
                          <span className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} ml-1`}>
                            /month
                          </span>
                        )}
                      </div>
                      {isYearly && plan.price !== "TBA" && (
                        <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"} mt-1`}>
                          Billed annually
                        </p>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className={`h-5 w-5 ${isDarkMode ? "text-[#4ade80]" : "text-[#22c55e]"} mt-0.5 flex-shrink-0`} />
                        <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#4ade80] to-[#22d3ee] text-[#1a4d3a] hover:shadow-lg"
                        : isDarkMode
                        ? "bg-[#4ade80]/10 text-[#4ade80] border border-[#4ade80]/30 hover:bg-[#4ade80]/20"
                        : "bg-[#052f28]/10 text-[#052f28] border border-[#052f28]/30 hover:bg-[#052f28]/20"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        ref={aboutRef}
        id="about"
        className={`py-16 ${isDarkMode ? "bg-[#1a4d3a]" : "bg-white"} transition-all duration-700`}
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
                </div>
                <div
                  className={`text-center transition-all duration-700 ${aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                  style={{ transitionDelay: "500ms" }}
                >
                </div>
              </div>
            </div>
            <div
              className={`transition-all duration-1000 delay-300 ${aboutInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <img
                src="/Arina Logo.png"
                alt="Arina team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Hierarchical Design */}
      <section
        ref={teamRef}
        id="team"
        className={`py-20 ${isDarkMode ? "bg-gradient-to-br from-[#1a4d3a] via-[#22543d] to-[#1a4d3a]" : "bg-gradient-to-br from-[#f9fafb] via-white to-[#f9fafb]"} transition-all duration-700 relative overflow-hidden`}
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
                className={`group relative bg-gradient-to-br ${isDarkMode ? "from-[#22543d] to-[#1a4d3a]" : "from-white to-gray-50"} p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-700 max-w-md w-full border-2 ${isDarkMode ? "border-[#4ade80]/20" : "border-[#a0e019]/20"} ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#a0e019]/0 via-[#4ade80]/10 to-[#a0e019]/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
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
                  className={`group relative bg-gradient-to-br ${isDarkMode ? "from-[#22543d] to-[#1a4d3a]" : "from-white to-gray-50"} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border ${isDarkMode ? "border-[#4ade80]/20" : "border-[#a0e019]/20"}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#a0e019]/0 via-[#4ade80]/5 to-[#a0e019]/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
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
                          className={`flex items-center space-x-1 text-xs font-medium ${isDarkMode ? "text-[#4ade80] hover:text-[#22d3ee]" : "text-[#052f28] hover:text-[#0a2b24]"} transition-colors duration-300`}
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
                        className={`bg-gradient-to-br ${isDarkMode ? "from-[#1a4d3a]/50 to-[#22543d]/50" : "from-gray-50 to-white"} p-4 rounded-lg border ${isDarkMode ? "border-[#4ade80]/10" : "border-gray-200"} transition-all duration-300 hover:shadow-md`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 bg-gradient-to-br ${memberIndex % 2 === 0 ? "from-[#4ade80]/20 to-[#22d3ee]/20" : "from-[#22d3ee]/20 to-[#4ade80]/20"} rounded-full flex items-center justify-center overflow-hidden p-0.5`}>
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
      <section ref={faqRef} className={`py-16 ${isDarkMode ? "bg-[#22543d]" : "bg-white"} transition-all duration-700`}>
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
                className={`border ${isDarkMode ? "border-[#4ade80]/30 bg-[#1a4d3a]/50" : "border-gray-200 bg-white"} rounded-lg transition-all duration-500 ${faqInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  className={`w-full px-6 py-4 text-left flex justify-between items-center ${isDarkMode ? "hover:bg-[#1a4d3a]/70" : "hover:bg-[#f9fafb]"} transition-all duration-300 hover:scale-[1.02]`}
                  onClick={() => toggleFaq(`faq${index + 1}`)}
                >
                  <span
                    className={`font-semibold ${isDarkMode ? "text-white" : "text-[#052f28]"} transition-colors duration-300`}
                  >
                    {faq.question}
                  </span>
                  {expandedFaq === `faq${index + 1}` ? (
                    <ChevronDown className={`h-5 w-5 ${isDarkMode ? "text-[#4ade80]" : "text-[#a0e019]"} transition-transform duration-300 hover:scale-110`} />
                  ) : (
                    <ChevronRight className={`h-5 w-5 ${isDarkMode ? "text-[#4ade80]" : "text-[#a0e019]"} transition-transform duration-300 hover:scale-110`} />
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
      <footer className="bg-[#1a4d3a] text-white py-16 transition-all duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-2 mb-6">
                <Sprout className="h-8 w-8 text-[#4ade80] transition-transform duration-300 hover:scale-110" />
                <span className="text-2xl font-bold">Arina</span>
              </div>
              <p className="text-gray-300 mb-6 transition-colors duration-300">{t.footer.description}</p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-[#4ade80] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 cursor-pointer">
                  <span className="text-[#1a4d3a] font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-[#4ade80] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 cursor-pointer">
                  <span className="text-[#1a4d3a] font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-[#4ade80] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 cursor-pointer">
                  <span className="text-[#1a4d3a] font-bold">in</span>
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
                      className="text-gray-300 hover:text-[#4ade80] transition-all duration-300 hover:translate-x-1"
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
                      className="text-gray-300 hover:text-[#4ade80] transition-all duration-300 hover:translate-x-1"
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
                  <Mail className="h-5 w-5 text-[#4ade80]" />
                  <span className="text-gray-300">hello@arina.ai</span>
                </div>
                <div className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-1">
                  <Phone className="h-5 w-5 text-[#4ade80]" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-1">
                  <MapPin className="h-5 w-5 text-[#4ade80]" />
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
