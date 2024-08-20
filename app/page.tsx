
import { Separator } from "@/components/ui/separator"
import Banner from "./components/Banner"
import ProductDetails from "./components/ProductDetails"
import PricingTable from "./components/PricingTable"
import ContactForm from "./components/ContactForm"
import Features from "./components/Features"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <Features />
      <ProductDetails />
      <PricingTable />
      <ContactForm />
    </main>
  )
}