interface Location {
  adress: string
  coordinateGPS: string
  province: string
  region: string
  city: string
}

interface Event {
  eventTitle: string
  description: string
  eventDate: string
  eventLocation: string
  isFree: boolean
  admissionPrice: number
}

interface Contact {
  phoneNumber: string
  email: string
  website: string
}

interface University {
  univID?: string
  univName: string
  univLocation: Location
  presentation: string
  isPrivate: boolean
  tuition: number
  contact: Contact
  imageUrl: string
  documentUrl: string
  programIDs?: string[]
  infrastructure: string[]
  partnerships: string[]
  successDiplomas: number
  events: Event[]
  news: string[]
  photos: string[]
  ratings: Rating[]
}

interface UniversityCard {
  name: string
  description: string
  location: string
  rating: number
}

interface Rating {
  userID?: string
  rating: number
  comment: string
}

interface Program {
  programID?: string
  programName: string
  level: string
  duration: number
  requirements: string[]
  careerProspects: string[]
}
