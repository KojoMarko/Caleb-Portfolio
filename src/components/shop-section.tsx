
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SectionTitle from "./section-title";
import Link from "next/link";

const devices = [
    {
        name: "Glucometer Kit",
        description: "A complete kit for monitoring blood glucose levels, including a meter, test strips, and lancets.",
        image: "https://picsum.photos/seed/glucometer/600/400",
        hint: "medical device",
    },
    {
        name: "Blood Pressure Monitor",
        description: "An automatic upper arm monitor for accurate blood pressure and pulse rate readings.",
        image: "/assets/Electronic Blood Pressure Monitor.jpg",
        hint: "medical device",
    },
    {
        name: "Microscope",
        description: "Olympus CX-23 microscope for clinical and educational use.",
        image: "/assets/Microscope Olympus CX-23.jpg",
        hint: "medical device",
    },
    {
        name: "Pulse Oximeter",
        description: "A fingertip pulse oximeter to measure blood oxygen saturation (SpO2) and pulse rate.",
        image: "https://picsum.photos/seed/oximeter/600/400",
        hint: "medical device",
    },
];

const services = [
    {
        name: "Medical Device Consultation",
        description: "Expert advice on selecting, setting up, and using medical devices for home or clinical use.",
        image: "https://picsum.photos/seed/consultation/600/400",
        hint: "medical consultation",
    },
    {
        name: "On-site Equipment Calibration",
        description: "Professional calibration services to ensure your medical equipment provides accurate readings.",
        image: "https://picsum.photos/seed/calibration/600/400",
        hint: "technician working",
    },
    {
        name: "Preventive Maintenance Plan",
        description: "Scheduled maintenance plans to keep your devices in optimal condition and extend their lifespan.",
        image: "https://picsum.photos/seed/maintenance/600/400",
        hint: "engineering tools",
    },
    {
        name: "Technical Support Subscription",
        description: "Ongoing technical support for all your purchased devices, providing peace of mind.",
        image: "https://picsum.photos/seed/support/600/400",
        hint: "customer support",
    },
];


export default function ShopSection() {
    return (
        <section id="shop">
            <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg mb-16">
                <Image
                    src="https://picsum.photos/seed/shop-banner/1200/400"
                    alt="Shop banner"
                    fill
                    className="object-cover"
                    data-ai-hint="medical equipment shop"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-primary-foreground p-4">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Shop</h1>
                    <p className="mt-4 text-lg leading-8 max-w-2xl">
                        Quality medical devices and expert services to meet your needs.
                    </p>
                </div>
            </div>

            <div>
                <SectionTitle title="Devices" description="Reliable equipment for health monitoring." />
                <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {devices.map((device) => (
                        <Card key={device.name} className="flex flex-col">
                            <CardHeader className="p-0">
                                <Image
                                    src={device.image}
                                    alt={device.name}
                                    width={600}
                                    height={400}
                                    className="object-cover rounded-t-lg"
                                    data-ai-hint={device.hint}
                                />
                            </CardHeader>
                            <CardContent className="flex-grow p-6">
                                <CardTitle>{device.name}</CardTitle>
                                <CardDescription className="mt-2">{device.description}</CardDescription>
                            </CardContent>
                            <CardFooter className="p-6 pt-0">
                                <Button asChild className="w-full">
                                    <Link href="/contact">View Details</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="mt-24">
                 <SectionTitle title="Services" description="Professional support for your medical equipment." />
                <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                         <Card key={service.name} className="flex flex-col">
                            <CardHeader className="p-0">
                                <Image
                                    src={service.image}
                                    alt={service.name}
                                    width={600}
                                    height={400}
                                    className="object-cover rounded-t-lg"
                                    data-ai-hint={service.hint}
                                />
                            </CardHeader>
                            <CardContent className="flex-grow p-6">
                                <CardTitle>{service.name}</CardTitle>
                                <CardDescription className="mt-2">{service.description}</CardDescription>
                            </CardContent>
                            <CardFooter className="p-6 pt-0">
                                <Button asChild className="w-full">
                                    <Link href="/contact">Get a Quote</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
