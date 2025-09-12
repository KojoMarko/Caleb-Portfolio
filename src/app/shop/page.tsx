import Header from "@/components/header";
import ShopSection from "@/components/shop-section";

export default function ShopPage() {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <ShopSection />
            </main>
        </>
    )
}
