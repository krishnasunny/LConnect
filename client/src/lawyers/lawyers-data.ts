export interface Lawyer {
  id: string
  name: string
  image: string
  heroImage?: string
  specialty: string
  location: string
  rating: number
  reviews: number
  experience: number
  bio: string
  courts: string[]
  practicingSince: string
  gender: "male" | "female"
}

const lawyersList: Lawyer[] = [
  {
    id: "1",
    name: "RADHA DWIVEDI",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800",
    heroImage:
      "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&h=1000",
    specialty: "Family Law Expert",
    location: "Mumbai",
    rating: 4.8,
    reviews: 32,
    experience: 10,
    bio: "Specializing in family law with over 10 years of experience helping families resolve disputes with compassion and expertise.",
    courts: ["BOMBAY HIGH COURT", "BANDRA FAMILY COURT"],
    practicingSince: "2012",
    gender: "female",
  },
  {
    id: "2",
    name: "MEGHNA LAL",
    image:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800",
    heroImage:
      "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&h=1000",
    specialty: "Divorce Specialist",
    location: "Delhi",
    rating: 4.5,
    reviews: 28,
    experience: 5,
    bio: "Dedicated to providing supportive legal counsel during difficult divorce proceedings, ensuring fair settlements for all parties.",
    courts: ["BOMBAY HIGH COURT"],
    practicingSince: "2018",
    gender: "female",
  },
  {
    id: "3",
    name: "JOYTI PRAVESH",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800",
    heroImage:
      "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&h=1000",
    specialty: "Child Custody Expert",
    location: "Mumbai",
    rating: 4.9,
    reviews: 45,
    experience: 7,
    bio: "Passionate advocate for children's rights with a proven track record in complex custody cases and family dispute resolution.",
    courts: ["BOMBAY HIGH COURT", "BANDRA FAMILY COURT"],
    practicingSince: "2016",
    gender: "female",
  },
  {
    id: "4",
    name: "VIKRAM SINGH",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800",
    heroImage:
      "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&h=1000",
    specialty: "Property Law Expert",
    location: "Bangalore",
    rating: 4.7,
    reviews: 36,
    experience: 12,
    bio: "Specializing in property disputes and real estate law with extensive experience in both residential and commercial matters.",
    courts: ["KARNATAKA HIGH COURT"],
    practicingSince: "2011",
    gender: "male",
  },
  {
    id: "5",
    name: "ARJUN MEHTA",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800",
    heroImage:
      "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&h=1000",
    specialty: "Corporate Law Specialist",
    location: "Chennai",
    rating: 4.6,
    reviews: 29,
    experience: 8,
    bio: "Corporate law expert with a focus on startups and small businesses, providing strategic legal guidance for business growth.",
    courts: ["MADRAS HIGH COURT"],
    practicingSince: "2015",
    gender: "male",
  },
  {
    id: "6",
    name: "PRIYA SHARMA",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800",
    heroImage:
      "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&h=1000",
    specialty: "Family Law Expert",
    location: "Kolkata",
    rating: 4.9,
    reviews: 52,
    experience: 15,
    bio: "Dedicated family lawyer with 15+ years of experience handling complex cases with sensitivity and a client-centered approach.",
    courts: ["CALCUTTA HIGH COURT"],
    practicingSince: "2008",
    gender: "female",
  },
  {
    id: "7",
    name: "RAJIV KUMAR",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800",
    heroImage:
      "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&h=1000",
    specialty: "Divorce Mediator",
    location: "Mumbai",
    rating: 4.7,
    reviews: 41,
    experience: 20,
    bio: "Experienced mediator specializing in amicable divorce settlements, helping couples navigate separation with minimal conflict.",
    courts: ["BOMBAY HIGH COURT", "FAMILY COURT"],
    practicingSince: "2003",
    gender: "male",
  },
  {
    id: "8",
    name: "ANANYA PATEL",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800",
    heroImage:
      "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&h=1000",
    specialty: "Child Rights Advocate",
    location: "Delhi",
    rating: 4.8,
    reviews: 38,
    experience: 9,
    bio: "Passionate advocate for children's rights with expertise in adoption, foster care, and juvenile justice system cases.",
    courts: ["DELHI HIGH COURT", "JUVENILE JUSTICE BOARD"],
    practicingSince: "2014",
    gender: "female",
  },
  {
    id: "9",
    name: "SANJAY VERMA",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800",
    heroImage:
      "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&h=1000",
    specialty: "Alimony Specialist",
    location: "Pune",
    rating: 4.5,
    reviews: 25,
    experience: 11,
    bio: "Specialized in alimony and maintenance cases, ensuring fair financial settlements in divorce and separation proceedings.",
    courts: ["BOMBAY HIGH COURT", "PUNE FAMILY COURT"],
    practicingSince: "2012",
    gender: "male",
  },
]

export function getLawyer(id: string): Lawyer | undefined {
  return lawyersList.find((lawyer) => lawyer.id === id)
}

export function getOtherLawyers(currentId: string, count: number): Lawyer[] {
  return lawyersList
    .filter((lawyer) => lawyer.id !== currentId)
    .sort(() => 0.5 - Math.random())
    .slice(0, count)
}

export default lawyersList

